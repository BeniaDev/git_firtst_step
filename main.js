const input = document.getElementById('num-input');

enterNumber = (n) => {
    if (input.value === '0') {
        input.value = n;
    } else {
        input.value = input.value + n;
    }
};

const point = document.getElementById('num.');
point.onclick = () => {
    for (let i = 0; i < input.value.length; i++) {
        if (input.value[i] === '.') {
            return;
        }
    }
    enterNumber('.');
};
const plus_button = document.getElementById('num+');
var inOp = false;
var num = 0;
plus_button.onclick = () => {
    if (inOp) {
        input.value = parseFloat(input.value) + num;
        num = 0;
        inOp = false;
    }
    else {
        num = parseFloat(input.value);
        inOp = true;
        input.value = 0;
    }
};

const minus_button = document.getElementById('num-');

minus_button.onclick = () => {
    if (inOp) {
        input.value = parseFloat(input.value) - num;
        num = 0;
        inOp = false;
    }
    else {
        num = parseFloat(input.value);
        inOp = true;
        input.value = 0;
    }
};
const div_button = document.getElementById('num/');
div_button.onclick = () => {
    if (inOp) {
        input.value =  num / parseFloat(input.value) ;
        num = 0;
        inOp = false;
    }
    else {
        num = parseFloat(input.value);
        inOp = true;
        input.value = 0;
    }
};
const inc_button = document.getElementById('num*');
inc_button.onclick = () => {
    if (inOp) {
        input.value =  num * parseFloat(input.value) ;
        num = 0;
        inOp = false;
    }
    else {
        num = parseFloat(input.value);
        inOp = true;
        input.value = 0;
    }
};

const backspaceButton = document.getElementById('bs');
backspaceButton.onclick = () => {
    if (input.value.length === 1) {
        input.value = '0'
    }
    else {
        input.value = input.value.slice(0, -1);
    }
};

const numButtons = document.getElementsByClassName('num-button');
for (let i = 0; i < numButtons.length; i++) {
    const button = numButtons[i];
    const num = button.textContent;
    button.onclick = () => {
        enterNumber(num)
    }
}
