const express = require("express");
const mongoose = require("mongoose")
const app = express();

const port = process.env.PORT || 5000;

app.get("/", async (req, res) => {
    res.send("OyeBeauty api is running")
})

app.listen(port, () => {
    console.log(`server is running on ${port}`)
})
