# SVG-Logo-Maker

**DESCRIPTION:

The application enables users to enter inputs into a inquirer prompt in order to generate a logo "logo.svg" file which contains the users desired results as an SVG image.

**Table of Contents:

Overview
The Challenge
User Story
Acceptance Criteria
Technologies used
Walkthrough Video
Screenshots
Usage information
License


**THE CHALLENGE:

Build a Node.js command-line application that takes in user inputs to generates a SVG logo and saves it as "logo.svg" file. In addition, create a walkthrough video that demonstrates its functionality and the passing of all of the tests.

**USER STORY:

AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer

**ACCEPTANCE CRITERIA:

GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a pixel image that matches the criteria I entered

**TECHNOLOGIES USED:

Dynamic JavaScript
Node.js Version 16.18.1
Jest Version 29.4.3
Inquirer.js: Version 8.2.4
Visual Studio Code: Website

**WALKTHROUGH VIDEO:

Live Screen Recording of Application Functionality can be found here: https://watch.screencastify.com/v/OusEjlnik4try59xn8XA

**SCREENSHOTS:

**Generated SVG logo
<img width="200" alt="Screenshot 2023-05-22 at 5 19 59 PM" src="https://github.com/lanreabu77/SVG-Logo-Maker/assets/83088748/827dc42d-e893-4931-a9d6-16d529d05a46">

** Command line
<img width="1481" alt="Screenshot 2023-05-22 at 5 18 24 PM" src="https://github.com/lanreabu77/SVG-Logo-Maker/assets/83088748/468dffbc-d8e2-42c4-8caa-affd73e37a92">

** Jest test
<img width="1348" alt="Screenshot 2023-05-23 at 9 04 44 AM" src="https://github.com/lanreabu77/SVG-Logo-Maker/assets/83088748/a6116457-c71e-4d54-8df7-5527346dfeba">

**USAGE INFORMATION:

To run this application, use the command line to navigate to the directory of the application, install all dependencies (npm i), then type the command node index.js. You will then be taken through a series of questions. Once all questions have been answered properly, a message will display to the command line telling you your logo has been generated. Find your new logo in the newly generated SVG file.

**LICENSE

Copyright (c) 2023 Lanre Abu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.