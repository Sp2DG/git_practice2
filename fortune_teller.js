/* The Fortune Teller program is simulating a person that will be able to 
guess what the future will bring to the user.
Created as a game or for fun,to complete a CodeAcademy task.
Author: D Gutierrez - 31/03/2023.*/

function genNum(arr) {
    //returns an element from the called array
    return Math.floor(Math.random() * arr.length)
  }

numb = Math.floor(Math.random() * 13); // lucky number

first = ['week', 'month', 'year']; // random words to make a sentence
second = ['travel abroad,', 'go to a football match,', 'get a fine,'];
third = ['stay indoors', 'get a lucky charm', 'get a scarf', 'start working out'];
favCol = ['blue.', 'red.', 'yellow.', 'green.', 'purple.', 'pink.', 'black.',
          'brown.', 'indigo.' ];

console.log('"Welcome! I am Mandragora, greatest fortune teller in history.' );
console.log('In your future, I foresee that ...Hmmmmmm !');
console.log('During the next '+first[genNum(first)]+ ' you will '+second[genNum(second)]+ ' you should '+ third[genNum(third)]);
console.log('your lucky stars number will be '+ numb +' and forget about your favourite ' 
            +'colour from now on, it should be '+ favCol[genNum(favCol)]+ '"');

