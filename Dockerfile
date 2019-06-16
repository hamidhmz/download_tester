FROM node
WORKDIR /app
CMD ["sh","-c","npm install -g nodemon && npm install && nodemon app"]
