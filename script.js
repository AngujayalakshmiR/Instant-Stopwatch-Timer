var ms = 0, s = 0, m = 0, h = 0
var timer;
var display = document.querySelector(".timer-Display")
var laps = document.querySelector(".laps")
function start(){
    if(!timer){
        timer = setInterval(run, 10)
    }
}

function run(){
    display.innerHTML = getTimer()
    ms++              
    if(ms == 100){
        ms = 0
        s++
    }
    if(s == 60){
        s = 0
        m++
    }
    if(m == 60){
        m = 0
        h++
    }
    
    if(h == 13){
        h = 1
    } 
}

function getTimer(){
    return (h<10 ? "0" + h: h) + " : " + (m<10 ? "0" + m : m) + " : " + (s<10 ? "0" + s : s) + " : " + (ms<10 ? "0" + ms : ms); 
}

function pause(){
    stopTimer()  
}

function stopTimer(){
    clearInterval(timer)
    timer = false 
}

function reset(){
    stopTimer()
    ms = 0
    s = 0
    m = 0
    h = 0
    display.innerHTML = getTimer()
}

// lap = taking screenshot of current time...
function lap() {
    if(timer) {   
        var Li = document.createElement("li")   
        Li.innerHTML = getTimer() 
        laps.appendChild(Li) 
    }
}

function resetLap(){
    laps.innerHTML = ""
}
