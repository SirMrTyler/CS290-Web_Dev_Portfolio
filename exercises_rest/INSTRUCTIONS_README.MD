1. Purpose:
   - Implements a REST API the models workouts/exercises for users.
     1. Home Page
     2. Edit Exercise Page
     3. Create Exercise Page
   - Starter Code (provided to me by instructors):
     - exercises_rest.zip:
       - .env (Only MONGODB_CONNECT_STRING should be changed; otherwise no touchey)
       - exercises_controller.mjs (Used to send requests/get responses from the database)
       - exercises_model.mjs (Format data )
       - package.json (DO NOT CHANGE)
2. Rules:

   - Only use Express Functionality Discussed in Course.

     - Do not use any functionality of Express that hasn't been discussed in this course.
     - For example, No using Express Router() function in code.

   - Keep Model Code & Controller Code Seperate

     - Controller:
       - Cannot import mongoose package.
       - Must not directly call any Mongoose code.
       - Can only interact with the database by calling functions defined in model code.
     - Model:
       - Cannot import express package.
       - Cannot pass any Express obj's to functions in model.
       - Cannot export model class (by default, export Exercise) from model.

   - Use Vars in Provided .env file

     - PORT:
       - Port where Express server for REST API will receive HTTP requests.
       - Value must equal 3000
     - MONGODB_CONNECT_STRING: \*'mongodb+srv://sirmrtylerbusiness:dZnyao94pfDVTyY3@cluster0.pjjkrhu.mongodb.net/'\_
       - Code must use value of var to connect to MongoDB server.
       - Update value to connection string of MongoDB server I want to use.

   - Use ES Modules

     - REST API code ust use ES modules (cannot use Common JS modules).

   - Use Async/Await for Asynchronous Programming

     - Code must use async and await syntax for asynchronous programming. Cannot use .then() syntax.
     - Controller Route Handler functions:
       - Must be async.
       - Must wrap functions inside asyncHandler to prevent Express server crashes due to uncaught exceptions.
         - Review Link: https://canvas.oregonstate.edu/courses/1999527/pages/exploration-writing-asynchronous-code

   - Response Body Must Match Specification

     - Some success responses return JSON object, while GET /exercises returns a JSON array. Implementation must match type specifications.

   - Failure Messages in Res_body must match Specification
     - Specifications say there are just 2 distinct JSON obj's that can be returned in body in failure cases:
       - { "Error": "Not Found" }
       - { "Error": "Invalid Request" }
     - REST API implementations must return these obj's exactly as they are specified, and their case must match the specification.
