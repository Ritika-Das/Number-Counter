var i = 0;

let increase = () => document.getElementById("inc").value = i++;
let decrease = () => document.getElementById("inc").value = i--;
let reset = () => document.getElementById("inc").value = 0;

let toggle = () =>
{
    document.body.style.background = "#000000";
    document.getElementById("H1").style.color = "springgreen";
}

let change = () =>
{
    document.body.style.background = "#f3f3f3";
    document.getElementById("H1").style.color = "black";
}