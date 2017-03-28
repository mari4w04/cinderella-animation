let narrationSound1 = document.querySelector('#narration1');
let midnightBtn = document.querySelector("#midnight-btn");
let mainContainer = document.querySelector("#cont");
let clockSound = document.querySelector("#clock-ring");
let clockDiv = document.querySelector('#clock');

narrationSound1.play();

narrationSound1.addEventListener('ended', show1stButton);

function show1stButton(){
    midnightBtn.classList.add("show");
};

midnightBtn.addEventListener('click', showClock);

function showClock(){
    mainContainer.classList.add("hide");
    clockSound.play();
};

clockDiv.addEventListener('animationend', showMainContainer);
function showMainContainer(){
    mainContainer.classList.remove("hide");
    clockDiv.classList.add("hide");
};


