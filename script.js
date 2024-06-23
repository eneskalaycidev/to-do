document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newTodoText = todoInput.value.trim();
        if (newTodoText) {
            addTodoItem(newTodoText);
            todoInput.value = '';
        }
    });

    function addTodoItem(text) {
        const li = document.createElement('li');
        
        const span = document.createElement('span');
        span.textContent = text;
        li.appendChild(span);
        
        const actions = document.createElement('div');
        actions.classList.add('actions');
        
        const editButton = document.createElement('button');
        editButton.textContent = 'Düzenle';
        editButton.classList.add('edit');
        editButton.addEventListener('click', () => editTodoItem(li, span));
        actions.appendChild(editButton);
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Sil';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => deleteTodoItem(li));
        actions.appendChild(deleteButton);
        
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Tamamla';
        completeButton.classList.add('complete');
        completeButton.addEventListener('click', () => completeTodoItem(li));
        actions.appendChild(completeButton);
        
        li.appendChild(actions);
        todoList.appendChild(li);
    }

    function editTodoItem(li, span) {
        const newText = prompt('Görevi düzenle:', span.textContent);
        if (newText !== null) {
            span.textContent = newText.trim();
        }
    }

    function deleteTodoItem(li) {
        todoList.removeChild(li);
    }

    function completeTodoItem(li) {
        li.classList.toggle('completed');
    }
});
