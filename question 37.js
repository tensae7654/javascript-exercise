//Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

function range(){
    var number1= Number(document.getElementById("num1").value);
    var number2= Number(document.getElementById("num2").value);
    var sum=number1+number2;

    if(sum <= 80 && sum >=50)
    {
     console.log(65);

    }else{

       console.log(80); 
    }


}
