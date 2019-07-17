function add(){
    var num1= parseFloat(document.getElementById("inputNum1").value);
    var num2= parseFloat(document.getElementById("inputNum2").value);
    document.getElementById("resulSpan").innerText=num1+num2;
}

function dicrease(){
    var num1= parseFloat(document.getElementById("inputNum1").value);
    var num2= parseFloat(document.getElementById("inputNum2").value);
    document.getElementById("resulSpan").innerText=num1-num2;
}

function multiable(){
    var num1= parseFloat(document.getElementById("inputNum1").value);
    var num2= parseFloat(document.getElementById("inputNum2").value);
    document.getElementById("resulSpan").innerText=num1*num2;
}

function divide(){
    var num1= parseFloat(document.getElementById("inputNum1").value);
    var num2= parseFloat(document.getElementById("inputNum2").value);
    document.getElementById("resulSpan").innerText=num1/num2;
}