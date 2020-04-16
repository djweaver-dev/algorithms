//leetcode problem #949

let largestTimeFromDigits = (numArr) => {
    let num1 = 0;
    let num2 = 0;
    let numObj = {};
    let values = [];

    for(let i =0; i < numArr.length; i++){
        numObj[numArr[i]] = 2;
    }

    for(let i = 0; i < numArr.length; i++){
        for(let j = 0; j < numArr.length; j++){
            if(numArr[i] !== numArr[j]){
                values.push(numArr[i].toString() + numArr[j].toString());
            }
        }
    }

    for(let i = 0; i < values.length; i++){
        if((values[i] <= 23) && (values[i] > num1)) num1 = values[i];
    }

    for(let i = 0; i < values.length; i++){
        //if the values of the digits we are cycling through are used in num1 do nothing, 
        //else
        if((values[i] <= 59) && (values[i] > num2)) num2 = values[i];
    }
    console.log(numObj);
    console.log(values);
    console.log(num1 + ":" + num2);
};


const test = [1,2,3,4];
largestTimeFromDigits(test);