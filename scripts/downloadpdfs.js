// Note: This is a bit hacky, but requires modifying the stations config file
// to use exports.stations = stations.

var https = require('https');
var fs = require('fs');

// const { stations } = require('../src/config/stations');
var stations = require('../src/config/stations').stations;

// Cribbed from: https://stackoverflow.com/questions/11944932/
// Not perfect in terms of error handling etc, but close enough.
var download = function(url, dest, cb) {
  var file = fs.createWriteStream(dest);
  file.on('open', function(fd) {
    var request = https.get(url, function(response) {
      response.pipe(file);
      file.on('finish', function() {
        file.close(cb);  // close() is async, call cb after close completes.
      });
    }).on('error', function(err) { // Handle errors
      fs.unlink(dest); // Delete the file async. (But we don't check the result)
      if (cb) cb(err.message);
    });
  });
};

// Note, this may change over time. Will need to update it form GO site.
const miniPdfUrl = file =>
  `https://www.gotransit.com/static_files/gotransit/assets/pdf/TripPlanning/MiniSchedules/BP04180618/${file}`;

stations
// For testing, only one station
.filter(s => s.name === 'Markham')
.forEach( stn => {
  const downloadDirectory = `${__dirname}/../assets/pdfs/${stn.line}`;

  if (!fs.existsSync(downloadDirectory)){
      fs.mkdirSync(downloadDirectory);
  }

  download(
    miniPdfUrl(stn.miniScheduleFilename), 
    `${downloadDirectory}/${stn.miniScheduleFilename}`
  );
});
