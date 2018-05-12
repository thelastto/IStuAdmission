const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
  tNumber:{
    type:String,
    unique: true,
    require: true // 不可为空约束
  },
  name: {
    type: String,
    require: true // 不可为空约束
  },
  professionalTitle: {
    type: String,
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  adress:{
      type:String,
  },
  picture: {
    type: String,
  },

  notes:{
    type:String
  },

});


module.exports = mongoose.model('Teacher', TeacherSchema);
