# Student Kanban Board

Student Kanban Board is a simple and intuitive web application designed to help students manage their tasks effectively. It provides a Kanban board layout where tasks can be organized into "To-Do," "In Progress," and "Done" columns, with drag-and-drop functionality for seamless task movement. Tasks are saved to `localStorage` for persistence.

## Features

- **📝 Task Management:** Add tasks with titles and descriptions.
- **📋 Kanban Workflow:** Organize tasks into three categories: "To-Do," "In Progress," and "Done."
- **🖱️ Drag-and-Drop:** Move tasks between columns effortlessly.
- **💾 Data Persistence:** Automatically save tasks locally using `localStorage`.
- **📱 Responsive Design:** Works on both desktop and mobile devices.

## Technologies Used

| Technology      | Purpose                                     |
| --------------- | ------------------------------------------- |
| **HTML5**       | Structure of the application                |
| **CSS3**        | Styling for the Kanban board                |
| **JavaScript**  | Logic for managing tasks and drag-and-drop  |
| **localStorage**| Persistent storage in the browser           |

## How to Use

### Add a Task

1. Enter a title (required) and description (optional) in the input fields.
2. Select the initial column for the task: **To-Do**, **In Progress**, or **Done**.
3. Click **Add Card** to create the task.

### Move a Task

- **Drag and Drop:** Simply drag the task card and drop it into another column.

### Data Persistence

- Tasks are automatically saved to `localStorage` after creation or movement. Reload the page, and your tasks will reappear in their respective columns.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/joshkbutcher/Kanban-To-Do-App.git
   cd Kanban-To-Do-App


