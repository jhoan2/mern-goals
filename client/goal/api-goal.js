const listGoals = async (signal) => {
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

export {
    listGoals,
    create,
    remove,
}