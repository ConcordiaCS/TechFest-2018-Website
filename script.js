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
    var feet = document.getElementById("feet").value;
    var inches = document.getElementById("inches").value;
    var height = (parseInt(feet) * 12) + parseInt(inches);

    console.log(weight);
    console.log(height);

    if(weight == "" || feet == "" || inches == "") {
        result.innerHTML = "Please make sure to enter numbers in all number fields!";
        return false;
    }

    var bmi = 703 * weight / (height * height);
    var category = "";

    if(bmi < 18.5) {
        category = "underweight";
    } else if(bmi <= 24.9) {
        category = "normal";
    } else if(bmi <= 29.9) {
        category = "overweight";
    } else if(bmi > 30) {
        category = "obese";
    }

    if(bmi > 10) {
        result.innerHTML = "Hello, " + name + "!\nYour BMI is " + (Math.round(bmi * 10) / 10) + ", and your weight category is " + category + ".\nHave a nice day!";
    } else {
        result.innerHTML = "Invalid BMI! Please check your inputs!";
    }

}

function checkIsNumber() {

}
