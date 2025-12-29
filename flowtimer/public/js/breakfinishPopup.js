export function breakfinishPopup(){
    /// prevents popups from stacking
    if (document.querySelector('#break-finish-popup-content')){
        return;
    }
    
    const popupTemplate = document.getElementById('break-finish-popup');
    const popupClone = popupTemplate.content.cloneNode(true);
    document.body.appendChild(popupClone);

    const popup = document.getElementById('break-finish-popup-content');
    setTimeout(() => {
        popup.classList.add('hide');
    }, 3600)
    setTimeout(() => {
        popup.remove();
    }, 4000)
}