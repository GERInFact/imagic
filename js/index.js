// Query Selectors
const $burgerCheckMark = document.querySelector(".nav_burger-check-mark");
const $menuItems = document.querySelectorAll(".menu_item");

// Toggles Menu on Mobile
(function toggleMenuBar() {
  addLinkEvents();
})();

// Adds toggle function to all nav links
function addLinkEvents() {
  $menuItems.forEach((i) => {
    i.addEventListener("click", (e) => {
      if (!$burgerCheckMark.checked) return;

      $burgerCheckMark.checked = false;
    });
  });
}
