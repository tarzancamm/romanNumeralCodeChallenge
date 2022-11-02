// Write a function in romanNumerals.js that converts an integer (<= 1,000) to its Roman numeral equivalent.

// Important: You should convert to “old-school Roman numerals”, where subtraction isn’t used. So, for exmple, 4 is “IIII” and 9 is “VIIII”. You may be more used to a different style, where subtraction is used, as 4 would be “IV” and 9 would be “IX”. This is not what we want here (though it’s a good, but much harder challenge).

const toRoman = (num) => {
    if (isNaN(num))
        return NaN;
    
        const romanKey = {M:1000,D:500,C:100,L:50,X:10,V:5,I:1}
        let roman = ''
        for (const property in romanKey) {
          while ( num >= romanKey[property] ) {
            roman += property;
            num -= romanKey[property];
          }
        }
    return roman;
}


console.log(toRoman(99))

