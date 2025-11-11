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
      }
      accountModal.querySelector('.account-tooltip').style.opacity = 1;
    });

    accountModal.addEventListener('mouseleave', () => {
      if (tooltipClone) {
        accountModal.querySelector('.account-tooltip').style.opacity = 0;
      }
    });
  }
});