 console.log("JavaSCript is fun!🥰");

// // VARIABLES
// let fullName, bithYear, job, isMarried;
// fullName = "Khady Bola"; //String
// bithYear = 2001; //Number
// job = "student"; //String
// isMarried = false; //Boolean

// console.log("John Doe");
// console.log(fullName);
// console.log(bithYear);
// console.log(job);
// console.log(isMarried);
// console.log(
//   "my name is " +
//     fullName +
//     ". I was born in " +
//     bithYear +
//     ", \n I am a " +
//     job +
//     " and my marital status is " +
//     isMarried
// );
// console.log(
//   "my name is " +
//     fullName +
//     ". I was born in " +
//     bithYear +
//     ",  I'm a " +
//     job +
//     " and my marital status is " +
//     isMarried
// );

/**Using 'typeof' to check Variables*/
// console.log(typeof fullName);
// console.log(typeof bithYear);
// console.log(typeof isMarried);

// The 7 DATA-TYPES of JavaScript
// 1. Numbers.......numbers have decimals
let myNumber = 7;

// 2. String.....are texts written in-between single or double quotes
let myCountry = "Nigeria";

// 3. Boolean.....Javascript logic which returns either TRUE or FALSE
let _canVote = true;

// 4. Undefined....this is the VALUE if we don't assign any value to a VARIABLE.
// Undefined can be used to set a VAlUE for a VARIABLE also.
let mySchool;
let myDept = undefined;

// 5. Null...is an empty object
let $can_drive = null;

/**Javascript KEYWORDS that can't be used to set VARIABLE */
// 1. name
// 2. new
// 3. keyword
// 4. function
// 5. array
// 6. variable keywords

/**VARIABLE MUTABILITY ===> Between const, let, Var */
// let age = 30;
// age = 40;

// console.log(age);
// const bithYear = 1990;

// let myRegion
// myRegion = 'South-West'
// console.log(myRegion);

// const FavColor = 'blue';
// console.log(FavColor);

// var job = 'Programmer';
// job = 'Teacher'
// console.log(job);

// /**JAVASCRIPT BASIC OPERATORS */
// // Minus Operator (-)
// const thisYear = 2022;
// const ageJohn = thisYear - 1990;
// const ageZarah = thisYear - 2004;
// console.log(ageJohn, ageZarah);


// // The Plus Operator can be used for CONCATENATION
// const myBalance = 2500 + 600;
// const firstName  ='khady';
// const lastName = 'Bola';
// const fullName = firstName + lastName;

// console.log(myBalance);
// console.log(firstName + ' ' +lastName)

// /**JAVASCRIPT ASSIGNMENT OPERATORS */
// // Plus or Equal (+=)
// let salary = 1000;
// console.log (salary);

// let moreSalary = salary += 600;
// console.log(moreSalary);

// // Minus or Equal (-=)
// let fee = 2345;
// let newFee = fee -= 120;


// // Times or Equal (*=)
// let ageSola = 22;
// let ageMummy = ageSola *=2;
// console.log(ageMummy);

// // divide or Equal (/=)
// let nigerPopulation = 1200;
// let ghanaPopulation =200;
// let overall = nigerPopulation /= ghanaPopulation;
// console.log(overall);

// Exponetiation (**)
// const PowerThree = 3 ** 2;
// console.log(PowerThree);


// /**JAVASCRIPT COMPARISON OPERATORS */
// // Less Than (<) and Greater Than (>)
// const isLess = 86 < 72; 
// console.log(isLess);

// // Less or Equal (<=) and Greater or Equal (>=)
// const isGreater = 86 >= 78;  //True
// console.log(isGreater);

// console.log(ageZarah >= 18);  

// //VARIABLES
// const massMark = 78;
// const massJohn =  92

// const heightMark = 1.69;
// const heightJohn = 1.95;

// const BMlMark = massMark / heightMark **2;
// const BMlJohn = massJohn / (heightJohn * heightJohn);

// const hasHigherBml = BMlMark > BMlJohn;

// console.log(BMlMark, BMlJohn)
// console.log(hasHigherBml);


/**CODDING CHALLENGE #2 */
// const massSola = 95;
// const massBola = 85;

// const heightSola = 1.88;
// const heightBola = 1.76;

// const BMlSola = massSola / heightMark **2;
// const BMlBola = massBola / (heightBola * heightBola);

// const HigherBMl = BMlSola > BMlBola;

// console.log(BMlSola, BMlBola)
// console.log(HigherBMl);

 /**JAVASCRIPT STRINGS & TEMPLATE LITERALS */
//  const firstName ='Jane';
//  const lastName = 'Mena';
//  const job = 'Software Developer';
//  const birthYear = 1997;

 // ES5 STRINGS
//  const janeES5 = 'I am ' + firstName + ' ' + lastName + ', \n\ I am a ' + job + ', and I am ' + (2022 - birthYear) + '  years old';
//  console.log(janeES5);

 //ES6 Template Literals
