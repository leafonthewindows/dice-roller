//IMPORTS
const path = require('path')
const bodyParser = require('body-parser')
const ejs = require("ejs");

//EXPRESS
const express = require("express")
const app = express()
const port = procss.env.PORT || 3000

//EJS
app.set("view engine", "ejs")

//PATH
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(__dirname + "/public"))

//MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }))

//ROUTES
app.get("/", (req, res) => {
    res.render("index");
})


app.listen(port, () => {
    console.log(`Listening at http://local host:${port}`)
})