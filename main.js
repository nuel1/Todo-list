"use strict";


// Animating clock box
const circle = document.querySelector('.outline');

const rotateClockWise = () =>{
    if(circle.classList.contains('no-rotate')){
        circle.classList.replace('no-rotate', 'rotate');
    }else if(circle.classList.contains('rotate')){ 
        circle.classList.replace('rotate', 'no-rotate');
    }else{
        circle.classList.add('rotate');
    }
   
}
setInterval(() =>{
 return setTimeout(rotateClockWise, 200);
},600);




// -------------->
// Time 
// -------------->


const padZeroHr = document.querySelector('.hour-digit-wrapper .val-one');
const hr = document.querySelector('.hour-digit-wrapper .val-two');
const padZeroMin = document.querySelector('.minute-digit-wrapper .val-one');
const min = document.querySelector('.minute-digit-wrapper .val-two');
padZeroHr.textContent = '0';
padZeroMin.textContent = '0';



// Setting date function
const time = () =>{
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    hr.textContent = `${hour}`;
    min.textContent = `${minute}`;

    // Condition for hour. 
    // if len of string is less than 2
    if(hr.textContent.length < 2){
        padZeroHr.classList.contains('hide') ?
        padZeroHr.classList.replace('hide', 'blur') :
        padZeroHr.classList.add('blur');
    }else{
        padZeroHr.classList.contains('blur') ?
        padZeroHr.classList.replace('blur', 'hide') :
        padZeroHr.classList.add('hide');
    }

     // Condition for Min. 
    // if len of string is less than 2

    if(min.textContent.length < 2){
        padZeroMin.classList.contains('hide') ?
        padZeroMin.classList.replace('hide', 'blur') :
        padZeroMin.classList.add('blur');
    }else{
        padZeroMin.classList.contains('blur') ?
        padZeroMin.classList.replace('blur', 'hide') :
        padZeroMin.classList.add('hide');
    }
}

setInterval(time, 1000);





// ------------>
// Todo list
// ------------>

const searchForm = document.querySelector('.search');
const searchInput = searchForm.searchField;

const filterTodos = value =>{
    const todos = document.querySelectorAll('li');
    const todoArr = [...todos];
    todoArr.filter(li => !li.textContent.toLowerCase().includes(value))
    .forEach(item => item.classList.contains('show') ?
    item.classList.replace('show', 'hide') :
    item.classList.add('hide'));

    todoArr.filter(li => li.textContent.toLowerCase().includes(value))
    .forEach(item => item.classList.contains('hide') ?
    item.classList.replace('hide', 'show') :
    item.classList.add('show'));
}
searchForm.addEventListener('keyup', e =>{
    e.preventDefault();
    filterTodos(searchInput.value.trim().toLowerCase());
});


// Deleting list

const ul = document.querySelector('ul');

ul.addEventListener('click', e =>{
    if(e.target.nodeName === 'I'){
        e.target.parentNode.classList.add('delete');
        setTimeout(() =>{
            return e.target.parentNode.remove();
        }, 350);
    }
});


// Adding new todos

const addList = document.querySelector('.add');
const addTodos = (todo) =>{
    const todoEl = `<li><span>${todo}</span><i>&times</i></li>`;
    ul.innerHTML += todoEl;
    ul.lastChild.classList.add('slideOut'); 
    setTimeout(() => ul.lastChild.classList.replace('slideOut', 'slideIn'), 10);
    setTimeout(() => ul.lastChild.classList.remove('slideIn'), 350);
}

addList.addEventListener('submit', e =>{
    e.preventDefault();
    if(addList['add-todo'].value){
        addTodos(addList['add-todo'].value.trim());
    }
    addList.reset();
});

