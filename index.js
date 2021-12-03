console.log("Welcome to countdown timer");
document.getElementById("submit").onclick = function execute() {
    document.getElementById("display").style.backgroundColor = "dodgerblue";
    document.getElementById("submit").disabled = true;
    const target = document.getElementById("datetime").value;
    let intervalId = setInterval(function updateTimer() {
        let current = new Date();
        let z = new Date(target).getTime() - current.getTime();
        let s = Math.floor(z / 1000);
        let m = Math.floor(s / 60);
        s = Math.floor(s % 60);
        let h = Math.floor(m / 60);
        m = Math.floor(m % 60);
        let d = Math.floor(h / 24);
        h = Math.floor(h % 24);
        if (z <= 0) {
            clearInterval(intervalId);
            document.getElementById("display").style.backgroundColor = "#f03d37";
            document.getElementById("submit").disabled = false;
        } else {
            document.getElementById("days").innerText = d;
            document.getElementById("hours").innerText = h;
            document.getElementById("minutes").innerText = m;
            document.getElementById("seconds").innerText = s;
        }
    }, 1000);
}
