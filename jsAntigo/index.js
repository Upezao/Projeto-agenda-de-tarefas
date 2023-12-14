const table = document.getElementById("table-body");
const loadingMessage = document.getElementById('loading-message');
const countTasks = document.getElementById('count-tasks');


function loadTasks(){
    const tasks = JSON.parse(localStorage.getItem('@GoTasks')) || [];
    return tasks;
}

function setTasks(tasks){
    localStorage.setItem('@GoTasks', JSON.stringify(tasks));
}

function updateCountTasks(){
    const allTasks = loadTasks();
    countTasks.innerHTML = allTasks.length;
}

function fillTable(){
    const allTasks = loadTasks();
    allTasks.forEach(addTask);

    if(allTasks.length === 0){
        loadingMessage.innerHTML = "Você não possui tarefas";
    } else {
        loadingMessage.innerHTML = "";
    }

    updateCountTasks();
}

function addTask(task){
    const tr = document.createElement('tr');
    tr.innerHTML = innerHTMLTasks(task);

    table.appendChild(tr);
}

function innerHTMLTasks(task){
    const html = `
    <td>${task.description}</td>
    <td>${task.date}</td>
    <td>
      <a href="#" onclick=" removeTask(${task.id})"> 
        <i class='fas fa-trash'></i>
      </a>
    </td>
    <td>
        <a href="#" onclick="toggleModal()"> 
            <i class="fa-sharp fa-regular fa-note-sticky"></i>
        </a>
    </td>
    `;

    return html;
}

function removeTask(id){
    const allTasks = loadTasks();
    const tasksFiltered = allTasks.filter(task => task.id !==id);

    setTasks(tasksFiltered);
    reload();
}

function reload(){
    table.innerHTML = '';
    fillTable();
}
