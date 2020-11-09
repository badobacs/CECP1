
//While Loop//

const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;
while (currentCard = 'spade') {        
  currentCard = cards[Math.floor(Math.random() * 4)]
  console.log(currentCard);
  i++;
}

// Do...While Statements
let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do {
 cupsAdded++
} while (cupsAdded < cupsOfSugarNeeded);



//Whale Talk


const input = 'turpentine and turtles';

const vowels = ['a', "e", "i", "o", "i"];
let resultArray = [];
for (let inputIndex = 0; inputIndex < input.lenght; inputIndex++){
  //console.log("inputIndex = " + input[inputIndex])
  for(let vowel = 0; vowel < vowels.lengh; vowel++){
    //console.log("vowel =" + vowel);
    if (input[inputIndex] === vowels[vowel]){
      if(input[inputIndex] === 'e'){
        resultArray.push('ee')
      }
      else if (input[inputIndex] === 'u'){
        resultArray.push('uu')

      }
      else{ resultArray.push(input[inputIndex]);

      }
    }
  }
}
console.log(resultArray.join("").toUpperCase());


//Functions as Data

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

// Write your code below
const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
is2p2();
console.log(is2p2.name);

