
// ------------------------------------------------------
// ------------------------------------------------------

var moonPhase = "full";
var foggyNight = true;

if ((moonPhase === 'full') && (foggyNight)){
  console.log("Howwwwlll!!");
} else if(moonPhase === 'mostly full'){
  console.log('Arms and legs are getting hairier');
} else if (moonPhase === "mostly new"){
  console.log('Back on two feet');
} else {
  console.log("Invalid moon phase");
}

// ------------------------------------------------------

var moonPhase = 'full';

switch (moonPhase ){
  case 'full':
  	console.log('Howwlll!');
    break;
	case 'mostly full': 
  	console.log('Arms and legs are getting hairier');
    break;
  case 'mostly new':
  	console.log('Back on two feet');
    break;
  default:
  	console.log('Invalid moon phase');
    break;
}

// ------------------------------------------------------
// ------------------------------------------------------
