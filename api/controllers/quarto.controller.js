
const { quartos, reservas } = require("../models");

const getQuartos = async (req, res, next) => {

  const result = await quartos.findAll({});

  res.status(200).send(result.map(item => {

    const { id, name, ...resto } = item;

    return {
      id,
      name
    }

  }) || []);

}

const getQuartoPorId = async (req, res, next) => {

  try {
    const { quartoid } = req.params

    const result = await quartos.findOne({
      where: {
        id: quartoid
      },
      include: {
        model: reservas,
        as: 'reservas',
      },
    });

    const data = {
      id: result.id,
      name: result.name,
      description: result.description,
      status: result.status,
      reservations: result.reservas,
    }

    res.status(200).send(data);


  } catch (error) {

    console.log(error);

    res.status(500).send({ message: 'Deu ruim!!' });

  }

}

const postQuartoReserva = async (req, res, next) => {

  try {

    //TODO: recuperar id do curso da rota
    const { quartoid } = req.params;
    console.log('quartoid: ', quartoid); 

    //TODO: recuperar valores para cadastro no body da request
    const body = req.body;
    console.log('body: ', body);

    //TODO: construir o model para inclusao da reserva
    const model = {
      quarto_id: quartoid, //curso_id esta definido no migrations de criacao da tabela de reserva
      name: body.name,
      email: body.email,
      data_nascimento: body.birthday,
    }

    //TODO: gravar no banco
    await reservas.create(model);

    res.status(200).send({ message: 'reserva realizada com sucesso!' });

  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Deu ruim Davi!!' });
  }

}

const deleteQuartoReserva = async (req, res, next) => {
  try {


    //TODO: pegar id da reserva na rota
    const { idreserva } = req.params;

    await reservas.destroy({
      where: {
        id: idreserva,
      }
    });

    res.status(200).send({ message: 'reserva cancelada com sucesso!' });

  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Deu ruim, Davi, ferrou!!' });
  }
}

module.exports = {
  getQuartos,
  getQuartoPorId,
  postQuartoReserva,
  deleteQuartoReserva,
}