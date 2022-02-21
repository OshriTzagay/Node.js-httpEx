const http = require("http").Server;

class myServer extends http {
  constructor() {
    super();
    this.listen(3000);
    this.on("connection", this.connectionHandler);
    this.on("request", this.requestHandler);
  }

  requestHandler(request, response) {
    response.end("HELLO WORLD");
  }
  connectionHandler() {
    console.log("CONNECTION SUCCESSFULLY");
  }
}

module.exports = new myServer();

//-->