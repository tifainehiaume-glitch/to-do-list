addEventListener("load", (event) => {
  // Retrieve elements from DOM

  function createTaskItem(text) {
    // Create new list item element
    const listItem = document.createElement('li')
    
    // Put taskText into the list item
    listItem.innerText = text

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

  // Handle form submission
  document.addEventListener('submit', onTaskSubmit)
})
