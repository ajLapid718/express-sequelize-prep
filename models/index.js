var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/express_sequelize_review', { logging: false }); // manually CREATE DATABASE express_sequelize_review in PSQL terminal;

var Tweet = db.define('tweet', {

});

var User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Tweet.belongsTo(User);

module.exports = db;
