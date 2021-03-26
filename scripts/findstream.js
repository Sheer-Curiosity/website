const https = require('https');

function getStream() {
	https.get('https://api.holotools.app/v1/live', (res) => {
		let data = '';
		res.on('data', (chunk) => {
			data += chunk;
		});
		res.on('end', () => {
			console.log(JSON.parse(data));
		});
	}).on("error", (err) => {
		console.log("Error: "+err.message);
	});
}