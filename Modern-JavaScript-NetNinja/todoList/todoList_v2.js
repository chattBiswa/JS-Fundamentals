const form = document.querySelector('.add');
const ul = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = (todo) => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;
    ul.innerHTML += html;
};

// add todos
form.addEventListener('submit', e => {
    e.preventDefault();

    const todo = form.add.value.trim();
    if(todo.length){
        generateTemplate(todo);
        form.reset();  // reset all input fields in a form
    }
});

// delete todos
ul.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});


// search todos - using keyup event
const findSearchData = (ch) => {
    // add filtered class for non-matching li
    Array.from(ul.children)
        .filter(li => !li.textContent.toLowerCase().includes(ch))         // no qoutes
        .forEach(li => li.classList.add('filtered'));
    
    // remove filtered class for matched li
    Array.from(ul.children)
        .filter(li => li.textContent.toLowerCase().includes(ch))         // no qoutes
        .forEach(li => li.classList.remove('filtered'));
    
}

search.addEventListener('keyup', () => {
    const ch = search.value.trim().toLowerCase();
    findSearchData(ch);
});

