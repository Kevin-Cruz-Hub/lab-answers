// // Easy Going answered
// for(let i = 0; i <= 20; i++){
//     console.log(i)
// }

// // Get Even answered
// for(let i = 0; i <= 200; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }

// // Fizz Buzz answered
// for(let i = 0; i <= 100; i++){
//   if(i % 3 === 0 && i % 5 === 0){
//     console.log('FizzBuzz');
//   }else if(i % 3 === 0){
//     console.log('Fizz');
//   }else if(i % 5 === 0){
//     console.log('Buzz');
//   }else{
//     console.log(i);
//   }
// }

// // Wild Wild Life answered
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
// // 1.
// plantee.splice(2,1,5001)
// console.table(plantee);
// // 2.
// wolfy.splice(3,1,'Gotham City');
// console.table(wolfy);
// // 3.
// dart.splice(3,0,'Hawkins');
// console.table(dart);
// // 4.
// wolfy.splice(0,1,'Gameboy');
// console.table(wolfy);

// //Yell at the Ninja Turtles answered
// const Turtles = ['Donatello','Leonardo','Raphael','Michaelangelo']
// for(let t of Turtles){
//     console.log(t.toUpperCase())
// }

// Methods Revisited answered
const favMovies = ['Jaws', 'The Fellowship of the Ring', 
'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 
'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 
'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 
'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// console.log(`${favMovies[8]}: is on the 8th index`);
// // 1.
// favMovies.sort();
// console.table(favMovies)
// // 2.   I called the favMovies array and gave it a method to sort the items, in this case its in alphabetical order.
// // 3.
// let Q3 = favMovies.pop();
// console.log(Q3);
// // 4.
// favMovies.push('Guardians of the Galaxy');
// console.table(favMovies);
// // 5.
// const Q5 = [];
// for(let i = favMovies.length - 1; i > 0; i--){
//     Q5.push(favMovies[i]);
// }
// console.table(Q5);
// .6 
const firstElement = favMovies.shift();
console.log(firstElement)