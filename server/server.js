const express = require("express"); // import express
const users = require("./route/users.js");
const cards = require("./route/cards.js");

const mongoose = require("mongoose");
var app = express(); // creation app express
const PORT = 3333

const cors = require("cors"); // pour eviter que tous puissent taper sur mon API

app.use(cors()); // pour autoriser le fetch
app.use(express.json()); // pour parser les données recus par le body en format json
app.use(express.urlencoded({ extended: false }));

app.use("/", users);
app.use("/", cards);

mongoose.connect("mongodb://localhost:27017/appticket", {
  useNewUrlParser: true
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connecté a MongoDB !");
});

app.listen(3333, () => {
  console.log(`listening on port: ${PORT}`); //utiliser l'app node app.js pour la lancer
});
