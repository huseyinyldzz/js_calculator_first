const screen = document.querySelector(`h1`);

const buttons = document.querySelectorAll(`button`);

const clearButton = document.getElementById("clrButton");




buttons.forEach((button) => {
        if(button.classList.length ===0) {
            button.addEventListener(`click`, function(e) {
            console.log(e);
            screen.textContent = e;
            button.value;

        }else if (button.classList.contains(`operators`)){
            button.addEventListener(`click`, function(e) {
                console.log(e);
                screen.textContent = e;
                button.value;

        }}
} );


function clearAll() {
    screen.textContent= "12";
}

clearButton.addEventListener(`click`, clearAll);


