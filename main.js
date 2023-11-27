const Comment = function(id, text) {
    return {
        id: "c"+id,
        text
    }
}

const Post = function(id, text) {
    return {
        id: 'p'+id,
        text,
        comments: []
    }
}

const Tweeter = function() {
    const _posts = [];
    let postIdCounter = 0;
    let commentIdCounter = 0;

    const getPosts = () => {
        return _posts;
    }

    const addPost = (text) => {
        const postId = ++postIdCounter;
        _posts.push(Post(postId, text));
    }

    const removePost = (id) => {
        const postIndex = getItemIndexById(_posts, id);
        _posts.splice(postIndex, 1);
    }

    const addComment = (text, postId) => {
        const postIndex = getItemIndexById(_posts, postId);
        const commentId = ++commentIdCounter;
        const newComment = Comment(commentId, text);

        _posts[postIndex].comments.push(newComment);
    }

    const removeComment = (postId, commentId) => {
        const postIndex = getItemIndexById(_posts, postId);
        const commentIndex = getItemIndexById(_posts[postIndex].comments, commentId);
        _posts[postIndex].comments.splice(commentIndex, 1);
    }

    // ------ Helpers ------ \\
    const getItemIndexById = (arr, id) => {
        return arr.findIndex(item => item.id === id);
    }

    return {
        getPosts,
        addPost,
        removePost,
        addComment,
        removeComment
    }
}