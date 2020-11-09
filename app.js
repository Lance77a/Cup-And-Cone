const
express = require('express'),
app     = express(),
fs = require('fs');

// App Config -
app.set("view engine", "ejs");
app.use(express.static("public"));

// Gray Matter -
const matter = require('gray-matter');

// Routes -
app.get('/', (req, res) => res.render("index"));

app.get("/about", (req, res) => res.render("about"));

app.get("/news", (req, res) => {
    let path = './views/news/'
    const posts = fs.readdirSync(path).filter(file => file.endsWith('.md'));
    const file = posts.map(post => matter.read(path + post));
    res.render("news", {
       file
    });
  });

app.get("/events", (req, res) => res.render("events"));

app.listen(3000, () => console.log('Server running on port 3000!'))