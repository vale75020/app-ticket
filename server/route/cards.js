const express = require("express"); // import express
const app = express.Router(); // creation app express

const auth = require("../middleware/auth");
const Card = require("../models/card.model");

// All Cards
app.get("/cards", auth, (req, res) => {
  Card.find({}, (err, card) => {
    if (err) console.log(err);
    res.json(card);
  });
});

// Post Card
app.post("/newcard", (req, res) => {
  Card.findOne({
    title: req.body.title
  }).then(card => {
    const newCard = new Card({
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

// Find by :id
app.put("/cards/:id", (req, res) => {
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
app.delete("/cards/:id", (req, res) => {
  Card.findOneAndDelete({ _id: req.params.id }, (err, card) => {
    if (err) return console.log("Cette card n'exsite pas");
    res.json(card);
  });
});

module.exports = app;
