// const inquirer = require('inquirer');
// const fs = require('fs');
// const shapes = require('./lib/shapes');


// function createSVG(text, textColor, shapeName, shapeColor, shapes) {
//   const shape = shapes[shapeName];
//   return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//     ${shape.svg(shapeColor)}
//     <text x="150" y="125" font-size="60" fill="${textColor}" dy="-0.25rem" text-anchor="middle">${text}</text>
//   </svg>`;
// }

// function promptUser() {
//     inquirer
//       .prompt([
//         // Text prompt
//         {
//           type: "input",
//           message:
//             "What text would you like your logo to display? (Enter up to three characters)",
//           name: "text",
//         },
//         // Text color prompt
//         {
//           type: "input",
//           message:
//             "Enter text color for your logo (Enter color keyword OR a hexadecimal number)",
//           name: "textColor",
//         },
//         // Shape choice prompt
//         {
//           type: "list",
//           message: "What shape would you like the logo to render?",
//           choices: ["Triangle", "Square", "Circle"],
//           name: "shape",
//         },
//         // Shape color prompt
//         {
//           type: "input",
//           message:
//             "Enter shapes color (Enter color keyword OR a hexadecimal number)",
//           name: "shapeBackgroundColor",
//         },
//       ])
//       .then((answers) => {
//         // Error handling for text prompt (user must enter 3 characters or less for logo to generate)
//         if (answers.text.length > 3) {
//           console.log("Must enter a value of no more than 3 characters");
//           promptUser();
//         } else {
//           // Calling write file function to generate SVG file
//           writeToFile("logo.svg", answers);
//         }
//       });
//   }
  
//   // Calling promptUser function so inquirer prompts fire off when application is ran
//   promptUser();


const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Square, Circle } = require("./lib/shapes");

// Function writes the SVG file using user answers from inquirer prompts
function writeToFile(fileName, answers) {
  
  let svgString = "";
  
  svgString =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  
  svgString += "<g>";
  
  svgString += `${answers.shape}`;

  // Conditional check takes users input from choices array and then adds polygon properties and shape color to SVG string
  let shapeChoice;
  if (answers.shape === "Triangle") {
    shapeChoice = new Triangle();
    svgString += `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${answers.shapeBackgroundColor}"/>`;
  } else if (answers.shape === "Square") {
    shapeChoice = new Square();
    svgString += `<rect x="50" height="200" width="200" fill="${answers.shapeBackgroundColor}"/>`;
  } else {
    shapeChoice = new Circle();
    svgString += `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${answers.shapeBackgroundColor}"/>`;
  }

 
  svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
  
  svgString += "</g>";

  svgString += "</svg>";

  // Using file system module to generate svg file, takes in file name given in the promptUser function, the svg string, and a ternary operator which handles logging any errors, or a "Generated logo.svg" message to the console  
  fs.writeFile(fileName, svgString, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });
}

// This function defines array of 'questions' using the 'inquirer' library with the following questions.
function promptUser() {
  inquirer
    .prompt([
      {
        type: "input",
        message:
          "What text would you like your logo to display? (Enter up to three characters)",
        name: "text",
      },
      {
        type: "input",
        message:
          "Enter text color for your logo (Enter color keyword OR a hexadecimal number",
        name: "textColor",
      },
      {
        type: "list",
        message: "What shape would you like the logo to render?",
        choices: ["Triangle", "Square", "Circle"],
        name: "shape",
      },
      {
        type: "input",
        message:
          "Enter shapes color (Enter color keyword OR a hexadecimal number)",
        name: "shapeBackgroundColor",
      },
    ])
    .then((answers) => {
      
      if (answers.text.length > 3) {
        console.log("Must enter a value of no more than 3 characters");
        promptUser();
      } else {
        
        writeToFile("logo.svg", answers);
      }
    });
}


promptUser();
