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
        let goal = await Goal.findById(id).populate('toDo', '_id').exec()
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



export default {
    create,
    goalByID,
    getGoals,
    remove,
}