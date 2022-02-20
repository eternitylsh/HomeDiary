const tdform = document.querySelector("#todo-form")
const tdinput = document.querySelector("#todo-form input")
const tdlist = document.querySelector("#todo-list")

const ToDoDeleteButtonName = "X"

let toDolist = []
const ID_TODLIST = "todolist"

// define Init
const InitToDo = () => {
    toDolist = JSON.parse(localStorage.getItem(ID_TODLIST))
    const savedUserName = localStorage.getItem(ID_USERNAME)
    if (null != toDolist)
        toDolist.forEach(PaintToDo)
    else
        toDolist = []

    tdform.addEventListener("submit", ontodoSubmit)
}

const SaveToDo = () => localStorage.setItem(ID_TODLIST, JSON.stringify(toDolist))

const DeleteToDo = event => {
    const li = event.target.parentElement
    li.remove()
        // if compare id.. please should type check;;
    toDolist = toDolist.filter(toDo => parseInt(li.id) !== toDo.id)
    SaveToDo()
}

const PaintToDo = newToDo => {
    const li = document.createElement("li")
    li.id = newToDo.id
    const todospan = document.createElement("span")
    todospan.innerText = newToDo.value
    const button = document.createElement("button")
    button.innerText = ToDoDeleteButtonName
    button.addEventListener("click", DeleteToDo)

    li.appendChild(button)
    li.appendChild(todospan)
    tdlist.appendChild(li)
}

const ontodoSubmit = event => {
    event.preventDefault()
    const newToDo = { id: Date.now(), value: tdinput.value }
    tdinput.value = ""
    toDolist.push(newToDo)
    SaveToDo()
    PaintToDo(newToDo) // tdinput.value is empty.. however.. newToDo have copy value for prev tdinput.value..
}

// init.
InitToDo()