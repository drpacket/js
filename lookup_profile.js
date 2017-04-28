
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


function lookUpProfile(firstName, prop){
// Only change code below this line 
// lookUpProfile Algorithm:
  
  // is 'firstName' a contacts firstName i.e does firstName === and objects firstN?
  // AND (&&) is that objects 'prop' value present - i.e is it undefined?
  for (var i = 0; i < contacts.length; i++) {
      if (firstName === contacts[i].firstName && contacts[i][prop] !== undefined) {
          return contacts[i][prop];
          // --> if both things true - return value of 'prop'(firstName)
      } else if (firstName === contacts[i].firstName && contacts[i][prop] === undefined) {
          return "No such property";
      }
  }
return "No such contact";  
}
      // } else if (contacts[i].firstName === undefined) {
      //     return console.log("No such contact");
      //   // if firstName does not exist: return "No such contact"
       
        // if prop does not exist: return "No such property"
      
 
  
// Only change code above this line

// Change these values to test your function
lookUpProfile("Akira", "likes");

console.log(lookUpProfile("Akira", "likes"));
console.log(lookUpProfile("Akira", "number"));
console.log(lookUpProfile("Harry", "likes"));
console.log(lookUpProfile("Sherlock", "likes"));
console.log(lookUpProfile("Harry", "lastName"));

console.log(lookUpProfile("Bob", "number"));
console.log(lookUpProfile("Sherlock", "toys"));

// console.log(contacts[2].number);