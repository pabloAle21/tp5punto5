let hr = min = seg = ms = "0"+ 0, startime

const startBtn = document.querySelector(".start"),
   pauseBtn = document.querySelector(".pause"),
   resetBtn = document.querySelector(".reset");

startBtn.addEventlistener("click" ,start);
pauseBtn.addEventlistener("click",pause);
resetBtn.addEventlistener("click",reset);

function start() {
    startBtn.classList.add("active");
    pauseBtn.classList.remove("pauseActive");

starTimer = setInterval(()=> {
    ms  ++ ;
    ms = ms <10 ? "0" + ms : ms;
    if (ms==100) {
        seg++;
        seg = seg < 10 ? "0" + seg: seg;
    }
    if (seg== 60) {
        min++;
        min=min < 10 ? "0" + min : min;
    }
    if (min== 60) {
        hr++;
        hr=hr < 10 ? "0" + hr:hr;
        min= "0"+ 0;

    }
    putValue();
} , 10)

}
function pause() {
    startBtn.classList.remove("active");
    pauseBtn.classList.remove("pauseActive");
    clearInterval(starTime);
}
function reset() {
    startBtn.classList.remove("active");
    pauseBtn.classList.remove("pauseActive");
    clearInterval(starTime);
    hr = min =seg =ms ="0" + 0;
    putValue();
}
function putValue() {
    document.querySelector(".milisegundos").innerHTML=ms;
    document.querySelector(".segundos").innerHTML=seg;
    document.querySelector(".minutos").innerHTML=min;
    document.querySelector(".hora").innerHTML=hr;
    
}