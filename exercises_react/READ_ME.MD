1. Purpose:
   - Implements a user interface in a React App with the following 3 pages:
     1. Home Page.
     2. Edit Exercise Page.
     3. Create Exercise Page.
   - These pages will be viewable to users, thus giving them the capability of interacting with the MongoDB server via the REST API I developed using Node.
   - Port: 5173
2. Starter Code: (Provided by instructors)
   - Zip File (exercises_react.zip):
     - 'src' folder: Contains all of the boilerplate code given by the instructors.
       - assets/react.svg: react logo
       - App.css:
       - App.jsx:
       - index.css:
       - main.jsx:
     - index.html:
     - package.json: (Do not change)
     - vite.config.js: (Do not change)
3. Created Components:
   1. Home Page:
      - Rendered when app starts up.
      - Displays data for all the exercises stored in MongoDB.
      - Page gets data by calling endpoint GET /exercises in the REST API.
      - Data must be displayed in HTML table.
        - Each row must display the 5 properties listed in data model (DATA_MODEL.MD). The ID model is not displayed.
        - Each row must include 2 icons from the React Icons library.
          - Icons Lib: https://react-icons.github.io/react-icons/
          - One to support deleting the row. Clicking icon immediately deletes the row by calling:
            - DELETE /exercises/:'underscore'id in REST API.
          - One to support updating the row. Clicking icon redirects to the Edit Exercise Page.
        - Implements React component for table, and another for the row. I was allowed to implement as many React components beyond these two as I like.
        - Home page must include a way for the user to go to the Create Exercise Page.
          - Present this functionality as I see fit. I chose to render a text link/icon at the top right of the page that says, "Create Exercise".
   2. Edit Exercise Page:
      - Page allows user to edit speciic exercise for which user clicked the edit icon.
      - Controls to edit the exercise must be pre-populated with the current or "existing" data for that exercise.
      - Implement button that:
        - Saved updated exercise by calling endpoint:
          - PUT /exercises/:'underscore'id in REST API.
            - Update successful (status code 200):
              - Shows alert to user with msg "Update Successful".
              - Redirects user back to home page.
            - Update unsuccessful (response not 200):
              - Show alert to user with msg "Update Failed".
              - Redirects user back to home page.
   3. Create Exercise Page:
      - Page allows user to add new exercise to DB.
      - Must provide iput controls for user to enter 5 require3d properties.
      - Must provide button that:
        - Saves new exercise by calling the endpoint:
          - POST /exercises in REST API.
            - POST Successful (Status code 201):
              - Show alert to user with msg "Exercise created".
              - Redirect to homepage.
              - POST Unsuccessful (Status code not 201):
                - Show alert to user with msg "Exercise Creation Failed"
                - Redirect user back to home page.
4. Technical Requirements:
   - Use Starter React App Provided:
     - Must use starter code provided by instructors. React app listens on port 5173.
     - Do not change package.json
   - Function-Based Components:
     - React compoenents must be function-based.
       - Not allowed to define class-based components.
   - Use React Functionality Discussed in Course:
     - Cannot use any React functionality not covered in course. For example, no frameworks like Next.js.
     - Cannot use React Redux.
     - Can use useContext hook. However, not required.
     - Must pre-populate the Edit Exercise page using either the "lifting up the state" technique or the useContext hook.
       - Edit page must not send an HTTP request to populate itself.
   - Use fetch API & Don't Use Axios
     - Must use Fetch API for sending requests to REST API.
     - Cannot use Axios or other library/package for this purpose.
   - Use .jsx Extension for Component Files
     - All files with code for components must have extension .jsx (not .js).
5. CSS:
   - Note: Specifying black, white, and Times New Roman font is not allowed.
   - Update and Add rules to existing App.css file (/src folder).
     - Global page design:
       - Add a 'body' rule that defines font-family, background-color, color, margin, and padding for app.
     - Table:
       - Add tr th, and tr td rules to update borders, color, and padding.
     - Form:
       - Add input, and button rules for font-family.
     - Note: Can add additional rules beyond required rules listed above.
6. Design Features:
   - Must use a <select> element, providing options for selecting value of units in Edit Exercise/Create Exercise pages.
   - Add semantic page layout tags in App.jsx file, at least:
     - <header> tag will include a heading level 1 <h1> tag specifying:
         - App Name
         - Paragraph <p> that describes it.
     - <footer> tahg will include:
        - Copyright statement:
            -  '© 2025 Tyler Klein'
     - These tags must who up on all 3 pages.
   - All 3 pages must have links to 'Home Page' and 'Create Exercise Page' using a React component named 'Navigation'.
     - Component 'Navigation' must use the <nav> tag and Link component from react-router-dom for links to 'Home' page and 'Create Exercise' page.
7. What to Turn In:
   - Rest API:
     - exercises_model.mjs, and exercises_controller.mjs
   - React App:
     - Zip file with development build.
       - When instructors start React app, server must listen on port 5173.
     - Zip file(s) must be named 'kleityle_react.zip'
     - Must include ALL code for my application, except the node_modules directory.
       - -3 points if zip includes node_modules directory.
     - NOTE: Grader will go to root of app, run npm install and then npm run dev to start/test React app.
