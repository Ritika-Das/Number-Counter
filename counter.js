let i = 0;

let increase = () => document.getElementById("inc").value = ++i;
let decrease = () => document.getElementById("inc").value = --i;
let reset = () => {
    i = 0;
    document.getElementById("inc").value = i;
}

let toggle = () =>
{
    document.body.style.background = "#000000";
    document.getElementById("H1").style.color = "springgreen";
    document.getElementById("sp").innerHTML = "Double-click for light mode";
    document.getElementById("sp").style.color = "#f3f3f3";
}

let change = () =>
{
    document.body.style.background = "#f3f3f3";
    document.getElementById("H1").style.color = "black";
    document.getElementById("sp").innerHTML = "Click to enable Dark Mode";
    document.getElementById("sp").style.color = "#000000";
}
