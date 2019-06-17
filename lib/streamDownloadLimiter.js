const ThrottledReader = require('throttled-reader');
const fs = require('fs');

module.exports.stream = function(filePath,res){
    const stat = fs.statSync(filePath);
    res.writeHead(200, {
        'Content-Type': 'application/zip',
        'Content-Length': stat.size,
        'Content-Disposition': 'attachment; filename=1.zip'
    });
    const readStream = fs.createReadStream(filePath);
    const throttledStream = new ThrottledReader(readStream, {
        rate: 200 * 1024 // In bytes per second
    });
    const stream = throttledStream.pipe(res);
    stream.on('finish', function () { console.log(Math.floor(Date.now()/1000) - now); });
    // const stream = readStream.pipe(res);
}