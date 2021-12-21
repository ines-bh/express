const express = require("express");
const res = require("express/lib/response");
const app = express();
const port = 5000;


app.use(Middleware)

app.listen(port, () => {
  console.log(` ☻ The server is Running in ${port} port`);
});
