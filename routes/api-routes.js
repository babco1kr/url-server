const db = require('../models');
const shortid = require('shortid');

module.exports = function(app) {

  app.post('/createUrl', (req, res) => {
  db.Url.create({
    target_url: req.body.target_url,
    tiny_url: shortid.generate()
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
