export function timertoast(){
    /// prevents popups from stacking
    if (document.querySelector('#timer-toast')){
        return;
    }

    const toastTemplate = document.getElementById('timer-toast-template');
    const toastClone = toastTemplate.content.cloneNode(true);
    document.body.appendChild(toastClone);

    const toast = document.getElementById('timer-toast');
    setTimeout(() => {
        toast.classList.add('hide');
    }, 3600)
    setTimeout(() => {
        toast.remove();
    }, 4000)
}