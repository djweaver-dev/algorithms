



let commonChars = (strArr) => {
    let refObj = {};
    let results = [];
    // for(let i = 0; i < strArr[0].length; i++){
    //     if(!refObj[strArr[0][i]]) refObj[strArr[0][i]]= 1;
    //     else refObj[strArr[0][i]]++;
    // }

    // for(let i = 1; i < strArr.length; i++){
    //     let strRef = strArr[i].split('');
    //     for(let j = 0; j < strRef.length; j++){
    //         if(refObj[strRef[j]]) results.push(strRef[j]);
    //     }
    // }
    // console.log(refObj);
    // console.log(results);

    let refArr = [];
    for (let i = 0; i < strArr[0].length; i++){
        refArr.push(strArr[0][i]);
    }
    for (let i = 1; i < strArr.length; i++){
  
    }
    console.log(refArr);
}

const test = ['bella', 'label', 'roller', 'rol'];
commonChars(test);