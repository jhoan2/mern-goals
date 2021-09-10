import HeatMap from '../models/heatmap.model'
import errorHandler from './../helpers/dbErrorHandler'
import moment from 'moment'

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

const addDate = async (req, res) => {
  const today = moment().startOf('day')
  try {
    const query = { 
      user: req.profile._id, 
      "data.date": {
        $gte: today.toDate(),
        $lte: moment(today).endOf('day').toDate()
      }
    }
    const updateDocument = {
      $inc: { "data.$.count": 1 }
    };
    let data = await HeatMap.find({$and: [
      {user: req.profile._id}, {"data.date": {$gte: today.toDate(), $lte: moment(today).endOf('day').toDate()}}
    ]})

    if (data.length === 0) {
      await HeatMap.updateOne({user: req.profile._id}, {"$push": {"data": {'count': 0}}})
    } else {
      await HeatMap.updateOne(query, updateDocument)
    }
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
    addDate  
}