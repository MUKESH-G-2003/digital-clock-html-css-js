

setInterval(function setTime() {
    const hour = document.getElementById("hour");
    const minute = document.getElementById("min");
    const sec = document.getElementById("sec");
    const noon = document.getElementById("noon");

    const time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    if (s < 10) s = "0" + s;
    if (m < 10) s = "0" + m;
    if (h < 10) s = "0" + h;

    if (h < 12) noon.innerText = "AM";
    else noon.innerText = "PM";

    hour.innerText = h;
    minute.innerText = m;
    sec.innerText = s;

});