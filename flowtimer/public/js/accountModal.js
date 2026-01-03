// account modal hover
document.addEventListener("DOMContentLoaded", () => {
  const accountModal = document.getElementById('account-modal');
  const template = document.getElementById('account-template');

  if (accountModal && template) {
    let tooltipClone;

    accountModal.addEventListener('mouseenter', () => {
      if (!tooltipClone) {
        tooltipClone = template.content.cloneNode(true);
        accountModal.appendChild(tooltipClone);

        const signoutbtn = document.getElementById('signout');
          if (signoutbtn) {
            signoutbtn.addEventListener('click', () => {
              window.location.href = "/logout";
          })
        }
      }
      fetch('/api/user')
        .then(res => res.json())
        .then(data => {
          if (data && data.email){
            const emailSpan = accountModal.querySelector('span');
            if (emailSpan){
              emailSpan.textContent = data.email;
            }
          }
        })
    })
  }
})