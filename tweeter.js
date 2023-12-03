const COMMENT_ID_PREFIX = 'c';
const POST_ID_PREFIX = 'p';
const INIT_POST_ID_COUNTER = 0;
const INIT_COMMENT_ID_COUNTER = 0;

const Tweeter = function(posts, initPostIdCounter, initCommentIdCounter) {

    const createComment = function(id, text) {
        return {
            id: COMMENT_ID_PREFIX + id,
            text
        }
    }
    
    const createPost = function(id, text) {
        return {
            id: POST_ID_PREFIX + id,
            text,
            comments: []
        }
    }

    const _posts = JSON.parse(JSON.stringify(posts)) || [];
    let postIdCounter;
    let commentIdCounter;
    
    initIdCounters();

    const getPosts = () => {
        return _posts;
    };

    const addPost = (text) => {
        const postId = ++postIdCounter;
        _posts.push(createPost(postId, text));
    };

    const removePost = (id) => {
        const postIndex = getItemIndexById(_posts, id);
        _posts.splice(postIndex, 1);
    };

    const addComment = (text, postId) => {
        const postIndex = getItemIndexById(_posts, postId);
        const commentId = ++commentIdCounter;
        const newComment = createComment(commentId, text);

        _posts[postIndex].comments.push(newComment);
    };

    const removeComment = (postId, commentId) => {
        const postIndex = getItemIndexById(_posts, postId);
        const commentIndex = getItemIndexById(_posts[postIndex].comments, commentId);
        _posts[postIndex].comments.splice(commentIndex, 1);
    };


    // ------ Helpers ------ \\
    const getItemIndexById = (arr, id) => {
        return arr.findIndex(item => item.id === id);
    };


    // ------ initializers ------ \\
    function initIdCounters() {
        postIdCounter = initPostIdCounter || INIT_POST_ID_COUNTER;
        commentIdCounter = initCommentIdCounter || INIT_COMMENT_ID_COUNTER;

        if(_posts && postIdCounter == INIT_POST_ID_COUNTER) {
            calcPostIdCounter();
        }
        if(_posts && commentIdCounter == INIT_COMMENT_ID_COUNTER) {
            calcCommentIdCounter();
        }
    };

    // p1 p4 p5

    function calcPostIdCounter() {
        _posts.forEach((post) => {
            postIdCounter = Math.max(postIdCounter, post.id.replace(POST_ID_PREFIX, ""));
        });
    };
    
    function calcCommentIdCounter() {
        _posts.forEach((post) => {
            post.comments.forEach((comment) => {
                commentIdCounter = Math.max(commentIdCounter, comment.id.replace(COMMENT_ID_PREFIX, ""));
            });
        });
    };
    

    return {
        getPosts,
        addPost,
        removePost,
        addComment,
        removeComment
    };
}
