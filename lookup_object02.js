
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];

// for loop ---> 

function lookUpProfile(firstName, prop){
// Only change code below this line
for (var i = 0; i < contacts.length; i++) {
  if (firstName === contacts[i]["firstName"] && contacts[i][prop]) {
    return contacts[i][prop];
  } else if (firstName !== contacts[i]["firstName"] && (!contacts[i][prop])) {
    continue;
  } else if (firstName !== contacts[i]["firstName"]) {
    return "No such contact";
  } else if (!contacts[i][prop]) {
    return "No such property";
  } 
  }
}
// Only change code above this line


// Change these values to test your function
lookUpProfile("Akira", "likes");

// while loop --->

function lookUpProfile(firstName, prop){
var i = 0;
while (i < contacts.length) {
  if (firstName === contacts[i]["firstName"] && contacts[i][prop]) {
    return contacts[i][prop];
  } else if (firstName !== contacts[i]["firstName"] && (!contacts[i][prop])) {
    i += 1
    continue;
  } else if (firstName !== contacts[i]["firstName"]) {
    return "No such contact";
  } else if (!contacts[i][prop]) {
    return "No such property";
  } 
  }
}

// Change these values to test your function

console.log(lookUpProfile("Akira", "number")); // works
console.log(lookUpProfile("Akira", "likes"));  // works
console.log(lookUpProfile("Harry", "number"));  // doesn´t work

// Any ideas what`s wrong with this function? (doesnt seem to increment)