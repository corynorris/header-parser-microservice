const favicon = require('serve-favicon');
const express = require('express');
const path = require('path');
const platform = require('platform');
const port = process.env.PORT || process.argv[2] || 3000;
const app = express();

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.get(['/','/api/whoami'], (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const language = req.headers["accept-language"];
    res.json({
        'ipaddress': ip,
        'language': language,
        'software': platform.os
    });
});

app.listen(port);
