// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the
//  length of 3. 


let lengthOfLongestSubstring = (str) => {

    let strObj = {}
    results = [];
    for (let i = 0; i < str.length; i++){
        for (let j = i+1; j <= str.length; j++){
            const slice = str.slice(i, j);
            const set = new Set(slice);
            if(slice.length !== set.size) {
                results.push(set);
                break;
            }
        }
    }
    results.sort((a,b) => b-a);
    console.log(results[0].size);
};


const test = "pwwkew";
lengthOfLongestSubstring(test);