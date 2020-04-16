// Problem No. 49

// Given an array of strings, group anagrams 
// together.

// Example:

// Input: ["eat", "tea", "tan", 
//         "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

const groupAnagrams = (strArr) => {

    
    // let results2 = [];
    // for(let i = 0; i < strArr.length; i++){
    //     let results = [];
    //     for(let j = 1; j < strArr.length; j++){
    //         if(strArr[i].length === strArr[j].length){
    //             let ref1 = strArr[i].split('');
    //             let ref2 = strArr[j].split('');
    //             for(let k = 0; k < ref1.length; k++){
    //                 if(!ref1.includes(ref2[k])) break;
    //                 else if (k === ref1.length-1) {
    //                     //results.push(ref1.join(''));
    //                     results.push(ref2.join(''));
    //                 }
    //             }
    //         }
    //         results2.push(results);
    //     }
    //     //let resSet = new Set(results);
        
    // }
    // console.log(results2);

    // let results = [];
    // for(let k = 0; k < strArr.length; k++){
    //     let strRef1 = strArr[k].split('');
    //     for(let i = 1; i < strArr.length; i++){
    //         let strRef2 = strArr[i].split('');
    //         if(strRef1.length === strRef2.length){
    //             for(let j = 0; j < strRef1.length; j++){
    //                 if(!strRef2.includes(strRef1[j])) break;
    //                 else results.push(strArr[i])
    //             }
    //         }
            
    //     }
    // }

    // console.log(results);

    let anaGroups = {};
    for(let i = 0; i < strArr.length; i++){
        for(let j = 0; j < strArr[i].length; j++){
            if(!anaGroups[strArr[i][j]]) anaGroups[strArr[i][j]] = 1;
            else anaGroups[strArr[i][j]]++;
        }
    }
    console.log(anaGroups);



}

const test = ["eat", "tea", "tan", "ate", "nat", "bat"];
groupAnagrams(test);