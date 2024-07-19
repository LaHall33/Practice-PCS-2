// Objects Review

    // The Basics of Objects

// Object literal Notation

const guitar = {
    color: 'red',                   // key value pair. "color" is a property
    brand: 'Fender',                // must have a comma to seperate the properties
    model: 'Stratocaster',          
    numberofStrings: 6,             // a method is a function within an object 
    jam: function(){
        console.log('We\'re jammin\'');       // refer to the function by the key method name "jam".  
    },                                       // put in the function what you want it to accomplish.
};


// getting and setting values in a js object:

    // Getting values using bracket notation
        console.log(guitar['model'])        //when using bracket notation, you must use a string ('')

    // Setting values bracket notation
        guitar['color'] = 'blue';
        console.log(guitar['color']);

    // getting values using dot notation
    console.log(guitar.numberofStrings);

    // setting values using dot notation
    guitar.numberofStrings = 7;
    console.log(guitar.numberofStrings);

    //adding values using bracket notation
    guitar['isUsed'] = true;
    console.log(guitar.isUsed);

    //adding values using dot notation
    guitar.tuning = function(){
        console.log('Tuning the guitar...');
    };

    guitar.tuning();                            // Call the function