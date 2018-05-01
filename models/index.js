var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/express_sequelize_review', { logging: false });

var Tweet = db.define('tweet', {
  text: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [0,140]
    }
  }
}, {
  getterMethods: {
    hashtags: function() {
      let tweetText = this.getDataValue('text');
      return tweetText.match(/[#][A-Za-z]+/g);
    }
  }
});

var User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Tweet.belongsTo(User);

module.exports = db;
