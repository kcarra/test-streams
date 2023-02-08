import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { createReadStream } from "node:fs";

const server = createServer(async (req, res) => {
  switch (req.url) {
    case "/":
      console.log("hit");
      // stream the data back to the client
      const stream = createReadStream("./html/index.html");

      res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });

      stream.on("data", (chunk) => res.write(chunk));

      stream.on("end", () => res.end());

      // read the index.html file
      //   const fileContents = await readFile("./html/index.html", {
      //     encoding: "utf-8",
      //   });

      //   res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
      //   res.end(fileContents);
      break;

    default:
      res.writeHead(200);
      res.end();
      break;
  }
});
server.listen(8080);
