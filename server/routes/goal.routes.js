import express from 'express'
import userCtrl from '../controllers/user.controller'
import goalCtrl from '../controllers/goal.controller'

const router = express.Router()

router.route('/api/goal')
    .get(goalCtrl.getGoals)
    .post(goalCtrl.create)

router.route('/api/goal/:goalId')
    .delete(goalCtrl.remove)


router.param('userId', userCtrl.userByID)
router.param('goalId', goalCtrl.goalByID)

export default router