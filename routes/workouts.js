    const express = require('express')
    const {createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout} = require('../controllers/workoutController')
    const Workout = require('../models/workoutModel')
    const router = express.Router()

    //get all the workout
    router.get('/', getWorkouts)

    router.get('/:id', getWorkout)
    
    router.post('/', createWorkout )
   

    router.delete('/:id', deleteWorkout)

    router.patch('/:id', updateWorkout)



    module.exports = router;