const containerDiv = document.querySelector('.container');
const resetButton = document.querySelector('.button-div > button');


const rgbMaxValue = 255;
const initialCount = 16;


fillGrid(initialCount);


resetButton.addEventListener('click', e => {
    let str = prompt('Enter an integer between 1 and 100');

    if (str && isNaN(str) == false) {
        let count = Number(str);
        if (Number.isInteger(count) && count >= 1 && count <= 100) {
            fillGrid(count);
        }
    }
})

function fillGrid(count) {
    containerDiv.innerHTML = '';

    for (let i = 0; i < count; i++) {
        for (let j = 0; j < count; j++) {

            const divElement = document.createElement('div');
            divElement.classList.add('pad');

            divElement.style.flex = `1 0 calc(100% / ${count + 1})`;
            divElement.style.opacity = '0';

            divElement.addEventListener('mouseover', e => {
                if (e.target.style.opacity == '0') {
                    e.target.style.background = `rgb(${getRandomInt(rgbMaxValue)}, ${getRandomInt(rgbMaxValue)}, ${getRandomInt(rgbMaxValue)})`;
                } 
                
                if (e.target.style.opacity != '1') {
                    increaseElementOpacity(e.target);
                }
            })
            containerDiv.appendChild(divElement);
        }
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


function increaseElementOpacity(el) {
    let elementOpacity = Number(el.style.opacity);
    elementOpacity += 0.1;
    el.style.opacity = elementOpacity.toFixed(1);
}