//  const janeES6 = `I'm ${firstName} ${lastName}, I am ${job}, and I am ${2022 - birthYear} years old.`
//  console.log(janeES6);
//  console.log(`We are here learning \n\ how to code`);

 /**JAVASCRIPT DECISION MAKING (IF/ELSE STATEMENT) */
 const ageZarah = 17;
 const  canDriveCar = ageZarah >= 18;
//  console.log(canDriveCar)
 
 /**JAVASCRIPT STRINGS & TEMPLATE LITERALS */
//  if (canDriveCar) {
//      console.log(`Zarah is old enough to drive 🚗`);
//  } else {
//      console.log(`Zarah is too young to drive`);
//  }

////////////////////
const yearOfBirth = 1999;
let century;

// if (yearOfBirth < 2000) {
//     century = 20;
//     console.log(`${century}th`);
// } else {
//     century = 21;
//     console.log(`${century}st`);
// }

// const firstName ='Jane';
const job = 'Student';

if (job === 'Actor') {
    console.log(`${firstName} has attend to different movies`);
} else if (job === 'Teacher') {
    console.log(`${firstName} loves Teaching`);
}  else if (job === 'Doctor')  {
    console.log(`${firstName} likes saving lives`);
} else if (job === 'Tailor') {
    console.log(`${firstName} sows beautiful clothes`);
} else if  (job === 'Footballer') {
    console.log(`${firstName} is Chelsea player`);
} else if (job === 'Soldier') {
    console.log(`${firstName} is so bold`);
} else {
    // console.log(`${firstName} is unemployed`);
} 


 /**JAVASCRIPT TYPE CONVERTION & COERSION */
//  //Convertion
//  const inputYear ='1991';
//  console.log(inputYear)      //String
//  console.log (Number(inputYear));          //Number


//  console.log(Number('John'));           //NaN(Not a Number)
//  console.log(typeof(NaN));


//  const myLocalNum = 23;
//  console.log(String(myLocalNum));           //String
//  console.log(myLocalNum.toString());        //String                            



// Coersion
// when you add a number to a string, it becomes a string
// console.log('I am ' + 23 + ' years old');

// console.log('78' + '42');       // 7842 ==> string
// console.log('78' - '42');       // 36 ==> number
// console.log('72' / '8');        // 9 ==> number
// console.log('20' * '7');        // 140 ==> number
// console.log('23'  - '10' - 3);
// console.log('23'  - '10' + 5);


// Guess the answer
// let n = '1' + 1;
// n = n - 1;
// console.log(n);

//DON MANIPULATION
const firstNumber = document.querySelector('#firstNum')
const secondNumber = document.getElementById('secondNum');
const submitBtn = document.getElementById('submitBtn');
const calcOutput = document.getElementById('calcOutput');

submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const firstValue = Number(firstNumber.value);
    console.log(firstValue);
    console.log(typeof(firstValue));

    const secondValue = Number(secondNumber.value) ;
    // console.log(secondValue);
    // console.log(typeof(secondValue))

    function multiplyNums (a, b) {
        return (a * b);
    }
    calcOutput.textContent = multiplyNums(firstValue, secondValue)

})  



// /**CODDING CHALLENGE ASSIGNMENT 1 */

// const massMark = 78;
// const massJohn =  92

// const heightMark = 1.69;
// const heightJohn = 1.95;

// const BMlMark = massMark / heightMark **2;
// const BMlJohn = massJohn / (heightJohn * heightJohn);

// console.log(BMlMark)
// console.log(BMlJohn)

//  if (BMlMark > BMlJohn) {
//      console.log(`mark's BMl of ${BMlMark} is higher than John's BMl of ${BMlJohn}`)
// } else if (BMlJohn > BMlMark) {
//     console.log(`John's BMl of ${BMlJohn} is higher than Mark's BMl of ${BMlMark}`)
// }

 /**JAVASCRIPT TRUTHY & FALSEY VALUES */

 // Falsy Values
//  console.log(Boolean(0));
//  console.log(Boolean(undefined));
//  console.log(Boolean(''));
//  console.log(Boolean(null));
//  console.log(Boolean(NaN));

//  // Truthy Values
//  console.log(Boolean(27));
//  console.log(Boolean('Ade'));

//  const money = 10;

//  if (money) {
//      console.log('Dont spent it all!')
//      console.log(`Dont spend all that $${money}`)
// } else {
//      console.log('You need to get a job!')
//  }


 /**JAVASCRIPT EQUALITY OPERATOR*/

 // Double-equal (==) 👉 this does type-coersion.
//  console.log('18' == 18);

 // Tripple-equal (===) 👉 this does NOT do type-coersion.
//  console.log('84' === 84);

//  const favNum = String(prompt('What is your favorite number'));
//     console.log(typeof favNum);

//  if (favNum !== 7) {
//      console.log('Your favorite number is a string');
//  } else if (favNum === 7) {
//      console.log('Now, you have a real number');
//  }

 /**JAVASCRIPT BOOLEAN LOGIC */

