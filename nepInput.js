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
        var elementIds = options.Ids;
        var isForm = options.Form;
        var layout = options.Layout;
        var ignoreLists = options.Ignore;

        initiateEvent = function(){
                if(opt.)

            }

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
                //var target = event.originalTarget;
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
        return {
                init:  function(){
                    if(isForm){
                        initiateForForm(elementIds, ignoreLists);
                    }
                    else{
                        intitiateForElements(elementsIds, ignoreLists);
                        //document.getElementById(elementId).addEventListener("keypress", handleKeypress, false);
                    }
                },
                
                destroy: function(){
                    document.getElementById(elementId).removeEventListener("keypress", handleKeypress, false);
                }
            };

}