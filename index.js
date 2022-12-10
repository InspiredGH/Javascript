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



var length = 180;
var name = "Solomon";
var messages = prompt("Hello there, " + name + "," + " Kindly Enter your Message");
messages.slice(0,181);

if (messages.length <= 180) {
    alert("You have written " + messages.length + " characters");
    alert(messages);
} else {
    alert("You have exceeded the Max length allowed." + (length - messages.length) + " Message sliced");
    alert(messages);
}
