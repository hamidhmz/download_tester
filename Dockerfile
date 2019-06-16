FROM node
WORKDIR /home/banico/test
CMD ["sh","-c"," npm install && node app"]
