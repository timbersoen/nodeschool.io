const numbers = [...process.argv].slice(2);
let sum = 0;
let number;

while(number = numbers.pop()){
    sum += +number;
}

console.log(sum);
