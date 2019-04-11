const express = require("express"); // import express
let _users = require("./users.json"); // file avec la bdd on utilise const car il est un tableau
let _cards = require("./cards.json");
let users = require("./route/users.js");
let cards = require("./route/cards.js");

var app = express(); // creation app express
const cors = require('cors') // pour eviter que tous puissent taper sur mon API

app.use(cors()); // pour autoriser le fetch
app.use(express.json()); // pour parser les données recus par le body en format json
app.use(express.urlencoded({ extended: false }));

// app.use(express.static(__dirname + '/public/')); 

app.use("/users", users);
app.use("./route/", cards);


app.listen(3333, () => {
  console.log("listening on port: " + 3333); //utiliser l'app node app.js pour la lancer
});