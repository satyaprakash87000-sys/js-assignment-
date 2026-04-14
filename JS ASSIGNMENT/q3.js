let N = parseInt(prompt("Enter N:"));
let K = parseInt(prompt("Enter K:"));

function isPalindrome(num) {
    let str = num.toString();
    let rev = str.split("").reverse().join("");
    return str === rev;
}

let answer = -1;

for (let X = 0; X <= 100000; X++) {
    let val = N + X;
    if (isPalindrome(val) && val % K === 0) {
        answer = X;
        break;
    }
}

alert(answer);