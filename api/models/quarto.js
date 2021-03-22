module.exports = (sequelize, DataTypes) => {
  const quartos = sequelize.define(
    "quartos",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
      },
      description: DataTypes.TEXT,
      name: DataTypes.TEXT,
      reservation_date: DataTypes.TEXT,
      status: DataTypes.BOOLEAN,
    },
    {
      underscored: true,
      paranoid: true,
      timestamps: false
    }
  );

  quartos.associate = function (models) {

    // adicionando
    quartos.hasMany(models.reservas, {
      foreignKey: 'quarto_id',
      as: 'reservas'
    });
  };

  return quartos;

};