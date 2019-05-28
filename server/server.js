const express = require("express"); // import express
let _users = require("./users.json"); // file avec la bdd on utilise const car il est un tableau
let _cards = require("./cards.json");
let users = require("./route/users.js");
let cards = require("./route/cards.js");
const passport = require("passport");

const mongoose = require('mongoose')

var app = express(); // creation app express
const cors = require('cors') // pour eviter que tous puissent taper sur mon API
require("./config/passport")(passport)

app.use(passport.initialize());
app.use(cors()); // pour autoriser le fetch
app.use(express.json()); // pour parser les données recus par le body en format json
app.use(express.urlencoded({ extended: false }));

// app.use(express.static(__dirname + '/public/')); 

app.use("/users", users);
app.use("/cards/", cards);

mongoose.connect('mongodb://localhost:27017/appticket', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connecté a MongoDB !')
});


app.listen(3333, () => {
  console.log("listening on port: " + 3333); //utiliser l'app node app.js pour la lancer
});