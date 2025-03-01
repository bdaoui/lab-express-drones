const express = require('express');
const router = express.Router();



// require the Drone model here
const Drone = require("../models/Drone.model.js")


router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then( result => {
      res.render("drones/list", {result}) }
      )
    .catch(error => "this is an error") 
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  return res.render("drones/create-form");

});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const newDrone = req.body;
  
  Drone
  .create(newDrone)
  .then( result =>{
    res.redirect("/drones");
  })
  .catch(error => "Error in Creation of New Drone")
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {id} = req.params;

  
  Drone.findById(id)
    .then(result =>{
      res.render("drones/update-form", {result})
    })
    .catch(error => "Id not found")
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const {id} = req.params;
  const  newDrone = req.body;


  // I worked so hard for this code, I cannot even believe I managed to find the solution. This is 2 am, I started working on it just after course.

  Drone.updateOne({_id:id}, {$set: {name: newDrone.name, propellers: newDrone.propellers, maxSpeed: newDrone.maxSpeed }})
    .then(result =>{
      res.render("drones/update-form", {result})
    })
    .then( result =>{
      res.redirect("/drones");
    })
    .catch(error =>  "this is an error in the updating operation")

});



router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const {id} = req.params;
  Drone.findByIdAndDelete(id)
  .then( result =>{
    res.redirect("/drones");
  })
  .catch(error =>  "this is an error in the deletion operation")
});

module.exports = router;
