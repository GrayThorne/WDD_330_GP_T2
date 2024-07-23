let threads = [
    { id: 1, title: "First thread", content: "This is the content of the first thread." },
    { id: 2, title: "Second thread", content: "This is the content of the second thread." }
];

// Function to display threads
function displayThreads() {
    const threadList = document.getElementById('thread-list');
    threadList.innerHTML = ''; // Clear existing threads

    threads.forEach(thread => {
        // Create thread element
        const threadElement = document.createElement('div');
        threadElement.classList.add('thread');
        threadElement.innerHTML = `
            <div class="thread-title">${thread.title}</div>
            <div class="thread-content">${thread.content}</div>
        `;
        threadList.appendChild(threadElement);
    });
}

// Function to handle form submission (creating new thread)
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const title = document.getElementById('thread-title').value;
    const content = document.getElementById('thread-content').value;

    // Validate input (basic validation)
    if (title.trim() === '' || content.trim() === '') {
        alert('Please enter both title and content.');
        return;
    }

    // Create new thread object
    const newThread = {
        id: threads.length + 1,
        title: title,
        content: content
    };

    // Add new thread to threads array
    threads.push(newThread);

    // Display updated threads
    displayThreads();

    // Clear form inputs
    document.getElementById('thread-title').value = '';
    document.getElementById('thread-content').value = '';
}

// Event listener for form submission
const form = document.getElementById('new-thread-form');
form.addEventListener('submit', handleFormSubmit);

// Initial display of threads
displayThreads();