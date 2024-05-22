
# API Workout

API Workout provides a structured way to access and manage workout information. It gives you a response based on workout data, such as exercise names, number of repetitions, load, and timestamps for when the workout was created or updated. This allows apps and services to easily share and track fitness routines.

## Features


- Get all workouts (GET): https://api-workout.vercel.app/api/workouts

- Get workout by ID (GET): https://api-workout.vercel.app/api/workouts/{id}

- Update workout (PATCH): https://api-workout.vercel.app/api/workouts/{id}

- Delete workout by ID (DELETE): https://api-workout.vercel.app/api/workouts/{id}

- Add workout (POST): https://api-workout.vercel.app/api/workouts

Updating and adding a workout require a request body in the following format:

    {
        "title": STRING,
        "load": NUMBER,
        "reps": NUMBER
    }



## Feedback

If you have any feedback, please reach out to me at reynard.satria@gmail.com

