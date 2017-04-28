
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

// lookUpProfile Algorithm:
  
  // is 'firstName' a contacts firstName i.e does it exist?
  // if it does exist, is 'prop' a property of that contact?
  // --> if both things true - return value of 'prop'(firstName)
  
  // if NOT both are true:
  // if firstName does not exist: return "No such contact"
  // if prop does not exist: return "No such property"
  

function lookUpProfile(firstName, prop){
// Only change code below this line
    var i = 0;
    while (i < contacts.length) {
        if (!contacts[i][firstName] && (!(contacts[i][prop])) {
            i += 1;
        } else if (firstName === contacts[i]["firstName"] && contacts[i][prop]) {
            return contacts[i][prop];
        } else if (firstName !== contacts[i]["firstName"]) {
            return "No such contact";
        } else if (!contacts[i][prop]) {
              return "No such property";
        }
        }
        }


// Change these values to test your function
lookUpProfile("Akira", "likes");

