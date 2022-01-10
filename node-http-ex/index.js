import http from 'http';

function handleRequests(request, response){
}

const server = http.createServer((request, response) => {
    console.log(request.url);
    response.statusCode = 200;
    response.write('Hello, world!');
    response.end(); 
});
server.listen(5080);
