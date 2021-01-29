const timer=document.getElementById('timer');
const counterNumber=document.getElementById('counter-number');
const btn=document.getElementById('btn');
const covid1 = document.getElementById('covid1');
const covid2 = document.getElementById('covid2');

let hits=0;
let time = 60;
btn.addEventListener('click',()=>{

   const endTime= setInterval(() => {
        if (time <= 1) {
            clearInterval(endTime);
        }
        time--;
        timer.innerHTML = time; 
    }, 1000);
    setInterval(endTime, 1000);		
    setTimeout("showCovid()", requestAnimationFrame);
    setTimeout("hideCovid()" , requestAnimationFrame);	
    setTimeout("showCovid2()", requestAnimationFrame);
    setTimeout("hideCovid2()", requestAnimationFrame);
    setTimeout("showCovid3()", requestAnimationFrame);
    setTimeout("hideCovid3()", requestAnimationFrame);	
});

function showCovid() {
    
    covid1.style.visibility = "visible";
    covid3.style.visibility = "visible";
    setTimeout("hideCovid()", 500);							
}
function hideCovid() {
    covid1.style.visibility = "hidden";
    covid3.style.visibility = "hidden";

    if (time > 0) {
        setTimeout("showCovid()",  500 + Math.random() * 1000 );
        	
    }
}

function showCovid2() {

   covid6.style.visibility = "visible";
    covid2.style.visibility = "visible";
    covid4.style.visibility = "visible";
    setTimeout("hideCovid2()", 600);   
}
function hideCovid2() {
    covid6.style.visibility = "hidden";
    covid2.style.visibility = "hidden";
    covid4.style.visibility = "hidden";

    if (time > 0) {
        setTimeout("showCovid2()", 600 + Math.random() * 1000);

    }
}

function showCovid3(){
    covid5.style.visibility = "visible";
    setTimeout("hideCovid3()", 800);
}
function hideCovid3() {
    covid5.style.visibility = "hidden";
    if (time > 0) {
        setTimeout("showCovid3()", 800 + Math.random() * 1000);

    }
}

covid1.addEventListener('click', () => {
    hits++;
    counterNumber.innerHTML = hits;
});
covid2.addEventListener('click', () => {
    hits++;
    counterNumber.innerHTML = hits;
});
covid3.addEventListener('click', () => {
    hits++;
    counterNumber.innerHTML = hits;
});
covid4.addEventListener('click', () => {
    hits++;
    counterNumber.innerHTML = hits;
});
covid5.addEventListener('click', () => {
    hits++;
    counterNumber.innerHTML = hits;
});
covid6.addEventListener('click', () => {
    hits++;
    counterNumber.innerHTML = hits;
});



