fetch("posts.json")
    .then(res => res.json())
    .then(posts => {

        const container = document.getElementById("posts");

        posts.forEach(post => {

            const div = document.createElement("div");

            div.innerHTML = `
        <h2>
        <a href="post.html?post=${post.file}">
        ${post.title}
        </a>
        </h2>
        <p>${post.date}</p>
      `;

            container.appendChild(div);

        });

    });