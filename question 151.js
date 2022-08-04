//"Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.  Sample numbers : 3, -7, 2 Output : The sign is -"

function sign(){
    var number1= Number(document.getElementById("num1").value);
    var number2= Number(document.getElementById("num2").value);
    var number3= Number(document.getElementById("num3").value);

    var mult= number1*number2*number3;

    if(mult<0){
    alert("product sign is -");

    }else if(mult> 0)
    {
        alert("product sign is +");

    }else{

        alert("product is 0");
    }



}