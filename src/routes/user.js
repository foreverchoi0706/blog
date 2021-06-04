const express = require("express");
const jwt = require("jsonwebtoken");

const user = express.Router();

user.post("/login", () => {
    console.log("test");
});


module.export = user;