document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskCategory = document.getElementById('taskCategory').value;
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskItem = document.createElement('li');
        // Creamos un span para el texto
        const textSpan = document.createElement('span');
        textSpan.textContent = taskText;
        taskItem.appendChild(textSpan);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', function() {
            taskItem.remove();
        });

        taskItem.appendChild(deleteButton);

        if (taskCategory === 'carrera') {
            document.getElementById('carreraList').appendChild(taskItem);
        } else if (taskCategory === 'trabajo') {
            document.getElementById('trabajoList').appendChild(taskItem);
        } else if (taskCategory === 'personal') {
            document.getElementById('personalList').appendChild(taskItem);
        }

        taskInput.value = '';
    }
});