const express = require('express');
const fs = require('fs');
const routes = express.Router();


routes.get('/', (req, res, next) => {
    fs.readFile('chatMessage.txt', (error, data) => {
        if (error) {
            data = "Something went wrong!"
        }
        res.send(`<html><h3>${data}</h3><br/><form action="/" onsubmit="document.getElementById('username').value=localStorage.getItem('username')" method="POST"><input type="text" name="message" placeholder="send your message" /> <input type="hidden" id="username" name="username"/><button type="submit">Send Message</button></form></html>`)
    })
})

routes.post('/', (req, res, next) => {
    fs.writeFileSync('chatMessage.txt', `${req.body.username  } : ${req.body.message} `, { flag: 'a' }, (error) => {
        error ? console.log(error) : res.redirect('/');
    })
})

module.exports = routes;