# Javascript Morning Review
Morning review for JavaScript day 3.

## Instructions
### Classes
1. Create a class called Character.
2. Create 3 properties on the Character class - name (string), family (string), alive (boolean).
3. Create 3 methods on the class character called alive, dead, and about. 
	- alive will set alive equal to true.
	- dead will set alive equal to false.
	- about should return a string that says - "I am (character name) and I am (alive/dead)". Based on whether alive is true or false it should output the correct statement.
4. Create 4 new characters using the new Character class.
5. Invoke the about, dead and about method again on a character to see the changes.
6. Create a DireWolf subclass of Character that pulls the name and alive properties from Character and creates two new properties called owner, and color. 
7. Create a method called woof that will return the string saying - "I am (wolf name) and I belong to (owner's name)".
8. Create 4 wolves for the subclass DireWolf.
9. Invoke the dead, about, and woof methods on one of the wolves to see changes.
### Destructuring
1. Destructure children and tywinTitles from tywinData and dragons and danyTitles from danyData.
### Higher Order Functions 
1. Create a function that updates Tywin's title from "Hand of the King" to "Dead on the Pot".
2. Re-write this function using higher order functions if you weren't using them already.
3. Write a function that takes in an array of arrays and replaces numbers divisible by 3 with "Fizz", numbers divisible by 5 with "Buzz", and numbers divisible by 3 and 5 with "FizzBuzz".
4. Re-write this function using only higher order array functions.
### For-in Loops
1. Write a function that kills off one of Dany's dragons using a for in loop.
2. Write a function that outputs either Dany's or Tywin's full title.
