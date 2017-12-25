let proxy = require('express-http-proxy');
let express = require('express');
let bodyParser = require('body-parser');
let app = express()

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', "*");
	res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
})

app.use(express.static('app'));
app.use(bodyParser.json());
app.use('/api/', proxy('http://api.openweathermap.org/data/2.5/box/city',{
	userResDecorator: function(proxyRes, proxyResData, userReq, userRes) {
		console.log('aaaa')
		let data = JSON.parse(proxyResData.toString('utf8'));
		return JSON.stringify(data);
	}
}));

app.listen(8000, () => console.log('Example app listening on port 8000!'))