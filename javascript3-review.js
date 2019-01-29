// Create a class called charater that has a name, family, and alive property. Name and family will be strings while alive will be a boolean. Create 3 methods on the class character called alive, dead, and about. Alive will set alive equal to true, dead will set alive equal to false, and about should return a string that says - "I am (character name) and I am (alive/dead)". Based on whether alive is true or false it should output the correct statement.

// class Character {
//   constructor(name, family, alive) {
//     this.name = name;
//     this.family = family; 
//     this.alive = true;
//   }

//   alive() {
//     this.alive = true;
//   }

//   dead() {
//     this.alive = false;
//   }

//   about() {
//     console.log(`I am ${this.name} and I am ${this.alive ? "alive" : "dead"}.`);
//   }
// }

// Create 4 characters based on the Character class

// let JohnSnow = new Character("John Snow", "Stark", true);
// let LittleFinger = new Character('Litle Finger', "Baelish", true);
// let EddardStark = new Character("Eddard Stark", "Stark", true);
// let Joffrey = new Character("Joffrey Lannister", "Baratheon", true);

// Invoke the about, dead and about method again on a character to see the changes.


// EddardStark.about();
// EddardStark.dead();
// EddardStark.about();

// Create a DireWolf subclass of Character that pulls the name and alive properties from Character and creates two new properties called owner, and color. We also want to create a method called woof that will return the string saying - "I am (wolf name) and I belong to (owner's name)"

// class DireWolf extends Character {
//   constructor(name, alive, owner, color) {
      //Super pull name and alive properties from parent class. This also gives the subclass DireWolf access to all of the Character methods.
//     super(name, alive);
//     this.owner = owner;
//     this.color = color;
//   }

//   woof() {
//     console.log(`I am ${this.name} and I belong to ${this.owner}`);
//   }
// }

// Create 4 wolves for the subclass DireWolf

// let Nymeria = new DireWolf("Nymeria", true, "Arya", "Light Grey");
// let Summer = new DireWolf("Summer", false, "Bran", "Light Brown");
// let Ghost = new DireWolf("Nymeria", true, "John", "White");
// let GreyWind = new DireWolf("Grey Wind", true, "Rob", "Brown");

// Invoke the dead, about, and woof methods on one of the wolves

// Nymeria.dead();
// Nymeria.about();
// Nymeria.woof();

// API data

// let tywinData = {
//   name: "Tywin Lannister",
//   tywinTitles: [
//       "Lord of Casterly Rock",
//       "Shield of Lannisport",
//       "Warden of the West",
//       "Hand of the King",
//       "Savior of the City (of King's Landing)"
//   ],
//   children: {
//     leastFav: "Tyrion",
//     secondFav: "Cersei",
//     fav: "Jamie"
//   }
// }

// let danyData = {
//   name: "Daenerys Targaryen",
//   danyTitles: [
//     "Queen of the Andals, the Rhoynar, and the First Men",
//     "Protector of the Seven Kingdoms",
//     "Khaleesi of the Great Grass Sea",
//     "Lady of Dragonstone"
//   ],
//   dragons: {
//     small: "Viserion",
//     medium: "Rhegal",
//     large: "Drogon"
//   }
// }

// Destructure children and tywinTitles from tywinData and dragons and danyTitles from danyData.


// const { children, tywinTitles } = tywinData;
// const { dragons, danyTitles } = danyData;

// Create a function that updates Tywin's title from "Hand of the King" to "Dead on the Pot";

// const updateTitle = arr => {
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] === "Hand of the King") {
//       arr[i] = "Dead on the Pot"
//     } 
//   }
//   return arr;
// }

// Re-write this function using higher order functions.

// const updateTitle = arr => {
//   return arr.map(title => title === "Hand of the King" ? title = "Dead on the Pot" : title);
// }

// updateTitle(tywinTitles);

// Write a function that kills off one of Dany's dragons using a for in loop. 

// const dragonNoMore = obj => {
//   for(let key in obj) {
//     if(obj[key] === "Viserion") {
//       delete obj[key];
//     }
//   }
//  return obj;
// }

// dragonNoMore(dragons);
// console.log(dragons);

// const fullTitle = obj => {
//   for(let key in obj) {
//     console.log(obj[key]);
//   }
// }


// fullTitle(danyTitles);

// let numsArr = [[1, 2, 3, 6], [5, 7], [9, 10, 11, 12, 15, 20, 21]];


// Write a function that takes in an array of arrays and replaces numbers divisible by 3 with "Fizz", numbers divisible by 5 with "Buzz", and numbers divisible by 3 and 5 with "FizzBuzz".

// function fizzBuzz(arr) {
//   for(let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < arr[i].length; j++) {
//       if(arr[i][j] % 3 === 0 && arr[i][j] % 5 === 0) {
//         arr[i][j] = "FizzBuzz";
//       } else if(arr[i][j] % 3 === 0) {
//         arr[i][j] = "Fizz"
//       } else if(arr[i][j] % 5 === 0) {
//         arr[i][j] = "Buzz"
//       }
//     }
//   }
//   return arr; 
// }

// Re-write this function using only higher order functions.
// const fizzBuzzES6 = arr => {
//   return arr.map(innerArr => innerArr.map(num => {
//     if(num % 3 === 0 && num % 5 === 0) {
//       num = "FizzBuzz";
//     } else if(num % 3 === 0) {
//       num = "Fizz"
//     } else if(num % 5 === 0) {
//       num = "Buzz"
//     }
//     return num
//   }
//   ));
// }

// Write a function that finds the sum of each of the arrays only using high order array functions.
// innerSum(numsArr);
// const innerSumES6 = arr => {
//  return arr.map(innerArr => innerArr.reduce((a, b) => a + b));
// }

// fizzBuzz(numsArr);
// innerSum(numsArr);