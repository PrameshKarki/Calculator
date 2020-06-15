let buttons = document.querySelectorAll('button');
let content = document.getElementById('content');
screenValue = '';
for (let items of buttons) {
    items.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;
        if (buttonText == 'C') {
            content.value = '';
        }
        else if (buttonText === 'B') {
            screenValue = screenValue.substring(0, screenValue.length - 1);
            content.value = screenValue;
        }
        else if (buttonText == '=') {
            content.value = eval(screenValue);
        }
        else {
            content.value += buttonText;
            screenValue = content.value;
        }
    })
}