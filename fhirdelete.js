var request = require('request');
var fs = require('fs');
request
  .del('http://fhirtest.uhn.ca/baseDstu2/Patient/1773336')
  .on('response', function(r) {
    console.log(r.statusCode);
  })
  .on('data', function(d) {
    console.log(d.toString());
  });
