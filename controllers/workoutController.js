const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

//get all workout
const getWorkouts = async (req, res) => {
    const workout = await Workout.find({}).sort({createdAt: -1})

    res.status(200).json(workout)
}


//get single workout
const getWorkout = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            error: "No Such Workout"
        })
    }

    const workout = await Workout.findById(id)

    if(!workout){
        res.status(404).json({
            error : "No Such Workout"
        })
    }
    else{
        res.status(200).json(workout)
    }
    
}

//create new workout
const createWorkout = async (req, res)=> {
    const {title, load, reps} = req.body

    try{
        const workout = await Workout.create({
            title, load, reps
        })

        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error: error.message})
    }

}

//delete a workout
const deleteWorkout = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            error: "No Such Workout"
        })
    }

    const workout = await Workout.findOneAndDelete({_id : id})

    if(!workout){
        res.status(404).json({
            error : "No Such Workout"
        })
    }
    else{
        res.status(200).json(workout)
    }
    
}

//update workout
const updateWorkout = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            error: "No Such Workout"
        })
    }

    const workout = await Workout.findOneAndUpdate({_id : id}, {
        ...req.body
    })

    if(!workout){
        res.status(404).json({
            error : "No Such Workout"
        })
    }
    else{
        res.status(200).json(workout)
    }
    
}


module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout

}