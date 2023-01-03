const userInput = document.querySelector('#userInput');
const list = document.querySelector('#list');


userInput.addEventListener('submit', (event) => {
    event.preventDefault()
    addTask();
});


let addTask = () => {
    list.innerHTML += '<h2>Nueva Tarea</h2>'
};

// const submit = document.querySelector('#addBtn');
