// Query Selectors
const $burgerCheckMark = document.querySelector(".nav_burger-check-mark");
const $menuItems = document.querySelectorAll(".menu_item");

(function toggleMenuBar() {
  addLinkEvents();
})();

function addLinkEvents() {
  $menuItems.forEach((i) => {
    i.addEventListener("click", (e) => {
      if (!$burgerCheckMark.checked) return;

      $burgerCheckMark.checked = false;
    });
  });
}
