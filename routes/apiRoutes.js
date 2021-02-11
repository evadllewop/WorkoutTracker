const Workout = require("../models/workout.js");

module.exports = function (app) {

    app.get("/api/workouts", (req, res) => {
        Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    })

    app.get("/api/workouts/range", (req, res) => {
        Workout.find({ day: { $gte: res.start, $lte: res.end } })
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    })

    app.post("/api/workouts", (req, res) => {
        Workout.create(req.body)
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    })

    app.put("/api/workouts/:id", (req, res) => {
        Workout.findByIdAndUpdate({ _id: req.params.id },
            { $push: { exercises: req.body } })
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    })
};