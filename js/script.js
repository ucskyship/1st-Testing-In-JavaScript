"use strict"

const sum = (a,b) => a+b;

// 
let out = ("-----------------------------------------------------------------------------------------------------------------------");


// O B J E C T
const userDetails = {
    name: "Boyo",
    age: 25,
    "is married" : true,
}

// How to access the elements
userDetails["is married"];
userDetails.name;
console.log(userDetails.name);
// or
userDetails["name"];
userDetails.age;


const something = "anything";

// but even though declare name outide the function when you use the keyword this inside the scope of the function, 
// we automatically shadow the outside variable and use the value of the variable inside the scope of the function..

const user = {
    name: "UCJ",
    age: 12,
    "is married": false,
    [something]: "Pizza",

    shoot(){
        console.log("I go shoot my shot says", this.name);
        // this is referencing to the attribute of the object
    },
    talk(){
        console.log("I can talk");
    },
};
// you can declare a function with an =>, or keyword function, or nameOfFunction()

console.log(user);
console.log(user.shoot());
console.log(user.shoot());
// the this keyword will not reflect here because of the call, in the prev line 
// the caller is the object that has the name attribute so the this refers there

let n = "name";
user[n]

for (let key in user){
    console.log(`${key} --> ${user[key]}`);
}


            // H O  W  TO  DO  SHALLOW COPY
Object.assign({})



//  Call-back function
function operation(a, b, func){
    return func(a + b);
}
    console.log(operation(2, 3, sum));



console.log(out);

// Date: 19th Of Aug 2022

// the 'this' keyword

function namedFunction(){
    console.log(this);
}

namedFunction();

const obj = {
    name: "Dorcas",
    namedFunction(){
        console.log(this.name);  

        // function inSideName(){
        //     console.log(this);
        // }

        const inSideName = () =>{
            console.log(this);
        }
        inSideName();
    },
};
obj.namedFunction();

// const anotherObj = {
//     name: "Eden",
// };

// anotherObj.namedFunction = obj.namedFunction

// anotherObj.namedFunction()

// N/B: in javascript you can call function inside a function, you call pass in function as a parameter, you can return a function


console.log(out);

const person = {
    firstName: "Dorcas",
    lastName: "Seriki Olokolo",
    gender: "F",
    age: 18,

    fullName(){

        const getTittle = () => {
            return this.gender === "F"? "Mrs. " : "Mr. ";
        }
            return `${getTittle} ${this.lastName} ${this.firstName
        }`;
    },
    isMinor(){
        return this.age < 18;
    },
};

console.log(person.fullName);

console.log(out);






        // A R R A Y



// HOW TO DECLARE AN ARRAY

        const arr = [1,2,3,4];
        const arr1 = new Array();
        const arr2 = new Array(5);
// here the size of the array is 5 and there're all empty
        const arr3 = new Array(1,2,3,4);

        for (let item of arr) console.log(item);

// How to get Element in an Array and How to get the last element in an Array
        arr[0]
        arr[arr.length -1]
        arr.at(-1)

// How to Delare a Multi-Dimenetional Array
        const multiArr = [[2,3,4,5], [3,4,5,6]]
// How to acces the element in a multi dimentional array
        multiArr.at[0],[1]

        multiArr.at(-2),(2)
// this gets the arrays from the right to the left and so the negative sign counts from right to left and then the second gets the element at index '2'

// How to know the type of arr
        typeof(arr)
//  this method will output the typeOF arr as an 'object'
// but how to know an array is truely an array you don't use type of but rather
        Array.isArray(arr)
// this will now the output type as 'true'




                // ARRAY  METHODS


        arr.push(5)
// this will add to the end of the array
        arr.pop()
// this will remove from the end of the array

        arr.unshift(0)
// this will add to the begining of the array
        arr.shift() 
// remove the begining of the array


                // S P L I C E


// splice has many things, it can remove, it can delete and it can add to an array, it is the swiss army for array
// to delete with splice is that it takes the index you want to start deleting from and then takes how many items you want to delete
        arr.splice(1, 2)
// how to add using splice


        arr.splice(0, 0, 2, 3)
// this means, start at index zero, don't delete anything and then add 2, and 3
        arr.splice(2, 1, 78, 45, 89)



        

console.log(out);

        // ARRAY METHODS (Loop, ...)

        const newArr = [1,2,3,4,55,6,7];

        newArr.forEach((elem, index, mySelf) => {
            console.log(elem, index, mySelf);
        });

// what this method does is that it returns the element in an array, the index in the array and the array itself
        const f = newArr.filter((item) => item > 5);
        console.log(f);


// how to find an element in an array, the find method
        const a = newArr.find((item) => item > 5);
        console.log(a);


// how to map and array and return the values
        const mappedArr1 = newArr.map((item, index) => item*2)
        console.log(mappedArr1);

// how to filter and map an array
        const mappedArr = newArr.filter(item => item % 2 === 0).map((item, index) => item*2)
        console.log(mappedArr);

// how to reduce elements in an array
        const reduceNewArr = newArr.reduce((acc, item) => acc + item);
        console.log(reduceNewArr);


        const fruits = ["pine", "water melon", "pineapple", "orange", "apple", "cucumber"]
        const longestString = fruits.reduce((acc, item) => (acc.length > item.length ? acc:item));
        console.log(longestString);






                    // IMAGE QUERY SELECTOR

const mainImage = document.querySelector(".main-image");
const images = document.querySelectorAll(".image-thumbnail > img");
console.log(images);

images.forEach((img) => {
    img.addEventListener("click", () =>{
        mainImage.src = img.src;
    });
});