module.exports = (sequelize, DataTypes) => {
  const reservas = sequelize.define(
    "reservas",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
      },
      name: DataTypes.TEXT,
      email: DataTypes.TEXT,
      data_nascimento: DataTypes.DATE
    },
    {
      underscored: true,
      paranoid: true,
      timestamps: false
    }
  );

  reservas.associate = function (models) {
    reservas.belongsTo(models.quartos, {
      foreignKey: 'quarto_id',
      as: 'quartos'
    });
  };



  return reservas;

};