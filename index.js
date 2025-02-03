function addTask() {
    const taskInput = document.getElementById('taskInput');
    const sectionSelect = document.getElementById('sectionSelect');
    const subjectSelect = document.getElementById('subjectSelect');
    const dueDate = document.getElementById('dueDate');

    if (taskInput.value.trim() === '') return;

    const task = {
        text: taskInput.value,
        section: sectionSelect.value,
        subject: sectionSelect.value === 'carrera' ? subjectSelect.value : null,
        dueDate: dueDate.value
    };

    const taskElement = document.createElement('div');
    taskElement.className = 'task-item';
    
    let taskContent = `<span>${task.text}`;
    
    if (task.dueDate) {
        taskContent += `<span class="due-date">⏳ ${new Date(task.dueDate).toLocaleDateString()}</span>`;
    }
    
    taskContent += `</span>`;
    
    if (task.section === 'carrera') {
        taskElement.classList.add(task.subject);
    }

    taskElement.innerHTML = taskContent + '<button class="delete-btn" onclick="this.parentElement.remove()">Eliminar</button>';

    // Encontrar el contenedor correcto
    if (task.section === 'carrera') {
        document.querySelector(`.${task.subject} .tasks`).appendChild(taskElement);
    } else {
        document.querySelector('.work-section .tasks').appendChild(taskElement);
    }

    // Resetear campos
    taskInput.value = '';
    dueDate.value = '';
}

// Mostrar/ocultar selector de asignatura
document.getElementById('sectionSelect').addEventListener('change', function() {
    document.getElementById('subjectSelect').style.display = 
        this.value === 'carrera' ? 'inline-block' : 'none';
});

// Inicializar visibilidad del selector de asignatura
document.getElementById('subjectSelect').style.display = 'inline-block';