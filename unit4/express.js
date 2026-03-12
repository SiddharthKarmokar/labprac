const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

// const http = require('http');
// const conn = require("./mysql")

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type' : 'text/html'});
//     const timestamp = Date.now();
//     const dateObject = new Date(timestamp);
//     res.write("The date and time are currently: " + dateObject.toISOString());
//     res.end();
// }).listen(8080);

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Rainbow9823",
    database: "mydb"
});

conn.connect( function(err) {
    if(err) throw err;
    console.log("Connected to mysql");

})

app.get("/", (req, res) => {
    res.send(`
    <h2>Student Form</h2>
    <form method="POST" action="/add">
      Name: <input type="text" name="name" required><br><br>
      Address: <input type="text" name="address" required><br><br>
      <button type="submit">Submit</button>
    </form>
  `);
});


app.post("/add", (req, res) => {
    const name = req.body.name;
    const address = req.body.address;
    
    const sql = `INSERT INTO Employee (name, address) VALUES ('${name}', '${address}')`;

    conn.query(sql, (err, result) => {
        if(err) throw err;
        res.send("1 record inserted sucessfully");
    });
});

app.listen(3000, () => {
    console.log("Server is running at port 3000");
});