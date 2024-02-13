**Install Node.js and npm**

First step, make sure node.js is installed to 20.11.0 LTS (https://nodejs.org/en)

if npm isn't installed, install with 'npm install'

Check versions of node js and npm

`node -v`
 - should be v20.11.0

`npm -v`
 - should be 10.4.0

After these are installed and updated, navigate to the /complete/src/main/frontend folder

Run `npm start`

A separate browser window should appear with the REACT logo.
You can edit the /frontend/src/App.js file to change the frontend and it updates live to the site whenever you save    



**To run with Springboot:**

Navigate to the /complete/ director

Run "gradlew build"

Navigate to the "/complete/build/libs"

Then using the name of a SNAPSHOT.jar file (not the PLAIN one), run it with java

java -jar spring-boot-0.0.1-SNAPSHOT.jar

Go to http://localhost:8080/

Change the url to http://localhost:8080/index.html to see the HTML file generated with REACT


Source: https://github.com/ekim197711/springboot-reactjs-gradle/blob/master/build.gradle


**!! LINTER ISSUE:**

There is a plugin called eslint that has consistent issues when trying to build this program, so I removed the following code from /complete/src/main/frontend/package.json to allow it to build. Otherwise, the code can be inserted as follows:

There is an issue with the 'eslint' Linter in the program, so run 'npm install eslint-plugin-jsx-a11y'

Insert below "scripts"{}

  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },




