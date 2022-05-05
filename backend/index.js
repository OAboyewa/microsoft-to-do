const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

const taskRoute = require("./route/tasks_routes.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/api/task", taskRoute);

app.get('/', function(req, res) {
    res.send("Hello World");
});

app.listen(port, function() {
    console.log(`Example app listening on http://localhost:${port}/ `);
});