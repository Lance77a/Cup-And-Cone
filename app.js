const
express = require('express'),
app     = express();

// App Config
app.set("view engine", "ejs");
app.use(express.static("public"));

// Routes
app.get('/', (req, res) => res.render("index"));

app.get("/index", (req, res) => res.render("index"));

app.get("/index/about", (req, res) => res.render("about"));

app.get("/index/news", (req, res) => res.render("news"));

app.get("/index/events", (req, res) => res.render("events"));

app.listen(3000, () => console.log('Server running on port 3000!'))