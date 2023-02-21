
const { ObjectId } = require('mongodb');
const movie = require('../models/moviesModel')


// post movies
exports.saveMovies = async (req, res) => {


    if (!req.body.movieName || req.body.movieName === "") {
        return res.send({ message: "movieName is required" })
    }

    const movies = new movie(req.body);

    const result = await movies.save()


    res.send({ result, message: "movie added successfully" })
    console.log(result)

}


// get all movies
exports.getAllMovies = async (req, res) => {
    const movies = await movie.find()

    if (!movies) {
        return res.status(404).send({ message: "no movie found" })
    }
    res.send(movies)
}


// get a single movies by its id
exports.getSinglesMovie = async (req, res) => {
    const id = req.query.id


    const movies = await movie.findById(id)

    if (movies) {
        res.send(movies)

    }

}


//  get paginated api.
exports.getPaginated = async (req, res) => {
    const page = Number(req.query.page) || 1;
    const size = Number(req.query.size) || 2;
    const skip = (page - 1) * size;

    const movies = await movie.find().skip(skip).limit(size);
    if (!movies) {
        return res.status(404).send({ message: "no movie found" })
    }
    res.send({
        page,
        size,
        movies
    })
}