const express = require("express"); // import express
let _cards = require("../cards.json");
const cors = require('cors')

var app = express(); // creation app express

app.use(cors()); // pour autoriser le fetch
app.use(express.json()); // pour parser les données recus par le body en format json
app.use(express.urlencoded({ extended: false }));

function cardExist(id) {
    const card = _cards.find(card => card.id == id);
    return card;
  }
  
app.get("/cards", (req, res) => {
    //middleware express
    res.status(200).send(_cards);
  });
  
  // app.get("/cards/:id", (req, res) => {
  //   const id = req.params.id; // pour recuperer l'id
  //   const card = _cards.find(card => card.id == id); // comparer l'id donné avec celui de la card
  //   if (card) res.status(200).send(card);
  //   else res.status(404).send("Card not found");
  //   //console.log(card)
  // });
  
  app.post("/card", (req, res) => {
    // creer une nouvelle card
    const body = req.body; // données recus comme title et description console.log('body: ', body)
    if (body.title && body.description) {
      // condition pour eviter les objets vides comme un send sans parametres
      const newCard = {
        id: _Date.now(), //pour donner un id unique en milliseconds
        title: body.title,
        description: body.description
      };
      _cards.push(newCard); //pour ajouter la card au tableau
      res.status(200).send(newCard);
    } else {
      res.status(412).send("Title and Description are required fields");
    }
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
    const id = req.params.id;
    let card = cardExist(id);
  
    if (card) {
      _cards = _cards.filter(card => {
        return card.id != id;
      });
      res.status(200).send("Deleted");
    } else {
      res.status(404).send("Card not found");
    }
  });


  module.exports = app