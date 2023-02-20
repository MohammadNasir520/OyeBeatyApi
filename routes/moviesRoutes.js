
const express = require("express");
const { saveMovies, getAllMovies, getSinglesMovie } = require("../controllers/moviesController");
const router = express.Router()
const movies = require('../models/moviesModel')

// post movies
router.post("/add-movie", saveMovies);

// get all movies
router.get('/get-all', getAllMovies);

// get single movie by query parameter

router.get('/get-single', getSinglesMovie);

// get  paginated movies
router.get('/get-paginated', async (req, res) => {
    const page = Number(req.query.page) || 1;
    const size = Number(req.query.size) || 2;
    const skip = (page - 1) * size;

    const movie = await movies.find().skip(skip).limit(size);
    res.send({
        page,
        size,
        movie
    })
})


module.exports = router;