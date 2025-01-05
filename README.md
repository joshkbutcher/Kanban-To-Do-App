# Kanban-To-Do-App
Student Kanban Board
Student Kanban Board is a simple web application designed to help students manage their tasks using a Kanban board. It allows users to create, organize, and move tasks across "To-Do," "In Progress," and "Done" columns with drag-and-drop functionality. Tasks are saved in localStorage to persist across sessions.

Features
Task Management: Create tasks with titles and descriptions.
Columns: Organize tasks into "To-Do," "In Progress," and "Done."
Drag-and-Drop: Move tasks between columns seamlessly.
Persistence: Save tasks locally in the browser using localStorage.
Responsive Design: Optimized for various screen sizes.
Technologies Used
HTML5: Structure of the application.
CSS3: Styling of the Kanban board.
JavaScript (Vanilla): Logic for creating, saving, and managing tasks, as well as drag-and-drop functionality.
localStorage: Persistent storage for tasks in the browser.
How to Use
Add a Task:

Enter a title (required) and description (optional) in the input fields.
Select the initial column for the task ("To-Do," "In Progress," or "Done").
Click the Add Card button to create the task.
Move Tasks:

Drag a task card and drop it into another column.
Save Automatically:

Tasks are automatically saved to the browser's localStorage after creation or movement.
Reload the Page:

All tasks will reappear in their respective columns as they were before.
Folder Structure
graphql
Copy code
Kanban-To-Do-App/
│
├── index.html        # Main HTML file
├── style.css         # CSS file for styling
├── app.js            # JavaScript file for functionality
└── README.md         # Documentation file (this file)
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/joshkbutcher/Kanban-To-Do-App.git
Navigate to the project folder:
bash
Copy code
cd Kanban-To-Do-App
Open index.html in any modern web browser.
Future Enhancements
Add user authentication for multi-user support.
Integrate a database for cloud storage of tasks.
Enable task deadlines and reminders.
Implement task filtering and search functionality.
Contribution
Feel free to fork the repository, create a new branch, and submit a pull request with any improvements or new features.

