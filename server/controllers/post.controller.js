import Post from '../models/post.model'
import errorHandler from './../helpers/dbErrorHandler'
import formidable from 'formidable'
import fs from 'fs'

const create = async (req, res) => {
    const user = new Post(req.body)
    try {
      await user.save()
      return res.status(200).json({
        message: "Successfully made a Post!"
      })
    } catch (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
  }

const postByID = async (req, res, next, id) => {
  try{
    let post = await Post.findById(id).populate('postedBy', '_id name').exec()
    if (!post)
      return res.status('400').json({
        error: "Post not found"
      })
    req.post = post
    next()
  }catch(err){
    return res.status('400').json({
      error: "Could not retrieve use post"
    })
  }
}

const photo = (req, res, next) => {
    res.set("Content-Type", req.post.photo.contentType)
    return res.send(req.post.photo.data)
}

const like = async (req, res) => {
  try{
    let result = await Post.findByIdAndUpdate(req.body.postId, {$push: {likes: req.body.userId}}, {new: true})
    res.json(result)
  }catch(err){
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
  }
}

const unlike = async (req, res) => {
  try{
    let result = await Post.findByIdAndUpdate(req.body.postId, {$pull: {likes: req.body.userId}}, {new: true})
    res.json(result)
  }catch(err){
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

const remove = async (req, res) => {
    let post = req.post
    try{
      let deletedPost = await post.remove()
      res.json(deletedPost)
    }catch(err){
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
  }

const listNewsFeed = async (req, res) => {
    let following = req.profile.following
    following.push(req.profile._id)
    try{
        let posts = await Post.find({postedBy: { $in : req.profile.following } })
                            .populate('comments.postedBy', '_id name')
                            .populate('postedBy', '_id name')
                            .sort('-created')
                            .exec()
        res.json(posts)
    }catch(err){
        return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
        })
    }
}

const isPoster = (req, res, next) => {
    let isPoster = req.post && req.auth && req.post.postedBy._id == req.auth._id
    if(!isPoster){
        return res.status('403').json({
        error: "User is not authorized"
        })
    }
    next()
}

export default {
    create, 
    postByID,
    like,
    unlike,
    isPoster,
    listNewsFeed,
    remove,
    photo

}