let narrationSound1 = document.querySelector('#narration1');
let midnightBtn = document.querySelector("#midnight-btn");
let mainContainer = document.querySelector("#cont");
let clockSound = document.querySelector("#clock-ring");
let clockDiv = document.querySelector('#clock');
let cinderella = document.querySelector('#cinderella');
let shoe1 = document.querySelector('#shoe1');
let shoe2 = document.querySelector('#shoe2');
let shoe3 = document.querySelector('#shoe3');
let cinderellaShoe = document.querySelector('#theshoe');
let shoes = document.querySelectorAll('.shoe');
let prince = document.querySelector('#prince');
let princeLine = document.querySelector('#princetalking');
let cinderellaLine = document.querySelector('#cinderellaspeaking');
let end = document.querySelector('#end');

narrationSound1.play();
clockDiv.classList.add("hide");
cinderella.classList.add("hide");
shoe1.classList.add("hide");
shoe2.classList.add("hide");
shoe3.classList.add("hide");
prince.classList.add("hide");
cinderellaShoe.classList.add("hide");


narrationSound1.addEventListener('ended', show1stButton);

function show1stButton(){
    midnightBtn.classList.add("show");
};

midnightBtn.addEventListener('click', showClock);

function showClock(){
    mainContainer.classList.add("hide");
    clockSound.play();
    clockDiv.classList.remove("hide");
};

clockDiv.addEventListener('animationend', showMainContainer);
function showMainContainer(){
    mainContainer.classList.remove("hide");
    clockDiv.classList.add("hide");

    midnightBtn.classList.remove("show");
    midnightBtn.classList.add("hide");

    cinderella.classList.remove("hide");
    cinderella.classList.add("movedown");

    cinderella.addEventListener('animationend', showShoes)
    function showShoes(){
        shoe1.classList.remove("hide");
        shoe2.classList.remove("hide");
        shoe3.classList.remove("hide");
        cinderellaShoe.classList.remove("hide");

        /*shoe1.classList.add("fade");
        shoe2.classList.add("fade");
        shoe3.classList.add("fade");
        cinderellaShoe.classList.add("fade");*/

        shoe1.classList.add("wiggle");
        shoe2.classList.add("wiggle");
        shoe3.classList.add("wiggle");
        cinderellaShoe.classList.add("wiggle");
    }

};

shoes.forEach(shoeEListener);
function shoeEListener(item){
    item.addEventListener("click", shoeClicked);
};

function shoeClicked(){
  this.classList.add("disappear");
};

cinderellaShoe.addEventListener('click', princeAppears);
function princeAppears(){
    prince.classList.remove("hide");
    prince.classList.add("princegodown");
    prince.addEventListener('animationend', princeBgChange);
    function princeBgChange(){
        cinderellaShoe.classList.add("hide");
        prince.classList.add("prince2ndbg");
        prince.classList.add("princemove");
        prince.addEventListener('animationend', princeBgReflect);
        function princeBgReflect(){
            prince.classList.add("prince3ndbg");
            princeLine.play();
            princeLine.addEventListener('ended', cinderellaSpeak);
            function cinderellaSpeak(){
                prince.classList.add("prince4thbg");
                cinderellaLine.play();
                cinderellaLine.addEventListener('ended', cinderellaGoAway);
                function cinderellaGoAway(){
                    cinderella.classList.add("goaway");
                    cinderella.addEventListener('animationend', removeCinderella);
                        function removeCinderella(){
                          cinderella.classList.add("removecinderella");
                          end.classList.add("credits");
                        };
                };
            };
        }

    };



};
