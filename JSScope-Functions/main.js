"use strict";

//#region 3 e ve 7 e bolunen functiona

// let num = prompt("Enter number");

// if (isNaN(num)) {
//   console.log("again");
// } else {
//   console.log(twentyOne(num));
// }

// function twentyOne(num) {
//   if (num % 21 == 0) {
//     return "bolunur";
//   }
//   else {
//     return "bolunmur";
//   }
// }

//#endregion

//#region factorial calculator

// let num = prompt("Enter number");

// if (isNaN(num) || parseInt(num) < 1) {

//   console.log("again");

// } else {

//   console.log(factorialCalc(Number(num)));

// }


// function factorialCalc(num) {

//   let fact = 1;

//   for (let i = 1; i <= num; i++) {
//     fact *= i;
//   }

//   return fact;
// }

//#endregion

//#region cut ededlerin kvadrati cemi

// let arr = [1, 2, 3, 4,6];


// console.log(sumOfEvenNumbersCube(arr));


// function sumOfEvenNumbersCube(arr) {

//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {


//     if (arr[i] % 2 == 0) {
//       sum += arr[i] * arr[i];
//     }
//   }

//   return sum;

// }

//#endregion

//#region login

// let email = prompt("Enter your email address :");

// let password = prompt("Enter your password:");

// let confirmPassword = prompt("Enter your password again:");

// console.log (login(email,password,confirmPassword));



// function login(email, passowrd, confirmPassword) {

//   if (email=="cavid@code.edu.az" && passowrd=="12345" && confirmPassword==passowrd) {
//     return "Girish olundu";
//   }

// if (email!="cavid@code.edu.az" && passowrd!="12345") {
//   return "email ve password sehvdir";
// }

//   if (email!= "cavid@code.edu.az") {
//     return "email sehvdir";
//   }

//   if (password != "12345") {
//     return "password sehvdir";
//   }

//   if (confirmPassword!=passowrd) {
//     return "şifrəni düzgün tekrarlayın";
//   }

// }

//#endregion

//#region arraydaki tek ededlerin cemi:

// let arr = [1,2,3,4,5,6];


// console.log(sumOfOddNumbers(arr));

// function sumOfOddNumbers(arr) {

//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i]%2==1) {
//       sum+=arr[i];
//     }
//   }

//   return sum;
// }

//#endregion


//#region arraydaki cut ededlerin sayi;

// let arr = [1,2,3,4,5,6,8];

// console.log(counOfEvenNumbers(arr));

// function counOfEvenNumbers(arr) {

//   let count =0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i]%2==0) {
//       count++;
//     }
//   }

//   return count;
// }

//#endregion
