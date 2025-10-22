addEventListener("load", (event) => {
  // Retrieve elements from DOM
  const addItemButton = document.getElementById('add-item')
  const todoContainer = document.getElementById('todo')
  const addItemInput = document.getElementById('new-todo-text')

  // Handle click
  addItemButton.addEventListener('click', () => {
    // Create new element
    const newTodoItem = document.createElement('li')
    newTodoItem.innerText = addItemInput.value

    // Add new element to list container
    todoContainer.append(newTodoItem)
  })
})
