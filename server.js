var express = require('express');

var app = express();

require('./routes')(app);

app.listen(3000);
app.use(express.static('public'));

console.log("Jammin\' on port 3000...");
