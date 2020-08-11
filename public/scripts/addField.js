document.querySelector('#add-time').addEventListener('click', cloneField);
function cloneField(e) {
    e.preventDefault();
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);
    const fields = newFieldContainer.querySelectorAll('input');
    fields.forEach(field => {
        field.value = '';
    })
    const button = newFieldContainer.querySelector('.buttonField');
    button.style.display = 'block';
    newFieldContainer.classList.add('newFieldContainer');
    document.querySelector('#schedule-items').appendChild(newFieldContainer); 
    let items = document.querySelector('#schedule-items').querySelectorAll('.schedule-item.newFieldContainer');
    for(let item of items) {
        item.querySelector('.buttonField').addEventListener('click', e => {
            item.remove();
        });
    };
}