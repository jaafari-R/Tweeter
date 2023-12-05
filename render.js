const Renderer = function() {
    const renderPosts = (posts) => {
        $("#posts").empty();
        const postsTemplate = $('#post-template').html();
        const postsTemplateGen = Handlebars.compile(postsTemplate);
        const pastsHTML = postsTemplateGen({posts});
        $('#posts').append(pastsHTML);
    }

    return {
        renderPosts
    }
}
