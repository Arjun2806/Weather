const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs");
const port = process.env.PORT || 8026;

// const viewsPath = path.join(__dirname, "../views"); // Corrected views directory path
const staticPath = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

// Set the views directory
// app.set("views", viewsPath); // Corrected setting for views directory

// Set the view engine to handlebars
app.set("view engine", "hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path)


// Define the static directory

app.use(express.static(staticPath));

// Define routes
app.get("", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about"); // This will render "about.hbs" from the views directory
});

app.get("/weather", (req, res) => {
  res.render("weather"); // Sending plain text for weather
});

app.get("*", (req, res) => {
  res.render('404error',{
    errorMsg:"Oops! Page not Found"
  }); 
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
