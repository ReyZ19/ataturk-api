const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
	if (req.url != '/') {
		res.writeHead(404);
		res.end();
		return;
	}
	res.writeHead(200, {'Content-Type': 'image/png'});
  res.write(fs.readFileSync(`./all/${Math.floor(Math.random() * 624) + 1}.png`))
  res.end();
}).listen(8080);