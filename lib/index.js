import "babel-polyfill";

import configureApp from 'jseminck-be-server';

import configureRoutes from './routes/';
import configureStaticRoute from './configureStaticRoute';

module.exports = configureApp({
    configureServer: configureStaticRoute,
    configureRoutes: configureRoutes
});