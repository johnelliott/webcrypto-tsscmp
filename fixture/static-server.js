const path = require('path');
const nodeStatic = require('node-static');

const fileServer = new nodeStatic.Server(path.join(__dirname, './dist'));

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    }).resume();
}).listen(3003);
