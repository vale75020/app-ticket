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
app.get("/me", auth, (req, res) => {
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
    // console.log("Req User: ", req.user.id);
    // console.log("Card User: ", card.user);
    // console.log(req.user.id == card.user);
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
  Card.findOne({
    title: req.body.title
  }).then(card => {
    const newCard = new Card({
      user: req.user.id,
      title: req.body.title,
      text: req.body.text
    });
    card
      ? res.status(400).json({ title: "la card existe deja !" })
      : newCard
          .save()
          .then(card => res.json(card))
          .catch(err => console.log(err));
  });
});

//////////////////
// modify by :id
app.put("/:id", (req, res) => {
  const id = req.params.id; // verifier que l'id existe
  const card = cardExist(id); //return la card
  const updatedFields = ["title", "description"]; // tous les champs que on peut mettre à jour
  if (card) {
    updatedFields.forEach(field => {
      // boucler le tableau champs
      if (req.body[field]) card[field] = req.body[field];
    });
    res.status(200).send(card);
  } else res.status(404).send("Card not found");
});

// Delete
app.delete("/:id", (req, res) => {
  Card.findOneAndDelete({ _id: req.params.id }, (err, card) => {
    if (err) return console.log("Cette card n'exsite pas");
    res.json(card);
  });
});

module.exports = app;
