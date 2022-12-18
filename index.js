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

// var tweet = prompt("Enter tweet");
// var msg_tweet = tweet.slice(0,20);
// alert(msg_tweet.toUpperCase());

var name = prompt("What's your name?"); 
var first = name.slice(0,1);
var second = name.slice(1,name.length);
alert("Hello " + first.toUpperCase() + second.toLowerCase());


// function titleCase(str) {
//   // Step 1. Lowercase the string
//   str = str.toLowerCase();
//   // str = "I'm a little tea pot".toLowerCase();
//   // str = "i'm a little tea pot";
  
//   // Step 2. Split the string into an array of strings
//   str = str.split(' ');
//   // str = "i'm a little tea pot".split(' ');
//   // str = ["i'm", "a", "little", "tea", "pot"];
  
//   // Step 3. Create the FOR loop
//   for (var i = 0; i < str.length; i++) {
//     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//   /* Here str.length = 5
//     1st iteration: str[0] = str[0].charAt(0).toUpperCase() + str[0].slice(1);
//                    str[0] = "i'm".charAt(0).toUpperCase()  + "i'm".slice(1);
//                    str[0] = "I"                            + "'m";
//                    str[0] = "I'm";
//     2nd iteration: str[1] = str[1].charAt(0).toUpperCase() + str[1].slice(1);
//                    str[1] = "a".charAt(0).toUpperCase()    + "a".slice(1);
//                    str[1] = "A"                            + "";
//                    str[1] = "A";
//     3rd iteration: str[2] = str[2].charAt(0).toUpperCase()   + str[2].slice(1);
//                    str[2] = "little".charAt(0).toUpperCase() + "little".slice(1);
//                    str[2] = "L"                              + "ittle";
//                    str[2] = "Little";
//     4th iteration: str[3] = str[3].charAt(0).toUpperCase() + str[3].slice(1);
//                    str[3] = "tea".charAt(0).toUpperCase()  + "tea".slice(1);
//                    str[3] = "T"                            + "ea";
//                    str[3] = "Tea";
//     5th iteration: str[4] = str[4].charAt(0).toUpperCase() + str[4].slice(1);
//                    str[4] = "pot".charAt(0).toUpperCase() + "pot".slice(1);
//                    str[4] = "P"                           + "ot";
//                    str[4] = "Pot";                                                         
//     End of the FOR Loop*/
//   }
  
//   // Step 4. Return the output
//   return str.join(' '); // ["I'm", "A", "Little", "Tea", "Pot"].join(' ') => "I'm A Little Tea Pot"
// }

// titleCase("I'm a little tea pot");


