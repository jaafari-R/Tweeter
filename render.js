const Renderer = function() {

    const createPostTextHTML = (post) => {
        return $(`<h3 class="post-text">${post.text}</h3>`);
    }

    const createCommentHTML = (comment) => {
        return $(`<p data-id=${comment.id}><i class="delete-comment fa-solid fa-trash-can"></i> ${comment.text}</p>`);
    }
    
    const createCommentsHTML = (post) => {
        const commentsHTML = $(`<div class="comments"></div>`);
        for(let comment of post.comments) {
            commentsHTML.append(createCommentHTML(comment));
        }
        return commentsHTML;
    }

    const createCommentFormHTML = () => {
        return $(`
            <div>
                <input placeholder="Got something to say?">
                <button class="add-comment">Comment</button>
            <div>
        `);
    }
    
    const createPostDeleteHTML = () => {
        return $(`<div class="delete">Delete Post</div>`);
    }

    const createPostHTML = (post) => {
        const postHTML = $(`<div class="post" data-id="${post.id}"></div>`);
        postHTML.append(createPostTextHTML(post));
        postHTML.append(createCommentsHTML(post));
        postHTML.append(createCommentFormHTML());
        postHTML.append(createPostDeleteHTML());
        return postHTML;
    }

    const renderPosts = (posts) => {
        $("#posts").empty();
        for(let post of posts) {
            $("#posts").append(createPostHTML(post));
        }
    }

    return {
        renderPosts
    }
}
