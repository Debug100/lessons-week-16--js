/*
 lesson => 115
    Destructuring
    "is a JavaScript expression that allows us to extract data from arrays ,
        objects , and maps and set them into new , distinct variables "
        Destructuring Array
*/

let a = 1;
let b = 2;
let c = 3;
let d = 4;

let myFriends = ["Ahmed", "Sayed", "Ali", "Maysa"];

[a = "A", b, c, d, e = "osama"] = myFriends;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e); // undefined

let [x, y, , z] = myFriends;

console.log(x);
console.log(y);
console.log(z);

/*
lesson => 116
    Destructuring
        Destrucuting Array Advance Examples
*/

let myFriends2 = [
  "Ahamed",
  "Sayed",
  "Ali",
  ["Shady", "Amr", ["Mohamed", "Gamal"]],
];

console.log(myFriends2[3][2][0]);

let [, , , [a2, , [, b2]]] = myFriends2;

console.log(a2); //Shady
console.log(b2); // Gamal

/*
lesson => 117
    Destructuring Array => Swapping Variables
*/

let book = "video";
let video = "Book";

// // Save Book Value In Stash
// let stash = book; //video

// // Change Book Value
// book = video; // Book

// // Change Video Value
// video = stash; // video

[book, video] = [video, book]; // woow

console.log(book);
console.log(video);

/*
lesson => 118
    Destucturing
        Destructuring Object
*/

const user = {
  theName: "Osama",
  theAge: 39,
  theTitle: "Developer",
  theCountry: "Egypt",
  theColor: "black",
  skills: {
    html: 70,
    css: 80,
  },
};

// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.theTitle);
// console.log(user.theCountry);

// let theName = user.theName;
// let theAge = user.theAge;
// let theTitle = user.theTitle;
// let theCountry = user.theCountry;

// console.log(theName);
// console.log(theAge);
// console.log(theTitle);
// console.log(theCountry);

// ({theName, theAge, theTitle, theCountry} = user)
// const {
//   theName: n,
//   theAge: g,
//   theCountry,
//   theColor: co = "gray",
//   skills: { html:h , css },
// } = user;

// console.log(theName);
// console.log(theAge);
// console.log(theCountry);

/*
lesson => 119
    Destructuring
        Destructuring Object
        Naming The Variables
        Add New Propperty
        Nested Object
        Destructuring The Nested Object Only
*/

// console.log(n);
// console.log(g);
// console.log(theCountry);
// console.log(co);
// console.log(`My HTML Skill progress Is ${h}`);
// console.log(`My css Skill progress Is ${css}`);

// const{html:skillOne,css:skillTwo} = user.skills;

// console.log(skillOne);
// console.log(skillTwo);

/*
lesson => 120
  Destructuring
    Destructruing Function Parameters
*/
showDetalis(user);

// function showDetalis(obj){
//   console.log(`Your Name Is ${obj.theName}`)
//   console.log(`Your Age Is ${obj.theAge}`)
//   console.log(`Your css  Skills  Progress Is ${obj.skills.css}`)
// }

function showDetalis({ theName: n, theAge, skills: { css } } = user) {
  console.log(`Your Name Is ${n}`);
  console.log(`Your Age Is ${theAge}`);
  console.log(`Your css  Skills  Progress Is ${css}`);
}

/*
lesson => 121
  Destructruing : is a syntax for extracting values from arrays or properties from objects into distinct variables.
    Destructuring Mixed Content
*/

const user2 = {
  theName: "osama",
  theAge: 39,
  skills: ["HTML", "CSS", "JavaScript"],
  addresses: {
    egypt: "Cairo",
    Ksa: "Riyadh",
  },
};

const {
  theName: n,
  theAge: ag,
  skills: [, , three],
  addresses: { egypt: ad },
} = user2;

console.log(`Your Name Is ${n}`);
console.log(`Your Age is ${ag}`);
console.log(`Your Addresses Is ${ad}`);
console.log(`Your  Last Skill Is ${three}`);

/*
lesson => 122
  Desturcturing
    Challenge
*/

let chosen = 3;

let myFriends3 = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

if (chosen === 1) {
  const [
    {
      title,
      age,
      available,
      skills: [, two],
    },
    ,
  ] = myFriends3;
  const availability = available ? "available" : "not available";
  console.log(title);
  console.log(age);
  console.log(availability);
  console.log(two);
} else if (chosen === 2) {
  const [
    ,
    {
      title,
      age,
      available,
      skills: [, two],
    },
  ] = myFriends3;
  const availability = available ? "available" : "not available";
  console.log(title);
  console.log(age);
  console.log(availability);
  console.log(two);
} else if (chosen === 3) {
  const [
    ,
    ,
    {
      title,
      age,
      available,
      skills: [, two],
    },
  ] = myFriends3;
  const availability = available ? "available" : "not available";
  console.log(title);
  console.log(age);
  console.log(availability);
  console.log(two);
}
