const containerDiv = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
    const divElement = document.createElement('div');
    divElement.classList.add('pad');
    containerDiv.appendChild(divElement);
}