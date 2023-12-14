const table = document.getElementById("table-body");
const loadingMessage = document.getElementById('loading-message');
const countTasks = document.getElementById('count-tasks');


function updateCountTasks(){
    const allTasks = getTasks();
    countTasks.innerHTML = allTasks.length;
}

function fillTable(){
    const allTasks = getTasks();

    if(allTasks.length === 0){
        loadingMessage.innerHTML = "Você não possui nenhuma tarefa!";
    } else {
        loadingMessage.innerHTML = "";
    }

    updateCountTasks();
}





