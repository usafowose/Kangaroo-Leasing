const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.listings
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByLocation: function(req, res) {
    db.listings
      .find(req.params.location)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
}