function addTask() {
    const input = document.getElementById('taskInput');
    const taskValue = input.value;

    if (taskValue === "") {
        alert("Enter a task first!");
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        ${taskValue} 
        <span class="delete-btn" onclick="this.parentElement.remove()">×</span>
    `;

    document.getElementById('taskList').appendChild(li);
    input.value = ""; // Clear input after adding
}
