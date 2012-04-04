function toggleInput(radio)
{
        var id;
        if("postNepali" === radio.getAttribute("class")){
           id = "#post";
        }
        else if("commentNepali" === radio.getAttribute("class")){
            id = "#commentform";
        }
        if(radio.id === 'np'){
            jQuery(id).nepaliInput({'form': true, 'keymap':nepaliKeymap, 'layout': "romanized", "writing": radio.id});
            radio.checked = true;
        }
else if(radio.id == 'us'){
    radio.checked = true;
    jQuery(id).nepaliInput({"writing": radio.id});
}

}
