function greet(greeting = 'Hello, mate!') {
    console.log(`${greeting} 'test value'`);
}

// greet('Hello, World!. this is being passed as a parameter to the function.');
// greet(); // This will use the default parameter value 'Hello, mate!' since no argument is passed.


//Rest(merges into an array) and Spread operators

function add(...numbers) { // The rest parameter syntax allows us to represent an indefinite number of arguments as an array. js does the work behind the scenes and numbers is still an array.
    total = 0;
    for (const number of numbers) {
        total += number;
    }
    return total;
}

//console.log(add([1, 2, 3, 4, 5])); // Output: 15  pass an array when the rest operator in not used
//console.log(add(1, 2, 3, 4, 5)); // Output: 15 pass individual numbers when the rest operator is used. js will convert them into an array behind the scenes.

const arr1 = [1, 2, 3]; //spread operator will remove the bracket and pass the individual elements as arguments to the function.
console.log(add(...arr1)) // Output: 6 - The spread operator is used to expand the array elements as individual arguments.