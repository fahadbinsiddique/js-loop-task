// Write a while loop that prints all the odd numbers between 1 and 50.

let one = 1;
while (one<50) {
    if(one%2!==0)
        console.log(one);
        one++;
}
console.log('one');

// Using a for loop, print all the even numbers from 2 to 100.

for (let index = 1; index <= 100; index++) {
    if(index%2==0){
        
        console.log(index);
    }
}
console.log('TWO');
// Given an array of numbers [3, 8, 12, 5, 9], use a for loop to calculate the sum of the elements in the array.

let arry = [3,8,12,5,9];
let sum = 0;
for (let i = 0; i < arry.length; i++) {

    sum =sum+ arry[i];
    
}
console.log(sum);
console.log('THREE');
// Use a while loop to iterate through the array [4, 15, 23, 42, 8, 16] and print each element.

let array4 = [4,15,23,42,8,16];
let i4 = 0;

while (i4 <array4.length) {
    console.log(array4[i4]);
    i4++;
}
console.log('FOUR');
// Write a for loop that loops through numbers 1 to 100, but breaks the loop when it encounters the number 45.

for (let i5 = 1; i5<=100;i5++){
    console.log(i5);
    if(i5 === 45){
        break;
    } 
}
console.log('FIVE');
// Write a while loop that prints numbers from 1 to 20 but skips numbers divisible by 4 using the continue statement.

let i6 = 0;
while(i6<20){
    i6++;
    if(i6===4){
        continue;
    }
    console.log(i6);
}
console.log('SIX');