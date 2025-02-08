const subjects = [
    "Англ. мова",
    "Біологія",
    "Географія",
    "Громадянська освіта",
    "Зарубіжна література",
    "Інформаційні Технології",
    "Програмування",
    "Історія України",
    "Комп. проект",
    "Математика",
    "Спецкурс",
    "Українська література",
    "Укр. мова",
    "Фізика",
    "Фізичне виховання"
];

const selectSubject = document.getElementById('input-task-subject');
const selectDueDate = document.getElementById('input-task-due-date');

subjects.forEach(subject => {
    const option = document.createElement('option');
    option.value = subject;
    option.textContent = subject;
    selectSubject.appendChild(option);
})

selectSubject.style.height = "25px";
selectSubject.style.fontFamily = "Geologica, serif";
selectSubject.style.fontWeight = "100";

selectDueDate.style.fontFamily = "Geologica, serif";
selectDueDate.style.fontWeight = "100";