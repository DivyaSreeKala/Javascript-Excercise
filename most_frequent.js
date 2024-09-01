let prompt = require('prompt-sync')()
let arr2 = []
let arr3 = [];
let n = parseInt(prompt("enter the number of elements "));
for(let i=0;i<n;i++){
    console.log("enter ",i+1," number");
    arr2[i]=parseInt(prompt(""));
    arr3[i]=0;
}

for(let i=0;i<n;i++){
    for(let j=1;j<n;j++)
    if(arr2[i]==arr2[j])
        arr3[i]++;
}
let lar,ind;
lar = arr3[0]
ind = 0;

    for (let j=1;j<n;j++){
        if(arr3[j]>lar){
            lar = arr3[j];
            ind = j;
        }
    }


console.log("most frequent number is ",arr2[ind])