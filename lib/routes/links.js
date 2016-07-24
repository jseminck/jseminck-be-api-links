import links from './links.json';
// import {verifyToken} from 'jseminck-be-communication-utils';

function get(req, res) {
    res.send(links);
}

export default function configureLinkRoutes (app) {
    app.all('/api/links*', async (req, res, next) => {
        next();
    });

    app.route('/api/links')
        .get(get);
}
