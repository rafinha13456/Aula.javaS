const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');


function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement('li');
        
        
        li.textContent = taskText;

        
        const concludeButton = document.createElement('button');
        concludeButton.textContent = 'Concluir';
        concludeButton.classList.add('conclude');
        concludeButton.onclick = () => markAsCompleted(li);

        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.classList.add('delete');
        deleteButton.onclick = () => li.remove();

        
        const taskTime = document.createElement('span');
        taskTime.classList.add('task-time');
        taskTime.textContent = '';

        
        li.appendChild(concludeButton);
        li.appendChild(deleteButton);
        li.appendChild(taskTime);

        
        taskList.appendChild(li);

        
        taskInput.value = '';
    }
}


function markAsCompleted(li) {
    const taskTime = li.querySelector('.task-time');
    const currentTime = new Date().toLocaleString(); 
    
    li.classList.add('completed'); 
    taskTime.textContent = `Concluída em: ${currentTime}`; 
    li.querySelector('.conclude').disabled = true; 
}


addTaskButton.onclick = addTask;


taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});