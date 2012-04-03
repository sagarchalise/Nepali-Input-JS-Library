(function($){
    var options;
    var _doNothing = false;
    var _keyUp = function(event){
        if(event.ctrlKey || event.altKey){
            _doNothing = false;
        }
    };

    var _keyDown = function(event){
        if(event.ctrlKey || event.altKey){
            _doNothing = true;
        }
    };

    var _keyPress = function(event){
        if(!_doNothing){
            var pressed = event.keyCode || event.which;
            if(pressed < 126 && pressed > 46){
                var nepChar = options.keymap.convertKeyCode(pressed, options.layout);
                _handleChars(event, nepChar);
            }
        }
        event.stopPropagation();
    };

    var _handleChars = function(event, characters){
        var target = event.target || event.originalTarget;
        if(target.selectionStart){
            var selection_start = target.selectionStart;
            var selection_end = target.selectionEnd;
            if (target.setSelectionRange) {  //text fields
                target.value =  target.value.substring(0, selection_start)
                        + characters
                        + target.value.substring(selection_end);
                target.setSelectionRange(selection_start+characters.length,
                                selection_start+characters.length);
            }
        }
        else{
            target.value += characters;
        }
        event.preventDefault();
    };

    $.fn.nepaliInput = function(opts){
        var defaults = {
            "keymap": nepaliKeymap,
            "layout": "romanized",
            "writing": "np",
            };
        options = $.extend(defaults, opts);
        if (options.writing !== "np"){
            $(this).unbind("keypress keydown keyup");
            return true;
        }
        $(this).unbind("keypress keydown keyup");
        $(this).keyup(_keyUp);
        $(this).keydown(_keyDown);
        $(this).keypress(_keyPress);
    };
})(jQuery);