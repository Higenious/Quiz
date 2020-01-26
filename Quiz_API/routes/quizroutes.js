const express          =  require('express');
const router           =  express.Router();
const QuizController = require('../controller/quizController');



/** routes */
router.post('/create', QuizController.createQuiz);
router.get('/quize/:u_id', QuizController.getQuiz)


/** export routes */
module.exports =  router;