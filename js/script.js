const addTodo = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="fas fa-trash-alt delete"></i>
        </li>
    `;

    list.innerHTML += html;
};

addTodo.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addTodo.add.value.trim();

    if(todo.length){
        generateTemplate(todo);
        addTodo.reset();
    };
});


// delete todos

list.addEventListener('click', e => {

    if (e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }

});

const filterTodos = (term) => {
    Array.from(list.children)
        .filter((onetodo) => !onetodo.textContent.toLowerCase().includes(term))
        .forEach((onetodo) => onetodo.classList.add('filtered'));

    Array.from(list.children)
        .filter((onetodo) => onetodo.textContent.toLowerCase().includes(term))
        .forEach((onetodo) => onetodo.classList.remove('filtered'));
};

// keyup event

search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
})