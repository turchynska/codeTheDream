// let name = "Joe";
// let surName = "Doe";
// let age = 45;
// age = 30;
// console.log(age)
// console.log(name);
// console.log(surName);

// const pi = 3.14;
// pi = 4;
// console.lo9g(pi)

// let result = 3 + 2 - 76 * (1 + 1);
// console.log(result)

// console.log(23 + 97);
// console.log((4 + 6 + 9) / 77);

// let a = 10;
// console.log(a)
// a = 45;
// console.log(a)

// let b = 7 * a;
// console.log(b)

// const max = 57;
// const actual = max - 13;
// const percentage = actual / max;
// console.log(percentage);

// let counter = 3;
// ++counter
// console.log(counter)

// let str = "HEllo";
// let str2 = 'Single quotes are ok too';
// let srt3 = `Here is ${str}`
// console.log(srt3)

// let isBigger = 5 > 1;
// console.log(isBigger)

//STRING
// const string = "The revolution will not be televised";
// console.log(string)
// const badString = string;
// console.log(badString)

// const name = "Michael";
// const greeting = `Hello ${name}`;
// console.log(greeting)

// const one = "Hello";
// const two = " how are you?";
// const joined = `${one}${two}`;//concatenation
// console.log(joined)


// const btn = document.querySelector("button");
// function greet() {
//     const name = prompt("What is your name?");
//     const greeting = document.querySelector("#greeting");
//     greeting.textContent = `Hello ${name}, nice to meet you`
// }

// btn.addEventListener("click", greet);

//Concatenation +
// const name = "Chris";
// const greeting = "Hello";
// console.log(greeting + " " + name);

// const song = "Forever young";
// const score = 9;
// const highestScore = 10;
// const output = `I like the song ${song}. I gave it a score of ${(score / highestScore) * 100}`;
// console.log(output)

// const bigmouth = "I've got no right to take my place…";
//  console.log(bigmouth)


//NUMBERS + STRING
// const name = "Front ";
// const number = 242;
// console.log(name + number);

//number()
// const myString = "1234";
// const myNumber = Number(myString);
// console.log(typeof myNumber)

//string
// const myNum2 = 123;
// const myStr2 = String(myNum2);
// console.log(typeof myStr2 )

//length
// let text = "WREYIDNDONQ";
// let length = text.length;
// console.log(length)

//charCodeAt()
// let text = "Hello World";
// let char = text.charCodeAt(0)
// console.log(char)

//slice
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-7);
// console.log(part)

//concat
// let text1 = "Hello";
// let text2 = "World!";
// let text3 = text1.concat(" ", text2);
// console.log(text3)

//padstart
// let text = "5";
// let padded = text.padStart(4, "0");
// console.log(padded)

//Boolean
// let a = 0;
// console.log(Boolean(a))

// let b = "0";
// console.log(Boolean(b))

// console.log(a == b)

//if else
// const preferDark = false;
// const colorofulMode = true;

// if (preferDark) {
//     console.log('dark mode set!');
//     document.body.style.background = 'black'
// } else if (colorofulMode){
//     console.log("colorofulMode set!")
//     document.body.style.background = 'yellow'
// } else {
//     console.log('light mode set!')
//     document.body.style.background = 'white';
// }


//switch case
// const colorMode = 'colorized';

// switch (colorMode) {
//     case "colorized":
//         console.log("colorMode set!");
//         document.body.style.background = 'blue';
//         break;
//     case 'light':
//         console.log('light mode is set');
//         document.body.style.background = 'white';
//         break;
//     default:
//         console.log('dark mode is set');
//         document.body.style.background = 'black'
// }


//Date
// let now = new Date();
// console.log(now)


//Create a variable "randomNum" to be a random number generator that randomly returns either the number 1, 2, or 3
// (you can use this resource to help you solve how to do this part: https://www.w3schools.com/js/js_random.asp).
// Now let's make a "Magic 8 Ball" using if elseif else that returns a different phrase for each of the three possible numbers.
// If your random number is 1, console.log the phrase "It is certain.".
// If it is 2, console.log "Perhaps.".
// If it is 3, console.log "Absolutely not.".

// STRETCH GOAL: Complete Q9 using a switch statement instead of if elseif else.
// function magic8Ball() {
//     let randomNum = Math.floor(Math.random() * 3) + 1;
    
