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

// var name = prompt("What's your name?"); 
// var first = name.slice(0,1);
// var second = name.slice(1,name.length);
// alert("Hello " + first.toUpperCase() + second.toLowerCase());

function titleCase(name) {
    // prompt to enter your name
    name = prompt("what's Your Name?")

    // Step 1. Lowercase the string
    name = name.toLowerCase();
    // name = "I'm a little tea pot".toLowerCase();
    // name = "i'm a little tea pot";

    // Step 2. Split the nameing into an array of nameings
    name = name.split(' ');
    // name = "i'm a little tea pot".split(' ');
    // name = ["i'm", "a", "little", "tea", "pot"];

    // Step 3. Create the FOR loop
    for (var i = 0; i < name.length; i++) {
        name[i] = name[i].charAt(0).toUpperCase() + name[i].slice(1);
        /* Here name.length = 5
          1st iteration: name[0] = name[0].charAt(0).toUpperCase() + name[0].slice(1);
                         name[0] = "i'm".charAt(0).toUpperCase()  + "i'm".slice(1);
                         name[0] = "I"                            + "'m";
                         name[0] = "I'm";
          2nd iteration: name[1] = name[1].charAt(0).toUpperCase() + name[1].slice(1);
                         name[1] = "a".charAt(0).toUpperCase()    + "a".slice(1);
                         name[1] = "A"                            + "";
                         name[1] = "A";
          3rd iteration: name[2] = name[2].charAt(0).toUpperCase()   + name[2].slice(1);
                         name[2] = "little".charAt(0).toUpperCase() + "little".slice(1);
                         name[2] = "L"                              + "ittle";
                         name[2] = "Little";
          4th iteration: name[3] = name[3].charAt(0).toUpperCase() + name[3].slice(1);
                         name[3] = "tea".charAt(0).toUpperCase()  + "tea".slice(1);
                         name[3] = "T"                            + "ea";
                         name[3] = "Tea";
          5th iteration: name[4] = name[4].charAt(0).toUpperCase() + name[4].slice(1);
                         name[4] = "pot".charAt(0).toUpperCase() + "pot".slice(1);
                         name[4] = "P"                           + "ot";
                         name[4] = "Pot";                                                         
          End of the FOR Loop*/
    }

    // Step 4. Return the output
    return name.join(' '); // ["I'm", "A", "Little", "Tea", "Pot"].join(' ') => "I'm A Little Tea Pot"
}


alert(titleCase(name));





