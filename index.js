//
// function test() {
//     var a = "3";
//     var b = "8";
//
// var c = a;
//     a= b;
//     b= c;
//
//     alert("a is " + a);
//     alert("b is " + b);
// }
//
// test();


// var name = "Solomon";
// var length = 180;
// var messages = prompt("Hello there, " + name + "," + " Kindly Enter your Message");
//
// alert("You have written " + messages.length + " characters, you have " + (length - messages.length) + " characters left.");


// alert(prompt("Hello there, Kindly Enter your Message") . slice(0,180));



// var length = 180;
// var name = "Solomon";
// var messages = prompt("Hello there, " + name + "," + " Kindly Enter your Message");
// messages.slice(0,181);

// if (messages.length <= 180) {
//     alert("You have written " + messages.length + " characters");
//     alert(messages);
// } else {
//     alert("You have exceeded the Max length allowed." + (length - messages.length) + " Message sliced");
//     alert(messages);
// }



// function to output words to Upper
// var tweet = prompt("Enter tweet");
// var msg_tweet = tweet.slice(0,20);
// alert(msg_tweet.toUpperCase());



// function to output just the first letter of a word to Upper
// var name = prompt("What's your name?"); 
// var first = name.slice(0,1);
// var second = name.slice(1,name.length);
// alert("Hello " + first.toUpperCase() + second.toLowerCase());



// function to make a sentence set to sentence case. that is capitalizing each word
// function titleCase(name) {
//     // prompt to enter your name
//     name = prompt("what's Your Name?")

//     // Step 1. Lowercase the string
//     name = name.toLowerCase();
//     // name = "I'm a little tea pot".toLowerCase();
//     // name = "i'm a little tea pot";

//     // Step 2. Split the nameing into an array of nameings
//     name = name.split(' ');
//     // name = "i'm a little tea pot".split(' ');
//     // name = ["i'm", "a", "little", "tea", "pot"];

//     // Step 3. Create the FOR loop
//     for (var i = 0; i < name.length; i++) {
//         name[i] = name[i].charAt(0).toUpperCase() + name[i].slice(1);
//         /* Here name.length = 5
//           1st iteration: name[0] = name[0].charAt(0).toUpperCase() + name[0].slice(1);
//                          name[0] = "i'm".charAt(0).toUpperCase()  + "i'm".slice(1);
//                          name[0] = "I"                            + "'m";
//                          name[0] = "I'm";
//           2nd iteration: name[1] = name[1].charAt(0).toUpperCase() + name[1].slice(1);
//                          name[1] = "a".charAt(0).toUpperCase()    + "a".slice(1);
//                          name[1] = "A"                            + "";
//                          name[1] = "A";
//           3rd iteration: name[2] = name[2].charAt(0).toUpperCase()   + name[2].slice(1);
//                          name[2] = "little".charAt(0).toUpperCase() + "little".slice(1);
//                          name[2] = "L"                              + "ittle";
//                          name[2] = "Little";
//           4th iteration: name[3] = name[3].charAt(0).toUpperCase() + name[3].slice(1);
//                          name[3] = "tea".charAt(0).toUpperCase()  + "tea".slice(1);
//                          name[3] = "T"                            + "ea";
//                          name[3] = "Tea";
//           5th iteration: name[4] = name[4].charAt(0).toUpperCase() + name[4].slice(1);
//                          name[4] = "pot".charAt(0).toUpperCase() + "pot".slice(1);
//                          name[4] = "P"                           + "ot";
//                          name[4] = "Pot";                                                         
//           End of the FOR Loop*/
//     }

//     // Step 4. Return the output
//     return name.join(' '); // ["I'm", "A", "Little", "Tea", "Pot"].join(' ') => "I'm A Little Tea Pot"
// }


// alert(titleCase(name));


// math functions
// function math() {
//     var a= prompt("Enter 1st Numeber");
//     var b= prompt("Enter 2nd Numeber");

//     var c = a+b;
//     var d = a-b;
//     var e = a*b;
//     var f = a/b;
    
//     return(c + " " + d + " " + e + " " + f);
   
// }

// alert(math());


// functions with prompt
// function getMilk(money) { 
 
//     var bottles = money / 2;
//     var balance = Math.floor(bottles) * 2;
//     var cost = money % 2;  
  
//       if (bottles == Math.floor(bottles)) {
//           alert("the total number of bottles that can be purchased with GHS" + money + " is " + bottles + " bottles");
//       } else {
//             alert("the total number of bottles that can be purchased with GHS" + money + " is " + Math.floor(bottles) + " bottles for GHS" + balance + " and the balance is GHS" + cost);
//       }
//   }
  
//   getMilk(prompt("enter amount"));


// life in weeks challenge version 1
// function lifeInWeeks(age) {
    
//     /************Don't change the code above************/    
        
//         //Write your code here.
    
//         // age = prompt("Enter your age");
//         var year = 90;
    
//         var days = 365;
//         var weeks = 52;
//         var months = 12;
        
