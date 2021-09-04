import express from 'express'
import userCtrl from '../controllers/user.controller'
import postCtrl from '../controllers/post.controller'
import authCtrl from '../controllers/auth.controller'

const router = express.Router()

router.route('/api/posts/new/:userId')
    .post(postCtrl.create)

router.route('/api/posts/like')
    .put(postCtrl.like)
router.route('/api/posts/unlike')
    .put(postCtrl.unlike)

router.route('/api/posts/photo/:postId')
  .get(postCtrl.photo)

router.route('/api/posts/feed/:userId')
    .get(authCtrl.requireSignin, postCtrl.listNewsFeed)

router.param('userId', userCtrl.userByID)
router.param('postId', postCtrl.postByID)

export default router
