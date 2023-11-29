const express = require('express');

const routes = express.Router();

routes.get('/login', (req, res, next) => {
    res.send('<html><h1>This is login page </h1><br/><form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/login" method="POST"><input id="username" type="text" placeholder="Enter username" /><button type="submit">Login</button></form></html>')
})

routes.post('/login', (req, res, next) => {
    res.redirect('/')
})

module.exports = routes;