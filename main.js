const initPosts = [
    {
        text: "First post!",
        id: "p1",
        comments: [
            { id: "c1", text: "First comment on first post!" },
            { id: "c2", text: "Second comment on first post!!" },
            { id: "c3", text: "Third comment on first post!!!" }
        ]
    },
    {
        text: "Aw man, I wanted to be first",
        id: "p2",
        comments: [
            { id: "c4", text: "Don't wory second poster, you'll be first one day." },
            { id: "c5", text: "Yeah, believe in yourself!" },
            { id: "c6", text: "Haha second place what a joke." }
        ]
    }
]

tweeter = Tweeter(initPosts);
renderer = Renderer();

// Create a new post
function post() {
    const postText = $("#input").val();
    if(!postText) {
        return;
    }
    tweeter.addPost($("#input").val());
    $("#input").val("");
    renderPosts();
}

// Delete a post
$("#posts").on("click", ".delete", function() {
    if(!confirm("Are you sure you want to delete the post?")) {
        return;
    }
    const postId = $(this).closest(".post").data("id");
    tweeter.removePost(postId);
    renderPosts();
});

// add a comment
$("#posts").on("click", ".add-comment", function() {
    const postId = $(this).closest(".post").data("id");
    const commentText = $(this).closest("div").find("input").val();
    if(!commentText) {
        return;
    }
    tweeter.addComment(commentText, postId);
    renderPosts();
});

// Delete a comment
$("#posts").on("click", ".delete-comment", function() {
    if(!confirm("Are you sure you want to delete the comment?")) {
        return;
    }
    const postId = $(this).closest(".post").data("id");
    const commentId = $(this).closest("p").data("id");
    tweeter.removeComment(postId, commentId);
    renderPosts();
});

function renderPosts() {
    renderer.renderPosts(tweeter.getPosts());
}

renderPosts()