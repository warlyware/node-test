var request = require('request'),
    fs = require("fs"),
    http = require("http"),
    url = require('url'),
    exec = require('child_process').exec;

http.createServer(responseHandler).listen(8888);

function responseHandler(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  if (request.url.match("fav")) {
    response.end("");
    return;
  }
  exec('vm_stat', function(err, stdout, stderr) {
    response.write(stdout);
    response.end();
  });
}



console.log(process.cwd);