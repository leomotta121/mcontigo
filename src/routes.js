const routes = require('next-routes')();

routes.add('/', 'index');
routes.add('/:slug', 'Post');

module.exports = routes;
