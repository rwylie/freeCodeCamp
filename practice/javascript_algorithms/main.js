//freecodecamp practice

//template literals:
//const resultDisplayArray = arr.map(item => `<li class="text-warning">${item}</li>`);

//example of Object Literal Declarations using simple fields

// const createPerson = (name, age, gender) => {
//   "use strict";
  // change code below this line
  // return {
  //   name,
  //   age,
  //   gender
  // };
  // change code above this line
// };
// console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object

//concise declarative functions with ES6
// const bicycle = {
//   gear: 2,
//   setGear(newGear) {            * changed from setGear: function(newGear) {}
//     "use strict";
//     this.gear = newGear;
//   }
// };

// Constructor
//
// class Vegetable {
//     constructor(name) {
//       this.name = name;
//     }
//   }


//basic algorithms

// function findElement(arr, func) {
//   let num = 0;
//
//   for(var i = 0; i < arr.length; i++) {
//     num = arr[i];
//     if (func(num)) {
//       return num;
//     }
//   }
//
//   return undefined;
// }

// This one seriously confuses me... need to work more on object properties :p
// function updateRecords(id, prop, value) {
//   if (prop === "tracks" && value !== "") {
//    if(collection[id][prop]) {
//     collection[id][prop].push(value);
//    }
//    else {
//     collection[id][prop]=[value];
//    }
//   } else if (value !== "") {
//     collection[id][prop] = value;
//   } else {
//     delete collection[id][prop];
//   }
//
//   return collection;
// }

// function booWho(bool) {
//       return typeof bool === 'boolean';
//     }
//
//     // test here
//     booWho(null);
