fetch("posts.json")
  .then(res => res.json())
  .then(posts => {

    const container = document.getElementById("posts");

    posts.forEach(post => {

      const div = document.createElement("div");
      div.className = "post";

      div.innerHTML = `
        <a class="title" href="post.html?post=${post.file}">
          ${post.title}
        </a>

        <p class="summary">
          ${post.summary}
        </p>

        <div class="meta">
          <span>${post.date}</span>
          <span class="tag">${post.tag}</span>
        </div>
      `;

      container.appendChild(div);

    });

  });