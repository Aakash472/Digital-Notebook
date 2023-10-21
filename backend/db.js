const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017');

// const mongoURI = "mongodb://localhost:27017"

// const connectToMongo = () => {
//     mongoose.connect(mongoURI, () => {
//         console.log("Connected to Mongo Successfully");
//     })
// }

module.exports = mongoose;