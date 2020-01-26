const express = require('express');
const bodyParser = require('body-parser');
const port = 8000;
const app = express();
const cors = require('cors');
const nodemon = require('nodemon');
const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'debug';
const db= require('./dbConnection/dbConnection');
const quizRoutes = require('./routes/quizroutes');


// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({  extended: true}));
app.use(bodyParser.json());
app.use(cors());


// import all routes
app.all('*', quizRoutes);

/** app listen  */
app.listen(port,()=>{
  logger.info(`server started successfully on  ${port}  port `);
})  