// AND-Operator (&&) 👉 when ALL conditions are TRUE

// OR- Operator (||) 👉 when One-of-the-conditions is TRUE

// const firstName = 'Alabi';
// const hasDriverLicence = false;
// const hasGoodVision = false;
// const isTired = false;

// if (hasDriverLicence && hasGoodVision && isTired) {
//     console.log(`${firstName} can drive in the night!`)
// } else if (!hasDriverLicence && hasGoodVision && !isTired) {
//     console.log(`Police might arrest Mr. ${firstName}`)
// } else if (!hasDriverLicence && !hasGoodVision && !isTired) {
//     console.log(`${firstName} can drive anytime`)
// }

// CODING CHALLENGE #3
// const scoreDolphins = (96 + 108 + 89 )/ 3
// const scoreKoalas = (88 + 91 + 110) / 3
// console.log(scoreDolphins);
// console.log(scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//     console.log(`Dolphins wins the trophy`)
// } else if (scoreDolphins === scoreKoalas) {
//     console.log(`Koalas wins the trophy`)
// } else if (scoreDolphins === scoreKoalas) {
//     console.log(`They played a drawn match. No winner`)
// }
// CODING CHALLENGE #3
// const scoreDolphins = (97 + 110 + 90) / 3
// const scoreKoalas = (109 + 95 + 93) / 3
// const minPoint = 100;
// console.log(scoreDolphins);
// console.log(scoreKoalas);


// if (scoreDolphins > scoreKoalas && scoreDolphins >= minPoint) {
//     console.log(`Dolphins win the trophy with ${scoreDolphins} points`)
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= minPoint) {
//     console.log(`Kaolas wins the trophy with ${scoreKoalas} points`)
// } else if (scoreDolphins === scoreKoalas && scoreDolphins <= minPoint && scoreKoalas <= minPoint) {
//     console.log(`Nobody wins the match. They have less than ${minPoint} points 🤷‍♂️`)
// }


 /**JAVASCRIPT SWITCH STATEMENTS */

//  const dayOfTheWeek = prompt('pick a day you like');
//  console.log(dayOfTheWeek)
 



//  if (dayOfTheWeek === 'monday') {
//      console.log(`Today is the first day of the week.`)
//  } else if (dayOfTheWeek === 'tuesday') {
//      console.log(`It's a free day.`);
//  } else if (dayOfTheWeek === 'wednesday' || dayOfTheWeek === 'thursday') {
//      console.log(`on ${dayOfTheWeek} I have to go and teach at the bootcamp`)
//  }else if (dayOfTheWeek === 'friday')  {
//      console.log(`${dayOfTheWeek} is for jummah and I will go to mosque`)
//      console.log(`Thank God it's ${dayOfTheWeek} we club all night`)
//  } else if (dayOfTheWeek === 'saturday') {
//      console.log(`It's half day at work. Nothing much!`)
//  } else if (dayOfTheWeek === 'sunday') {
//      console.log(`Yay! It's weekend and I watches football`)
//  } else {
//      console.log(`You have entered a wrong week day....`)
//  }

// switch (dayOfTheWeek) {
//     case 'monday':
//         console.log(`Today is the first day of the week.`);
//         break;
//     case 'tuesday':
//         console.log(`It's a free day.`)
//         console.log(`I can decide to sleep all day`);
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log(`On ${dayOfTheWeek} I have to go and teah at the bootcamp`);
//         break;
//     case 'friday':
//         console.log(`${dayOfTheWeek} is for Jummah and I will go to mosque 🕌`) 
//         console.log(`Thank God it's ${dayOfTheWeek} we club all night...`)
//         break;
//     case 'saturday':
//         console.log(`It's half day at work. Nothing much!`)
//         break;
//     case 'sunday':
//         console.log(`Yay! It's weekend and I watches football`) 
//         break;
//     default:
//         console.log('You have entered a wrong week day.....') 
// }

 /**JAVASCRIPT TERNARY OPERATOR*/
//  const drinkerName = 'Ade'
//  const age = 27;
//  const canDrink = age >= 18 ? 'can drink shayo' : 'can only drink water';
//  console.log(canDrink)

// const canYouMarry = false;
// console.log( canYouMarry ? 'he is marry' : 'he is not marry') 



//  if (age >= 18) {
//      console.log(`${drinkerName} can drink shayo`)
//  } else {
//      console.log(`${drinkerName} can only drink water`)
//  }
 // CODING CHALLENGE #4
const bill = 275
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill as ${bill}, and the tip was ${tip} and the total value is ${bill + tip}`);

// 1. write a Javascript program to display the current time
// Sample Output : current time is : 10 PM : 30

const d = new Date ();
const date = d.getHours();
const _hour = hour > 12 ? hour - 12 : hour;
const minute = d.getHours();
const prepand = hour < 12 ? 'am' : 'pm';

console.log(`Current Time: ${_hour}: ${minute} ${prepand}`)





