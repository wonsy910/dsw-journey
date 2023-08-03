document.querySelector(".header-menus").style.display = "none";
document.getElementById("link-close").style.display = "none";
document.getElementById("link-burger").addEventListener("click", function () {
  document.getElementById("link-burger").style.display = "none";
  document.getElementById("link-close").style.display = "flex";
  document.querySelector(".header-menus").style.display = "flex";
});
document.getElementById("link-close").addEventListener("click", function () {
  document.getElementById("link-burger").style.display = "flex";
  document.getElementById("link-close").style.display = "none";
  document.querySelector(".header-menus").style.display = "none";
});
