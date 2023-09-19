const hint_texts = document.getElementsByClassName("hint-text");

function buttonclick(hint_id){  
    for (let i = 0; i < hint_texts.length; i++) {
        let hint = hint_texts[i];
        let display_status = hint.style.display;

        if (i == hint_id) {
            if (display_status == 'block'){
                hint.style.display = 'none';
                hint.style.visibility = "hidden";
            }
            else{
                hint.style.display = 'block';
                hint.style.visibility = "visible";
            }
        }

        else{
            hint.style.display = 'none';
            hint.style.visibility = "hidden";
        }
    }
}