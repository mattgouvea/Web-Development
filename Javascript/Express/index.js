import express from "express"

var app = new express()

app.listen(3000, () => {
    console.log("App is listening on port 3000")
})