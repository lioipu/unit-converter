/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let meter = 0
let feet = 0
let convertBtn = document.getElementById("convert-btn")
convertBtn.addEventListener("click", convert)

function convert() {
    let input = document.getElementById("input-number").value
    meter = input
    feet = meter * 3.281
    document.getElementsByClassName("meters")[0].innerHTML = meter
    document.getElementsByClassName("feet")[0].innerHTML = feet
    document.getElementsByClassName("meters")[1].innerHTML = meter
    document.getElementsByClassName("feet")[1].innerHTML = feet

}

