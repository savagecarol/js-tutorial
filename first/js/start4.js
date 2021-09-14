// single element selector

let element=document.getElementById('first');
element.style.color = 'red'
element.innerHTML = '<b> my name is kartikeya sharma</b>'
// console.log(element);
let sel = document.querySelector('#first');
sel = document.querySelector('.child');
sel = document.querySelector('div');



// multilevel selector
let ele = document.getElementsByClassName('class');
// tagname // 


Array.from(ele).forEach(element =>
{
    console.log(element);
    element.style.color = 'blue';
});

console.log(ele);

