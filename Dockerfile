FROM node
WORKDIR /home/banico/test
CMD ["sh","-c"," npm install thread-sleep  && npm install  && node index"]
