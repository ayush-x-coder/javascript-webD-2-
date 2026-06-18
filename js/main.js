console.log("Hello World");
let a = 5;
let b = 10;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
let num = 8;
console.log(num % 2 === 0 ? "Even" : "Odd");
let x = 10;
let y = 20;
console.log(x > y ? x : y);
let p = 5;
let q = 10;
[p, q] = [q, p];
console.log(p, q);
let n = 5;
console.log(n * n);
console.log(n * n * n);
let c = 25;
console.log((c * 9) / 5 + 32);
let value = -5;
console.log(value >= 0 ? "Positive" : "Negative");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);
let fact = 1;
for (let i = 1; i <= 5; i++) {
  fact *= i;
}
console.log(fact);
let str = "hello";
console.log(str.split("").reverse().join(""));
console.log(str.length);
let arr = [1, 2, 3, 4];
console.log(arr.reduce((a, b) => a + b, 0));
console.log(Math.max(...arr));
console.log(Math.min(...arr));
let word = "madam";
console.log(word === word.split("").reverse().join(""));
console.log(Math.floor(Math.random() * 100));
console.log(new Date());
let nums = [5, 2, 8, 1];
console.log(nums.sort((a, b) => a - b));




