/*
    OBJECTS
    Objects in JavaScript are like object IRL.
    IRL, objects have characteristics and things that they can do.
    */

    /*
    IRL guitar
        characteristics = color, brand, model, number of strings
        things that it can do = jam, smash, strum, woo
        */

//In JavaScript, we call characteristics "properties"
// and we call things that an objeect can do "methods"
// methods use a 

// A method is just a function that belongs to an object.

// creating objects
// object literal syntax
// key- value pairs

const guitar = {
    color: 'blue',                          //all characteristics must be seperated by a comma
    brand: 'Fender',
    model: 'Stratocaster',
    numberofStrings: 6,
    jam: function() {                       // thit is method "jam" belongs to the the 'guitar' object. it includes a function named anonymous 

    }
};

// Object constructor
const guitar2 = Object({
    color: 'green',
    brand: 'Les Paul',
    make: 'Standard',
    numberofStrings: 6,
});

console.log(guitar);
console.log(guitar2);

const guitar3 = {
    color: 'blue',
    brand: 'Fender',
    model: 'Stratocaster',
    numberofStrings: 6,

};
console.log(guitar == guitar3);         // false

// Getting and setting values in an object

// Getting information from the object using bracket syntax
console.log(guitar['model']);           // start with console log and identify the object(guitar).  We want the model to print, so put model in quotations.

// Setting values in an object.
guitar['color'] =  'yellow';            // start with identifying the object (guitar) and the value you ant to change in brackets 'color'. Assign (=) the color to yellow.
console.log(guitar);                    // console log will print out the guitar object with the new color change 'yellow'

//To use Dot Notation

// Getting
console.log(guitar.model);              // type console log and identify the object and click . and choose which part of the object to display (model)

// Setting
guitar.color = 'red';
console.log(guitar);

// Adding key-value pairs to an object
// Use bracket or dot notation

guitar['isNew'] = false;
console.log(guitar);

guitar.owner = 'me';
console.log(guitar);

// Bracket notation use case
const keyName = 'brand';
console.log(guitar[keyName]);

// calling the jam method
guitar.jam();