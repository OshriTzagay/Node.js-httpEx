const Http = require("http").Server;
const fs = require("fs");
const util = require("util");
const readFile = util.promisify(fs.readFile);

class MessiServer extends Http {
  constructor() {
    super();
    this.listen(8000);
    this.on("request", this.onMessiInfo);
  }
  //!Async Function-->
  onMessiInfo(request, response) {
    readFile("./Messi.txt")
      //-->success
      .then((text) => response.end(text.toString()))
      //-->error
      .catch((err) => console.log(err));
  }

  //!Sync Function-->

  //   onMessiInfo(request, response) {
  //     fs.readFile("./Messi.txt", (err, res) => {
  //       if (err) {
  //         throw err;
  //       }
  //       response.end(res.toString());
  //     });
  //   }
}

module.exports = new MessiServer();
