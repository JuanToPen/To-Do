document.getElementById('todoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const section = document.getElementById('sectionSelect').value;
    const taskText = document.getElementById('taskInput').value.trim();
    const dueDate = document.getElementById('dueDate').value;
    
    if (!section || !taskText) return;
    
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    
    const taskInfo = document.createElement('div');
    taskInfo.className = 'task-info';
    taskInfo.textContent = taskText;
    
    if (dueDate) {
        const dueElement = document.createElement('div');
        dueElement.className = 'task-due';
        dueElement.textContent = `Vence: ${dueDate}`;
        taskInfo.appendChild(dueElement);
    }
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = '×';
    deleteBtn.onclick = () => taskItem.remove();
    
    taskItem.appendChild(taskInfo);
    taskItem.appendChild(deleteBtn);
    
    const targetSection = section === 'career' 
        ? document.getElementById('careerTasks') 
        : document.getElementById('workTasks');
    
    targetSection.appendChild(taskItem);
    
    this.reset();
});