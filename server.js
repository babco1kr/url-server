const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

// Parse Request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// import DB shema
const db = require("./models");

require("./routes/api-routes.js")(app);

// Setup Sequialize
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
