const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Rainbow9823',
    database: 'mydb'
});

// connection.query("CREATE DATABASE mydb", (err) => {
//     if(err)throw new err;
//     console.log("Database created!");
// });

// connection.query('SHOW DATABASES', (err, res) => {
//     if(err) throw err;
//     console.log(res);
// });

// connection.query("CREATE TABLE Employee (name VARCHAR(255), address VARCHAR(255))", (err, res)=>{
//     if(err) throw err;
//     console.log("Table created");
//     console.log(res);
// })

// connection.query("INSERT INTO Employee (name, address) VALUES ('Siddharth', 'Mumbai')", (err, res) => {
//     if(err) throw err;
//     console.log(res);
// });

// connection.query("DELETE FROM Employee WHERE address='Mumbai'", (err, res)=>{
//     if(err) throw err;
//     console.log(res);
// });

// connection.query("UPDATE Employee SET address = 'Kurnool' WHERE address = 'Mumbai'", (err, res)=>{
//     if(err) throw err;
//     console.log(res);
// });


connection.query("SELECT * FROM Employee", (err, res)=>{
    if(err) throw err;
    console.log(res);
});


// export const conn = connection;