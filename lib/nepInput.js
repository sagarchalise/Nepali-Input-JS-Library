/*
   nepInput.js
   
   Copyright 2012 Sagar Chalise <chalisesagar@gmail.com>
   
   This program is free software; you can redistribute it and/or modify
   it under the terms of the GNU General Public License as published by
   the Free Software Foundation; either version 2 of the License, or
   (at your option) any later version.
   
   This program is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   GNU General Public License for more details.
   
   You should have received a copy of the GNU General Public License
   along with this program; if not, write to the Free Software
   Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
   MA 02110-1301, USA.
   
   
*/

var NepInput = function(nepOptions){
    var options = {};
    for(var opt in nepOptions){
        if(nepOptions.hasOwnProperty(opt)){
            options[opt] = nepOptions[opt];
        }
    }
    var elements = options.Ids;
    var isForm = options.Form;
    var layout = options.Layout;

    initiateEvent = function(obj){
        obj.addEventListener("keypress", handleKeypress, false);
    };

    destroyEvent = function(obj){
        obj.removeEventListener("keypress", handleKeypress, false);
    };

    populateElements = function(){
        var returnElements = [];
        if(isForm){
            for(var o in elements){
                if(elements.hasOwnProperty(o)){
                    for(var i=0; i<document.forms[o].elements.length;i++){
                        if(elements[o].indexOf(document.forms[o].elements[i].id) === -1 && document.forms[o].elements[i].type === "text" || document.forms[o].elements[i].type === "textarea" || document.forms[o].elements[i].tagName === "TEXTAREA"){
                            returnElements.push(document.forms[o].elements[i]);
                        }
                    }
                }
            }
        }
        else{
            if(typeof elements === "string"){
                returnElements.push(document.getElementById(elements));
            }
            else{
                for(var i=0;i<elements.length;i++){
                    returnElements.push(document.getElementById(elements[i]));
                }
            }
        }
        return returnElements;        
    };
    
    handleKeypress = function(event){
            var pressed = event.keyCode || event.which; 
            var nepChar = nepLayout.convertKeyCode(pressed, layout);
            if(event.ctrlKey || event.altKey){	
                //do absolutely nothing
            }
            else{
                if(pressed < 126 && pressed > 32 ){
                    handleChars(event, nepChar);
                }
            }
        };

    handleChars = function(event, characters){
            var target = event.target || event.originalTarget;
            if(target.selectionStart){
                var selection_start = target.selectionStart;
                var selection_end = target.selectionEnd;
                if (target.setSelectionRange) {  //text fields

                    target.value =	target.value.substring(0, selection_start)
                        + characters
                        + target.value.substring(selection_end);
                        target.setSelectionRange(selection_start + characters.length,selection_start +
                        characters.length);
                }
            }
            else{
                target.value += characters;
            }
            event.preventDefault();
        };

    var nepElements = populateElements();

    return {
            init:  function(){
                console.log(nepElements);
                for(var i=0; i<nepElements.length;i++){
                    initiateEvent(nepElements[i]);
                }
            },
                
            destroy: function(){
                console.log(nepElements);
                for(var i=0; i<nepElements.length;i++){
                    destroyEvent(nepElements[i]);
                }
            }
        };

}