//     switch (randomNum) {
//         case 1:
//             console.log("It is certain")
//             break;
//         case 2:
//             console.log("Perhaps.")
//             break;
//         case 3:
//             console.log("Absolutely not.")
//             break;
//         default:
//             console.log("Error! Something went wrong")
        
//     }
// }





// ---------- QUESTION 10 ----------
// Declare a variable named "exampleNum".  Give it the value of a floating point number with 4 decimal places.
// Using a Number method round it to the nearest two decimal place. Example if the number is 21.4572, exampleNum should become 21.46.

// STRETCH GOAL: Achieve the same results as Q10 using Math methods instead of Number methods.
//  HINT: you may need to alter the variable over a series of calculations/method uses.

// PUT YOUR CODE HERE
// let exampleNum = 35.4442;
// exampleNum = parseFloat(exampleNum.toFixed(2))
// console.log(exampleNum)
// Don't forget your console.logs!



// ---------- QUESTION 12 ----------
//Create a function titled 'messageString'.  Inside the function,  declare a variable named 'message' and assign
// it the string "Welcome to Code the Dream".  Return the 'message' variable.

// EXAMPLE LOG:
//    console.log("Q12: ", messageString());
// EXAMPLE OUTPUT:
//    Q12: Welcome to Code the Dream!

// function messageString() {
//     const message = "Welcome to Code the Dream!"
//     return message;
// }
//  console.log("Q12: ", messageString());

//PUT YOUR CODE HERE



// ---------- QUESTION 13 ----------
// Create a function called 'combineStrings'.  Inside the function, declare two variables named 'string1' and 'string2'.
// Assign them the strings 'Good' and 'Evening' respecitvely.  Return the two strings concatenated with a space in between.

// EXAMPLE LOG:
//    console.log("Q13: ", combineStrings());
// EXAMPLE OUTPUT:
//    Q13: Good Evening

//PUT YOUR CODE HERE
// function combineStrings() {
//     let string1 = "Good";
//     let string2 = "Evening"
//  return `${string1} + " " ${string2}`
// }
// console.log("Q13: ", combineStrings());
 




// ---------- QUESTION 14 ----------
// Let's start working with parameters.  Create a function called 'useParams' that takes one parameter and returns that parameter with
// the all letters capitalized.

// EXAMPLE LOG:
//    console.log("Q14: ", useParams("hello"));
// EXAMPLE OUTPUT:
//    Q14 HELLO

//PUT YOUR CODE HERE
// let word;
// function useParams(word) {
//     return word.toUpperCase()
// }
// console.log("Q14: ", useParams("hello"));




// ---------- QUESTION 15 ----------
// That was a lot of math! Now let's work with strings... Create two variables named 'word1' and 'word2'
// and assign them any strings you want.  Then create a function called 'biggestStringLength' that takes word1 and word2 as
// parameters and returns the length of the longer string. If they are of equal length, just return that length.  Stretch your skills
// by making an empty string and seeing what happens in that situation.

// EXAMPLE LOG:
//    console.log("Q15: ", biggestStringLength(word1, word2));
// EXAMPLE OUTPUT: (if your word1 was 'Code' and word2 was 'Dream')
//    Q15: 5

// PUT YOUR CODE HERE
// let word1 = "Sunshine";
// let word2 = "Rainy";

// function biggestStringLength(word1, word2) {
//     if (word1.length > word2.length) {
//         return word1.length;
//     } else if (word2.length < word1.length) {
//         return word2.length;
//     } else {
//         return word1.length
//     }
// }
// let emptyString = " ";
// console.log(biggestStringLength(emptyString, word1))



// function handleLikePost(step) {
//   let likeCount = 0;
//   return function addLike() {
//     likeCount += step;
//     return likeCount;
//   }
// }

// const doubleLike = handleLikePost(2);

// console.log(doubleLike());
// console.log(doubleLike());
// console.log(doubleLike());



// const isAuthenticated = true;
// let cartItemCount = 0;

// if (isAuthenticated) {
//   // add item to cart
//   cartItemCount = 1;
// } else {
//   // tell user to login
// //   console.log("Please log in!");
//   cartItemCount = 0;
// }

