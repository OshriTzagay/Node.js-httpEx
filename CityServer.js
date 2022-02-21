const http = require("http").Server;
const fs = require("fs");
const util = require("util");
const ReadFilePromise = util.promisify(fs.readFile);

class CityServer extends http {
  constructor() {
    super();
    this.listen(8080);
    this.on("request", this.requestHandler);
  }

  requestHandler = (req, res) => {
    ReadFilePromise("./City.txt")
      .then((fileText) => res.end(fileText.toString()))
      .catch((err) => res.error(err));
  };
}

module.exports = new CityServer();
