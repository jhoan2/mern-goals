import mongoose from 'mongoose'

const GoalSchema = new mongoose.Schema({
  text: {
    type: String,
    required: 'Text is required',
    maxLength: [15, 'Max of 15 characters.']
  },
  postedBy: {type: mongoose.Schema.ObjectId, ref: 'User'},
  created: {
    type: Date,
    default: Date.now
  },
  completed: {
    type: Boolean,
    default: false
  },
  toDo: [{
      text: {
        type: String,
    },
    created: {
        type: Date,
        default: Date.now
    },
    completed: {
      type: Boolean,
      default: false
    },
  }],
})

export default mongoose.model('Goal', GoalSchema)
 