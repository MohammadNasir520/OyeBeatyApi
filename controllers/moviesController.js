
const movies = require('../models/moviesModel')

exports.saveMovies = async (req, res) => {
    const movie = new movies(req.body);

    const result = await movie.save()

    res.send(result)
    console.log(result)

}



exports.getAllMovies = async (req, res) => {
    const movie = await movies.find()
    res.send(movie)
}

exports.getSinglesMovie = async (req, res) => {
    const id = req.query.id
    const movie = await movies.findById(id)
    res.send(movie)
    console.log(id)
}