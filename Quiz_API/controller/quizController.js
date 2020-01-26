const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'debug';
const quizModel = require('../model/quizModel').quiz;



/** Create Quize */
async function createQuiz(req, res){
    const reqBody = req.body;
    logger.info('body', reqBody);
    let u_id = (new Date()).getTime().toString(36);   // created u_id by timestamp
    req.body.u_id=  u_id ;
    logger.info('later', req.body.u_id);
    const result = await quizModel(reqBody).save(); 
    logger.debug('res-->', result);
    res.status(200).send(result);
}



/** Get Quiz by u_id */
async function getQuiz(req, res){
    logger.info('Get quiz by Id', req.params.u_id);
    id = req.params.u_id;
    logger.info('id', id);
    const result = await quizModel.find({u_id : id});
    if(result.length == 0){
        res.status(404).send('Please Enter correct Id of Quiz !');
    }
    else {
        res.status(200).send(result);  
    }
}



module.exports.createQuiz = createQuiz;
module.exports.getQuiz =getQuiz;