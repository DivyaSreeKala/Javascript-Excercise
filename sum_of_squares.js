

let prompt = require('prompt-sync')();
let arr5 = [];
let n = parseInt(prompt("enter the number of elements "));
for(let i=0;i<n;i++){
    console.log("enter ",i+1," number");
    arr5[i]=parseInt(prompt(""));
}
for(i of arr5){
    console.log("squaare of ",i,"is ",i*i)
}