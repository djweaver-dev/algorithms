// Write a function that takes a string as input and reverse only the vowels of a string.

// Example 1:

// Input: "hello"
// Output: "holle"
// Example 2:

// Input: "leetcode"
// Output: "leotcede"

var reverseVowels = function(s) {

    let arrV = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let container = [];
    let container2 = s.split('');
    let indNum = [];
    
    for(let i = 0; i < s.length; i++){
        if(arrV.includes(s[i])){
            container.unshift(s[i]);
            indNum.push(i);
        }
   
    }
    for(let i = 0; i < indNum.length; i++){
        container2.splice(indNum[i], 1, container[i]);
    }
    s = container2.join('');
    console.log(indNum);
    console.log(container);
    console.log(container2);
    console.log(s);
    return s;
};

const term = 'Aa';
reverseVowels(term);