
const prompt = require('prompt-sync')()
let arr1 = [];
var n = parseInt(prompt("enter the number of elements "));
for(let i=0;i<n;i++)
{
    console.log("enter ",i+1," number");
    arr1[i]=parseInt(prompt(""));
}
let flag = 0;
for(let i=2;i<arr1[0];i++){
if(arr1[0]%2== 0)
    flag = 1
}
  
if(flag == 1)
    console.log("not prime");
else
    console.log("prime");
