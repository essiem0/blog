let allPosts = [];

const params = new URLSearchParams(location.search);
const category = params.get("category");

fetch("posts.json")
  .then(res => res.json())
  .then(posts => {

    posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    allPosts = posts;

    let filtered = posts;

    if (category) {
      filtered = posts.filter(post => post.category === category);
    }

    renderPosts(filtered);

  });

function renderPosts(posts) {

  const container = document.getElementById("posts");
  container.innerHTML = "";

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
        <span class="tag">${post.category}</span>
      </div>
    `;

    container.appendChild(div);

  });

}


// 검색 기능
const searchInput = document.getElementById("search");

if (searchInput) {

  searchInput.addEventListener("input", () => {

    const keyword = searchInput.value.toLowerCase();

    const filtered = allPosts.filter(post =>
      post.title.toLowerCase().includes(keyword) ||
      post.summary.toLowerCase().includes(keyword)
    );

    renderPosts(filtered);

  });

} 