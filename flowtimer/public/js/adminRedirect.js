window.addEventListener("DOMContentLoaded", ()=>{
    const adminRedirect = document.getElementById('adminRedirect');

    if (!adminRedirect) return;

    adminRedirect.addEventListener("click", () =>{
        window.location.href = "/admin";
    })
})