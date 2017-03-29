// TODO: add your solutions here!

//Build your own concatenation
//1.
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
    var result = 1;
    for(var i = 0; i < power; i++){
        result = result * number;
    } 
    return result;
}
console.log(toTheNthPower(2, 3));

//4. Area of a circle: pie * r^2
function areaOfCircle(r){
	let pie = Math.PI
	let radiusSquared = r * r;
	let result = pie * radiusSquared;
	return result;
}
console.log(areaOfCircle(6));

//5. Pythagorean Theorem: a^2 + b^2 = c^2
function pTheorem(a, b){
    let aSquared = Math.pow(a, 2);
    let bSquared = Math.pow(b, 2);
    let cSquared = aSquared + bSquared;
    return cSquared;
}
console.log(pTheorem(2, 3));

//6. Is X Evenly Divisible by Y?



