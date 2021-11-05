// import express to include in our project
const express = require('express');
// initialize the server express, app is the instance of express
const app = express();

const mongo = require("hbs")

// creates an absolute path pointing to a folder called 'views'
// tell our Express that HBS will be in charge of the rendering HTML
app.set("views", `${__dirname}/views`);
app.set("view engine", "hbs");

// make everything inside the 'public' available
// middleware --> express.static  --> set static files from public directory
app.use(express.static('public'));

// set the routes to show to the user
app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/public/views/home.html`);
});


app.get("/about", (req, res) => {
  //res.send('hello monina')
  res.sendFile(`${__dirname}/public/views/about.html`);
});

app.get("/works", (req, res) => {
  res.sendFile(`${__dirname}/public/views/works.html`);
});

app.get("/gallery", (req, res) => {
  //res.send('hello monina')
  res.sendFile(`${__dirname}/public/views/gallery.html`);
});

// listen to a port
app.listen(3000, ()=> console.log('listeting to the port 3000'));