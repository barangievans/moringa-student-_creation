document.addEventListener('DOMContentLoaded', function() {
    let tasks = []; // Array to store tasks

    // Get the form element by its ID
    let form = document.getElementById('taskForm');

    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Get form values
        let taskDescription = document.getElementById('taskDescription').value;
        let priority = parseInt(document.getElementById('priority').value);
        let user = document.getElementById('user').value;
        let duration = parseInt(document.getElementById('duration').value);
        let dueDate = document.getElementById('dueDate').value;

        // Create task object
        let task = {
            taskDescription: taskDescription,
            priority: priority,
            user: user,
            duration: duration,
            dueDate: dueDate
        };

        // Add task to array
        tasks.push(task);

        // Sort tasks by priority (ascending by default)
        sortTasks();

        // Display tasks
        displayTasks();

        // Clear form inputs
        form.reset();
    });

    // Function to sort tasks by priority (ascending)
    function sortTasks() {
        tasks.sort((a, b) => a.priority - b.priority);
    }

    // Function to display tasks in the task list
    function displayTasks() {
        let taskListDiv = document.getElementById('taskList');
        taskListDiv.innerHTML = ''; // Clear previous content

        // Loop through tasks and create HTML for each task
        tasks.forEach((task, index) => {
            let taskDiv = document.createElement('div');
            taskDiv.classList.add('task-item');
            taskDiv.innerHTML = `
                <h3>Task ${index + 1}</h3>
                <p><strong>Description:</strong> ${task.taskDescription}</p>
                <p><strong>Priority:</strong> ${task.priority}</p>
                <p><strong>Assignee:</strong> ${task.user}</p>
                <p><strong>Duration:</strong> ${task.duration} weeks</p>
                <p><strong>Date Due:</strong> ${task.dueDate}</p>
            `;
 
