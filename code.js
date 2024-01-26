var count = localStorage.getItem("number");
var display = document.getElementById("counter").innerText = count;

function incr() {
    count++
    localStorage.setItem("number",count);
    document.getElementById("counter").innerText=count;
}

function res() {
    count = 0;
    localStorage.setItem("number",count);
    document.getElementById("counter").innerText=count;
}
