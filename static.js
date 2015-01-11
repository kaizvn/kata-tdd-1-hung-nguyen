var connect = require('connect')
    , serveStatic = require('serve-static')
    , SERVER = 'localhost'
    , PORT = '8181';

server = connect();

server
    .use(serveStatic(__dirname + '/public'))
    .listen(PORT, SERVER, function () {
        console.log('Server start at %s:%s', SERVER, PORT)
    });
