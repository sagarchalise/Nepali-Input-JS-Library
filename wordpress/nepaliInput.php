<?php
/*
  Plugin Name: NepaliInput
  Plugin URI:
  Description: Nepali input for post/page and comments in wordpress.
  Author: Sagar Chalise <chalisesagarATgmailDOTcom>
  Version: 0.1
  Author URI: about.me/sagarchalise
 */
add_action('init', 'wp_load_nepali');

function wp_load_nepali() {
    wp_enqueue_script('jquery');
    wp_enqueue_script('nepLayout', plugin_dir_url(__FILE__) . 'js/nepLayout.js');
    wp_enqueue_script('nepInput', plugin_dir_url(__FILE__) . 'js/nepaliInput.js', array('nepLayout'));
    wp_enqueue_script('nepInput_wp', plugin_dir_url(__FILE__) . 'nepInput_wp.js', array('jquery', 'nepInput'));
}

add_action('admin_footer', 'my_admin_footer');
function my_admin_footer()
{
    $uri = isset($_SERVER['REQUEST_URI']) ? $_SERVER['REQUEST_URI'] : NULL ;

    $content = NULL;
    if (($uri AND strpos($uri,'post-new.php')) OR ($uri AND strpos($uri,'post.php')))
    {
        $content = '<div style="margin-bottom:15px; color:#999;" id="inputNepali"><h2>Choose Input Type:&nbsp;&nbsp;<label for="us">en</label><input checked type="radio" value="us" id="us" name="nepaliInput" class="postNepali" onclick="toggleInput(this);" />&nbsp;&nbsp;<label for="np">np</label><input type="radio" value="np" id="np" name="nepaliInput" class="postNepali" onclick="toggleInput(this);"/></h2></div>';
    }
    if ($content)
    {
        echo $content;
        ?><script>
            var inputParent =  document.forms['post'].parentNode;
            var inputNepali = document.getElementById('inputNepali');
            inputParent.insertBefore(inputNepali, inputParent.lastChild.previousSibling);
            console.log(document.forms['post'].elements['content'].tagName);
            </script><?php
    }
}



add_filter ( 'comment_form_before_fields', 'wp_nepInput_comments' );


function wp_nepInput_comments(){

    $content = "<div style='margin-bottom:15px; color:#333;' id='inputNepali'><h5>Choose Input Type:&nbsp;<label for='us'>en</label><input checked type='radio' value='us' id='us' name='nepaliInput' class='commentNepali' onclick='toggleInput(this);'/>&nbsp;<label for='np'>np</label><input type='radio' value='np' id='np' name='nepaliInput' class='commentNepali' onclick='toggleInput(this);' /></h5></div>";
    echo $content;

}

