const containerDiv = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
    const divElement = document.createElement('div');
    divElement.classList.add('pad');
    
    divElement.addEventListener('mouseover', e => {
        e.target.classList.add('fill-color');
    })
    
    containerDiv.appendChild(divElement);
}