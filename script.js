const containerDiv = document.querySelector('.container');

const initialCount = 16;

fillGrid(initialCount);


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