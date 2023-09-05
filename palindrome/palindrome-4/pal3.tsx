

const isLetter = (c : string ) => {
    return c.toLowerCase() !== c.toUpperCase();
}

const isPalindromePhrase = ( pWord : string ) => {
    pWord = pWord.replace(/[^A-Z0-9]/ig, "_");
	var fwdWordArray = [];
    var fwdWord = "";
    var bwdWordArray = [];
    var bwdWord = "";
    for( var i = 0; i < pWord.length; i++ ){
        if( isLetter( pWord[i] ) ){
            fwdWordArray.push( pWord[i] );
        }
    }
    for( i = pWord.length - 1; i >= 0; i-- ){
        if( isLetter( pWord[i] ) ){
            bwdWordArray.push( pWord[i] );
        }
    }
    fwdWord = fwdWordArray.join("");
    bwdWord = bwdWordArray.join("");
    return ( fwdWord == bwdWord );
}

console.log( "hello world: " + isPalindromePhrase("hello world"));
console.log( "A man, a plan, a canal, Panama: " + isPalindromePhrase("A man, a plan, a canal, Panama"));
console.log( "race car: " + isPalindromePhrase("race car"));
console.log( "Was it a car or a cat I saw?: " + isPalindromePhrase("Was it a car or a cat I saw?"));




