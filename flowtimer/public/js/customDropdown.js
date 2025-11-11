// custom dropdown
document.addEventListener("DOMContentLoaded", () =>{
  const customSelects = document.querySelectorAll(".card-dropdown");
  const customSelects2 = document.querySelectorAll(".container-tasks");

  customSelects.forEach((customSelect) => {
    const selectButton = customSelect.querySelector(".select-button");
    const dropdown = customSelect.querySelector(".select-dropdown");

    const toggleDropdown = (expand = null) => {
      const isOpen =
        expand !== null ? expand : dropdown.classList.contains("active");
      dropdown.classList.toggle("active", !isOpen);
      selectButton.setAttribute("aria-expanded", isOpen);
    };
    selectButton.addEventListener("click", () => {
      toggleDropdown();
    });
  });

  customSelects2.forEach((customSelect2) =>{
    const selectButton2 = customSelect2.querySelector(".task-header");
    const dropdown2 = customSelect2.querySelector(".taskpop-wrapper");

    const toggleDropdown2 = (expand = null) => {
      const isOpen2 =
        expand !== null ? expand : dropdown2.classList.contains("active");
      dropdown2.classList.toggle("active", !isOpen2);
      selectButton2.setAttribute("aria-expanded", isOpen2);
    };
    selectButton2.addEventListener("click", () => {
      toggleDropdown2();
    });
  })
});