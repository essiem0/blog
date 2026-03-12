fetch("posts.json")
    .then(res => res.json())
    .then(posts => {

        const container = document.getElementById("posts");

        posts.forEach(post => {

            const div = document.createElement("div");
            div.className = "post";

            div.innerHTML = `
        <a href="post.html?post=${post.file}">
          ${post.title}
        </a>
        <div class="date">${post.date}</div>
      `;

            container.appendChild(div);

        });

    });