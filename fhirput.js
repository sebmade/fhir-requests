var request = require('request');
var fs = require('fs');
fs.createReadStream('patient.json').pipe(request.put('http://fhirtest.uhn.ca/baseDstu2/Patient/1'));
