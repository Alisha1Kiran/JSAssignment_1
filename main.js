let num = prompt("Enter number here");
console.log(`number : ${num}`);

if(num > 1000000){
    alert(`You have entered an invalid number , Number should be less than or equal to 1000000`);
} else {
    // console.log(`type : ${typeof(num)}`);
    document.write(`Sum of entered number is : ${addNum(num)}`);
}

function addNum(number){
    let sum = 0;
    console.log(number.length)
    for(let i=0; i<number.length; i++){
        sum = sum + parseInt(number[i]);

    }
    return sum;
}