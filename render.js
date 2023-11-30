const Renderer = function() {
    const renderPosts = (posts) => {
        $("#posts").empty();

        for(let post of posts) {
            const postTextHTML = $(`<h3 class="post-text">${post.text}</h3>`)

            /* comments div */
            const commentsHTML = $(`<div class="comments"></div>`);
            for(let comment of post.comments) {
                const commentHTML = $(`<p data-id=${comment.id}><i class="delete-comment fa-solid fa-trash-can"></i> ${comment.text}</p>`);
                commentsHTML.append(commentHTML);
            }

            /* new comment form */
            const newCommentHTML = $(`
                <div>
                    <input placeholder="Got something to say?">
                    <button class="add-comment">Comment</button>
                <div>
            `);
            
            const deletePostHTML = $(`<div class="delete">Delete Post</div>`)
            
            /* post div */
            const postHTML = $(`<div class="post" data-id="${post.id}"></div>`);
            postHTML.append(postTextHTML);
            postHTML.append(commentsHTML);
            postHTML.append(newCommentHTML);
            postHTML.append(deletePostHTML);
            
            $("#posts").append($(postHTML));
        }
    }

    return {
        renderPosts
    }
}
