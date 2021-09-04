import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import {remove, like, unlike} from './api-post.js'

export default function Post({post}) {
    console.log(post)
    const { created, likes, photo, text, postedBy, _id } = post
    const clickLike = () => {
        console.log('like')
    }
    return (
        <Card>
        <CardHeader
            avatar={
              <Avatar src={'/api/users/photo/'+postedBy._id}/>
            }
            title={postedBy.name}
            subheader={(new Date(created)).toDateString()}
          />
        <CardContent>
          <Typography component="p">
            {text}
          </Typography>
          {photo &&
            (<div>
              <img
                src={'/api/posts/photo/'+_id}
                />
            </div>)}
        </CardContent>
        <CardActions>
          {/* { values.like
            ? <IconButton onClick={clickLike} aria-label="Like" color="secondary">
                <FavoriteIcon />
              </IconButton>
            : <IconButton onClick={clickLike} aria-label="Unlike" color="secondary">
                <FavoriteBorderIcon />
              </IconButton> } <span>{likes.length}</span> */}
        </CardActions>
      </Card>
    )
}
