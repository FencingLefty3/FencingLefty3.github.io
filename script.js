var time = new Date().getHours();

if (time > 6 && time < 10) {
    document.getElementById("welcome").textContent = "Morning'";
} else if (time >= 10 && time < 12) {
    document.getElementById("welcome").textContent = "Good Morning.";

} else if (time >= 12 && time < 18) {
    document.getElementById("welcome").textContent = "Good Afternoon.";
} else {
    document.getElementById("welcome").textContent = "Evening'";
}