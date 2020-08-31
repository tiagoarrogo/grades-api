import mongoose from 'mongoose';
const studentSchema = mongoose.Schema({
  name :{
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  type:{
    type: String,
    required: true
  },
  value:{
    type: Number,
    required: true
  },
  lastModified: {
    type: Date,
    default: Date.now
  }

});

const studentModel = mongoose.model('grade', studentSchema, 'grade');

export {studentModel};