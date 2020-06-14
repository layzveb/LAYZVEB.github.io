let detect = new MobileDetect(window.navigator.userAgent);
if (MobileDetect == /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/) {
    Element.requestFullscreen();  
    document.getElementById("style").href="CSS/designForMob.css";
    alert("это телефон");

} else {
    document.getElementById("style").href="CSS/designForPC.css";
}

/*if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    /*Element.requestFullscreen();   
    document.getElementById("style").href="CSS/designForMob.css";
    alert("это телефон");

} else {
    document.getElementById("style").href="CSS/designForPC.css";
}*/