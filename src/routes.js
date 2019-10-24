const routes = require('next-routes')();

routes.add('/', 'index');
routes.add('/login', 'login');

module.exports = routes;
