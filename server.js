const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const htmlRoutes = require('./app/routing/htmlRoutes');
const apiRoutes = require('./app/routing/apiRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function () {
  return console.log("Your app is listening on port " + PORT);
});