
//Set variables
let formTodo = document.querySelector('#todo-form')
let todoName = document.querySelector('.form-todo-name')
let todoTime = document.querySelector('.form-todo-time')
let todoItems = document.querySelector('.todo-list')

//Get the values from the input
const listenTaskDetail = (info) => {
    info.preventDefault()
    let itemName = todoName.value
    let itemTime = todoTime.value
    if(isNaN(itemTime)){
        alert('Please write a number')
    } else {
        todoTime.value =''
        todoName.value = ''
        
        //Call the function with the parameters
        makeItemTodo(itemName, itemTime)
    } 
}

//Make a todo item with the input values
const makeItemTodo = (itemName, itemTime) => {
    let newItem = document.createElement('div')
    newItem.classList.add('todo-item');
    newItem.innerHTML = `<i class="fas fa-trash"></i>
    <span class="todo-name">${itemName}</span>
    <span class="todo-time">${itemTime}</span>
    <i class="fas fa-play"></i>`
    todoItems.appendChild(newItem)

    //Call the delItemTodo function
    delItemTodo()

    //Call the startPomodoroItem function
    playItemTodo()
}

//Make a function to delete any item
const delItemTodo = () => {
    //Listen all the trash icons
    let delItem = document.querySelectorAll('.fa-trash')
    //Listen the click event in any trash icon
    delItem.forEach((item) =>{
        //Get the parentElement and delete it
        item.addEventListener('click', (e) =>{
            let itemDelete = e.target.parentElement
            itemDelete.remove()
        })
    })
}

//Listen the pomodoroTodo section
let pomodoroTodo = document.querySelector('.pomodoro-todo')

//Make a function to start the pomodoro session of any item
const playItemTodo = () =>{
    //Listen all the playButton
    let playButton = document.querySelectorAll('.fa-play')
    let pomodoroTime = document.querySelector('.pomodoro-time')
    let pomodoroTitle = document.querySelector('.pomodoro-title')
    //Listen the click event in any trash icon
    playButton.forEach((item) =>{
        //Get the parentElement and delete it
        item.addEventListener('click', (e) =>{
            let upElement = e.target.parentElement

            let itemName = upElement.children[1].textContent
            let itemTime = upElement.children[2].textContent

            pomodoroTitle.textContent = `You are working on: ${itemName}`

            pomodoroTodo.style.display = 'flex'
            
            let totalTime = itemTime * 60

            setInterval((_totalTime) =>{
                const minutes = Math.floor(totalTime / 60)
                let seconds = totalTime % 60

                let pomodoroTime = document.querySelector('.pomodoro-time')
                pomodoroTime.innerHTML = `${minutes}:${seconds}`

                totalTime--;
                if( minutes === 0 && seconds === 0 ){
                    alert( 'Great you did it')
                    pomodoroTodo.style.display = 'none'
                }
            }, 1000)
        })
    })
}

//Listen the form submit event
formTodo.addEventListener('submit', listenTaskDetail)   


//Functions when the app starts
delItemTodo()
playItemTodo()