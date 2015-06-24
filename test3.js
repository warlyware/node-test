var request = require('request'),
    fs = require("fs"),
    http = require("http"),
    url = require('url'),
    exec = require('child_process').exec;

exec('ls -al', function(err, stdout, stderr) {
  console.log(err, stdout, stderr);
});

console.log(process.cwd);