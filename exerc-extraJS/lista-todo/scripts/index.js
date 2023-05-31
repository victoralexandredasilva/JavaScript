const todoForm = document.querySelector('#form-todo');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('.todo-list');
const formEdit = document.querySelector('#form-edit');
const editInput = document.querySelector('#input-edit');
const cancelEditBtn = document.querySelector('#cancel-edit-btn');

let oldInputValue;

// Funções
const saveTodo = (text) => {
    const todo = document.createElement('div');
    todo.classList.add('todo');

    const todoTitle = document.createElement('h3');
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);

    const doneBtn = document.createElement('button');
    doneBtn.classList.add('finish-todo');
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(doneBtn);

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-todo');
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editBtn);

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('delete-todo');
    removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    todo.appendChild(removeBtn);

    todoList.appendChild(todo);

    todoInput.value = '';
    todoInput.focus();

    saveDataToLocalStorage(); // Salvar os dados na localStorage
};

const toggleForms = () => {
    formEdit.classList.toggle('hide');
    todoForm.classList.toggle('hide');
    todoList.classList.toggle('hide');
};

const updateTodo = (text) => {
    const todos = document.querySelectorAll('.todo');

    todos.forEach((todo) => {
        let todoTitle = todo.querySelector('h3');

        if (todoTitle.innerText === oldInputValue) {
            todoTitle.innerText = text;
        }
    });

    saveDataToLocalStorage(); // Salvar os dados atualizados na localStorage
};

// Salvar os dados da lista to-do na localStorage
const saveDataToLocalStorage = () => {
    const todos = document.querySelectorAll('.todo');
    const todoData = [];

    todos.forEach((todo) => {
        const todoTitle = todo.querySelector('h3').innerText;
        todoData.push(todoTitle);
    });

    localStorage.setItem('todoData', JSON.stringify(todoData));
};

// Carregar os dados da localStorage
const loadTodoDataFromLocalStorage = () => {
    const todoData = localStorage.getItem('todoData');

    if (todoData) {
        const todos = JSON.parse(todoData);

        todos.forEach((todo) => {
            saveTodo(todo);
        });
    }
};

//Eventos
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputValue = todoInput.value;

    if (inputValue) {
        saveTodo(inputValue);
    }
});

document.addEventListener('click', (e) => {
    const targetEl = e.target;
    const parentEl = targetEl.closest('div');
    let todoTitle;

    if (parentEl && parentEl.querySelector('h3')) {
        todoTitle = parentEl.querySelector('h3').innerText;
    }

    if (targetEl.classList.contains('finish-todo')) {
        parentEl.classList.toggle('done');
        saveDataToLocalStorage(); // Salvar os dados atualizados na localStorage
    }

    if (targetEl.classList.contains('delete-todo')) {
        parentEl.remove();
        saveDataToLocalStorage
    }
})
