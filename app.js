let btn = document.querySelector('.addTask');
let taskName = document.querySelector('#taskName');
let allTasks = document.querySelector('.allTasks');

btn.addEventListener('click', () =>{
    if (taskName.value === '' || taskName.value === ' '){
        alert('Please write something to-do')
    } else if (taskName.value.length >= 40){
        let amount = taskName.value.length;
        alert('Please write less than 40 characters' + `your task have ${amount} characters`)
    } else{
        let txt = taskName.value;
        taskName.value = '';
        
        let task = document.createElement('div');
        task.classList.add('taskItem');
        task.innerHTML = `<i class='far fa-circle check' id='checkbtn'></i><h2 id='h2'>${txt}</h2><i class='fas fa-trash-alt'></i>`;
        
        allTasks.insertBefore(task, allTasks.childNodes[0]);
        
        document.querySelector('.fa-trash-alt').addEventListener('click', () =>{
            allTasks.removeChild(task);
        })
        
        let checkbtn = document.querySelector('#checkbtn');
        let h2 = document.querySelector('#h2');
        checkbtn.addEventListener('click', () =>{
            checkbtn.classList.toggle('fa-check-circle');
            checkbtn.classList.toggle('fa-circle');
            h2.classList.toggle('done');
        })  
    }
})

document.body.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
      btn.click();
    }
});

let today = document.querySelector('#day');

let date = new Date();
let month = date.getMonth() + 1;
let day = date.getDate();
let nday = date.getDay();

if (month === 1) {
    month = 'January';
} else if (month === 2) {
    month = 'Febrary';
} else if (month === 3) {
    month = 'March';
} else if (month === 4) {
    month = 'April';
} else if (month === 5) {
    month = 'May';
} else if (month === 6) {
    month = 'June';
} else if (month === 7) {
    month = 'July';
} else if (month === 8) {
    month = 'August';
} else if (month === 9) {
    month = 'September';
} else if (month === 10) {
    month = 'October;'
} else if (month === 11) {
    month = 'November';
} else {
    month = 'December';
}


if (nday === 1) {
    nday = 'Monday';
} else if (nday === 2){
    nday = 'Tuesday';
} else if (nday === 3){
    nday = 'Wednesday';
} else if (nday === 4){
    nday = 'Thursday';
} else if (nday === 5){
    nday = 'Friday';
} else if (nday === 6){
    nday = 'Saturday';
} else {
    nday = 'Sunday';
}

console.log(month)
console.log(day)
console.log(nday)

today.textContent = `${nday}, ${day} ${month}`; 