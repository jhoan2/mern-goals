import HeatMap from '../models/heatmap.model'
import errorHandler from './../helpers/dbErrorHandler'

const create = async (req, res) => {
    const data = new HeatMap({data: {count: 0}})
    data.user = req.profile
    try {
      await data.save()
      return res.status(200).json({
        message: "Successfully entered data for heatmap"
      })
    } catch (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
  }


const getHeatMapData = async (req, res) => {
    try {
        let data = await HeatMap.find({user: req.profile._id}).populate('user', 'name _id')
        res.json(data)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

export default {
    create,
    getHeatMapData,    
}