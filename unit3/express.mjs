import express from "express";
import { datefunc, errorMiddleware } from "./middleware.mjs";
import { Logger } from "./logger.mjs"

const app = express();
const router = express.Router();
const logger = new Logger("overall");

router.use(datefunc);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/s", router);

app.get("/api/:v1/book", (req, res)=>{
    const version = req.params.v1;
    console.log(version);
    const {q, cat} = req.query;
    console.log(q, cat);
});

app.get("/err", (req, res)=> {
    throw new Error("Error route");
});

app.post("/getcurrency", (req, res)=>{
   const {amount, currency} = req.body;
   const fcurrency = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currency
   }).format(amount);
   res.status(200).json({
        "currency": fcurrency
   }); 
});

app.get("/logger", (req, res)=>{
    logger.log("Logger is working");
});

app.all(/.*/, (req, res)=>{
    const err = new Error("Page not found");
    err.status = 404;
    logger.error(err);
    res.status(404).send("404 - Page not found");
    // throw new Error("Route not found");
});

app.use(errorMiddleware);

app.listen(3000, () => {
    console.log("Server is running at port 3000");
});