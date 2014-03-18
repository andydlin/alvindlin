$(window).load(function() {
    var $container = $('#posts-cont');
    // initialize
    $container.masonry({
        'gutter': 15,
        itemSelector: '.post-cont'
    });

    var $container2 = $('.tiles');
    // initialize
    $container2.masonry({
        'gutter': 15,
        itemSelector: '.tile'
    });

    var $container3 = $('.officers-cont');
    // initialize
    $container3.masonry({
        'gutter': 15,
        itemSelector: '.officer'
    });
});