import express from "express";
import bodyParser from "body-parser";


const app = express();
app.use(bodyParser.json());
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/main", (req, res) => {
  res.render("main.ejs");
});

app.get("/signup", (req, res) => {
  res.render("signup.ejs");
});


app.listen(port, () => {
  console.log(`running on port ${port}`);
});

