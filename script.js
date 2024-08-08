const containerDiv = document.querySelector('.container');
const resetButton = document.querySelector('.button-div > button');


const initialCount = 16;

fillGrid(initialCount);


resetButton.addEventListener('click', e => {
    let str = prompt('Enter an integer between 1 and 100');

    if (str && isNaN(str) == false) {
        let count = Number(str);
        if (Number.isInteger(count)) {
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

            divElement.addEventListener('mouseover', e => {
                e.target.classList.add('fill-color');
            })
            containerDiv.appendChild(divElement);
        }
    }

}