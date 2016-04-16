$(function(){
    $('#team').on('click', function(e){
        e.preventDefault();
        $('.team-list li').slideToggle('fast');
    })
    $('#bar').on('click', function(e){
        e.preventDefault();
        $('.bar-list li').slideToggle('fast');
    })

    $('#team-index-response').on('click', function(e){
        e.preventDefault();
        $('pre').slideToggle('fast');
    })
})