// const cartItemCount = isAuthenticated ? 1 : 0;
// console.log(cartItemCount);





// const age = 12;

// let greeting;

// if (age < 10) {
//   greeting = "Hey there";
// } else if (age > 18) {
//   greeting = "Greetings";
// } else if (age > 10) {
//   greeting = "What's up?";
// } else {
//   greeting = "That's an interesting age!";
// }
// console.log(greeting);

// const greeting =
//   age < 10
//     ? "Hey there"
//     : age > 18
//     ? "Greetings"
//     : age > 10
//     ? "What's up?"
//     : "That's an interesting age!";
// console.log(greeting);


// ---------- QUESTION 8 ----------????????????????????????????????????
// Write a function called 'insertInArray' that takes an array parameter, makes a NEW array with the value '0' inserted at the second position in the NEW array.  The function should return the NEW array.  Use your 'full' variable from Question 6 to test.  NOTE: Assigning an array to a new variable does not make a copy, it's another reference to the same array.  To make a copy you can use the slice() method as in this example:
// let newArray = originalArray.slice()
// LEARNING MOMENT: Also console log the variable 'full' to compare the new array to the original.

// EXAMPLE LOG:
//    console.log("Q8: ", insertInArray(full));
//    console.log("original array: ", full);
// EXAMPLE OUTPUT: (if the array assigned to variable 'full' is ["dream", 19, "code", 24, 180])
//    Q8: ["dream", 0, 19, "code", 24, 180]
//    original array: ["dream", 19, "code", 24, 180]

// PUT YOUR CODE HERE

// ---------- QUESTION 9 ----------????????????????????????????????????????????????
// Write a function called 'compareArrays' that takes two Array parameters (containing numbers or strings only) and returns true if they are equal, false if not.  The purpose of this function should be to look at each element of the two arrays and compare them, returning false when they either hit two items that don't match, or returning false if the two arrays themselves are different lengths. You can test this with the 'empty' and 'full' variables from Question 6, and/or you can create a variable called 'compare' and assign it an array identical to 'full' to compare those.  To further test your function's accuracy, create a new variable called 'part' that is a partial copy of the 'full' variable and test that as well.

// REMEMBER: In JavaScript, 1 === '1' is false, but 1 == '1' is true. You'll need to use the triple equals operator which is more strict because it compares data type.

// EXAMPLE LOG:
//    console.log("Q9 same: ", compareArrays(full, compare));
// EXAMPLE OUTPUT: (if both arrays assigned to variable 'full' and 'compare' are ["dream", 19, "code", 24])
//    Q9 same: true

// EXAMPLE LOG:
//    console.log("Q9 different: ", compareArrays(full, empty));
// EXAMPLE OUTPUT: (if using variables from Question 6)
//    Q9 different: false

// EXAMPLE LOG:
//    console.log("Q9 partial: ", compareArrays(full, part));
// EXAMPLE OUTPUT: (if 'full' variable is ["dream", 19, "code", 24] and if 'part' variable is ["dream", 19, "code"])
//    Q9 different: false

// PUT YOUR CODE HERE


//MATH floor & random & round
// let randomNumber = Math.random();
// console.log(randomNumber)

// let numCards = 52;
// let cardsNumber = Math.floor(numCards * Math.random()) + 1;
// console.log(cardsNumber)

// let score = 8.3;
// let roundedScore = Math.round(score);
// console.log(roundedScore)


//LOOP while && for && do while & break & continue
// for (let i = 1; i <= 3; i++){
//     console.log("Count:" + i)
// }

// let i = 0;
// while(i < 3){
//     console.log("Step:" + i);
//     i++;
// }

// let i = 0;
// do {
//     console.log("Step:" + i)
//     i++;
// } while (i < 3);

// for (let i = 0; i < 5; i++){
//     if (i === 3) break;
//     console.log(i)
// }

// for (let i = 0; i < 5; i++){
//     if (i === 2)continue
//         console.log(i)
// }

//ARRAY Map ///reduce
// let books = ["harry potter", 'lord of the ringd', ' the obbit'];
// let upperCase = books.map((book) => book.toUpperCase());
// console.log(upperCase)

// let pages = [150, 200, 300, 400];
// let totalPages = pages.reduce((total, book) => total + book, 0)
// console.log(totalPages)