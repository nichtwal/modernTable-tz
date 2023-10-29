const topButton = document.querySelector(".button-top");
const botButton = document.querySelector(".button-bot");
const imageContainer = document.querySelector(".tableBody");
const buttonsContainer = document.querySelector('.container--table__buttons')

// topButton.addEventListener("click", () => {
// imageContainer.classList.add('topSide')
// });
// botButton.addEventListener("click", () => {
//     imageContainer.classList.remove('topSide')
//     });
buttonsContainer.addEventListener('click', (event) => {
    const clickedButton = event.target
    if (clickedButton.closest('.button-top')) {
        imageContainer.classList.add('topSide')
    } else if (clickedButton.closest('.button-bot')) {
        imageContainer.classList.remove('topSide')
    }
})
