const express = require("express");
const app = express();

var request = require("request");

const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  const query = req.query.search;
  const ulr = `http://www.omdbapi.com/?s=${query}&apikey=e5c247ef`;

  request(ulr, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      res.render("index", { data: data });
    }
  });
});

app.listen(port, () => console.log(`Movie app listening on port ${port}!`));
