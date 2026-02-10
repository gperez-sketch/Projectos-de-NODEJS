import http from 'node:http';

const server = http.createServer((request, respone) => {
	console.log('Request received');
	respone.end('Hola Mundo');
});

server.listen(0, () => {
	console.log(
		`server listening on port http://localhost:${server.address().port}`
	);
});
