const favicon = require('serve-favicon');
const express = require('express');
const path = require('path');

const port = process.env.PORT || process.argv[2] || 3000;
const app = express();

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));



app.listen(port);
