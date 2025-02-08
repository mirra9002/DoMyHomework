const sectionTasks = document.getElementById('section-tasks');
const buttonAskQuestion = document.querySelector('#section-tasks').querySelector('button');
const sectionAddTask = document.getElementById('section-add-task');
const sectionConfirmCancel = document.getElementById('section-confirm-cancel');

const inputTask = document.getElementById('input-task');
const inputTaskSubject = document.getElementById('input-task-subject');
const inputTaskDueDate = document.getElementById('input-task-due-date');

const buttonConfirmAddTask = document.querySelector('#section-add-task').querySelector('button');
const buttonCancelAddTask = document.querySelector('#section-add-task').querySelector('button:last-of-type');
const buttonCancelDeleteTask = document.querySelector('#section-confirm-cancel').querySelector('button');
const buttonConfirmDeleteTask = document.querySelector('#section-confirm-cancel').querySelector('button:last-of-type');



const divTasks = document.querySelector('#section-tasks').querySelector('div');
const ulTasks = document.getElementById('ul-tasks');
const backdrop = document.getElementById('backdrop');
let tasks = [];

sectionAddTask.classList.add('invisible');
sectionConfirmCancel.classList.add('invisible');



const toggleSectionAddTasks = () => {
    inputTask.value = '';
    inputTaskSubject.value = '';
    inputTaskDueDate.value = '';
    sectionAddTask.classList.toggle('invisible');
    backdrop.style.display = sectionAddTask.classList.contains('invisible') ? 'none' : 'block';
    console.log('toggleSectionAddTasks');
    
}

const toggleSectionConfirmCancel = () => {
    sectionAddTask.classList.toggle('invisible');
    sectionConfirmCancel.classList.toggle('invisible');
    
    console.log('canceled');
}

const deleteTask = (taskId) => {
    for(let task of tasks){
        if(task.id === taskId){
            tasks.splice(tasks.indexOf(task), 1);
        }
    }
}

const addTask = () => {
    const task = {
        id: Date.now(),
        text: inputTask.value.trim(), 
        subject: inputTaskSubject.value.trim(),
        dueDate: inputTaskDueDate.value.trim()
    };
    if(!(inputTask.value === '' || inputTaskSubject.value === '' || inputTaskDueDate.value === '')){
        tasks.push(task);
        console.log(tasks);
    } else {
        alert('Please, enter a task!');
        return;
    }
    inputTask.value = '';
    inputTaskSubject.value = '';
    inputTaskDueDate.value = '';
    console.log(tasks);
    
    const newTask = document.createElement('li');

    const truncatedText = task.text.length < 70 ? task.text : task.text.substring(0, 70) + '...';  

    newTask.innerHTML = `<strong>Subject:</strong> ${task.subject}<br>
                     <strong>Text:</strong> ${truncatedText}<br>
                     <strong>Due date:</strong> ${task.dueDate}<br>
                     <button id="btn-answer-question">Answer</button>`;
    ulTasks.appendChild(newTask);
    const buttonAnswerQuestion = newTask.querySelector('#btn-answer-question');

    buttonAnswerQuestion.addEventListener('click', () => {
        // deleteTask(task.id);
        // ulTasks.removeChild(newTask);
        // console.log('Task deleted');
        localStorage.setItem('selectedTask', JSON.stringify(task));
        window.open('task.html', '_blank');
    });

    newTask.addEventListener('click', () => {
        // добавить функционал открытия нового окна с отдельно этим заданием
    });

    toggleSectionAddTasks();
}

buttonAskQuestion.addEventListener('click', toggleSectionAddTasks);
buttonCancelAddTask.addEventListener('click', toggleSectionConfirmCancel);
buttonConfirmAddTask.addEventListener('click', addTask);
buttonCancelDeleteTask.addEventListener('click', toggleSectionConfirmCancel);
buttonConfirmDeleteTask.addEventListener('click', () => {
    deleteTask();
    sectionAddTask.classList.add('invisible');
    sectionConfirmCancel.classList.add('invisible');
    backdrop.style.display = sectionAddTask.classList.contains('invisible') ? 'none' : 'block';
});
