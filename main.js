const nums = document.getElementsByClassName('num-button');
const numa = document.getElementsByClassName('num-action');
const input = document.getElementById('num-input');
enterNumber = (n) => {
    if (input.value === "0"){
      input.value = n;
    }
    else {
        input.value = input.value + n;
    }
};
numa[id = 'bs'].onclick = () => {
    if (input.value.length ===1)
    {
        input.value = '0';
    }
    else {
        input.value = input.value.slice(0, -1);
    }
};

numa[id = 'num+'].onclick = () => {
    input.value +=  '+';

};
numa[id = 'num-'].onclick = () => {
    input.value +=  '-';
};
numa[id = 'num/'].onclick = () => {
    input.value +=  '/';
};
numa[id = 'num*'].onclick = () => {
    input.value +=  '*';
};
numa[id = 'num.'].onclick = () => {
    input.value +=  '.';
};
for (let i =0; i < nums.length; i++){
    nums[id = 'num' + i].onclick = () => {
        enterNumber(nums[id = 'num' + i].value)
    }
}




