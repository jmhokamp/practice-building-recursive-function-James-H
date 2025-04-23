/*


1. Write a function named reverseString that takes a string as input. 

2. The function should: 
    ○ Return the string itself if it contains only one character (base case). 
    ○ Use recursion to reverse the string by concatenating the last character 
        of the string with the result of the recursive call on the remaining part 
        of the string (recursive case). 

3. Test the function with various string inputs to verify its correctness. 

*/


function reverseString(stringTest) {

    //Base: check if string length is 1 or less and return the string if so. 
    //.length pulls string length starting at 1 
    if (stringTest.length <= 1){
        return stringTest;
   
} else {
    //Recursion: .charAt pull the last character of the string, .length - 1 takes string length and subtracts 1 
    //.slice takes everything expect the last character, -1 means one character from the end
    return stringTest.charAt(stringTest.length - 1).concat(reverseString(stringTest.slice(0, -1))) ;
    }
}

//Provided tests
console.log(reverseString("hello")); 
/*
o +++++ hell recursion
ol ++++ hel recursion
oll +++ he recursion
olle ++ h recursion
olleh stop
*/
console.log(reverseString("recursion")); 
console.log(reverseString("a")); 
console.log(reverseString(" ")); 

console.log(reverseString("This is a test String"));
console.log(reverseString("The meaning of life is 42."))