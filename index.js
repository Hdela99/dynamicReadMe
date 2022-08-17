console.log("readme gen running");

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markDown = require(`./utils/generateMarkdown`)
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your project title?",
    name: "title"
  },

  {
    type: "input",
    message: "Who created this?",
    name: "username"
  },

  {
    type: "input",
    message:"Description: ",
    name: "description"
  },

  {
    type: "input",
    message:"Installation Instructions: ",
    name: "installation"
  },

  {
    type: "input",
    message:"Usage information: ",
    name: "usage"

  },

  {
    type: "list",
    message: "What licenses are required with this project?",
    name: "license",
    choices: ["MIT", "ISC", "none"],
    filter(val) {
      return val.toLowerCase();
    }
  },

  {
    type: "input",
    message: "Who else contributed to this project?",
    name: "contributions"
  },

  {
    type: "input",
    message: "How do you test the project?",
    name: "test"
  },
  {
    type: "input",
    message: "Where can I go with questiosn(email)?",
    name: "email"
  },

  {
  type: "input",
  message: "Where can I go with questions(github)?",
  name: "github"  
  }
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return inquirer.prompt(data)
    .then((answers) => {
      const gen = markDown.generateMarkdown(answers);
      fs.writeFile(fileName, gen, function (err) {
        if(err)  {
          console.log('could not save file')
        } else { 
          console.log(`Success: new README created! `)
        }
     })

  })
      .catch((error) => {
        console.log(error);
      })
}

// TODO: Create a function to initialize app
function init() {
  writeToFile("README", questions);
}

// Function call to initialize app
init();
