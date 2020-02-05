# Quiz Application 



 ## Technology 
  - Node js 
  - Mongo Db (No Sql Database)
  - Angular 8


### Installation
   - Navigate to Quiz_API FOlder for APIs.
       * follow the instructions
   - Navigate to QuizWebApp FOlder for web app
      * follow the instructions
          		 

### Quiz API

```sh
$ Donwlaod zip or clone project
$ Navigate to Folder
$ npm install
$ npm start
$ server will start running on port 8000
```

### API 
   
 


  -	API   for   Creating  Quiz   
	    HTTP Method :  POST 
        `http://localhost:8000/create`
- ```sh
 

     body : JSON
     
          
            {
             "title": "JavaScript Quiz",
             "subject": "JavaScript Quiz (Basic Multiple Choice Questions for JavaScript Developers)",
             "time_durtion" : 3600,
            "questions": [
                {
                    "id": 1010,
                    "name": "Which HTML tag do we use to put the JavaScript?",
                    "questionTypeId": 1,
                    "options": [
                        {
                            "id": 1055,
                            "questionId": 1010,
                            "name": "<javascript>",
                            "isAnswer": false
                        },
                        {
                            "id": 1056,
                            "questionId": 1010,
                            "name": "<script>",
                            "isAnswer": true
                        },
                        {
                            "id": 1057,
                            "questionId": 1010,
                            "name": "<js>",
                            "isAnswer": false
                        },
                        {
                            "id": 1058,
                            "questionId": 1010,
                            "name": "None of the above",
                            "isAnswer": false
                        }
                    ],
                    "questionType": {
                        "id": 1,
                        "name": "Multiple Choice",
                        "isActive": true
                    }
                        }
                 ]
            }
         
       
  


-	API  for  GETTING  Quiz   
    HTTP Method :  GET 
  ` http://localhost:8000/quize/k5uphk3f`
