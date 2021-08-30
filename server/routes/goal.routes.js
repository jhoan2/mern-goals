import express from 'express'
import userCtrl from '../controllers/user.controller'
import goalCtrl from '../controllers/goal.controller'
import authCtrl from '../controllers/auth.controller'

const router = express.Router()

router.route('/api/goal/:userId')
    .get(goalCtrl.getGoals)
    .post(goalCtrl.create)

router.route('/api/goal/:goalId')
    .delete(goalCtrl.remove)

router.route('/api/goal/:goalId/todo')
    .put(goalCtrl.addToDo)

router.route('/api/goal/:goalId/undo')
    .put(goalCtrl.dropToDo)

router.param('userId', userCtrl.userByID)
router.param('goalId', goalCtrl.goalByID)

export default router