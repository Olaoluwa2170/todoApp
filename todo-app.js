const todos = getSavedTodos()

// my solution
renderTodo(todos,filters)

document.querySelector('#todo-input').addEventListener('input', function(e){
    e.preventDefault()
    filters.searchText = e.target.value
    renderTodo(todos, filters)
}
) 

document.querySelector('#add-todo').addEventListener('submit', function(e){
    e.preventDefault()
    if (e.target.elements.inputTodo.value==""){
        todos
    } else {addTodo(e.target.elements.inputTodo.value)}
    e.target.elements.inputTodo.value=""
    SaveTodos(todos)
    renderTodo(todos, filters)
})

document.querySelector('#check-todo').addEventListener('change', function(e){
    e.preventDefault()
    filters.checked=e.target.checked
    renderTodo(todos, filters)
    
})