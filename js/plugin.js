var dim = {};
var scrollerPos = [];

function init_jsvi(){
    $('#composebody').focus(function(){
        dim = {w: $('#composebody').width(), h: $('#composebody').height()};
        scrollerPos = $('.scroller.withfooter').position();
        editor(this);
    }).on('vi_quit', function(ev){
        $(this).width(dim.w).height(dim.h);
        // Hack for the scroller for the contacts
        $('.scroller.withfooter').css('top', scrollerPos.top);
    });
}

$(document).ready(function(){
    if ($('input[name="_is_html"]').val() == '0'){
        if (typeof(editor) != 'undefined'){
            init_jsvi();
        }
    }
})
