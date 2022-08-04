
    function negpos(){
        var number1= Number(document.getElementById("num1").value);
    var number2= Number(document.getElementById("num2").value);
    
    if(number1<0 && number2>0)
    {
        console.log(true);

    }else if(number1>0 && number2<0){
        console.log(true);

    }else{
        console.log(false);

    }



    }