//         var x = (year * days) - (days * age);    
//         var y = (year *  weeks) - (weeks * age);    
//         var z = (year * months) - (months * age); 
    
//         alert("You have " + x + " days, " + y + " weeks, and " + z + " months left.");
        
        
//     /*************Don't change the code below**********/
//     }
// lifeInWeeks(prompt("Enter your age"));


// life in weeks challenge version 2
// function lifeInWeeks(age) {
    
// /************Don't change the code above************/    
    
//     //Write your code here.

//     var year = 90;
//     var yearRemaining = year - age;

//     var days = yearRemaining * 365;
//     var weeks = yearRemaining * 52;
//     var months = yearRemaining * 12;
    
//     alert("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");
    
    
// /*************Don't change the code below**********/
// }

// lifeInWeeks(prompt("Enter your age"));



// BMI challenge
// function bmiCalculator(weight,height) {

//     weight = prompt("Enter your weight");
//     height = prompt("Enter your height");

//     var bmi = Math.round(weight/Math.pow(height, 2));
    
//     return(bmi);
    
// }

// var bmi = bmiCalculator();
// alert("Your BMI is " + bmi);


// function bmiCalculator (weight, height) {
    
//     var bmi = (weight/Math.pow(height, 2));
         
//      if (bmi < 18.5){
//          console.log("Your BMI is " + Math.round(bmi) + ", so you are underweight.");
//      } else if (bmi > 18.5 && bmi <= 24.9){
//           console.log("Your BMI is " + Math.round(bmi) + ", so you have a normal weight.");
//      } else if (bmi > 24.9){
//           console.log("Your BMI is " + Math.round(bmi) + ",  so you are overweight.");
//      }
     
//      // return Math.round(bmi);
//  }
 
//  var bmi = bmiCalculator(60, 2);
 


// Random number Generator Challenge
 // declaring the variable n as the random number generator
//  var n = Math.random(); 

//  // increasing the limit of the random generated numbers to 6 just like the dice. The default is always less than 1
//  n = n * 6;
 
//  // adding plus 1 to set the range from 0 - 5 to 1 - 6.  default is 0 so times 6 means 0 to 5 so adding plus 1 makes it start from 1
//  n = n + 1;
 
//  // Displaying just the whole number and not the 16 decimal places
//  n = Math.floor(n);
 
//  // Logging the output
//  alert(n);



// love calculator
// var his = prompt("Enter His Name");
// var her = prompt("Enter Her Name");

// // declaring the variable n as the random number generator
// var n = Math.random(); 

// // increasing the limit of the random generated numbers to 6 just like the dice. The default is always less than 1
// n = n * 100;

// // adding plus 1 to set the range from 0 - 5 to 1 - 6.  default is 0 so times 6 means 0 to 5 so adding plus 1 makes it start from 1
// n = n + 1;

// // Displaying just the whole number and not the 16 decimal places
// n = Math.floor(n);

// // Logging the output

// if (n <= 40) {
//     alert(his + " and " + her + " love score is \n" + n + "% \n NOT RECOMMENDED");
// } else if (n > 40 && n < 70) {
//     alert(his + " and " + her + " love score is \n" + n + "% \n GOOD"); 
// } else{
//      alert(his + " and " + her + " love score is \n" + n + "% \n EXCELLENT"); 
// }



// // leap year calculator
// function isLeap(year) {
    
//         if (((year % 4) !== 0)){
//          console.log("Not leap year.");
//     }
    
//          else if (((year % 4) === 0) && ((year % 100) !== 0)){
//          console.log("leap year.");
//     }
    
//         else if (((year % 4) === 0) && ((year % 100) === 0) && ((year % 400) !== 0)){
//         console.log("Not leap year.");
//     }
    
    
//         else if (((year % 4) === 0) && ((year % 100) === 0) && ((year % 400) === 0)){
//          console.log("leap year.");
//     }
    
//     else{
//         console.log("Not leap year.");
//     }
    
        
//     }
    
//      isLeap(prompt("Enter year"));


// var guestNames = ['Angela','Jack','Anita','Maud','Solomon'];
// var guest = prompt("What's your name?");
//     var first = guest.slice(0,1);
//     var second = guest.slice(1,guest.length);

// if (guestNames.includes(guest)){
//     console.log("Welcome " + first.toUpperCase() + second.toLowerCase());
// }

// else{
//      console.log("You are not on the list " + first.toUpperCase() + second.toLowerCase());
// }


// var output = [];

// function fizzbuzz() {
    
//     for (let i = 0; i < 100; i++) {
//        output.push(i);   
//      }
//      console.log(output);
// }

// fizzbuzz();


var output = [];

function fizzBuzz() {
    
for (var count = 1; count < 100; count++) {

    if ((count % 3 === 0) && (count % 5 === 0)) {
               output.push("FizzBuzz"); 
           }
    
        else if (count % 3 === 0){
           output.push("Fizz");
               }
        
           else if (count % 5 === 0){
            output.push("Buzz");  
           }
           
            else{
               output.push(count);
           }
    alert(output);
    }
}

fizzBuzz();