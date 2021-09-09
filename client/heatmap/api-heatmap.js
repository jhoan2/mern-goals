const getHeatMapData = async (params, credentials, signal) => {
    try {
      let response = await fetch('/api/heatmap/'+params.userId, {
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

const create = async(params) => {
    try {
        let response = await fetch('/api/heatmap/'+params.userId, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

const addDate = async (params, credentials) => {
    try {
      let response = await fetch('/api/heatmap/'+params.userId, {
        method: 'PUT',
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

  export {
    getHeatMapData,
    create,
    addDate
}