const express = require("express"); // import express
let _cards = require("../cards.json");
const cors = require('cors')
const Card = require("../models/card.model");
const passport = require("passport");

var app = express(); // creation app express

app.use(cors()); // pour autoriser le fetch
app.use(express.json()); // pour parser les données recus par le body en format json
app.use(express.urlencoded({ extended: false }));

function cardExist(id) {
    const card = _cards.find(card => card.id == id);
    return card;
  }
  
app.get("/cards", passport.authenticate("jwt", {session: false}), (req, res) => {
    Card.find({}, (err, card) => {
      if(err) console.log(err);
      res.json(card)
    })
  });
  
  // app.get("/cards/:id", (req, res) => {
  //   const id = req.params.id; // pour recuperer l'id
  //   const card = _cards.find(card => card.id == id); // comparer l'id donné avec celui de la card
  //   if (card) res.status(200).send(card);
  //   else res.status(404).send("Card not found");
  //   //console.log(card)
  // });
  
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
        : newCard.save()
                .then(card => res.json(card))
                .catch(err => console.log(err));
            });
          });
  
  app.put("/cards/:id", (req, res) => {
    const id = req.params.id; // verifier que l'id existe
    const card = cardExist(id); //return la card
  
    const updatedFields = ["title", "description"]; // tous les champs que on peut mettre à jour
  
    if (card) {
      const body = req.body; //update
  
      updatedFields.forEach(field => {
        // boucler le tableau champs
        if (req.body[field]) card[field] = req.body[field];
      });
      res.status(200).send(card);
    } else res.status(404).send("Card not found");
  });
  
  app.delete("/cards/:id", (req, res) => {
    Card.findOneAndDelete({_id: req.params.id}, (err, card) => {
      if(err) return console.log("Cette card n'exsite pas");
      res.json(card)
    })
  });


  module.exports = app