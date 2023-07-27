const body = document.body,
    btn = document.querySelector('[data-btn]'),
    text = document.querySelector('.color'),
    hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
btn.addEventListener('click', () => {
    let color = `linear-gradient(90deg, ${getHex(hexArray, hexArray.length)}, ${getHex(hexArray, hexArray.length)})`;
    text.innerText = color;
    body.style.backgroundImage = color;
});

function getRandom(max) {
    return Math.floor(Math.random() * max)
}

function getHex(array, max) {
    let hex = '';
    let i = 0;
    while(i < 6) {
        hex += array[getRandom(max)];
        i++;
    }
    return '#' + hex;
}