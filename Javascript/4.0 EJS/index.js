import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const day = new Date()
    var today = day.getDay()
    if (today == 0 || today == 6) {
        res.render("index.ejs", {dayType: "the weekend", advice: "it's time to have fun"})
    } else {
        res.render("index.ejs", {dayType: "a weekday", advice: "it's time to work hard"})
    }
});

app.listen(port);
