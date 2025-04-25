let inputString = "banana";
let freq ={}

for(let char of inputString){
if(freq[char]){
freq[char]++
}else{
 freq[char] =1;
}
}

console.log(freq)