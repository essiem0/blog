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

        document.getElementById("post-title").innerText = post.title;
        document.getElementById("post-date").innerText = post.date;

        // 글 내용 불러오기
        fetch(`/posts/${post.file}.html`)
            .then(res => res.text())
            .then(text => {
                document.getElementById("content").innerHTML =
                    text.split("\n").map(line => `<p>${line}</p>`).join("");
            });

    });