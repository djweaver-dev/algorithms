



    const findNumbers = (arr) => {
        
        let dCount = 0;
        arr.forEach(val => {
            if(val<0) val *= -1;
            if(((val.toString().length) % 2) === 0) dCount++;
        })
        console.log(dCount);
    }

    const numbers = [387, 22, 1, -40, 3000, 22, 0];
    findNumbers(numbers);