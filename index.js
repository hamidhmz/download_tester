const express = require("express");
const fs = require('fs');
const ThrottledReader = require('throttled-reader');
const path = require("path");
const streamDownloader = require("./lib/streamDownloadLimiter");
const app = express();




app.get("/",(req,res)=>{
    const now = Math.floor(Date.now()/1000)
    
    const filePath = path.join(__dirname, '1.zip');

    // streamDownloader.stream(filePath,res,now,500);
    streamDownloader.streamSleep(filePath,res,now,1000);

    // res.download(filePath, (err) => {
    //     if (err) {
    //         console.log(err);
    //         return
    //     }
    //     console.log(Math.floor(Date.now()/1000) - now);
    // });

});

app.listen(80,()=>console.log("http://192.168.1.205/"));