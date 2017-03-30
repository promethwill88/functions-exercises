// TODO: add your solutions here!

//1. Build your own concatenation
function combineWords(word1, word2){
    let result = word1 + word2;
    return result;
}
var result = combineWords('dog','house');
console.log(result);

//2. Using ES6 feature .repeat()
function repeatPhrase(phrase, n){
	phrase = phrase + " ";
    let result = phrase.repeat(n);
    console.log(result);
}
repeatPhrase("Hello", 5);

//2. Using ES5
function repeatPhraseAlt(phrase, n){
    for(i = 0; i <= n; i++){
    	phrase = phrase + " ";
        console.log(phrase);
    }
}
repeatPhrase("Hello", 5);

//3. Build your own Power function
function toTheNthPower(number, power){
    let result = 1;
    for(let i = 0; i < power; i++){
        result = result * number;
    	} 
    return result;
}
toTheNthPower(2, 3);

//4. Area of a circle: pie * r^2
function areaOfCircle(r){
	let pie = Math.PI
	let radiusSquared = r * r;
	let result = pie * radiusSquared;
	return result;
}
areaOfCircle(6);

//5. Pythagorean Theorem: a^2 + b^2 = c^2
function pTheorem(a, b){
    let aSquared = Math.pow(a, 2);
    let bSquared = Math.pow(b, 2);
    let cSquared = aSquared + bSquared;
    return cSquared;
}
pTheorem(2, 3);

//6. Is X Evenly Divisible by Y?
function isDivisibleByY(x, y){
if(x%y === 0){
	return true;
	}
	else{
	return false;
	}
}
isDivisibleByY(10, 2);

//7. Vowel Count
function numberOfVowels(word){
	let counter = 0;
	word = word.toLowerCase();
	for(let i = 0; i < word.length; i++){
		let letterCheck = word[i];
		if(letterCheck === 'a' || letterCheck === 'e' || letterCheck === 'i' || letterCheck === 'o' || letterCheck === 'u' || letterCheck === 'y'){
			counter++;
		}
	}
	return counter;
}
numberOfVowels('aeiou');

//8. Does the array contain "wdi"
let findString = [9, 'Will Fong', false, 'wdi'];
function findWdi(){
	for(let i = 0; i < findString.length; i++){
		if(findString[i] === 'wdi'){
			return true;
		}
	}
	return false;
}
findWdi();

//9. Find the longest word in a sentence
function longestWord (sentence){
	let stringToArray = sentence.split(" ");
	let counter = 0;
	for(let i = 0; i < stringToArray.length; i++){
		if(stringToArray[i].length > counter){
			counter = stringToArray[i].length;
		}
	}
	return counter;
}
longestWord('Do a barrel roll');

//10. Build an ASCII Triangle





