const create = async (params, credentials, post) => {
    try {
      let response = await fetch('/api/posts/new/'+ params.userId, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + credentials.t
        },
        body: post
      })
      return await response.json()
    } catch(err) {
      console.log(err)
    }
  }
  
  const listNewsFeed = async (params, credentials, signal) => {
    try {
      let response = await fetch('/api/posts/feed/'+ params.userId, {
        method: 'GET',
        signal: signal,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + credentials.t
        }
      })    
      return await response.json()
    } catch(err) {
      console.log(err)
    }
  }
  
  const remove = async (params, credentials) => {
    try {
      let response = await fetch('/api/posts/' + params.postId, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + credentials.t
        }
      })
      return await response.json()
    } catch(err) {
      console.log(err)
    }
  }
  
  
  const like = async (params, credentials, postId) => {
    try {
      let response = await fetch('/api/posts/like/', {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + credentials.t
        },
        body: JSON.stringify({userId:params.userId, postId: postId})
      })
      return await response.json()
    } catch(err) {
      console.log(err)
    }
  }
  
  
  const unlike = async (params, credentials, postId) => {
    try {
      let response = await fetch('/api/posts/unlike/', {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + credentials.t
        },
        body: JSON.stringify({userId:params.userId, postId: postId})
      })
      return await response.json()
    } catch(err) {
      console.log(err)
    }
  }
  
  export {
      create,
      like,
      unlike, 
      remove,
      listNewsFeed
  }