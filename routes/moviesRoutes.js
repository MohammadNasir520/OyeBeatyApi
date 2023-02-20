
const express = require("express");
const { saveMovies, getAllMovies, getSinglesMovie } = require("../controllers/moviesController");
const router = express.Router()
const movies = require('../models/moviesModel')

// post movies
router.post("/add-movie", saveMovies);

// get all movies
router.get('/get-all', getAllMovies);

// get single movie by query parameter

router.get('/get-single', getSinglesMovie)



module.exports = router;