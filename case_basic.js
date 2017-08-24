var user = prompt("Are you happy?").toUpperCase();
var gameWon = true;
var isDrunk = false;

switch (user) {
    case "YES":
        if (gameWon || isDrunk) {
            console.log("Yeahhhhheahhh!");
        } else {
            console.log("Yeah, but life still sucks right now ...");
        }
        break;
    case "NO":
        if (gameWon && isDrunk) {
        console.log("There is reason to live!");
        } else {
        console.log("You might as well kill me now");
        }
        break;
    case "MAYBE":
        console.log("Get your *** up and decide!");
        break;
    default:
        console.log("Enter YES, NO or MAYBE !");
}


