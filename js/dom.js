const UNCOMPLETED_LIST_TODO_ID = 'todos';

function addTodo() {
    const uncompletedTODOList = document.getElementById(UNCOMPLETED_LIST_TODO_ID);

    for (let i = 0; i < 10; i++) {
        const todo = makeTodo();
        uncompletedTODOList.append(todo);
    }
    
    const textTodo = document.getElementById('title').value;
    const timeStamp = document.getElementById('date').value;
    console.log('todo: ' + textTodo);
    console.log('timestamp: ' + timeStamp);
}

function makeTodo() {
    const textTitle = document.createElement('h2');
    textTitle.innerText = 'Tugas Android';

    const textTimeStamp = document.createElement('p');
    textTimeStamp.innerText = '2021-05-01';

    const textContainer = document.createElement('div');
    textContainer.classList.add('inner');
    textContainer.append(textTitle, textTimeStamp);

    const container = document.createElement('div');
    container.classList.add('item', 'shadow');
    container.append(textContainer);

    return container;
}