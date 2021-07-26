let btn = document.querySelector('.addTask');
let taskName = document.querySelector('#taskName');
let allTasks = document.querySelector('.allTasks');

btn.addEventListener('click', () =>{
    if (taskName.value === '' || taskName.value === ' '){
        alert('Please write something to-do')
    } else if (taskName.value.length >= 40){
        let amount = taskName.value.length;
        alert(`Please write less than 40 characters, your task have ${amount} characters`)
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

//Listen the enter button to add a task
document.body.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
      btn.click();
    }
});

//Get the current day and print it on the main page
const currentDay = document.querySelector('#day');

const newDate = new Date();
let month = newDate.getMonth();
let dayNumber = newDate.getDate();
let day = newDate.getDay();

let days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

currentDay.textContent = `${days[day]}, ${dayNumber} ${months[month]}`; 