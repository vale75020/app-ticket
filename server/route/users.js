const express = require("express"); // import express
//let _users = require("../users.json");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const passport = require("passport");
//const passport = require("passport");

const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

var app = express.Router(); // creation app express

// app.use(cors()); // pour autoriser le fetch
// app.use(express.json()); // pour parser les données recus par le body en format json
// app.use(express.urlencoded({ extended: false }));

// function userExist(id) {
//   const user = _users.find(user => user.id == id);
//   return user;
// }

app.post(
  "/signup",
  passport.authenticate("signup", { session: false }),
  async (req, res, next) => {
    res.json({
      message: "Signup successful",
      user: req.user
    });
  }
);

app.post("/login", async (req, res, next) => {
  passport.authenticate("login", async (err, user, info) => {
    try {
      if (err || !user) {
        const error = new Error("An Error occured");
        return next(error);
      }
      req.login(user, { session: false }, async error => {
        if (error) return next(error);
        //We don't want to store the sensitive information such as the
        //user password in the token so we pick only the email and id
        const body = { _id: user._id, username: user.username };
        //Sign the JWT token and populate the payload with the user email and id
        const token = jwt.sign({ user: body }, "top_secret");
        //Send back the token to the user
        return res.json({ token });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
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
