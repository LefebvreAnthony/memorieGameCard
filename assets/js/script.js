const main = document.getElementById('main');
const btnPlay = document.querySelector('.btn_play');
const topTime = document.querySelector('#top_time');
const divBtnPlay = document.getElementById('div_center_btn')
let dataFruit = [];
let arrayCardCompare = [];
let arrayWin = 0;
function tableCard() {
    const newTable = document.createElement('section');
    const divTimer = document.createElement("div");
    main.appendChild(newTable);
    main.appendChild(divTimer);
    console.log(divTimer);
    newTable.className = "table_game";
    divTimer.className = "timer";
    //random array dataFruit
    createCard();
    shuffleArray(dataFruit);
    //insert dans la section chaque div de dataFruit
    dataFruit.forEach(card => {
        newTable.appendChild(card);
    })
    discoveryCard();
};
//trie le tableau aléatoirement 
function shuffleArray(inputArray) {
    inputArray.sort(() => Math.random() - 0.5);
};
// creer les cards et les injectent dans le tableau dataFruit
function createCard() {
    for (let f = 0; f < 18; f++) {
        //créer une div à chaque tour de boucle
        const newCard = document.createElement('div');
        newCard.className = "fruit_card";
        newCard.dataset.id = `${f}`;
        dataFruit.push(newCard);
        //relance la boucle si elle n'a pas atteint 36
        if (f == 17) {
            if (dataFruit.length < 36) {
                f = -1;
            }
        }
    }
}
//decouvrir le fruit de la card
function discoveryCard() {
    dataFruit.forEach(card => {
        card.addEventListener("click", () => {
            arrayCardCompare.push(card);
            card.style.transform = "rotateY(0.5turn)";
            let dataId = card.dataset.id;
            setTimeout(() => {
                //descendre la position de l'image en fonction de la card
                card.style.background = `0% ${100 * -dataId}px no-repeat url(assets/img/cards.png)`;
            }, 500);
            comparaisonCard(card);
            fullArray();
        })
    })
}
function comparaisonCard(card) {
    if (arrayCardCompare.length <= 1) {
        card.style.pointerEvents = "none";
    } else {
        //Si la longueur de arrayCardCompare === à 2 alors execute
        //compare les dataAttributes des div dans arrayCardCompare et si c'est ok execute
        if (arrayCardCompare[0].dataset.id == card.dataset.id) {
            arrayWin++;
            arrayCardCompare.forEach(card => {
                card.style.pointerEvents = "none";
                card.style.transform = "rotateY(-0.5turn)";
                arrayCardCompare = [];
            })
            //compare les dataAttributes des div dans arrayCardCompare et si c'est pas ok execute
        } else if (arrayCardCompare[0].dataset.id !== card.dataset.id) {
            arrayCardCompare.forEach(card => {
                setTimeout(() => {
                    card.style.background = "#2B6472";
                    card.style.transform = "rotateY(-0.5turn)";
                    card.style.pointerEvents = "auto";
                }, 1000);
                arrayCardCompare = [];
            })
        }
    }
}
function fullArray() {
    if (arrayWin == 18 ) {
        document.querySelector(".table_game").remove();

    }
}
function timer() {
    let m = 0;
    let s = 0;
    let sR;
    let mR;
    function rebour() {
        s < 10 ? (sR = `0${s}`) : (sR = `${s}`);
        m < 10 ? (mR = `0${m}`) : (mR = `${m}`);

        document.querySelector(".timer").innerText = `00:${mR}:${sR}`;
        document.querySelector(".timer").dataset.time = `00:${mR}:${sR}`;
        if(s == 59) {
            m++;
            s = 0;
        } else {
        s++;
        }
        if(arrayWin == 18){

            clearInterval(intervalTime);
        };
    }
    let intervalTime = setInterval(rebour, 1000);
    
}
btnPlay.addEventListener('click', function () {
    divBtnPlay.remove();
    topTime.remove();
    tableCard();
    timer();
});