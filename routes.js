module.exports = function(app){
  var pictureOfTheDay = require('./controllers/pictureOfTheDay.js');
  app.get('/pictureOfTheDay', pictureOfTheDay.findPicture);
};
