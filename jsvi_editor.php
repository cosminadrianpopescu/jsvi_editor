<?php
/**
 * Roundcube JSVI
 *
 * Replaces the text editor with JSVI
 *
 * @version 1.4 - 07.07.2010
 * @author Cosmin Popescu (cosmin at popescu dot eu dot com)
 * @licence GNU GPL
 *
 **/
/** *
 **/

class jsvi_editor extends rcube_plugin
{
    public $task = 'compose';

    function init()
    {
        $rcmail = rcmail::get_instance();
        $this->require_plugin('jqueryui');

        if($_SESSION['username'] && empty($_SESSION['plugin.newuserdialog'])){
            $this->include_script('js/vi.js');
            $this->include_stylesheet('css/vi.css');
            $this->include_script('js/plugin.js');
        }
    }
}
