const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

// Parse Request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// import DB shema
const db = require("./models");

// Setup Sequialize
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

app.post('/createUrl', (req, res) => {
  db.Url.create({
    target_url: req.body.target_url,
    tiny_url: req.body.tiny_url
    }).then(function(data) {
    res.json();
    })
  })
}

app.get('/find/:tiny_url', (req, res) => {
  db.Url.findOne({ where: { tiny_url: req.params.tiny_url }
  }).then(function(data) {
    res.json();
    })
  })
 }
