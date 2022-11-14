const express = require("express")
const app = express()

app.get("/", (req, res) => res.send("Welcome!!!"))

app.listen(3333, () => console.log("Server is running"))