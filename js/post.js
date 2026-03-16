const params = new URLSearchParams(location.search);
const postId = params.get("post");

fetch("/posts.json")
    .then(res => res.json())
    .then(posts => {

        const post = posts.find(p => p.file === postId);

        if (!post) {
            document.getElementById("content").innerText = "글을 찾을 수 없습니다.";
            return;
        }
        document.getElementById("title").innerText = post.title;
        document.getElementById("post-title").innerText = post.title;
        document.getElementById("post-date").innerText = post.date;

        const tagEl = document.getElementById("post-tag");
        if (tagEl && post.tag) tagEl.innerText = post.tag;

        // Markdown 글 불러오기
        fetch(`/posts/${post.file}.md`)
            .then(res => res.text())
            .then(md => {

                const html = marked.parse(md);

                document.getElementById("content").innerHTML = html;

            });

    });


document.querySelectorAll("pre code").forEach(el => {
    hljs.highlightElement(el);
});