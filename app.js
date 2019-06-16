var throttle = require('express-throttle-bandwidth');
const express = require("express");
const fs = require('fs');
const ThrottledReader = require('throttled-reader');
const path = require("path");
const app = express();


// const file = fs.createWriteStream("file.jpg");
// const request = http.get("http://i3.ytimg.com/vi/J---aiyznGQ/mqdefault.jpg", function(response) {
//   response.pipe(file);
// });//this is for download to hd drive

app.use(throttle(1));
app.get("/",(req,res)=>{
    const now = Math.floor(Date.now()/1000)
    
    const filePath = path.join(__dirname, '1.zip');
    const stat = fs.statSync(filePath);
    res.writeHead(200, {
        'Content-Type': 'application/zip',
        'Content-Length': stat.size,
        'Content-Disposition': 'attachment; filename=1.zip'
    });

    const readStream = fs.createReadStream(filePath);
    const throttledStream = new ThrottledReader(readStream, {
        rate: 10 * 1024 // In bytes per second
    });
    
    const stream = throttledStream.pipe(res);
    // const stream = readStream.pipe(res);
    stream.on('finish', function () { console.log(Math.floor(Date.now()/1000) - now); });
    // res.download(filePath, (err) => {
    //     if (err) {
    //       //handle error
    //       return
    //     }
    //     console.log(Math.floor(Date.now()/1000) - now);
    //   });
    // res.download();
});

app.listen(80,()=>console.log("http://localhost"));