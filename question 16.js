// Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.
function check(){
    var number1= Number(document.getElementById("num1").value);
    var number2= Number(document.getElementById("num2").value);
    var sum=number1+number2;
    

   if(number1==50){

    console.log(true);

   }else if(number2==50)
   {
    console.log(true);

   }else if(sum==50){
    console.log(true);

   }else{

    console.log(false);
   }



}