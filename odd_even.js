let prompt = require('prompt-sync')();

let arr4 = [];
let n = parseInt(prompt("enter the number of elements "));
for(let i=0;i<n;i++){
    console.log("enter ",i+1," number");
    arr4[i]=parseInt(prompt(""));
}
for( i in arr4){
    if(arr4[i]%2 == 0)
        console.log(arr4[i]," is even");
    else
        console.log(arr4[i]," is odd");
}