var dim = {};
$(document).ready(function(){
    if ($('input[name="_is_html"]').val() == '0'){
        if (typeof(editor) != 'undefined'){
            $('#composebody').focus(function(){
                dim = {w: $('#composebody').width(), h: $('#composebody').height()};
                editor(this);
            }).on('vi_quit', function(ev){
                $(this).width(dim.w).height(dim.h);
            });
        }
    }
})
