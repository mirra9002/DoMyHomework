const task = JSON.parse(localStorage.getItem('selectedTask'));
console.log(`task: ${task}`);
const backdrop = document.getElementById('backdrop');
const sectionTask = document.getElementById('section-task');
const divTaskInfo = document.getElementById('div-task-info')
const taskTitle = document.getElementById('task-title');
const taskSubject = document.getElementById('task-subject');
const taskText = document.getElementById('task-text');
const buttonAnswerTask = document.getElementById('bt-answer');

const sectionAnswers = document.getElementById('section-answer');
const divAnswer = document.getElementById('task-answer');
// const ulAnswers =


const sectionTypeAnswer = document.getElementById('section-type-answer');
const inputAnswer = document.getElementById('input-answer');
const buttonSubmitAnswer = document.getElementById('bt-submit-answer');
const buttonCancelAnswer = document.getElementById('bt-cancel-answer');

const sectionConfirmCancel = document.getElementById('section-confirm-cancel');
const buttonConfirmCancel = sectionConfirmCancel.querySelector('button');
const buttonCancelCancel = sectionConfirmCancel.querySelector('button:last-of-type');


sectionTypeAnswer.classList.add('invisible');
backdrop.classList.add('invisible');
sectionConfirmCancel.classList.add('invisible');

let answers = [];



const truncateTask = (input) => {
    return truncatedText = input.length < 30? input : input.substring(0,30) + '...';
};

const toggleBackdrop = () => {
    backdrop.style.display = sectionTypeAnswer.classList.contains('invisible') ? 'none' : 'block';
};


const showAnswerSection = () => {
    sectionTypeAnswer.classList.remove('invisible');
    toggleBackdrop();
}

const addAnswer = () => {
    const userAnswer = {
        id: Date.now(),
        text: inputAnswer.value
    };
    answers.push(userAnswer);
    console.log(userAnswer);

    const divUserAnswer = document.createElement('div');
    const textUserAnswer = document.createElement('p');
    sectionAnswers.appendChild(divUserAnswer);
    divUserAnswer.appendChild(textUserAnswer);
    textUserAnswer.textContent = userAnswer.text;

    // here - fix the problem that when writing multiple answers (like different people write them),
    // they look like one single paragraph. So, add separation between them

    inputAnswer.value = '';

    localStorage.setItem(`userAnswer-${userAnswer.id}`, JSON.stringify(userAnswer));
}

// is header-styles also fix problem - make logo-site (main text in header "Do My Homework")
// not to appear in the center on the answer page


taskTitle.textContent = truncateTask(task.text);
taskSubject.textContent = task.subject;
taskText.textContent = task.text;

buttonAnswerTask.addEventListener('click', showAnswerSection);

buttonSubmitAnswer.addEventListener('click', () => {
    console.log('answer sent');
    sectionTypeAnswer.classList.add('invisible');
    toggleBackdrop();
    addAnswer();
});

buttonCancelAnswer.addEventListener('click', () => {
    sectionTypeAnswer.classList.add('invisible');
    sectionConfirmCancel.classList.remove('invisible');
});

buttonConfirmCancel.addEventListener('click', () => {
    sectionTypeAnswer.classList.remove('invisible');
    sectionConfirmCancel.classList.add('invisible');
    inputAnswer.value = '';
});

buttonCancelCancel.addEventListener('click', () => {
    toggleBackdrop();
    sectionConfirmCancel.classList.add('invisible');
});
