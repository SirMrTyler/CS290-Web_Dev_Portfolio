1.  Requirements:
    1.  Cannot import mongoose package into controller code.
        - Controller must not directly call any Mongoose code.
          - May call functions from model code.
    2.  Endpoint Requirements:
        1. Create POST /exercises "Create Exercise"
           - Request:
             - Body: A JSON Object
             - No Path Params
           - Request Validation:
             - Assume req body is JSON, but validate req body.
             - If req body valid:
               - create new document -> send "Success" response
             - If req Body invalid:
               - send "Failure" response
           - Body:
             1. Requirements:
                - Any prop missing -> req is invalid
             2. Properties:
                1. 'name'
                   - TYPE: string
                     - Must contain at least 1 character (!null && !empty)
                2. 'reps'
                   - TYPE: integer
                     - Must be Greater than Zero
                3. 'weight'
                   - TYPE: integer
                     - Must be Greater than Zero
                4. 'unit'
                   - TYPE: string
                     - Must be Equal to 'kgs' || 'lbs'
                5. 'date'
                   - TYPE: string
                     - Must be in format MM-DD-YY
           - Response:
             - Success:
               - New Doc created
               - Send JSON obj with all properties including unique ID from MongoDB
               - Content-type: application/json
               - Status Code: 201.
             - Failure:
               - Body: A JSON object { Error: "Invalid Request"}
               - Content-type: application/json
               - Status Code: 400
        2. Create GET /exercises "GET ALL"
           - Request:
             - No path param
             - No request body (No validation required)
           - Response:
             - Body: JSON array containing entire collection.
               - If collection is empty: response is an empty array
               - Each doc in collection must be JSON object with all properties of doc (including ID).
             - Content-type: application/json
             - Status code: 200
        3. Create GET /exercises/:\_id "GET by ID"
           - Request:
             - path parameter contains ID of document.
             - Body: None (No validation)
           - Response:
             - Success:
               - Body: JSON object (!array) with all props of document (including ID).
               - Content-type: application/json
               - Status code 200.
             - Failure:
               - Body: JSON object { Error: "Not Found" }
               - Content-type: application/json
               - Status code 404
        4. Create PUT /exercises/:\_id "UPDATE by ID"
           - Request:
             - Req Body: JSON obj
             - Path Param: ID of a document
           - Request Validation: _Do This first_
             - Assume req body is JSON obj.
               - If req body valid (I.E. Document exists):
                 - Success
               - If req Body invalid:
                 - send "Failure" response
           - Response:
             - Success: req_body is (!empty && !null):
               - Update document where documentId == ID
               - Send "Success" response
                 - JSON obj with all props of updated doc including ID
               - Content-type: application/json
               - Status Code: 200.
             - Failure (invalid): req_body is invalid
               - Response:
                 - Body: JSON obj { Error: "Invalid request" }
                 - Content-type: application/json.
                 - Status Code: 400.
             - Failure (notFound): No doc exists with specified ID
               - Response:
                 - Body: JSON obj { Error: "Not Found" }
                 - Content-type: application/json
                 - Status Code: 404.
        5. Create DELETE /exercises/:\_id "DELETE by ID"
           - Request:
             - Path param: ID of document
             - Req Body: None (No validation required)
           - Response:
             - Success: If doc exists -> Delete doc and send
               - Body: No response body
               - Content-type: Not applicable
               - Status code: 204
             - Failure: No document exists @ID == ID
               - Body: JSON obj { Error: "Not Found" }
               - Content-type: application/json
               - Status Code: 404
2.  Purpose:
    1. Uses connection string from env var to establish connection with MongoDB database.
    2. Handles HTTP CRUD requests to the server using express
    - POST Example:
      - // Commented Function Header
        - @route POST /users
        - @description Creates a new user with the provided data.
        - @requestBody
        - {
        - "name": "Required string",
        - "age": Number,
        - "email": "Required string",
        - "phoneNumber": Optional number (no leading 0s)
        - }
        - @response
        - 201: JSON user with \_id and \_\_v
          \*/
      - // HTTP post call invokation
        app.post('/users', asyncHandler(async (req, res) => {
        const { name, age, email, phoneNumber } = req.body;
        const user = await users.createUser(name, age, email, phoneNumber);
        res.status(201).json(user);
        }));
