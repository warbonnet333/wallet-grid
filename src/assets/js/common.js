import $ from "jquery";

const ready = () => {
  initSidebarToggle();
};

document.addEventListener("DOMContentLoaded", ready);


function initSidebarToggle() {
  const trigger = document.querySelector(".js-sidebar-toggle");
  const list = document.querySelector(".js-sidebar-list");

  trigger.addEventListener("click", () => {
    $(list).slideToggle(300);
    trigger.classList.toggle("opened");
  })
}
