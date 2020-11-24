let form = document.querySelector('#form')
let newTask = document.querySelector('#task')
let addTask = document.querySelector('#add')
let tituloTarefa = document.querySelector('.task-title')
let task = document.querySelector('.task')
let tasksContainer = document.querySelector('#tasks-container')

function addNewTask() {

  let divTask = document.createElement('div')
  let iCheck = document.createElement('i')
  let spanTask = document.createElement('span')
  let iTrash = document.createElement('i')

  divTask.classList.add('task')
  iCheck.classList.add('fa', 'fa-check')
  spanTask.classList.add('task-title')
  iTrash.classList.add('fa', 'fa-trash', 'hide')

  let node = document.createTextNode(newTask.value)
  spanTask.appendChild(node)
  tasksContainer.appendChild(divTask)
  divTask.appendChild(iCheck)
  divTask.appendChild(spanTask)
  divTask.appendChild(iTrash)

  
  //task.appendChild(taskSpan)
}

form.addEventListener('submit', e => {
  e.preventDefault()
  addNewTask()
  task.classList.remove('hide')
})


console.log("L", tituloTarefa.textContent)