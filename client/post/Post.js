import React, { useState } from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import {makeStyles} from '@material-ui/core/styles'
import auth from '../auth/auth-helper'
import IconButton from '@material-ui/core/IconButton'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import {remove, like, unlike} from './api-post.js'

const useStyles = makeStyles(theme => ({
    card: {
      maxWidth:600,
      margin: 'auto',
      marginBottom: theme.spacing(3),
      backgroundColor: 'rgba(0, 0, 0, 0.06)'
    },
    cardContent: {
      backgroundColor: 'white',
      padding: `${theme.spacing(2)}px 0px`
    },
    cardHeader: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1)
    },
    text: {
      margin: theme.spacing(2)
    },
    photo: {
      textAlign: 'center',
      backgroundColor: '#f2f5f4',
      padding:theme.spacing(1)
    },
    media: {
      height: 200
    },
    button: {
     margin: theme.spacing(1),
    }
  }))

  
export default function Post({post}) {
    const classes = useStyles()
    const { created, likes, photo, text, postedBy, _id } = post
    const jwt = auth.isAuthenticated()
    const checkLike = (likes) => {
        let match = likes.indexOf(jwt.user._id) !== -1
        return match
    }
    const [values, setValues] = useState({
        like: checkLike(likes),
        likes: likes.length,
    })
    const clickLike = () => {
        let callApi = values.like ? unlike : like
        callApi({
          userId: jwt.user._id
        }, {
          t: jwt.token
        }, _id).then((data) => {
          if (data.error) {
            console.log(data.error)
          } else {
            setValues({...values, like: !values.like, likes: data.likes.length})
          }
        })
    }
    return (
        <Card className={classes.card}>
        <CardHeader
            avatar={
              <Avatar src={'/api/users/photo/'+postedBy._id}/>
            }
            title={postedBy.name}
            subheader={(new Date(created)).toDateString()}
            className={classes.cardHeader}
          />
        <CardContent className={classes.cardContent}>
          <Typography component="p" className={classes.text} >
            {text}
          </Typography>
          {photo &&
            (<div className={classes.photo}>
              <img
                className={classes.media}
                src={'/api/posts/photo/'+_id}
                />
            </div>)}
        </CardContent>
        <CardActions>
          { values.like
            ? <IconButton onClick={clickLike} aria-label="Like" color="secondary">
                <FavoriteIcon />
              </IconButton>
            : <IconButton onClick={clickLike} aria-label="Unlike" color="secondary">
                <FavoriteBorderIcon />
              </IconButton> } <span>{likes.length}</span>
        </CardActions>
      </Card>
    )
}
