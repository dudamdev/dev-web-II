const tbody = document.querySelector('tbody');
const addForm = document.querySelector('.add-form');
const inputTitle = document.querySelector('#input-title');
const inputDescription = document.querySelector('#input-description');

const fetchTasks = async () => {
    const response = await fetch('http://localhost:3333/tasks');
    const tasks = await response.json();
    return tasks;
}

const addTask = async (event) => {
    event.preventDefault();

    const task = { title: inputTitle.value, description: inputDescription.value };

    await fetch('http://localhost:3333/tasks', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
    });
}

const createElement = (tag, innerText = '', innerHTML = '') => {
    const element = document.createElement(tag);

    if (innerText) {
        element.innerText = innerText;
    }

    if (innerHTML) {
        element.innerHTML = innerHTML;
    }
    return element;
}

const createSelect = (value) => {
    const options = `
    <option value="pendente">pendente</option>
    <option value="em andamento">em andamento</option>
    <option value="concluída">concluída</option>
    `;
    const select = createElement('select', '', options);
    select.value = value;

    return select;

}

const createRow = (task) => {
    const { id, title, description, created_at, status } = task;
    const tr = createElement('tr');
    const tdTitle = createElement('td', title);
    const tdDescription = createElement('td', description);
    const tdCreatedAt = createElement('td', created_at);
    const tdStatus = createElement('td');
    const tdActions = createElement('td');

    const select = createSelect(status);

    const editButton = createElement('button', '', '<span class="material-icons">edit</span>');
    const deleteButton = createElement('button', '', '<span class="material-icons">delete</span>');

    editButton.classList.add('btn-action');
    deleteButton.classList.add('btn-action');

    tdStatus.appendChild(select);

    tdActions.appendChild(editButton);
    tdActions.appendChild(deleteButton);

    tr.appendChild(tdTitle);
    tr.appendChild(tdDescription);
    tr.appendChild(tdCreatedAt);
    tr.appendChild(tdStatus);
    tr.appendChild(tdActions);

    tbody.appendChild(tr);

    return tr
}

const loadTasks = async () => {
    const tasks = await fetchTasks();

    tasks.array.forEach((task) => {
        const tr = createRow(task);
        tbody.appendChild(tr);
    });
}

button.addEventListener('submit', addTask());

loadTasks();