import express from 'express'
import userCtrl from '../controllers/user.controller'
import postCtrl from '../controllers/post.controller'

const router = express.Router()

router.route('/api/posts/new/:userId')
    .post(postCtrl.create)

router.route('/api/posts/like')
    .put(postCtrl.like)
router.route('/api/posts/unlike')
    .put(postCtrl.unlike)

router.param('userId', userCtrl.userByID)
router.param('postId', postCtrl.postByID)

export default router
