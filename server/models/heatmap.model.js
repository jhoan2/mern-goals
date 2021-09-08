import mongoose from 'mongoose'

const HeatMapSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.ObjectId, ref: 'User'},
    data: [{
        date: { 
            type: Date,
            default: Date.now
        },
        count: { 
            type: Number,
            default: 0
         },
    }]
})
export default mongoose.model('HeatMap', HeatMapSchema)