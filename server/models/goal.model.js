import mongoose from 'mongoose'

const ToDoSchema = new mongoose.Schema({
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
    }
})

const ToDo = mongoose.model('ToDo', ToDoSchema)

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
  toDo: [ToDoSchema]
})

export default mongoose.model('Goal', GoalSchema)
