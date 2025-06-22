const BASE_URL = "http://localhost:3000/posts";

function main() {
  displayPosts();
  addNewPostListener();
}

document.addEventListener("DOMContentLoaded", main);

// Display post titles
function displayPosts() {
  fetch(BASE_URL)
    .then(res => res.json())
    .then(posts => {
      const postList = document.getElementById("post-list");
      const postCount = document.getElementById("post-count");
      postList.innerHTML = "";

      postCount.textContent = `${posts.length} blog post${posts.length !== 1 ? "s" : ""}`;

      posts.forEach(post => {
        const div = document.createElement("div");
        div.textContent = post.title;
        div.dataset.id = post.id;
        div.addEventListener("click", () => handlePostClick(post.id));
        postList.appendChild(div);
      });

      if (posts.length > 0) {
        handlePostClick(posts[0].id);
      }
    });
}

// Display post detail
function handlePostClick(id) {
  fetch(`${BASE_URL}/${id}`)
    .then(res => res.json())
    .then(post => {
      const detail = document.getElementById("post-detail");
      detail.innerHTML = `
        <div class="post-container">
          <img src="${post.image}" alt="Post Image" class="post-image" />
          <div class="post-text">
            <input type="text" id="editable-title" value="${post.title}" disabled />
            <p><strong>Author:</strong> ${post.author}</p>
            <p><strong>Time:</strong> ${post.timestamp || "Unknown"}</p>
            <textarea id="editable-content" disabled>${post.content}</textarea>

            <div class="btn-group-bottom">
              <button id="edit-btn">Edit</button>
              <button id="save-btn" style="display: none;">Save Changes</button>
              <button id="cancel-btn" style="display: none;">Cancel</button>
              <button id="delete-btn">Delete</button>
            </div>
          </div>
        </div>
      `;

      const titleField = document.getElementById("editable-title");
      const contentField = document.getElementById("editable-content");
      const editBtn = document.getElementById("edit-btn");
      const saveBtn = document.getElementById("save-btn");
      const cancelBtn = document.getElementById("cancel-btn");

      let originalTitle = post.title;
      let originalContent = post.content;

      editBtn.addEventListener("click", () => {
        titleField.disabled = false;
        contentField.disabled = false;
        editBtn.style.display = "none";
        saveBtn.style.display = "inline-block";
        cancelBtn.style.display = "inline-block";
      });

      cancelBtn.addEventListener("click", () => {
        titleField.value = originalTitle;
        contentField.value = originalContent;
        titleField.disabled = true;
        contentField.disabled = true;
        saveBtn.style.display = "none";
        cancelBtn.style.display = "none";
        editBtn.style.display = "inline-block";
      });

      saveBtn.addEventListener("click", () => {
        const updatedPost = {
          title: titleField.value,
          content: contentField.value,
          timestamp: new Date().toLocaleString()
        };

        fetch(`${BASE_URL}/${post.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedPost)
        })
          .then(() => {
            displayPosts();
            handlePostClick(post.id);
          });
      });

      document.getElementById("delete-btn").addEventListener("click", () => {
        if (confirm("Are you sure you want to delete this post?")) {
          deletePost(post.id);
        }
      });
    });
}

// Add new post
function addNewPostListener() {
  const form = document.getElementById("new-post-form");
  form.addEventListener("submit", e => {
    e.preventDefault();

    const newPost = {
      title: form.title.value,
      author: form.author.value,
      image: form.image.value,
      content: form.content.value,
      timestamp: new Date().toLocaleString()
    };

    fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost)
    })
      .then(res => res.json())
      .then(() => {
        form.reset();
        displayPosts();
      });
  });
}

// Delete post
function deletePost(id) {
  fetch(`${BASE_URL}/${id}`, { method: "DELETE" })
    .then(() => {
      document.getElementById("post-detail").innerHTML = "<p>Post deleted.</p>";
      displayPosts();
    });
}
