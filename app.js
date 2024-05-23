
function renderTodo() {
    p.innerHTML = ''
    for (let i = 0; i < arr.length; i++) {
        p.innerHTML += `
        <li> ${arr[i]}
        <button   onclick="deleteTodo(${i})" type="button" class="btn btn-info" >delete <i class="fa-solid fa-trash text-light"></i></button>
        <button onclick="editTodo(${i})"  type="button" class="btn btn-danger">edit <i class="fa-solid fa-pen-to-square text-light"></i></button>
        </li>
        `
    }
    
}
const todoInput = document.querySelector('#todo');
const p = document.querySelector('p');
const arr = [];
function addTodo() {
    arr.push(todoInput.value);
    renderTodo()
    todoInput.value = ''
}
function deleteTodo(index) {
    arr.splice(index, 1);
    renderTodo()
}
function editTodo(index) {
    const newVal = prompt('Enter New value');
    arr.splice(index , 1 , newVal);
    renderTodo()
}
