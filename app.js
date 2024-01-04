var input1 = document.getElementById("fullName")
var input2 = document.getElementById("email")
var input3 = document.getElementById("Cnic")
var input4 = document.getElementById("date")
var input5 = document.getElementById("fatherName")
var input6 = document.getElementById("number")
var input7 = document.getElementById("FatherCnic")
var input8 = document.getElementById("date")

var arr = [input1,input2,input3,input4,input5,input6,input7]

function input(){
    for (var i = 0 ; i < arr.length ; i++){
        console.log(arr[i].value)
    }
}