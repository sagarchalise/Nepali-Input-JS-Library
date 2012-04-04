(function($){
    var options;
    var isForm = false;
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
            "form": false,
            "keymap": nepaliKeymap,
            "layout": "romanized",
            "writing": "np",
            };
        options = $.extend(defaults, opts);

        //var obj;
        var obj = $(this);

        if(options.form = true){
            isForm = true;
            if(this.tagName == "FORM"){
                obj = $(this).find("textarea,input:text");
            }
        }
        if (options.writing !== "np"){
            obj.unbind("keypress keydown keyup");
            return true;
        }

        obj.unbind("keypress keydown keyup");
        obj.keyup(_keyUp);
        obj.keydown(_keyDown);
        obj.keypress(_keyPress);
    };
})(jQuery);