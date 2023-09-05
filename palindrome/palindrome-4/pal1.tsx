const reverseString = ( pWord : string ) => {
	const wordLength = pWord? pWord.length : 0;
	const tempWordArray = [];
	for( var i = wordLength; i > 0 ; i-- ){
		tempWordArray.push( pWord.substring( i-1, i ) );
	}
	var reversedData = null;
	if( tempWordArray.length == pWord.length ){
		reversedData = tempWordArray.join('');
	}
	return reversedData;
}