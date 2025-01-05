Student Kanban Board
Student Kanban Board is a simple and intuitive web application designed to help students manage their tasks effectively. It provides a Kanban board layout where tasks can be organized into "To-Do," "In Progress," and "Done" columns, with drag-and-drop functionality for seamless task movement. Tasks are saved to localStorage for persistence.

Features
📝 Task Management: Add tasks with titles and descriptions.
📋 Kanban Workflow: Organize tasks into three categories: "To-Do," "In Progress," and "Done."
🖱️ Drag-and-Drop: Move tasks between columns effortlessly.
💾 Data Persistence: Automatically save tasks locally using localStorage.
📱 Responsive Design: Works on both desktop and mobile devices.
Technologies Used
Technology	Purpose
HTML5	Structure of the application
CSS3	Styling for the Kanban board
JavaScript	Logic for managing tasks and drag-and-drop
localStorage	Persistent storage in the browser
How to Use
Add a Task:

Enter a title (required) and description (optional) in the input fields.
Select the initial column for the task: To-Do, In Progress, or Done.
Click Add Card to create the task.
Move a Task:

Drag the task card and drop it into another column.
Data Persistence:

Tasks are automatically saved to localStorage after creation or movement.
Reload the page, and your tasks will reappear in their respective columns.
Folder Structure
graphql
Copy code
Kanban-To-Do-App/
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
Open index.html in your browser to run the app.
Future Enhancements
✅ Add user authentication for multi-user support.
☁️ Integrate cloud storage for tasks using a database.
⏰ Enable task deadlines and notifications.
🔍 Add filtering and search functionality for tasks.
Contribution Guidelines
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch:
bash
Copy code
git checkout -b feature-name
Commit your changes:
bash
Copy code
git commit -m "Description of changes"
Push to your branch:
bash
Copy code
git push origin feature-name
Submit a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for details.