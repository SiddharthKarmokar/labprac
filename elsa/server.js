import express from "express";
import {
    conn,
    users
} from "./db.js";
import multer from "multer";
import session from "express-session";

const app = express();
const upload = multer({ dest: "uploads/"});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: false
}));

app.get("/health", (req, res)=>{
    res.json({
        message: "Hello from server"
    });
});

app.post("/signup", async (req, res)=>{
    try{
        console.log("it came");
        const {email, password} = req.body;
        const result = conn.query(`INSERT INTO users (email, password) VALUES ('${email}', '${password}')`);
        
        req.session.user = {
            id: user.id,
            email: user.email
        };
        
        res.redirect("/home.html");
    }catch(err){
        throw err;
    }
});

app.post("/login", async (req, res)=>{
    try{
        const {email, password} = req.body;
        conn.query("SELECT * FROM users WHERE email = ?", [email], (error, result)=>{
            if(error) throw error;
            
            if(result.length === 0){
                return res.status(404).json({
                    message: "User Not Found"
                });
            }
            const user = result[0];
            if(user.password !== password){
                return res.status(401).json({
                    message: "Invalid Password"
                });
            }
    
            req.session.user = {
                id: user.id,
                email: user.email
            };
    
            res.redirect("/home.html");
        });
    }catch(err){
        throw err;
    }
});

app.post("/upload", upload.single("file"), async (req, res) => {
    try{
        const {id, email} = req.session.user;
        const file = req.file;
        await users.insertOne({
            "id": id,
            "email": email,
            "file": file
        });
        res.json({
            message: "Upload Successful"
        });
    }catch(err){
        console.error(err);
        res.status(500).json({
            message: "Server error"
        });
    }
});

app.get("/files", async (req, res)=>{
    try{
        const files = await users.find({}).toArray();
        res.json(files);
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "Unexpected Error Occured"
        })
    }
})

app.listen(3000, ()=>{
    console.log("Server running on port 3000");
});