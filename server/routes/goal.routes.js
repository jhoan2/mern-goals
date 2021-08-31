import express from 'express'
import userCtrl from '../controllers/user.controller'
import goalCtrl from '../controllers/goal.controller'
import authCtrl from '../controllers/auth.controller'

const router = express.Router()

router.route('/api/goal/:userId')
    .get(authCtrl.requireSignin, authCtrl.hasAuthorization, goalCtrl.getGoals)
    .post(authCtrl.requireSignin, authCtrl.hasAuthorization, goalCtrl.create)

router.route('/api/goal/:goalId')
    .delete(authCtrl.requireSignin, goalCtrl.remove)

router.route('/api/goal/:goalId/todo')
    .put(authCtrl.requireSignin, goalCtrl.addToDo)

router.route('/api/goal/:goalId/undo')
    .put(goalCtrl.dropToDo)

router.param('userId', userCtrl.userByID)
router.param('goalId', goalCtrl.goalByID)

export default router