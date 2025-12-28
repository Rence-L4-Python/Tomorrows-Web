export function sessionfinishPopup(){
    /// prevents popups from stacking
    if (document.querySelector('#session-finish-popup-content')){
        return;
    }
    
    const popupTemplate = document.getElementById('session-finish-popup');
    const popupClone = popupTemplate.content.cloneNode(true);
    document.body.appendChild(popupClone);

    const popup = document.getElementById('session-finish-popup-content');
    setTimeout(() => {
        popup.classList.add('hide');
    }, 3600)
    setTimeout(() => {
        popup.remove();
    }, 4000)
}