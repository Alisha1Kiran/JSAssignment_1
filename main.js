let num = prompt("Enter number here");
console.log(`number : ${num}`);

if(num > 1000000){
    alert(`You have entered an invalid number , Number should be less than or equal to 1000000`);
}if(num <= 0){
    alert(`You have entered entered 0 or less than 0`)
} else {
    // console.log(`type : ${typeof(num)}`);
    document.write(`Sum of entered number is : ${addNum(num)}`);
}

function addNum(number){
    let sum = 0;
    console.log(number.length)
    number = parseInt(number)
    for(let i=1; i<=number; i++){
        sum = sum + i;

    }
    return sum;
}