const task = JSON.parse(localStorage.getItem('selectedTask'));
console.log(`task: ${task}`);

const sectionTask = document.getElementById('section-task');
const divTaskInfo = document.getElementById('div-task-info')
const taskTitle = document.getElementById('task-title');
const taskSubject = document.getElementById('task-subject');
const taskText = document.getElementById('task-text');
const buttonAnswerTask = document.getElementById('bt-answer');

const sectionAnswers = document.getElementById('section-answer');
const divAnswer = document.getElementById('task-answer');

const sectionTypeAnswer = document.getElementById('section-type-answer');

sectionTypeAnswer.classList.add('invisible');

const truncateTask = (input) => {
    return truncatedText = input.length < 30? input : input.substring(0,30) + '...';
};

const toggleBackdrop = () => {
    // ...
}

const addAnswer = () => {
    sectionTypeAnswer.classList.remove('invisible');
    // finish writing, this function whould be looong
}



taskTitle.textContent = truncateTask(task.text);
taskSubject.textContent = task.subject;
taskText.textContent = task.text;

buttonAnswerTask.addEventListener('click', addAnswer);