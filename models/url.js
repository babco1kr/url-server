module.exports = function(sequelize, DataTypes) {
  const Url =  sequelize.define("Url", {
        target_url: {
          type: DataTypes.STRING,
          allowNull: false
        },
        tiny_url: {
          type: DataTypes.STRING,
          allowNull: false
        }
  });
  return Url;
}
