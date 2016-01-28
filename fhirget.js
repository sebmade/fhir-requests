var request = require('request');
var fs = require('fs');
request('http://fhirtest.uhn.ca/baseDstu2/Patient/1').pipe(fs.createWriteStream('patient.json'));
