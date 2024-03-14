import "@babel/polyfill";

import app from "./server.js";
//import connect from "./database.js";

async function main() {
  await app.listen(app.get("port"));
  //  await connect();
  console.log("Server on PORT", app.get("port"));
}
main();
