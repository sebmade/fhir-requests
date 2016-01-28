var request = require('request');
var fs = require('fs');
fs.createReadStream('patientNew.json')
  .pipe(request.post('http://fhirtest.uhn.ca/baseDstu2/Patient'))
  .on('response', function(r) {
    console.log(r.statusCode);
    console.log(r.headers['location']);
    console.log(r.headers['content-location'])
  })
  .on('data', function(d) {
    console.log(d.toString());
  });
