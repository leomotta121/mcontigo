/* eslint-disable no-console */
const { createServer } = require("http");
const next = require("next");
const routes = require("./routes");

const app = next({ dev: process.env.NODE_ENV !== "production", dir: "./" });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  createServer(handler).listen(process.env.PORT || 3000, err => {
    if (err) console.log(err);
    console.log(`http://localhost:${process.env.PORT || 3000}`);
  });
});
