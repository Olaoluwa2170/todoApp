
// Saved Todos
const getSavedTodos = () => {
    let todoJSON = localStorage.getItem('todos')
    if (todoJSON !== null){
    return JSON.parse(todoJSON)
}
else {return []}
}

// Get SummaryDom
const getSummaryDOM = (doneTask) => {
    const paragraphDoneTask = document.createElement('h2')
    paragraphDoneTask.textContent=`You have ${doneTask} todos left`
    return paragraphDoneTask
}

const removeTodo = function(id){
    const todoIndex = todos.findIndex(function(todo){
        return todo.id === id
    })
    if (todoIndex>-1){
        todos.splice(todoIndex, 1)}
}


//Toggle the completed task
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)
    todo!==undefined ? todo.completed = !todo.completed : []
}

//generateTodoDOM
const generateTodoDOM = (todo) => {
        //createElement
        const todoEL = document.createElement( 'div')
        const todoText = document.createElement('span')
        const button = document.createElement('button')
        const checkbox = document.createElement('input')
        
        //checkbox
        checkbox.setAttribute('type', 'checkbox')
        checkbox.checked = todo.completed
        todoEL.appendChild(checkbox)
        checkbox.addEventListener('change', function(){
            toggleTodo(todo.id)
            SaveTodos(todos)
            renderTodo(todos, filters)
        })
        

        
        //setup todo
        todoText.textContent=todo.text
        todoEL.appendChild(todoText)
        

        //setup remove
        button.setAttribute('id', 'removeButton')
        button.textContent='X'
        todoEL.appendChild(button)
        button.addEventListener('click', function(){
            removeTodo(todo.id)
            SaveTodos(todos)
            renderTodo(todos, filters)
        })
        return todoEL
}


// filter object
const filters = {
    searchText: "",
    checked: false
}

//renderDOM
const renderTodo = (todos, filters) => {
    const filtered = todos.filter((todo)=>{
     if (filters.checked){
         return !todo.completed && todo.text.toLowerCase().includes(filters.searchText.toLowerCase())}
         else{
             return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
         }
     })
    doneTask=0
    filtered.forEach(
     (a)=>{
         if (!a.completed){
             doneTask+=1
         }
     } 
 )
     //todoContainer
    document.querySelector('#todos').innerHTML=""
    document.querySelector('#todos').appendChild(getSummaryDOM(doneTask))    
    filtered.forEach(
      (todo)=>{
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
      } 
  )
}

// addtodo
const addTodo=(todoValue)=>{
    todos.push({
        id: uuidv4(),
        text:todoValue,
        completed:false})
}

//SaveTodos
const SaveTodos=(todos)=>{
    localStorage.setItem('todos', JSON.stringify(todos))
}
