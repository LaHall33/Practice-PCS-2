// what is the 'this' keyword in JavaScript?

const person = {
    name: 'Narciso',
    sayHello: function() {
        console.log(`Hello, my name is ${this.name}!`);             // "this" is the same thing as using 'person.name'.  
    }                                                               // 'This' basically points to "person" in line 3
}
person.sayHello();

// the value of 'this' can change depending on 
// how and where you use it

const anotherPerson = {
    name: 'Keimha',
};

anotherPerson.sayHello = person.sayHello                            // this is saying that the sayHello function is the same as person.sayHello
                                                                    // the function is a value
anotherPerson.sayHello();                                           // Call the function using the anotherPerson function.