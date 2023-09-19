const express = require("express");
const path = require("path");
const app = express();

const publicPath = path.join(__dirname, "public");
app.get("", (req, resp) => {
  resp.sendFile(`${publicPath}/Home.html`);
});
app.get("/aboutme", (req, resp) => {
  resp.sendFile(`${publicPath}/About.html`);
});
app.get("*", (req, resp) => {
  resp.sendFile(`${publicPath}/noPage.html`);
});
// app.use(express.static(publicPath));

// app.get("", (req, resp) => {
//   console.log(req.query.name);
//   resp.send(`Welcome,${req.query.name} to Home Page`);
// });
// app.get("/about", (req, resp) => {
//   resp.send("Welcome to About page ");
// });
app.listen(4200);
