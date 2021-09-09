import express from 'express'
import userCtrl from '../controllers/user.controller'
import heatmapCtrl from '../controllers/heatmap.controller'
import authCtrl from '../controllers/auth.controller'

const router = express.Router()

router.route('/api/heatmap/:userId')
    .post(heatmapCtrl.create)
    .get(heatmapCtrl.getHeatMapData)
    .put(heatmapCtrl.addDate)

router.param('userId', userCtrl.userByID)

export default router
