"use strict";


// let numbers = [2,3,4,5,6,7,8,9,"Resul",11];

// for (let i = 0; i < numbers.length; i++) {

//   if (numbers[i]==7) {
//     // break;
//     continue;
//   }
//   else {
//     console.log(numbers[i]);
//   }
// }



// let numbers = [6,7,8,9,"Resul",11];

// for (let i = 0; i < numbers.length; i++) {

//   if (!isNaN(numbers[i]) && typeof(numbers[i]) == 'number') {
//     if(number[i] % 2 == 0) {
//       console.log (numbers[i]);
//     }
//   }
// }




// let surname = true;

// if (typeof surname == 'boolean') {
//   console.log ("Yes, boolean");
// }else {
//   console.log ("No, boolean");
// }




// try {

//   var isMarried = true;

//   if (isMarried) {
//     let result = 'Married';
//   }

//   document.querySelector("h1").innerText=result;

//   document.querySelector("h1").style.color = "green";


// } catch (error) {
//   document.querySelector("h1").innerText = error.message;

//   document.querySelector("h1").style.color = "red";
// }
// finally {
//   document.querySelector("h1").style.border = "1px solid black";
// }



// let isMarried = false;
// if (true) {
//    let name = "dsd";
//    if (!isMarried) {
//     let text = "Not married";
//    }
// }

//   console.log (isMarried);




// let fullname = prompt("Please add your full name");

// while (fullname.trim() == "") {
//   fullname = prompt ("Please add your full name again");
// }

// let email = prompt("Please add your email");

// while (email.trim() == "") {
//   email = prompt ("Please add your email again");
// }

// for (let i = 0; i < email.length; i++) {

//   let isExist = false;

//   if (email[i] == "@") {
//     isExist = true;
//     break;
//   }
// }

// if (isExist) {
//   let isMarried = confirm ("Are you married?");

//   if (!isMarried) {
//     alert("Evli olmadiginiza gore qeydiyyat ola bilmediniz.");
//   }else {
//     let result  = `Full name: ${fullname}, Email: ${email}, ${isMarried ? "Evlidir" : "Subaydir"}`;
//     alert(result);
//   }
// }
// else {
//   email = prompt ("Please add your correct again");
// }



// document.querySelector("input").addEventListener("keyup", function () {
//   if (document.querySelector("input").value.trim() == "") {
//     document.querySelector("span").style.display = "block";
//   }
//   // else {
//   //   alert("Success");
//   // }

//   else {
//     document.querySelector("span").style.display = "none";
//   }
// })





// let name = "Novreste";

// let surname = "Aslanzade";

// function showText(name, surname /*= "XXX"*/) {

//   let isMarried = true;

//   if (isMarried == true) {
//     return name + " " + surname + " " + isMarried + "Siz saytda qeydiyyat kece bilersiz";
//   } else {
//     return name + " " + surname + " " + isMarried + "Siz saytda qeydiyyat kece bilmersiz";
//   }
// }

// let result = showText(name, surname);

// console.log (result);


// let endResult = result + "P414 qrupunda oxuyur";

// console.log (endResult);





// function sumOfNumbers(/* a,b,c */) {
// return a+b+c;

// console.log (arguments);
// }

// sumOfNumbers(1,2,3,4,5,6,"salam");

// console.log (sumOfNumbers(1,4,6));



// console.log (this);


// function showFullData() {
//   console.log (this);
// }

// showFullData();



// let nums = [1, 2, 3, 4, 5, 6, 8, 9];

// function showNumber(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 8) {
//       break;
//     }else {
//       console.log(arr[i]);
//     }
//   }

//   console.log("Hello P414");

// }


// showNumber(nums);




// let obj = {
//   name : "Gultac",
//   surname : "Ceferov",
//   getData:showFullData()
/* function () {
  console.log (this);
} */
// }

// console.log (obj.name);

// obj.getData;





// let showEmail = (a,b) => {
//   console.log (a+b);
// }


// showEmail(1,2,3,4);


// let obj = {
//   name: "Gultac",
//   surname: "Ceferov",
//   getData: showEmail(10,15)
  /* function() {
    console.log (this);
  } */
// }

// obj.getData;




// document.querySelector("button").addEventListener("click",function(){
//   this.style.backgroundColor = "magenta";
// })








// function test() {
//   console.log (arguments);
// }

// test(1,2,3,4,5);


