// 1. Create a Array with five names and print all five in reverse.
let k = "Reversed Array is:";
function Reverse() 
{
    var input = document.getElementsByName('array[]');
    for (var i = input.length; i > 0; i--) 
    {
        let a=input[i-1];
        k = k  + ": " + a.value + " " ;
    }
    document.getElementById("par").innerHTML = k;
    document.getElementById("po").innerHTML = "Output";
}

// 2. print only the elements which are divisible by 5 from 1 to 50.
console.log("Elements which are divisible by 5 from 1 to 50 are: ");
let i = 1;
while(i < 50)
{
    if(i%5 == 0)
    {
        console.log(i);
    }
    i++;
}