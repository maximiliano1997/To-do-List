const userInput = document.querySelector('#userInput');
const list = document.querySelector('#list');
const taskValue = document.querySelector('input[type="text"]')
const stats = document.querySelector('#stats');

const start = ()=> {
    alert("Remember to delete the first 3 Test Tasks before add yours");
}

userInput.addEventListener('submit', (event) => {
    event.preventDefault()
    addTask();
});

let idCounter = 0;
let addTask = () => {
    idCounter++;
    list.innerHTML += 
    `
    <div class="task-container" id="${idCounter}">
            <label>
                <input type="checkbox"> ${taskValue.value}
            </label>
            <img src="images/trash.png" alt="">
        </div>
    `
    taskValue.value = "";

    updateStats();
};


list.addEventListener('click', (event)=>{
    if (event.srcElement.nodeName == "INPUT") {
        updateStats();
    } else if (event.srcElement.nodeName == "IMG") {
        deleteTask(event.srcElement.parentNode.id);
    }
    
});

let updateStats = () => {
    let element = list.querySelectorAll('div');
    let checkbox = list.querySelectorAll('input[type="checkbox"]:checked');
    stats.innerHTML = 
    `
    <p id="pending">Pending Tasks: ${element.length}</p>  <p id="completed">Tasks Completed: ${checkbox.length}</p>
    `
};

let deleteTask = (id) => {
 let taskToDelete = document.getElementById(id);
 list.removeChild(taskToDelete);
 updateStats();
};