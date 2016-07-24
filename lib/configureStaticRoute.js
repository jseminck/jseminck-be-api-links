import express from 'express';

export default function configureStaticRoute(app) {
    app.use('/images', express.static(__dirname + '/images'));
}