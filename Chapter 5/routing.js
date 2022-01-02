const express = require("express");
let app = express();

app.get(`/listCities/:country/:state`, (request, response) => {
	let country = request.params.country;
	let state = request.params.state;
	response.end(`Youe asked for country: ${country} ${state}`);
});

app.listen(8080);