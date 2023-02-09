import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { createReadStream } from "node:fs";

const server = createServer(async (req, res) => {
  console.log(req.url);
  switch (req.url) {
    case "/":
      // stream the data back to the client
      const stream = createReadStream("./web/index.html");

      res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });

      stream.on("data", (chunk) => res.write(chunk));

      stream.on("end", () => res.end());
      break;
    case "/build/out.js":
      // stream the data back to the client
      const jsStream = createReadStream("./build/out.js");

      res.writeHead(200, { "Content-type": "applicaton/javascript" });

      jsStream.on("data", (chunk) => res.write(chunk));

      jsStream.on("end", () => res.end());
      break;
    case "/build/out.js.map":
      // stream the data back to the client
      const mapStream = createReadStream("./build/out.js.map");

      res.writeHead(200, { "Content-type": "applicaton/javascript" });

      mapStream.on("data", (chunk) => res.write(chunk));

      mapStream.on("end", () => res.end());
      break;
    default:
      res.writeHead(200);
      res.end();
      break;
  }
});
server.listen(8080);
