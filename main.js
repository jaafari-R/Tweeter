tweeter = Tweeter();
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

const createDynamicListeners = () => {
    // Delete a post
    $(".delete").click(function() {
        if(!confirm("Are you sure you want to delete the post?")) {
            return;
        }
        const postId = $(this).closest(".post").data("id");
        tweeter.removePost(postId);
        renderPosts();
    });

    // add a comment
    $(".add-comment").click(function() {
        const postId = $(this).closest(".post").data("id");
        const commentText = $(this).closest("div").find("input").val();
        if(!commentText) {
            return;
        }
        tweeter.addComment(commentText, postId);
        renderPosts();
    });
    
    // Delete a comment
    $(".delete-comment").click(function() {
        if(!confirm("Are you sure you want to delete the comment?")) {
            return;
        }
        const postId = $(this).closest(".post").data("id");
        const commentId = $(this).closest("p").data("id");
        tweeter.removeComment(postId, commentId);
        renderPosts();
    });
}

function renderPosts() {
    renderer.renderPosts(tweeter.getPosts());
    createDynamicListeners();
}

renderPosts()