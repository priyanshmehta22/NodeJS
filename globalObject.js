// console.log(global);
global.setTimeout(() => {
  console.log("in the timeout");
}, 3000);
//both works the same way cause global is a global object
setTimeout(() => {
  console.log("in the timeout");
  clearInterval(int);
}, 3000);

const int = setInterval(() => {
  console.log("in the interval");
}, 1000);

console.log(__dirname);
console.log(__filename);
