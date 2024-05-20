//Question 148:
setTimeout(()=>{
    console.log("Hello world");
    
},1000)


//Question 149:
console.log("Start");

setTimeout(()=>{
console.log("Callback Executed");

},0)

console.log("End");


//Question 150:
console.log("before Synchronous Operation");

for (let i = 0; i < 1e9; i++) {}
console.log("After Synchronous Operation");
console.log("\n");

console.log("Before Asynchronous Operation");
setTimeout(() => {
  console.log("Asynchronous Operation Completed");
}, 0);
console.log("After Asynchronous Operation");