// Iteration #1

const mongoose = require("mongoose"); // require mongoose 
const {Schema } = mongoose; // deconstructure both schema and module


// set new Schema

const droneSchema = new Schema({
    name: {type: String},
    propellers: {type: String},
    maxSpeed: {type: Number}
});


// set new model

const Drone = mongoose.model("Drone", droneSchema);

// export the newly minted model

module.exports = Drone;
