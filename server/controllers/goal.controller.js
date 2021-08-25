import Goal from '../models/goal.model'
import errorHandler from './../helpers/dbErrorHandler'

const create = async (req, res) => {
    const goal = new Goal(req.body)
    try {
        await goal.save()
        return res.status(200).json({
            message: 'Successfully created a Goal!'
        })
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const goalByID = async (req, res, next, id) => {
    try {
        let goal = await Goal.findById(id)
        if (!goal) {
            return res.status('400').json({
                error: 'No Goal Found'
            })
        }
        req.goal = goal 
        next()
    } catch (err) {
        return res.status(400).json({
            error: 'Could not retrieve goal'
        })
    }
}

const getGoals = async (req, res) => {
    try {
        let goals = await Goal.find()
        res.json(goals)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const remove = async (req, res) => {
    try {
        let goal = req.goal 
        let deletedGoal = await goal.remove()
        res.json(deletedGoal)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const addToDo = async (req, res) => {
    try {
        let result = await Goal.findByIdAndUpdate(req.goal._id, {$push: {toDo: req.body}, updated: Date.now()}, {new: true})
        res.json(result)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

//result of the findById
// {
//     completed: false,
//     _id: 6125a8186910626a04e0f7a6,
//     text: 'Goal 1',
//     created: 2021-08-25T02:16:56.552Z,
//     toDo: [
//       {
//         completed: false,
//         created: 2021-08-25T02:17:07.749Z,
//         _id: 6125a8236910626a04e0f7a7,
//         text: 'To Do'
//       }
//     ],
//     __v: 0
//   }

const dropToDo = async (req, res) => {
    try {
        let goal = await Goal.updateOne({_id: req.params.goalId}, {"$pull": { "toDo": {"_id": req.body.toDoId}}})
        res.json(goal)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

export default {
    create,
    goalByID,
    getGoals,
    remove,
    addToDo,
    dropToDo,
}