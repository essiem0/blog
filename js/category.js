const params = new URLSearchParams(location.search);
const category = params.get("category");

document.getElementById("category-title").innerText = category + " 글 목록";

fetch("posts.json")
    .then(res => res.json())
    .then(posts => {

        const filtered = posts.filter(post => post.category === category);

        const container = document.getElementById("posts");

        filtered.forEach(post => {

            const div = document.createElement("div");
            div.className = "post";

            div.innerHTML = `
        <a class="title" href="post.html?post=${post.file}">
          ${post.title}
        </a>

        <p>${post.summary}</p>

        <div class="meta">
          <span>${post.date}</span>
        </div>
      `;

            container.appendChild(div);

        });

    });