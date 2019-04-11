const express = require("express"); // import express
//let _users = require("../users.json");
const cors = require('cors')

const User = require('../models/user.model')
const jwt = require("jsonwebtoken");

var app = express(); // creation app express

app.use(cors()); // pour autoriser le fetch
app.use(express.json()); // pour parser les données recus par le body en format json
app.use(express.urlencoded({ extended: false }));


// function userExist(id) {
//   const user = _users.find(user => user.id == id);
//   return user;
// }



app.post("/login", (req, res) => {

  const user = {
    username: req.body.username,
    password: req.body.password
  };
  console.log(user.password);

  jwt.sign({ user }, "secretkey", { expiresIn: '30s' }, (err, token) => {
    // user:user
    res.json({
      token // token: token
    }); // post => res = token
  });
})

// Verify Token
function verifyToken(req, res, next) {
  // get auth header value - we send token in the header and verify authorization value
  const bearerHeader = req.headers["authorization"];
  // check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    // Split at the space
    const bearer = bearerHeader.split(" ");
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}




  
app.get("/", (req, res) => {
    //middleware express
    res.status(200).send(_users);
  });
  
  app.get("/users/:id", (req, res) => {
    const id = req.params.id; // pour recuperer l'id
    const user = _users.find(user => user.id == id); // comparer l'id donné avec celui de l'user
    if (user) res.status(200).send(user);
    else res.status(404).send("User not found");
    //console.log(user)
  });
  
  app.post("/users", (req, res) => {
    // creer un nouveau utilisateur
    const body = req.body; // données recus comme username et password console.log('body: ', body)
    if (body.username && body.password) {
      // condition pour eviter les objets vides comme un send sans parametres
      const newUser = {
        id: _Date.now(), //pour donner un id unique en milliseconds
        username: body.username,
        password: body.password
      };
      _users.push(newUser); //pour ajouter l'user au tableau
      res.status(200).send(newUser);
    } else {
      res.status(412).send("Username and password are required fields");
    }
  });
  
  app.put("/users/:id", (req, res) => {
    const id = req.params.id; // verifier que l'id existe
    const user = userExist(id); //return utilisateur
  
    const updatedFields = ["username", "password"]; // tous les champs que on peut mettre à jour
  
    if (user) {
      const body = req.body; //update
  
      updatedFields.forEach(field => {
        // boucler le tableau champs
        if (req.body[field]) user[field] = req.body[field];
      });
      res.status(200).send(user);
    } else res.status(404).send("User not found");
  });
  
  app.delete("/users/:id", (req, res) => {
    const id = req.params.id;
    let user = userExist(id);
  
    if (user) {
      _users = _users.filter(user => {
        return user.id != id;
      });
      res.status(200).send("Deleted");
    } else {
      res.status(404).send("User not found");
    }
  });

module.exports = app