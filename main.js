tweeter = Tweeter();
renderer = Renderer();

const initTweeterData = () => {
    tweeter.addPost("First post!");
    tweeter.addPost("Aw man, I wanted to be first");
    
    tweeter.addComment("First comment on first post!", "p1")
    tweeter.addComment("Second comment on first post!!", "p1")
    tweeter.addComment("Third comment on first post!!!", "p1")
    
    tweeter.addComment("Don't wory second poster, you'll be first one day.", "p2")
    tweeter.addComment("Yeah, believe in yourself!", "p2")
    tweeter.addComment("Haha second place what a joke.", "p2")
}


initTweeterData();
// render posts
renderer.renderPosts(tweeter.getPosts());