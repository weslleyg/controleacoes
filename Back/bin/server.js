const app = require('../src/index');
const http = require('http');
const debug = require('debug')('node:server');

const port = normalizePort(process.env.PORT || '3333');
app.set('port' + port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log('Server on na porta: ' + port);

function normalizePort(val) {
    const port = parseInt(val , 10);

    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }

    return false;

}

function onError(error) {
    if (error.syscall != 'listen') {
        throw error;
    }

    const bind = typeof port === 'string' ? 'Pipe' + port : 'Port' + port;

    switch (error.code) {
        case 'EACESS':
            console.error(bind + 'Requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + 'Is already in use');
            process.exit(1);
            break;
        default:
            throw error
    }
}

function onListening() {

    const addr = server.address();
    const bind = typeof addr === 'string' ? 'Pipe' + addr : ' port' + addr.port;
    
    debug('Listening on ' + bind);

}


