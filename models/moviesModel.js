const mongoose = require('mongoose');

const moviesSchema = new mongoose.Schema({
    movieName: {
        type: String,
    },
    actor: {
        type: String
    },
    runTimeMinute: {
        type: Number
    }
})
module.exports = mongoose.model('movies', moviesSchema)