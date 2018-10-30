window.onload = function() {
    var inputs = document.getElementsByTagName("input");
    for (var i = inputs.length; i--; ) {
        inputs[i].value = "";
    }
}

function calculate() {
    var result = document.getElementById("result");
    
    var name = document.getElementById("name").value;
    var gender = document.getElementById("gender").value;
    var weight = document.getElementById("weight").value;
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var age = document.getElementById("age").value;
    var activity = document.getElementById("activity").value;
    
    console.log(weight);
    
    if(weight == "" || height == "" || age == "") {
        result.innerHTML = "Please enter numbers in the number fields!";
        return false;
    }
    
    var bmr = 0;
    if(gender == "male") {
        bmr = 66 + (6.23 * weight) + (12.7 * height) - (6.8 *age);
    } else if(gender == "female") {
        bmr = 655 + (4.35 * weight) + (4.7 * height) - (4.7 * age);
    }
    
    var cal = 0;
    if(activity == "sedentary") {
        cal = bmr * 1.2;
    } else if(activity == "lActive") {
        cal = bmr * 1.375;
    } else if(activity == "mActive") {
        cal = bmr * 1.55;
    } else if(activity == "vActive") {
        cal = bmr * 1.725;
    } else if(activity == "eActive") {
        cal = bmr * 1.9;
    }
    
    document.getElementById("result").innerHTML = "Hello, " + name + "!\nYour BMR is " + Math.round(bmr) + ", and your recommended daily calorie intake according to your specified activity level is " + Math.round(cal) + ".\nHave a nice day!";
    
}

function checkIsNumber() {
    
}