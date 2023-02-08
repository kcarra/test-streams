import { get } from "node:http";

async function HitServer() {
  const res = await get("http://localhost:8080/");
  console.log("DONE");
  res.on("response", (response) => {
    console.log(response.statusCode);
  });
}

Promise.all([
  HitServer(),
  HitServer(),
  HitServer(),
  HitServer(),
  HitServer(),
  HitServer(),
]);
