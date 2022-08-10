"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// 1. Create a class called "Square"
//    - Create a constructor with 1 parameter which will
//    - represent length of side of the square
//    - create a member function(method) called "computeArea"
//      that will compute the area of the square,
//      return the area of the square from this method
// 2. Create a class called "Rectangle" that will extend the square
//    - Create a constructor with 2 parameters which will
//      represent length of sides of the rectangle
//    - Create a member function called "computeArea"
//      that will compute area of the rectangle,
//      return the area of rectangle from the function
// 3. create a instance of Square
// 4. create a instance of Rectangle
// 5. compute area for both and verify if the results are correct.
// -- After eveything works --
// 6. think of the "best" way how to improve your code with inheritance
//    with as much reusability as possible and not much repetition
// Tip: Code first working solution and then think how to improve it.
// CODE UNDER THIS LINE
// ----------------------------
// class Square {
//   constructor(a) {
//     this.a = a;
//   }
//   computeArea() {
//     const areaSquare = this.a * this.areaSquare;
//     return areaSquare;
//   }
// }
// class Rectangle {
//   constructor(a, b) {
//     this.a = a;
//     this.b = b;
//   }
//   computeArea() {
//     const areaRectangle = this.a * this.b;
//     return areaRectangle;
//   }
// }
var Square =
/*#__PURE__*/
function () {
  function Square(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : a;

    _classCallCheck(this, Square);

    this.a = a;
    this.b = b;
  }

  _createClass(Square, [{
    key: "computeArea",
    value: function computeArea() {
      var area = this.a * this.b;
      return area;
    }
  }]);

  return Square;
}();

var Rectangle =
/*#__PURE__*/
function (_Square) {
  _inherits(Rectangle, _Square);

  function Rectangle(a, b) {
    _classCallCheck(this, Rectangle);

    return _possibleConstructorReturn(this, _getPrototypeOf(Rectangle).call(this, a, b));
  }

  return Rectangle;
}(Square);

var square = new Square(10);
var rectangle = new Rectangle(10, 5);
var squareArea = square.computeArea();
var rectangleArea = rectangle.computeArea();
console.log("Area of square is: ", squareArea);
console.log("Area of rectangle is: ", rectangleArea);

var Animal =
/*#__PURE__*/
function () {
  function Animal(name) {
    _classCallCheck(this, Animal);

    this.name = name;
  }

  _createClass(Animal, [{
    key: "noise",
    value: function noise() {
      return "Generic noise: " + this.name;
    }
  }, {
    key: "callAnimal",
    value: function callAnimal() {
      console.log("Come here: " + this.noise());
    }
  }]);

  return Animal;
}();

var Cat =
/*#__PURE__*/
function (_Animal) {
  _inherits(Cat, _Animal);

  function Cat() {
    _classCallCheck(this, Cat);

    return _possibleConstructorReturn(this, _getPrototypeOf(Cat).apply(this, arguments));
  }

  _createClass(Cat, [{
    key: "noise",
    value: function noise() {
      return "miow: " + this.name;
    }
  }]);

  return Cat;
}(Animal);

var Dog =
/*#__PURE__*/
function (_Animal2) {
  _inherits(Dog, _Animal2);

  function Dog() {
    _classCallCheck(this, Dog);

    return _possibleConstructorReturn(this, _getPrototypeOf(Dog).apply(this, arguments));
  }

  _createClass(Dog, [{
    key: "noise",
    value: function noise() {
      return "bark: " + this.name;
    }
  }]);

  return Dog;
}(Animal);

var animals = [new Cat("alex"), new Cat("bobo"), new Dog("kuku")];
animals.forEach(function (animal) {
  animal.callAnimal();
});