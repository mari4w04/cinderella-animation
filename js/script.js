let narrationSound1 = document.querySelector('#narration1');
let midnightBtn = document.querySelector("#midnight-btn");

narrationSound1.play();

narrationSound1.addEventListener('ended', show1stButton);

function show1stButton(){
    midnightBtn.classList.add("show");
};
