const
express = require("express"),
app     = express();



// App Config
app.set("view engine", "ejs");
app.use(express.static("public"));



// Routes
app.get('/', (req, res) => res.redirect("index"));

app.get("/index", (req, res) => res.render("index"));




app.listen(3000, () => console.log('Server running on port 3000!'))