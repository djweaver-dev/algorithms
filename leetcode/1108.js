
// Given a valid (IPv4) IP address, return a defanged version of that IP address.
// A defanged IP address replaces every period "." with "[.]".
// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"

const IPaddr = '1.1.1.1';

var defangIPaddr = function(address) {
    let arr = address.split('.');
    for (let i = 0; i < arr.length; i++) {
        if(i % 2 !== 0) arr.splice(i, 0, '[.]');
    }
    return (arr.join(''));
};

defangIPaddr(IPaddr);