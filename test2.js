var request = require('request'),
    fs = require("fs"),
    http = require("http"),
    url = require('url'),

http.createServer(responseHandler).listen(8888);

function responseHandler(req, res) {
  res.writeHead(200, {"Content-Type": "text/plain"});
  if (req.url.match("fav")) {
    res.end("");
    return;
  }

  var queryData = url.parse(req.url, true).query;
  queryData.date = Date.now();
  console.log(req.url);

  request('http://points.agilelabs.com' + req.url + '.json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.write(body);
      res.end();
    }
  })
}