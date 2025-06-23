## Post Pulse - Blog Manager

**Post Pulse** is a simple, responsive blog management app built with vanilla JavaScript, HTML, and CSS. It interacts with a mock RESTful API using `json-server`. Users can create, read, update, and delete blog posts seamlessly, with full DOM updates and data persistence.



##   Features

###  Core Deliverables
- **View Blog Posts**: Fetch and display all blog titles on page load.
- **View Post Details**: Click a title to view its content, author, and timestamp.
- **Create New Posts**: Add a blog post via the form. Posts appear immediately in the list.

###  Advanced Deliverables
- **Auto-load First Post**: Automatically display the first post's details on page load.
- **Edit Posts**: Edit post title and content using a dynamic form.
- **Delete Posts**: Delete any post with a confirmation prompt and remove it from the DOM.

###  Extra Advanced Features
- **Data Persistence**: POST, PATCH, and DELETE requests are fully implemented via `json-server`, meaning all updates persist in `db.json`.



## Project Structure

`project-root/
│
├── css/
│ └── styles.css
│
├── src/
│ └── index.js
│
├── db.json
├── index.html
`


##  Tech Stack

- **HTML/CSS/JS (Vanilla)**
- **JSON Server** - for mocking the RESTful API
- **Live Server** - for frontend development

---

##  Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/post-pulse.git
   cd post-pulse
2.	Install JSON Server Globally
bash
CopyEdit
npm install -g json-server@0.17.4
3.	Run JSON Server
bash
CopyEdit
json-server db.json
The API will be available at: http://localhost:3000
4.	Launch the Frontend
If using Live Server:
o	Right-click index.html > Open with Live Server
Or run:
bash
CopyEdit
live-server
________________________________________
## API Endpoints
•	GET /posts – Get all posts
•	GET /posts/:id – Get a specific post
•	POST /posts – Add a new post
•	PATCH /posts/:id – Update an existing post
•	DELETE /posts/:id – Delete a post
________________________________________
## UI Layout
•	Left Panel: Blog post titles and the "Add New Post" form
![image](https://github.com/user-attachments/assets/1d6ccbb7-c4b6-4608-97b2-9475badab05d)
•	Right Panel: Detailed post view and "Update Post Details" form (appears on Edit)
![image](https://github.com/user-attachments/assets/9605087e-d1b6-4cab-8ab7-415d30ad7f51)



________________________________________
##  Author
Julius  Kedienye
Software Engineering 
________________________________________
## License
This project is open-source and free to use for educational purposes.
________________________________________## Future Improvements
•	Add image upload support for each post
•	Use localStorage for offline caching
•	Introduce categories/tags filtering
•	Responsive design optimizations

