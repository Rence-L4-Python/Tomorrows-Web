export function fmbreakwarningPopup(){
    /// prevents popups from stacking
    if (document.querySelector('#fmbreak-warning-popup-content')){
        return;
    }

    const popupTemplate = document.getElementById('fmbreak-warning-popup');
    const popupClone = popupTemplate.content.cloneNode(true);
    document.body.appendChild(popupClone);
    const popup = document.getElementById('fmbreak-warning-popup-content');

    setTimeout(() => {
        popup.classList.add('hide');
    }, 3600)
    setTimeout(() => {
        popup.remove();
    }, 4000)
}