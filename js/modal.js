const inputDescription = document.getElementById("description");
const inputDate = document.getElementById("date");
const btnCreateTask = document.getElementById('btn-create-task');
const modal = document.getElementById("modal");
const alertElement = document.getElementById("alert");


function createTask(e){
    e.preventDefault();

    if(!inputDescription.value || !inputDate.value){
        alertElement.style.display = 'block';
        return;
    }

    const newTask = {
        description: inputDescription.value,
        date: new Date(inputDate.value).toLocaleDateString('pt-BR',{ timeZone: 'UTC'}),
        id: Math.floor(Math.random() * 10000)
    }

    const allTasks = getTasks();

    localStorage.setItem('@GoTasks', JSON.stringify([ ...allTasks, newTask ]));

    toggleModal();
    clearFields();
}

function toggleModal(){
    modal.classList.toggle('modal-visible');
}

function clearFields(){
    inputDate.value = '';
    inputDescription.value = '';
}

btnCreateTask.addEventListener('click', createTask)