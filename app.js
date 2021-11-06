// import express to include in our project
const express = require('express');
// normalize the path in every systems
const path = require('path');
// initialize the server express, app is the instance of express
const app = express();


// make everything inside the 'public' available
// middleware --> express.static  
//--> set static files in the public folder
app.use(express.static('public'));

// set the routes to show to the user
app.get("/", (req, res) => {
  //res.sendFile(`${__dirname}/public/views/home.html`);
  // without 'path'
  //res.sendFile(`${__dirname}/public/views/home.html`);
  res.sendFile(path.join(__dirname, 'public', 'views', 'home.html'));
});


app.get("/about", (req, res) => {
  //res.sendFile(`${__dirname}/public/views/about.html`);
  res.sendFile(path.join(__dirname, 'public', 'views', 'about.html'));
});

app.get("/works", (req, res) => {
  //res.sendFile(`${__dirname}/public/views/works.html`);
  res.sendFile(path.join(__dirname, 'public', 'views', 'works.html'));

});

app.get("/gallery", (req, res) => {
  //res.sendFile(`${__dirname}/public/views/gallery.html`);
  res.sendFile(path.join(__dirname, 'public', 'views', 'gallery.html'));
});

// send an error to user if there is no url defined
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "views", "not-found.html"));
})

// listen to a port
app.listen(3000, ()=> console.log('listeting to the port 3000'));