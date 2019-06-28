/* Requirements */
const express = require('express');
const app = express();
const { projects } = require('./data.json');

/* Middleware */
app.use('/static', express.static('public'));
app.set('view engine', 'pug');

/* Routes */
app.get('/', (req, res) => {
	res.render('index', {projects: projects});
});

app.get('/about', (req, res) => {
	res.render('about');
});

app.get('/project', (req, res) => {
	res.redirect( "/" );
});

app.get("/project/:id", (req, res, next) => {
    const id = req.params.id;
    res.locals.project = projects[id];
    res.render("project");
});

/* Local Host Starter */
app.listen(3000, () => {
  console.log('You should take a gander at localhost:3000, pal.')
});