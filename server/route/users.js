const express = require("express"); // import express
//let _users = require("../users.json");
const cors = require("cors");
const bcrypt = require("bcryptjs");
//const passport = require("passport");


const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

var app = express(); // creation app express

app.use(cors()); // pour autoriser le fetch
app.use(express.json()); // pour parser les données recus par le body en format json
app.use(express.urlencoded({ extended: false }));

// function userExist(id) {
//   const user = _users.find(user => user.id == id);
//   return user;
// }

app.post("/register", (req, res) => {
   // creer un nouveau utilisateur
   User.findOne({
    username: req.body.username
  }).then(user => {
    // if(user) {
    //   return res.status(400).json({
    //     username: "L'username existe deja !"
    //   })
    // }
    const newUser = new User({
      username: req.body.username,
      password: req.body.password
    });
    user ? res.status(400).json({ username: "L'username existe deja !"}) : 
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) console.log(err);
        newUser.password = hash;
        newUser
          .save()
          .then(user => res.json(user))
          .catch(err => console.log(err));
      });
    });
  })
  
});

app.post("/login", (req, res) => {
  User.findOne({
    username: req.body.username
  }).then(user => {
    //console.log(user);
    if (!user) {
      return res.status(404).json({
        username: "Ce compte n'existe pas !"
      });
    }
    bcrypt.compare(req.body.password, user.password).then(isMatch => {
      if (isMatch) {
        // User Match
        const payload = {
            id: user.id,
            username: user.username,
            admin: user.admin
        }
        // Creation du JWT Payload
        //Sign Token
        console.log(payload)
        jwt.sign({ payload }, "secretkey", { expiresIn: "1d" }, (err, token) => {
          // user:user
          res.json({
            token // token: token
          }); // post => res = token
        });
      } else {
        // errors.name = "Password incorrect";
        return res.status(400).json({
          password: "Password incorrect"
        });
      }
    });
  });
});

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

module.exports = app;
