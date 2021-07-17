const express = require('express');
const os = require('os');
const fmlog = require('@waynechang65/fml-consolelog').log;

const app = express();

const port = 2222;

app.get('/', (req, res) => {
    res.send('<p><strong><span style="color: #0000ff;">Good morning</span>.</strong> I am from <span style="color: #ffff00; background-color: #000000;"><strong>' + os.hostname() + '</strong></span>.</p>');
    let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    fmlog('crawler_msg', ['Request', req.hostname, ip, '', '']);
    console.log(JSON.stringify(req.headers));
});

app.listen(port, () => {
    fmlog('sys_msg', ['SERVER START', 'The service(show-hostname) is running on port ' + port]);
});
