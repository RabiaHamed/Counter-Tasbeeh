// var count = 0;

//     // document.getElementById("increaseBtn").value;
// // var num = document.getElementById("countNum")
//     function incr() {
//         count +=1;
//         // document.getElementById("countNum").innerHTML = count;
//         localStorage.getItem("incr")
//       var stor =  localStorage.setItem("incr", count)
//       stor=document.getElementById("countNum").innerHTML = count
//         // document.getElementById("countNum").innerText = count;
//     //  localStorage.getItem("incr")

//     }
//     // function saveCount() {
//     //     localStorage.setItem("counter", count)
//     // }
//     // function dec() {
//     //     count -=1;
//     //     document.getElementById("countNum").innerHTML = count;
//     // }
//     function res() {
//         count = 0;
//         localStorage.getItem("res");
//         localStorage.setItem("res", count);
//         document.getElementById("countNum").innerHTML = count;
//     }


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







    // function incrementCounter() {
    //     // Get the current counter value from localStorage, default to 0 if not present
    //     var currentCounter = (localStorage.getItem('counter')) || 0;

    //     // Increment the counter
    //     currentCounter++;

    //     // Update the counter value in localStorage
    //     localStorage.setItem('counter', currentCounter);

    //     // Update the counter display on the page
    //     document.getElementById('counter').innerText = currentCounter;
    // }

    // Function to reset the counter
    // function resetCounter() {
    //     // Reset the counter value in localStorage to 0
    //     localStorage.setItem('counter', 0);

    //     // Update the counter display on the page
    //     document.getElementById('counter').innerText = 0;
    // }

    // // Initialize the counter value on page load
    // window.onload = function() {
    //     var initialCounter = parseInt(localStorage.getItem('counter')) || 0;
    //     document.getElementById('counter').innerText = initialCounter;
    // };









