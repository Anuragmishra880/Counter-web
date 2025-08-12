var plusbtn = document.getElementById("increse");
var minusbtn = document.getElementById("decrese");
var countvalue = document.getElementById("count");
var inputvalue = document.getElementById("Increment/Decrement");
var reset = document.getElementById("Reset-btn");
plusbtn.addEventListener("click", () => {
    let input = parseFloat(inputvalue.value);
    let c = parseFloat(countvalue.innerHTML);
    countvalue.innerHTML = c + input;
});
minusbtn.addEventListener("click", () => {
    let input = parseFloat(inputvalue.value);
    let c = parseFloat(countvalue.innerHTML);
    countvalue.innerHTML = c - input;
});

reset.addEventListener("click", function()
 {
    countvalue.innerHTML = 0;
});