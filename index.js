const express = require("express");
const mongoose = require("mongoose")
const app = express();
const port = process.env.PORT || 5000;
mongoose.set('strictQuery', true)
require('dotenv').config()

// middleWare
app.use(express.json())


const moviesRouter = require('./routes/moviesRoutes')
app.use(moviesRouter)



const database = module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }

    try {

        mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.c5dej4c.mongodb.net/OyoBeauty?retryWrites=true&w=majority`, connectionParams)
        console.log('database connected successfully')

    } catch (error) {
        console.log(error)
    }
}
database()




app.get("/", async (req, res) => {
    res.send("OyeBeauty api is running")
})

app.listen(port, () => {
    console.log(`server is running on ${port}`)
})
