const RapidAPI = new require('rapidapi-connect');
const rapid = new RapidAPI('SpaceToday', 'a7c7a9c7-dd7a-4bb0-a855-8dede92148ee');

exports.findPicture = function(req, res) {
  rapid.call('NasaAPI', 'getPictureOfTheDay', {
	'apiKey': process.env.NASA_API,
	'date': '',
	'highResolution': ''

  }).on('success', (payload)=>{
    console.log("success");
    res.send(payload);
  }).on('error', (payload)=>{
    console.log("what?");
    res.send("failure");
  });
};
