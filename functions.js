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

