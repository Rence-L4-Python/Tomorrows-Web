window.addEventListener('DOMContentLoaded', () =>{
    const helpguideBtn = document.getElementById('helpguide-btn');
    const closehelpguideBtn = document.getElementById('closehelpguide');

    helpguideBtn.addEventListener('click', () => {
        const guidePopup = document.getElementById('guide-popup');
        guidePopup.classList.remove('hidden');
    })

    closehelpguideBtn.addEventListener('click', () => {
        const guidePopup = document.getElementById('guide-popup');
        guidePopup.classList.add('hidden');
    })
})