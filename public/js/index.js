//CURRENT DIE
let currentDie = 20

//DICE SIZE BUTTONS
const diceSelection = document.querySelector('#diceSelection')
const allDiceButtons = diceSelection.getElementsByTagName('*')

//DIE DISPLAY
const dieDisplay = document.querySelector("#dieDisplay");
const diePicture = document.querySelector('#diePictures')

//DICE QUANTITY DISPLAY
let diceQty = document.querySelector("#diceQty")

//RESULT DISPLAY
const result = document.querySelector("#rollResult");
result.innerText = "?"


//EVENT LISTENERS FOR DICE SIZE BUTTONS
diceSelection.addEventListener('click', function (e) {
    if (e.target.nodeName == 'BUTTON') {
        currentDie = parseInt(e.target.id.slice(1))
        for (btn of allDiceButtons) {
            btn.classList.remove('selected')
            btn.setAttribute("aria-selected", "false")
        }
        e.target.classList.add('selected')
        e.target.setAttribute("aria-selected", "true")
        isD20(currentDie)
    }
    result.innerText = "?"
})


//ROLL BUTTONS
const single = document.querySelector('#single')
single.addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < diceQty.value; i++) {
        sum += singleRoll(currentDie);
    }
    result.innerText = sum;
})

const advantage = document.querySelector('#advantage')
advantage.addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < diceQty.value; i++) {
        sum += advantageRoll(currentDie);
    }
    result.innerText = sum;;

})

const disadvantage = document.querySelector('#disadvantage')
disadvantage.addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < diceQty.value; i++) {
        sum += disadvantageRoll(currentDie);
    }
    result.innerText = sum;;
})




//FUNCTIONS
const isD20 = (currentDie => {
    if (currentDie !== 20) {
        advantage.classList.add('hidden')
        disadvantage.classList.add('hidden')
    } else {
        advantage.classList.remove('hidden')
        disadvantage.classList.remove('hidden')
    }
})

const singleRoll = (currentDie => {
    return Math.floor(Math.random() * currentDie) + 1;
})

const advantageRoll = (currentDie => {
    const first = Math.floor(Math.random() * currentDie) + 1;
    const second = Math.floor(Math.random() * currentDie) + 1;
    if (first > second) {
        return first;
    } else {
        return second;
    }
})

const disadvantageRoll = (currentDie => {
    const first = Math.floor(Math.random() * currentDie) + 1;
    const second = Math.floor(Math.random() * currentDie) + 1;
    if (first > second) {
        return second;
    } else {
        return first;
    }
})
