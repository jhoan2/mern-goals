const listGoals = async (params, credentials, signal) => {
    try {
      let response = await fetch('/api/goal/', {
        method: 'GET',
        signal: signal
      })
      return await response.json()
    } catch(err) {
      console.log(err)
    }
  }

const create = async (goal) => {
    try {
        let response = await fetch('/api/goal/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(goal)
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

const remove = async (params) => {
    try {
      let response = await fetch('/api/goal/' + params.goalId, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
        }
      })
      return await response.json()
    } catch(err) {
      console.log(err)
    }
  }

  const addToDo = async (params,toDo) => {
    try {
        let response = await fetch('/api/goal/'+params.goalId+'/todo', {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
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