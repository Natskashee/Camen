const class1 = document.querySelector(".submenu-men");
window.addEventListener("load", () => {
  document.getElementById("submenu-children").style.display = "block";
  document.getElementById("six-thirteen-products").style.display = "none";
  document.getElementById("children").style.borderBottom = "5px solid #56a3a6";
  document.getElementById("children").style.paddingBottom = "10px";
  document.getElementById("zero-six").style.color = "#56a3a6";
  document.getElementById("section").innerHTML = "0 à 6 ans";
});

document.getElementById("zero-six").addEventListener("click", () => {
  document.getElementById("zero-six").style.color = "#56a3a6";
  document.getElementById("six-thirteen").style.color = "#000";
  document.getElementById("zero-six-products").style.display = "block";
  document.getElementById("six-thirteen-products").style.display = "none";
  document.getElementById("section").innerHTML = "0 à 6 ans";
});

document.getElementById("six-thirteen").addEventListener("click", () => {
  document.getElementById("six-thirteen").style.color = "#56a3a6";
  document.getElementById("zero-six").style.color = "black";
  document.getElementById("zero-six-products").style.display = "none";
  document.getElementById("six-thirteen-products").style.display = "block";
  document.getElementById("section").innerHTML = "0 à 13 ans";
});
