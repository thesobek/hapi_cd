import hapi from 'hapi';
import routes from './routes';

var server = new hapi.Server();

server.connection({
  port: process.env.PORT || 3000,
  host: '0.0.0.0'
});

server.route(routes);

server.start(function() {
  console.log('Server started at: ' + server.info.uri); // jshint ignore:line
});

