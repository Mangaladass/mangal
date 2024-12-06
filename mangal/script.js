document.addEventListener("DOMContentLoaded", function() {
    // Example: Alert when a blog post is clicked
    const posts = document.querySelectorAll('.post a');

    posts.forEach(post => {
        post.addEventListener('click', function(event) {
            alert('You clicked on a blog post!');
        });
    });
});
