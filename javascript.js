console.log("js loaded")
const dropdowns = document.querySelectorAll(".dropdown_btn");

dropdowns.forEach(dropdown => {
    dropdown.addEventListener("click", function (e) {
        $(`#${e.target.id}_items`).slideToggle();
        $(`#${e.target.id}_arrow`).toggleClass("arrowdown");
    })
})