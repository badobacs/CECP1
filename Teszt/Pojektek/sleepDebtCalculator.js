const getSleepHours = day => {

    switch(day) {
     case 'monday':
      return 8
      break;
     case 'tuesday':
      return 7
      break; 
     case 'wednesday':
      return 8
      break; 
     case 'thursday':
      return 1
      break; 
     case 'friday':
      return 8
      break; 
     case 'saturday':
      return 12
      break; 
     case 'sunday':
      return 8
      break; 
   
      default:
      return "Error!"
    }
    };
   const getActualSleepHours = () => {
   return getSleepHours('monday')  + 
   getSleepHours('tuesday')  + 
   getSleepHours('wednesday')  + 
   getSleepHours('thursday')  +
    getSleepHours('friday') + 
    getSleepHours('saturday')  + 
    getSleepHours('sunday');
   
   }
   
   const getIdealSleepHours = () => {
     const idealHours = 7.5;
   return idealHours * 7;
   };
   const calculateSleepDebt = () => {
   const actualSleepHours = getActualSleepHours();
   const idealSleepHours = getIdealSleepHours(); 
   if (actualSleepHours === idealSleepHours) {
     console.log("You slept perfectly.");
     } else if (actualSleepHours > idealSleepHours) {
       console.log("You've got" + (idealSleepHours - actualSleepHours) + "more sleep than needed");
       } else (actualSleepHours < idealSleepHours) 
     console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
   }
    calculateSleepDebt()
   
   
   
   
   
   
    console.log(getActualSleepHours());