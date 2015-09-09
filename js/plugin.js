var dim = {};
var scrollerPos = [];
$(document).ready(function(){
    if ($('input[name="_is_html"]').val() == '0'){
        if (typeof(editor) != 'undefined'){
            $('#composebody').focus(function(){
                dim = {w: $('#composebody').width(), h: $('#composebody').height()};
                scrollerPos = $('.scroller.withfooter').position();
                console.log('pos', scrollerPos);
                editor(this);
            }).on('vi_quit', function(ev){
                $(this).width(dim.w).height(dim.h);
                // Hack for the scroller for the contacts
                console.log('setting back the position', scrollerPos);
                $('.scroller.withfooter').position(scrollerPos);
            });
        }
    }
})
