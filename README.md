# PERSON API DOCUMENTATION

## INTRODUCTION

 This PERSON API provides endpoints for creating, retrieving, updating, and deleting person records. 
 It is designed to be user-friendly and can be integrated into various applications that require basic person management functionality.

## API FEATURES
The Person API offers the following features:
  Create a Person:
  
          Create a new person record with a name.

Retrieve Persons:

          Retrieve the record of the person stored in the database using their unique ID.

Update Person Information:

          Update a person's record by providing their unique ID.

Delete Person:

        Delete a person's record by specifying their unique ID.

## PREREQUISITES
Before you start using the Person API, ensure you have the following:

  Node.js and npm installed on your system.
  MongoDB installed and running (if you are using MongoDB as your database).
  Basic knowledge of RESTful API concepts.

## GETTING STARTED
To begin using the Person API, follow these steps:

1. Clone the GitHub repository: git clone https://github.com/Kmart002/hng-track2
2. cd into hng-track2 folder if you used a command line to clone.
3. Install project dependencies using npm install.
4. Navigate to the server.js file.
5. Install and Import your mongodb to the server.js file: 
            require('dotenv').config()
            const express = require('express');
            const app = express();
            const port = process.env.PORT || 3000;
            
            const mongoose = require('mongoose');
            mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
            
            const db = mongoose.connection
            db.on('error', (error)=> console.error(error))
            db.once('open', ()=> console.log('Connected to database'))
            
            app.use(express.json())
            
            const usersRouter = require('./routes/persons')
             app.use('/api', usersRouter)
            
            // app.use('/api', usersRouter)
            app.listen(port,() =>console.log('server is running') )

6. Start the server using: npm server.js

## API ENDPOINTS
### Create a Person

HTTP Method: POST
Endpoint: https://hng-track2.onrender.com/api
Description: Create a new person with a name property.
Request Body:
      {
          "name": "Patrick Collins"
        }
Response:
    Status Code: 201
    Body: 
              {
                    "name":"Patrick Collins",
                  "_id":"650439c88399fe65e3da7c0a"
              }
 ### Retrieve Person
 
 HTTP Method: GET
  Endpoint: https://hng-track2.onrender.com/api/:userId
  Description: Retrieve the record of person stored in the database.
Response:
Status Code: 201
Body: 
    Patrick Collins
    
### Update Person Information

HTTP Method: PUT
Endpoint:  https://hng-track2.onrender.com/api/:userId
Description: Update a person's name by providing their unique ID.
Request Body:
        {
            "newname": "Tope Alabi"
        }
Response:
        {
          "_id": "650438ec8399fe65e3da7c07",
          "name": "Tope Alabi"
          }
## Delete Person

HTTP Method: DELETE
Endpoint: https://hng-track2.onrender.com/api/:userId
Description: Delete a person's record by specifying their unique ID.
Response:
Status Code: 201
Body: 
    {
      "message": "Deleted Successfully"
      }

## KNOWN LIMITATIONS AND ASSUMPTIONS
  This API uses mongoDB atlas for demonstration purposes.
  Input validation is handled by simple IF statements. It is important to use more robust validation and error handling in a production application.
  No userAuth of any kind. Ensure secure access to your API in a real-world scenario.
  This documentation assumes that the developer is well acquainted with MongoDB/Mongoose, NodeJs and Express

## CONCLUSION
The Person API simplifies the process of managing person records within your application.
Whether you're building a personal information management system, a contact list, or any other application that requires person-related data, 
the Person API can help you get started quickly.
