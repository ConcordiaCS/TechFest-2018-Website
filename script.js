window.onload = function() {
    var inputs = document.getElementsByTagName("input");
    for (var i = inputs.length; i--; ) {
        inputs[i].value = "";
    }
}

function calculate() {
    var result = document.getElementById("result");

    var name = document.getElementById("name").value;
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    console.log(weight);

    if(weight == "" || height == "") {
        result.innerHTML = "Please enter numbers in the number fields!";
        return false;
    }

    var bmi = 0;
    bmi = 703 * (weight / (height*height));

    document.getElementById("result").innerHTML = "Hello, " + name + "!\nYour BMI is " + Math.round(bmi) + ".\nHave a nice day!";

}

function checkIsNumber() {

}
