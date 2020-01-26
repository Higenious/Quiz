const mongoose = require('mongoose');
mongoose.Promise = Promise;
const Schema = mongoose.Schema;





var quiz = new mongoose.Schema({
  u_id: { type: String, unique: true },
  title: { type: String },
  subject: { type: String },
  time_durtion : {type:Number},
  questions: [
    {
      id: String,
      questionType: Number,
      name: String,
      options: [{
        id: Number,
        name: String,
        questionId: String,
        isAnswer: Boolean
      }],
      questionType: [{
        id: Number,
        name: String,
        isActive: Boolean
      }]
    }
  ]
});



/**exporting modules */
module.exports.quiz = mongoose.model('quize', quiz);
