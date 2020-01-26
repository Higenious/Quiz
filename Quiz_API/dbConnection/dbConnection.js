const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'debug';
const url ='mongodb://127.0.0.1:27017/Quiz';
//const url = 'mongodb://chetan:a123456.mlab.com:63988/user_api';
mongoose.connect(url,{ useNewUrlParser: true , useUnifiedTopology: true }  , function(err, result){
    if(err){
        logger.error(err);
    }
    logger.info('successfully conneted to database!');
});

