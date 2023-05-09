console.log('js');

let catName = 'Freja';
let catAge = 4;

console.log(catName);

// the comma only works to concatenate in the console.log
// a space is added automatically 
console.log("The name of the cat is:", catName);
console.log("The age of the cat is:", catAge);

// concatenate with "+"
let sentence = 'This is a sentence about the cat named ' + catName
console.log(sentence);

// It's important to put spaces into the quotes when concatenating this way
sentence = 'The cat is ' + catAge + ' years old.'
console.log(sentence);

catName = 'Ruby'
catAge = 3

sentence = 'Another ' + catAge + ' year old cat is named ' + catName;
console.log(sentence);
