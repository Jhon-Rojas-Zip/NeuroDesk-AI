const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const notesArea = document.getElementById('notesArea');

let tasks = JSON.parse(localStorage.getItem('neuroTasks')) || [];

function saveTasks() {
    localStorage.setItem('neuroTasks', JSON.stringify(tasks));
}

function renderTasks() {

    taskList.innerHTML = '';

    tasks.forEach((task, index) => {

        const li = document.createElement('li');

        li.classList.add('task-item');

        li.innerHTML = `
            <span>${task}</span>
            <button onclick="deleteTask(${index})">
                <i class="fa-solid fa-trash"></i>
            </button>
        `;

        taskList.appendChild(li);
    });
}

function addTask() {

    const value = taskInput.value.trim();

    if(value === '') return;

    tasks.push(value);

    saveTasks();
    renderTasks();

    taskInput.value = '';
}

function deleteTask(index) {

    tasks.splice(index, 1);

    saveTasks();
    renderTasks();
}

addTaskBtn.addEventListener('click', addTask);

window.deleteTask = deleteTask;

renderTasks();

// NOTES

notesArea.value = localStorage.getItem('neuroNotes') || '';

notesArea.addEventListener('input', () => {
    localStorage.setItem('neuroNotes', notesArea.value);
});

// CHART

const ctx = document.getElementById('productivityChart');

});

// =========================
// SIDEBAR MOBILE
// =========================

const mobileToggle = document.getElementById('mobileToggle');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');

mobileToggle.addEventListener('click', () => {

    sidebar.classList.toggle('active');
    sidebarOverlay.classList.toggle('active');

});

sidebarOverlay.addEventListener('click', () => {

    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');

}); 