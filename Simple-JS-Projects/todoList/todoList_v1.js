const li = document.querySelectorAll('li');
const button = document.querySelector('button');
const ul = document.querySelector('ul');
const textarea = document.querySelector('textarea');


button.addEventListener('click', () => {
    // ul.innerHTML += '<li>new item</li>';
    const li = document.createElement('li');
    // console.log(textarea.value);
    li.textContent = textarea.value;
    ul.append(li);
});

ul.addEventListener('click', e => {
    if(e.target.tagName == 'LI'){
        e.target.remove();
    }
}) 