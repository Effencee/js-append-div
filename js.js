const buttonOne = document.querySelector('.buttonOne');
let number = 1;
const addDivElement = () => {
    const getMain = document.querySelector('main');
    const newDiv = document.createElement('div');
    if (number % 5 == 0) {
        getMain.appendChild(newDiv).textContent = number;
        newDiv.classList.add('newDiv');
    } else {
        getMain.appendChild(newDiv).textContent = number;
    }
    number++;
}

buttonOne.addEventListener('click', addDivElement);