
const isLetter = (c : string ) => {
    return c.toLowerCase() !== c.toUpperCase();
}

const isPalindrome = ( pWord : string ) => {
    pWord = pWord.toLowerCase();
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
