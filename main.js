const input = document.getElementById('num-input');
var num = 0;
let inOp2 = false;
let inOp3 = false;
let inOp4 = false;
let inOp5 = false;
const point = document.getElementById('num.');
const plus_button = document.getElementById('num+');
const minus_button = document.getElementById('num-');
const backspaceButton = document.getElementById('bs');
const div_button = document.getElementById('num/');
const inc_button = document.getElementById('num*');
const nums = document.getElementsByClassName('num-button');
enterNumber = (n) => {
    if (input.value === '0') {
        input.value = n;
    } else {
        input.value = input.value + n;
    }
};

backspaceButton.onclick = () => {
    if (input.value.length === 1) {
        input.value = '0'
    }
    else {
        input.value = input.value.slice(0, -1);
    }
};


point.onclick = () => {
    if (input.value === '0') {
        return input.value += '.';
    }
    for (let i = 0; i < input.value.length; i++) {
        if (input.value[i] === '.') {
            return;
        }
    }
    enterNumber('.');
};


plus_button.onclick = () => {
    if (!inOp2) {
        num = parseFloat(input.value);
        inOp2 = true;
       input.value = null;
    }
    else {
        input.value = parseFloat(input.value) + num;
        num = 0;
        inOp2 = false;

    }
};


minus_button.onclick = () => {
    if (!inOp3) {
        num = parseFloat(input.value);
        inOp3 = true;
        input.value = null;
    }
    else {
        input.value = num - parseFloat(input.value);
        num = 0;
        inOp3 = false;
    }
};


div_button.onclick = () => {
    if (!inOp4) {
        num = parseFloat(input.value);
        inOp4 = true;
        input.value = null;
    }
    else {
        input.value = num / parseFloat(input.value);
        num = 0;
        inOp4 = false;
    }
};


inc_button.onclick = () => {
    if (!inOp5) {
        num = parseFloat(input.value);
        inOp5 = true;
        input.value = null;

    }
    else {
        input.value = num * parseFloat(input.value);
        num = 0;
        inOp5 = false;
    }
};


for (let i =0; i < nums.length; i++) {
    nums[id = 'num' + i].onclick = () => {
        enterNumber(nums[id = 'num' + i].value);
    };
}

