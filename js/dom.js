const UNCOMPLETED_LIST_TODO_ID = 'todos';
const COMPLETED_LIST_TODO_ID = 'completed-todos';

function addTodo() {
    const uncompletedTODOList = document.getElementById(UNCOMPLETED_LIST_TODO_ID);

    const textTodo = document.getElementById('title').value;
    const timeStamp = document.getElementById('date').value;
    // console.log('todo: ' + textTodo);
    // console.log('timestamp: ' + timeStamp);

    const todo = makeTodo(textTodo, timeStamp);
    uncompletedTODOList.append(todo);
}

function makeTodo(data, timeStamp, isCompleted) {
    const textTitle = document.createElement('h2');
    textTitle.innerText = data;

    const textTimeStamp = document.createElement('p');
    textTimeStamp.innerText = timeStamp;

    const textContainer = document.createElement('div');
    textContainer.classList.add('inner');
    textContainer.append(textTitle, textTimeStamp);

    const container = document.createElement('div');
    container.classList.add('item', 'shadow');
    container.append(textContainer);

    if (isCompleted) {
        container.append(createUndoButton(), createTrashButton());
    } else {
        container.append(createCheckButton());
    }

    return container;
}

function createButton(buttonTypeClass, eventListener) {
    const button = document.createElement('button');
    button.classList.add(buttonTypeClass);
    button.addEventListener('click', function(event) {
        eventListener(event);
    });
    return button;
}

function addTaskToCompleted(taskElement) {
    const taskTitle = taskElement.querySelector('.inner > h2').innerText;
    const taskTimeStamp = taskElement.querySelector('.inner > p').innerText;

    const newTodo = makeTodo(taskTitle, taskTimeStamp, true);
    const listCompleted = document.getElementById(COMPLETED_LIST_TODO_ID);
    listCompleted.append(newTodo);
    taskElement.remove();
}

function createCheckButton() {
    return createButton('check-button', function(event) {
        addTaskToCompleted(event.target.parentElement);
    });
}

function removeTaskFromCompleted(taskElement) {
    taskElement.remove();
}

function createTrashButton() {
    return createButton('trash-button', function(event) {
        removeTaskFromCompleted(event.target.parentElement);
    });
}

function undoTaskFromCompleted(taskElement) {
    const listUncompleted = document.getElementById(UNCOMPLETED_LIST_TODO_ID);
    const taskTitle = taskElement.querySelector('.inner > h2').innerText;
    const taskTimeStamp = taskElement.querySelector('.inner > p').innerText;

    const newTodo = makeTodo(taskTitle, taskTimeStamp, false);

    listUncompleted.append(newTodo);
    taskElement.remove();
}

function createUndoButton() {
    return createButton("undo-button", function(event) {
        undoTaskFromCompleted(event.target.parentElement);
    });
}