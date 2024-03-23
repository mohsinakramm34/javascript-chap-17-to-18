// Question No 1 Declare and initialize an empty multidimensional array. (Array of arrays)

// var mulDimenArr = [];
// console.log(mulDimenArr);
// mulDimenArr.push(["x", "y", "z"]);
// mulDimenArr.push(["m", "n", "o"]);
// mulDimenArr.push(["g", "h", "i"]);

// console.log(mulDimenArr);


// Question No 2 Declare and initialize a multidimensional array representing the following matrix.

// var mulDimenArr = [];
// console.log(mulDimenArr);
// mulDimenArr.push([0, 1, 2, 3]);
// mulDimenArr.push([1, 0, 1, 2]);
// mulDimenArr.push([2, 1, 0, 1]);

// console.log(mulDimenArr);



// Question No 3 Write a program to print numeric counting from 1 to 10.

// for(i=1; i<=10; i++) {
//     // console.log(i)
// }


// Question No 4 Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.


// var tableNumber = +prompt("Enter your table number");
// var tableLength = +prompt("Enter length of your table");
// console.log("Multiplication table of ", tableNumber, " length ", tableLength);


// for (i = 1; i <= tableLength; i++){
//     console.log(tableNumber, " x ", i, " = ", tableNumber * i );
// }



// Question No 5 Write a program to print items of the following array using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// console.log(fruits);
// for (i = 0; i < fruits.length; i++) {

//     console.log("Element at index ", i, " is ", fruits[i]);
// }


// Question No 6 Generate the following series in your browser. See example output

// Part a Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

// document.write("Counting: ")
// for (i = 1; i <= 15; i++) {
//     document.write(i, " , ")
// }


// Part b Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

// document.write("Reverse counting: ")
// for (i = 10; i >= 1; i--) {
//     document.write(i, " , ")
// }


// Part c Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

// document.write("Even: ")
// for (i = 0; i <= 20; i++) {

//     if (i % 2 == 0) {

//         document.write(i, " , ")

//     }
// }



// Part d Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

// document.write("Odd: ")
// for (i = 1; i <= 20; i++) {

//     if (i % 2 !== 0) {

//         document.write(i, " , ")

//     }
// }


// Part e Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k


// document.write("Odd: ")
// for (i = 1; i <= 20; i++) {

//     if (i % 2 == 0) {

//         document.write(i, "k, ")

//     }
// }