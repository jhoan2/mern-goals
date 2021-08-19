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


export {
    listGoals,
}