FROM node
WORKDIR /home/banico/test
CMD ["sh","-c"," npm install thread-sleep -g && npm install  && node index"]
