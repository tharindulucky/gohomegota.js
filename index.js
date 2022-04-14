/* eslint-env node */
function showMessage(){
    var tlDialog = document.createElement("dialog");
    tlDialog.style.cssText = "border-radius: 10px; border: 2px solid; box-shadow: 7px 7px 15px 0px rgba(0,0,0,0.39)"
    document.body.appendChild(tlDialog)

    let tl_title = document.createElement('p');
    tl_title.innerText = "Small Act of Resistance!"
    tl_title.style.fontFamily = 'Arial'
    tl_title.style.fontWeight = 900;

    let tl_hashtag = document.createElement('p');
    tl_hashtag.innerText = "#GoHomeGota2022"
    tl_hashtag.style.fontFamily = 'Arial'
    tl_hashtag.style.fontWeight = 100;


    let tl_btn = document.createElement("button");
    tl_btn.innerHTML = "Close";
    tl_btn.onclick = function (){
        localStorage.setItem("tl_popup_already_seen", 'true')
        tlDialog.close();
    }

    tlDialog.appendChild(tl_title);
    tlDialog.appendChild(tl_hashtag);
    tlDialog.appendChild(tl_btn);

    let tl_popup_already_seen = localStorage.getItem("tl_popup_already_seen");
    if(tl_popup_already_seen !== 'true'){
        tlDialog.showModal();
    }
}

module.exports = {
    showResistance:showMessage
}