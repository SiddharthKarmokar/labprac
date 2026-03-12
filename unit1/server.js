import express from "express"

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("ryan"));

app.post("/api/hello", (req, res)=>{
    res.json({
        message: "Hello from Express!"
    });
});

app.post("/login", (req, res)=>{
   const {email, password} = req.body;
   console.log(email, password);
   res.json({
        message: "Sign In Complete"
   }) 
});


app.post("/register", (req, res)=>{
   const {email, password, confirmPassword} = req.body;
   console.log(req.body);
   if(password !== confirmPassword){
        res.json({
            message: "Passwords must be same"
        })
   }
   res.json({
        message: "Sign Up Complete"
   }) 
});

app.post("/reset", (req, res)=>{
   const {email} = req.body;
   console.log(req.body);
   res.json({
        message: "Reset Complete"
   }) 
});


app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});