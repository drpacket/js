let moonPhase = 'full';
let isFoggyNight = false;

if (moonPhase === 'full' || isFoggyNight) {
  console.log('Howl!');
} else if (moonPhase === 'mostly full') { console.log('Arms and legs are getting hairier');
                                        } else if (moonPhase === 'mostly new') { console.log('Back on two feet');
} else if (moonPhase === 'new') {
  console.log('I swear I am not a werewolf.');
} else {
  console.log('Invalid moon phase');
}