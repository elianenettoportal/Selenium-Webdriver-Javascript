1. Create a NPM project
   npm init
2. Install Mocha
   npm install mocha
3. Install Selenium Webdriver
   npm install selenium-webdriver
4. Install Gooble Chome Driver
   npm install chromedriver
5. Install Dot Env
   npm i dotenv
6. Edit Package Manager
   Add a script to run selenium test
   `"selenium": "mocha --timeout 500000 index.js"`
   Add a basci test
   `"test": "mocha --timeout 500000"`
   Add the type execution model
   `"type":"module"`
7. Create a file to manage environment variables .env
8. Create the .gitignore file and add node-models and .env
9. Create test folder in the root folder to keep all tests
10. Create Page folder to manager the scripts that will test the software pages
11. Create a Utils folder to keep any util script needed
12. Create the Project Object Model
    a) Create the Base Page Class that will instanciate driver globaly and manage the driver executions. 'basePage.js'
    b) Create the Login Page Class that extends the Base Page
    c) Implement script in the loginpage-test

To run local tests
npm test

13. Install Mocha Reporter
    npm install --save-dev mochawesome
    npx mocha --test --reporter mochawesome
