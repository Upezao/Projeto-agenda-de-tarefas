const modal = document.getElementById("modal");
const alertElement = document.getElementById("alert");
const inputDescription = document.getElementById("description");
const inputDate = document.getElementById("date");
const btnCreateTask = document.getElementById('btn-create-task');


function createTask(e){
    e.preventDefault();

    if(!inputDescription.value || !inputDate.value){
        alertElement.style.display = 'block';
        closeAlert();
        return;
    }

    const newTask = {
        description: inputDescription.value,
        date: new Date(inputDate.value).toLocaleDateString("pt-BR",{ timeZone: 'UTC'}),
        id: Math.floor(Math.random() * 10000)
    }
    const allTasks = loadTasks();

    localStorage.setItem('@GoTasks', JSON.stringify([ ...allTasks, newTask ]));

    reload();
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

function closeAlert(){
    setTimeout( () => {
        alertElement.style.display = 'none';

    },3000); // quando der 3 segundos ele executa todos os codigos aqui dentro. 
}

btnCreateTask.addEventListener('click', createTask)