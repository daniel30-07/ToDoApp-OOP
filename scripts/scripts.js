// let form = document.querySelector('#form')
// let newTask = document.querySelector('#task')
// let addTask = document.querySelector('#add')
// let tituloTarefa = document.querySelector('.task-title')
// let task = document.querySelector('.task')
// let tasksContainer = document.querySelector('#tasks-container')
// let empty = document.querySelector('#empty-tasks')
// let sTasks = true

// function addNewTask() {

//   let divTask = document.createElement('div')
//   let iCheck = document.createElement('i')
//   let spanTask = document.createElement('span')
//   let iTrash = document.createElement('i')

//   divTask.classList.add('task')
//   iCheck.classList.add('fa', 'fa-check')
//   spanTask.classList.add('task-title')
//   iTrash.classList.add('fa', 'fa-trash', 'hide')

//   let node = document.createTextNode(newTask.value)
//   spanTask.appendChild(node)
//   tasksContainer.appendChild(divTask)
//   divTask.appendChild(iCheck)
//   divTask.appendChild(spanTask)
//   divTask.appendChild(iTrash)
// }

// form.addEventListener('submit', e => {
//   e.preventDefault()
//   if(sTasks) {
//     empty.remove()
//   }
//   addNewTask()
//   task.classList.remove('hide')
// })



class Todo {
  constructor() {
    this.totalTasks = document.querySelectorAll('.task').length
  }

  addTask(taskText) {

    //clona template
    let template = document.querySelector('.task').cloneNode(true)
    //remove classe hide
    template.classList.remove('hide')
    //manipular texto
    let templateText = template.querySelector('.task-title')
    templateText.textContent = taskText

    let list = document.querySelector('#tasks-container')

    //inserir na lista
    list.appendChild(template)

    //adiciona evento nas tasks
    this.addEvents()

    this.checkTasks('add') 

  }

  removeTask(task) {
    //achar o elemento pai
    let parentEl = task.parentElement

    //remover da lista
    parentEl.remove()

    this.checkTasks('remove') 
  }

  completeTask(task) {

    task.classList.add('done')

  }

  addEvents() {
    let removeBtns = document.querySelectorAll('.fa-trash')
    let removeBtn = removeBtns[removeBtns.length - 1]
    let doneBtns = document.querySelectorAll('.fa-check')
    let doneBtn = doneBtns[doneBtns.length - 1]

    //adicionar evento de remover
    removeBtn.addEventListener('click', function () {
      todo.removeTask(this)
    })

    //adiciona evento completar tarefa
    doneBtn.addEventListener('click', function () {
      todo.completeTask(this)
    })

  }

  checkTasks(command) {
    let msg = document.querySelector('#empty-tasks')

    //lógica de adicionar ou remover tasks
    if(command === 'add') {
      this.totalTasks += 1
    } else if(command === 'remove') {
      this.totalTasks -= 1
    } 

    //checa se tem mais de uma task e adiciona ou remove classe
    if(this.totalTasks == 1) {
      msg.classList.remove('hide')
    } else {
      msg.classList.add('hide')
    }

  }

}

let todo = new Todo()

//events
let addBtn = document.querySelector('#add')

addBtn.addEventListener('click', e => {
  e.preventDefault()

  let taskText = document.querySelector('#task')

  if (taskText.value != "") {
    todo.addTask(taskText.value)
  }

  //limpa campo de texto
  taskText.value = ""


})