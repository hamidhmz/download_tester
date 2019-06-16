FROM node
WORKDIR /home/banico/test
CMD ["sh","-c"," npm install && npm install @sitespeed.io/throttle -g && node app"]
