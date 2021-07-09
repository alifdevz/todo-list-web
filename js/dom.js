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

function makeTodo(data, timeStamp) {
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

    container.append(createCheckButton());

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
    taskElement.remove();
}

function createCheckButton() {
    return createButton('check-button', function(event) {
        addTaskToCompleted(event.target.parentElement);
    })
}