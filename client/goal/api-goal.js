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
                'Accept' : 'application/json',
            },
            body: goal
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

export {
    listGoals,
    create,
}