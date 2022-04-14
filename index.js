/* eslint-env node */
function showMessage(){
    /*
    dialog is a new HTML5 element. You can create popups with this. Supported in most browsers currently.
     */
    var tlDialog = document.createElement("dialog");
    tlDialog.style.cssText = "border-radius: 10px; border: 2px solid; min-width:300px; box-shadow: 7px 7px 15px 0px rgba(0,0,0,0.39)"
    document.body.appendChild(tlDialog)

    /*
    Feel free to customize these elements/styles as you wish.
     */
    let tl_title = document.createElement('p');
    tl_title.innerText = "Small Act of Resistance!";
    tl_title.style.fontFamily = 'Arial';
    tl_title.style.fontWeight = 900;

    let tl_hashtag = document.createElement('p');
    tl_hashtag.innerText = "#GoHomeGota2022";
    tl_hashtag.style.fontFamily = 'Arial';
    tl_hashtag.style.fontWeight = 100;

    let tl_br = document.createElement('br');

    let tl_btn = document.createElement("a");
    tl_btn.innerHTML = "Close";
    tl_btn.style.cssText = "width:50px; height: 30px; border:1px solid; padding:5px; border-radius:5px; font-family:Arial; cursor:pointer"
    tl_btn.onclick = function (){
        //This will put a value in browser's local storage. So that you can save it if the user has seen the message.
        localStorage.setItem("tl_popup_already_seen", 'true');
        tlDialog.close();
    }

    tlDialog.appendChild(tl_title);
    tlDialog.appendChild(tl_hashtag);
    tlDialog.appendChild(tl_br);
    tlDialog.appendChild(tl_btn);

    let tl_popup_already_seen = localStorage.getItem("tl_popup_already_seen");
    //This will check if the local storage value is present and if not, it shows the message to the user.
    if(tl_popup_already_seen !== 'true'){
        tlDialog.showModal();
    }
}

module.exports = {
    showResistance:showMessage
}