const
express = require('express'),
app     = express(),
PORT    = process.env.PORT || 3000;
fs      = require('fs');

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
    const postsArr = posts.map(post => matter.read(path + post));
    res.render("news", {
       postsArr
    });
  });

app.get("/news/admin", (req, res) => res.render("admin"));

app.get("/events", (req, res) => res.render("events"));

app.listen(PORT, () => console.log(`Server running on ${PORT}!`))