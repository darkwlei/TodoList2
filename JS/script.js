
const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

function addTodo() {
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        const todoItem = document.createElement('li');
        todoItem.innerText = todoText;

        const removeBtn = document.createElement('button');
        removeBtn.innerText = "Удалить";
        removeBtn.classList.add('remove-btn');

        removeBtn.addEventListener('click', () => {
            todoList.removeChild(todoItem);
        });

        todoItem.appendChild(removeBtn); 
        todoList.appendChild(todoItem);

        todoInput.value = '';
        
            
        

    }else{
        alert('Тапшырма киргиз')
    }
}

addTodoBtn.addEventListener('click', addTodo);
