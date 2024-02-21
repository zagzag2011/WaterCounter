const express = require('express');
const sqlite3 = require('sqlite3');

const app = express();
const port = 3000;

const db = new sqlite3.Database('./data/database.sqlite');

app.get('/', (req, res) => {
  res.send('Hello, Docker Compose with SQLite!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

