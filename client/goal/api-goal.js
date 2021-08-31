const listGoals = async (params, credentials, signal) => {
    try {
      let response = await fetch('/api/goal/'+params.userId, {
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

const create = async (params, credentials, goal) => {
    try {
        let response = await fetch('/api/goal/'+params.userId, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json', 
                'Authorization': 'Bearer ' + credentials.t
            },
            body: JSON.stringify(goal)
        })
        return response.json()
    } catch (err) {
        console.log(err)
    }
}

const remove = async (params, credentials) => {
    try {
      let response = await fetch('/api/goal/' + params.goalId, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json', 
          'Authorization': 'Bearer ' + credentials.t
        }
      })
      return await response.json()
    } catch(err) {
      console.log(err)
    }
  }

  const addToDo = async (params, credentials, toDo) => {
    try {
        let response = await fetch('/api/goal/'+params.goalId+'/todo', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + credentials.t
            },
            body: JSON.stringify(toDo)
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

const dropToDo = async (params, id) => {
    try {
        let response = await fetch('/api/goal/'+params.goalId+'/undo', {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(id)
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}
export {
    listGoals,
    create,
    remove,
    addToDo,
    dropToDo,
}