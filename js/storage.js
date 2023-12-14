function getTasks(){
    return JSON.parse(localStorage.getItem('@GoTask')) || [];
}

function setTasks(tasks){
    localStorage.setItem('@GoTasks', JSON.stringify(tasks));
}