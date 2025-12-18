addEventListener("load", (event) => {
  // Retrieve elements from DOM

  function createTaskItem(text) {
    // Create new list item element
    const listItem = document.createElement('li')
    
    // Put taskText into the list item
    listItem.innerText = text

    // Create button to mark task as done
    const doneBtn = document.createElement('button')
    doneBtn.className = 'task-done-toggle'
    doneBtn.innerText = '✔'
    doneBtn.addEventListener('click', onTaskDoneToggleClick)

    // add button to list item content
    listItem.append(doneBtn)

    return listItem
  }

  function onTaskSubmit(event) {
    // prevent default behavior of form submission to avoid page to reload with params
    event.preventDefault() 

    // Get current value in text input
    const taskTitleInput = document.getElementById('task-title')

    // Create new element
    const newTodoItem = createTaskItem(taskTitleInput.value)

    // Add new element to list container
    const todoContainer = document.getElementById('task-list')
    todoContainer.append(newTodoItem)
  
    // Reset input
    taskTitleInput.value = ''
  }

  function onTaskDoneToggleClick(event) {
    // Retrieve button and its related task
    const doneBtn = event.target
    const task = doneBtn.parentElement

    // Toggle 'done' status of the task
    const isTaskAlreadyDone = task.classList.contains('done')
    if (isTaskAlreadyDone) {
      task.classList.remove('done')
      doneBtn.innerText = '✔' 
    } else {
      task.classList.add('done')
      doneBtn.innerText = '↶'
    }
  }

  // Handle form submission
  document.addEventListener('submit', onTaskSubmit)
})
