//dependencies
const express = require("express");
const exphbs = require("express-handlebars");
// PORT compatible with heroku
const PORT = process.env.PORT || 8080;
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//using handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Set up routes to use
const routes = require("./controllers/burger_controller");
app.use(routes);

app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});