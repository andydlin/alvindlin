$(window).load(function() {
    var $container = $('#posts-cont');
    // initialize
    $container.masonry({
        'gutter': 15,
        itemSelector: '.post-cont'
    });
});