FROM node
WORKDIR /home/banico/test
CMD ["sh","-c"," npm install -g thread-sleep  && npm install  && node index"]
