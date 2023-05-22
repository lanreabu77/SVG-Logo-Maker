// // Importing Triangle, Square, Circle classes from ./shapes.js
// const { Triangle, Square, Circle } = require("./shapes.js");

// // Unit testing -> testing for a Square with a blue background to render
// describe("Square test", () => {
//   test("test for a Square with a blue background", () => {
//     const shape = new Square();
//     shape.setColor("blue");
//     expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}">`);
//       });
// });

// // Unit testing -> testing for a Triangle with a purple background to render
// describe("Triangle test", () => {
//   test("test for a Triangle with a purple background", () => {
//     const shape = new Triangle();
//     shape.setColor("purple");
//     expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}">`);
//       });
// });

// // Unit testing -> testing for a circle with a red background to render
// describe("Circle test", () => {
//   test("test for a circle with a red background", () => {
//     const shape = new Circle();
//     shape.setColor("red");
//     expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}">`);
//     });
//   });

const {Circle, Square, Triangle} = require("./shapes")
// Imports the Circle, Square, and Triangle shape classes from the 'shapes.js' module and defines a test suite for the shape class.  
// The test case checks whether "Cricle, Square, and Triangle" object can be rendered correctly by calling the render method and comparing the result to an expected SVG string.

// Circle Shape
describe('Circle', () => {
    test('renders correctly', () => {
      const shape = new Circle();
      var color =('blue')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}">`);
    });
  });
  // Square Shape
  describe('Square', () => {
      test('renders correctly', () => {
        const shape = new Square();
        var color =('green')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}">`);
      });
    });
  // Triangle Shape
  describe('Triangle', () => {
      test('renders correctly', () => {
        const shape = new Triangle();
        var color =('pink')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}">`);
      });
    });