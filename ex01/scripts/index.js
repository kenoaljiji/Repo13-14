var modalBtn = document.querySelectorAll(".modal-btn");
var modal = document.querySelector(".modal");
var closeBtn = document.querySelector(".close-btn");
var modalContent = document.querySelector(".modal-content");
var modalIframe = document.getElementById("page");

for (var i = 0; i < modalBtn.length; i++) {
  modalBtn[i].addEventListener("click", function () {});
  modal.style.display = "block";
}

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});

function openModal(page) {
  modalIframe.src = page;
  modal.style.display = "block";
}
