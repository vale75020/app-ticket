const express = require("express"); // import express
const app = express.Router(); // creation app express

const auth = require("../middleware/auth");
const Card = require("../models/card.model");
const User = require("../models/user.model");

// All Cards
app.get("/all", auth, (req, res) => {
  if (req.user.admin) {
    Card.find({})
      .populate("user", ["username"])
      .then((card, err) => {
        if (err) console.log(err);
        res.json(card);
      });
  } else {
    res.status(400).json({ msg: "You are not admin" });
  }
});

// Card of user
app.get("/mycards", auth, (req, res) => {
  Card.find({ user: req.user.id })
    .populate("user", ["username"])
    .then((card, err) => {
      if (err) console.log(err);
      res.json(card);
    });
});

// Find card by id
app.get("/:id", auth, (req, res) => {
  Card.findOne({ _id: req.params.id }, (err, card) => {
    // Pourquoi ca ne marche pas avec un === ?
    if (req.user.admin || req.user.id == card.user) {
      if (err) console.log(err);
      res.json(card);
    } else {
      res.json({
        msg: "Is not your card"
      });
    }
  });
});

// Post Card
app.post("/add", auth, (req, res) => {
  
    const newCard = new Card({
      user: req.user.id,
      title: req.body.title,
      text: req.body.text
    })
    .save()
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

//////////////////
// modify by :id
app.put("/:id", auth, (req, res) => {
  const cardField = {};
  cardField.title = req.body.title;
  cardField.text = req.body.text;

  Card.findOne({ _id: req.params.id }).then(card => {
    if (req.user.admin || card.user == req.user.id) {
      Card.findOneAndUpdate(
        { _id: req.params.id },
        { $set: cardField },
        { new: true }
      ).then(card => res.json(card));
    } else {
      res.json({
        msg: "Impossible de modifier la carte d'un autre utilisateur"
      });
    }
  });
});

// Delete
app.delete("/:id", (req, res) => {
  Card.findOneAndDelete({ _id: req.params.id }, (err, card) => {
    if (err) return console.log("Cette card n'exsite pas");
    res.json(card);
  });
});

module.exports = app;
