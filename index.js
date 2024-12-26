/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.getElementById("convert-btn")
convertBtn.addEventListener("click", convert)

function convert() {
    let input = document.getElementById("input-number").value
    document.getElementsByClassName("meters")[0].innerHTML = input
    document.getElementsByClassName("feet")[0].innerHTML = ( input * 3.281 ).toFixed(3)
    document.getElementsByClassName("feet")[1].innerHTML = input 
    document.getElementsByClassName("meters")[1].innerHTML = ( input / 3.281 ).toFixed(3)

    document.getElementsByClassName("liters")[0].innerHTML = input
    document.getElementsByClassName("gallons")[0].innerHTML = ( input * 0.264 ).toFixed(3)
    document.getElementsByClassName("gallons")[1].innerHTML = input
    document.getElementsByClassName("liters")[1].innerHTML = ( input / 0.264 ).toFixed(3)

    document.getElementsByClassName("kilos")[0].innerHTML = input
    document.getElementsByClassName("pounds")[0].innerHTML = ( input * 2.204 ).toFixed(3)
    document.getElementsByClassName("pounds")[1].innerHTML = input
    document.getElementsByClassName("kilos")[1].innerHTML = ( input / 2.204 ).toFixed(3)

}

