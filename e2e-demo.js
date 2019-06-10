/**
 * @fileoverview A demonstration of vanilla JavaScript for E2E Testing Upskill Session
 * @author Brandon Luttrell, Neal Backsman, Dan Heath, Justin Hone, Matt Kratzer
 * @since 0.0.1
 */

/**
 * Imports would go here:
 * import aDifferentModule from "./e2e-demo-module2";
 */

/**
 * Global Scope Declarations
 */
document.addEventListener("DOMContentLoaded", function () {
    /**
     * This scope is local to eveything inside the IIFE above
     * DOM = Document Object Model
     * IIFE = Immediately Invoked Function Expression
     * Anything inside this scope cannot be access by anything outside of the IIFE above
     * Always declare AND instantiate your variables before you use them
     */

    /**
     * Variable declaration types
     * var
     * const 
     * let
     */

    var thisIsAVariable = "a variable"; //Avoid using var, as it is less explicit;
    const aConstant = "This is a Constant" //Use const when the data or the binding does not need to change
    let aMutableVariable = 5; //use let to limit scope and make a mutable variable
        aMutableVariable =+ 5;

    console.log(aMutableVariable); //displays: 10

    /**
     * Constants
     * const locks the binding NOT the entire variable
     */

    const anotherConstant = 10;
    // anotherConstant = 20; // This will throw an error
    
    const constantObjectExample = {data: ""}
    constantObjectExample.data = "Hello world!" //This will work!
    console.log(constantObjectExample);

    /**
     * Data Types
     * Number
     * String
     * Boolean
     * Array (like a list)
     * Objects
     */

    const aNumber = 10;
    const anotherNumber = 10.0001;

    const aString = "This is a string";
    const anotherString = "1"; //Explicitly state that this is a string

    const anArithmeticStringOperation = "Hello " + "World!"; //Result "Hello World!"

    console.log(aString + anotherString); //Result "This is a string1";
    console.log(aString + aNumber); // Result "This is a string10" Avoid this

    /**
     * Data type methods
     * toString();
     */

    console.log(aNumber); //result 10;
    console.log(aString + aNumber.toString()) //Result "This is a string10";

    //Booleans true and false

    // Arrays
    const anArray = []; //A list of similiar items.
    const aNonEmptyArray = ['test', 'anotherTest'];
    console.log(aNonEmptyArray); // Result "['test', 'anotherTest']"
    console.log(aNonEmptyArray[0]); //Result 'test';


    const getMyCarSpeed = function () {
        return 65;
    }

    // Objects
    const anObject = {};
    const myCar = {
        make: "chevrolet",
        model: "Silverado",
        year: "2016",
        price: 10000,
        rating: aNumber,
        speed: getMyCarSpeed(),
    }

    console.log(myCar);

    //Ways to access properties inside object
    // dot operator
    console.log(myCar.make); //Result "chevrolet"
    console.log(myCar["speed"]); //Result 65;
    const myProperty = "price";
    console.log(myCar[myProperty]); //Result 10000

    /**
     * Arithmetic
     * 
     */

    //operators
    1 + 1; //2
    2 - 1; //1
    10 * 10; //100
    100 / 10; //10
    10 / 3; //3.333

    10 % 3;// 1
    // modulus operator
    10 % 10; //0
    // 10 / 3, output the remainder
    // $10,000 to spend
    // Cool stuff costs $623 each
    // How much will I have leftover if I buy as much cool stuff as possible
    10000 % 623; //Output

    // exponent **
    2 ** 2; // 4

    // decrement
    3--; // 2

    //increment
    3++; //4

    //shorthand arithmetic operators
    //a number that you run the same operation on a lot
    let myVar = 10;
    myVar /= 10; //1
    // myVar = myVar / 10; //1
    /**
     *  +=
     *  -=
     *  *=
     *  /=
     *  %=
     */

    /**
     * Functions
     * 
     * in Python:
     * def myFunction(parameter):
     * 
     * callable by myFunction(someValue)
     */

    const myFunction = function(parameter) {
        return 10 * parameter;
    }
    myFunction(10); //100

    /**
     * inside a class
     * function aFunction() {
     *     doStuff()
     * }
     * 
     * this.aFunction()
     */

    /**
     * function() { an expression }
     * anonymous, IIFE
     * 
     * () => { an expression }
     * '=' + '>' =>
     * Syntax does not reinstantiate 'this' context;
     */

    // this

    const anObject = {
        //this refers to 'anObject'
        price: 10000,
        doSomething: () => {
            return this.price * 2;
        }, //returns 20000
        aBadExample: function() {
            //this is reinstantiated to this scope
            var price = 10;
            return this.price * 2;
        } //returns 20
    };

});
