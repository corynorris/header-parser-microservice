const favicon = require('serve-favicon');
const express = require('express');
const path = require('path');
var platform = require('platform');

const port = process.env.PORT || process.argv[2] || 3000;
const app = express();

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app
app.get(['/','/api/whoami'], (req, res) => {
    const language = req.headers["accept-language"];
    const ip = req.connection.remoteAddress;
    res.json({
        'ipaddress': ip,
        'language': language,
        'software': platform.os
    });
});

app.listen(port);
