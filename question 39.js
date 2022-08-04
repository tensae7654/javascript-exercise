//Write a JavaScript program to check three given numbers, if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40.

function same(){

    var number1= Number(document.getElementById("num1").value);
    var number2= Number(document.getElementById("num2").value);
    var number3= Number(document.getElementById("num3").value);

    if(number1==number2&& number1==number3 && number2== number3 ){
     console.log(30);
 
    }else if(number1==number2 ||number1 == number3|| number2== number3)
    {
        console.log(40);

    }else{
        console.log(20);

    }

}