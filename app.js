// javascript array

//how to create an array
const nums = [12, 13, 14, 41 'Ben', [1,2,3], () => {console.log('Hello')},];


// You Do section
const movies = [
    'Days of Thunder',
    'Twister',
    'Sinners'
]

//Reading An Array

const firstMovie = movies[0]; // Days of Thunder


console.log(movies.length) // get the length

console.log('this is the last movie:', movies[movies.length -1]); // 

console.log(movies.at(-1));


//Manipulation

//update existing elements
movies[1] = 'Friendship';

console.log(movies)

//pop to add to array
movies.push('Barbie')

console.log(movies)



//or push to remove last item of array

movies.pop()

console.log(movies)


////////////
/*
Exercise 2: Add strings to the array

1) Add 'pizza' and 'cheeseburger' to the `foods` array. 

Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.

Complete Exercise 2 in the space below:
*/


pop.foods('pizza','cheeseburger');
console.log(foods)

console.log('Exercise 2 result:', foods);
