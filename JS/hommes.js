const submenuMen = document.querySelector(".submenu-men");
window.addEventListener("load", () => {
  
  document.getElementById("submenu-men").style.display = "block";
  document.getElementById("t-shirt-products").style.display = "block";
  document.getElementById("sport-products").style.display = "none";
  document.getElementById("costum-products").style.display = "none";
  document.getElementById("pant-products").style.display = "none";
  document.getElementById("ensembles-products").style.display = "none";
  document.getElementById("linge-products").style.display = "none";
  document.getElementById("shoe-products").style.display = "none";
  document.getElementById("men").style.borderBottom = "5px solid #4f5d75";
  document.getElementById("men").style.paddingBottom = "10px";
  document.getElementById("t-shirt").style.color = "#4f5d75";
  document.getElementById("section").innerHTML = "Tee-shirt et Polos";

});

document.getElementById("t-shirt").addEventListener("click", () => {
  document.getElementById("t-shirt-products").style.display = "block";
  document.getElementById("sport-products").style.display = "none";
  document.getElementById("costum-products").style.display = "none";
  document.getElementById("pant-products").style.display = "none";
  document.getElementById("ensembles-products").style.display = "none";
  document.getElementById("linge-products").style.display = "none";
  document.getElementById("shoe-products").style.display = "none";
  document.getElementById("t-shirt").style.color = "#4f5d75";
  document.getElementById("sport").style.color = "black";
  document.getElementById("costum").style.color = "black";
  document.getElementById("pant").style.color = "black";
  document.getElementById("ensembles").style.color = "black";
  document.getElementById("linge").style.color = "black";
  document.getElementById("shoe").style.color = "black";
  document.getElementById("section").innerHTML = "Tee-shirt et Polos";
});
document.getElementById("sport").addEventListener("click", () => {
  document.getElementById("t-shirt-products").style.display = "none";
  document.getElementById("sport-products").style.display = "block";
  document.getElementById("costum-products").style.display = "none";
  document.getElementById("pant-products").style.display = "none";
  document.getElementById("ensembles-products").style.display = "none";
  document.getElementById("linge-products").style.display = "none";
  document.getElementById("shoe-products").style.display = "none";
  document.getElementById("t-shirt").style.color = "black";
  document.getElementById("sport").style.color = "#4f5d75";
  document.getElementById("costum").style.color = "black";
  document.getElementById("pant").style.color = "black";
  document.getElementById("ensembles").style.color = "black";
  document.getElementById("linge").style.color = "black";
  document.getElementById("shoe").style.color = "black";
  document.getElementById("section").innerHTML = "Sports";

});
document.getElementById("costum").addEventListener("click", () => {
  document.getElementById("t-shirt-products").style.display = "none";
  document.getElementById("sport-products").style.display = "none";
  document.getElementById("costum-products").style.display = "block";
  document.getElementById("pant-products").style.display = "none";
  document.getElementById("ensembles-products").style.display = "none";
  document.getElementById("linge-products").style.display = "none";
  document.getElementById("shoe-products").style.display = "none";
  document.getElementById("t-shirt").style.color = "black";
  document.getElementById("sport").style.color = "black";
  document.getElementById("costum").style.color = "#4f5d75";
  document.getElementById("pant").style.color = "black";
  document.getElementById("ensembles").style.color = "black";
  document.getElementById("linge").style.color = "black";
  document.getElementById("shoe").style.color = "black";
  document.getElementById("section").innerHTML = "Costumes";

});
document.getElementById("pant").addEventListener("click", () => {
  document.getElementById("t-shirt-products").style.display = "none";
  document.getElementById("sport-products").style.display = "none";
  document.getElementById("costum-products").style.display = "none";
  document.getElementById("pant-products").style.display = "block";
  document.getElementById("ensembles-products").style.display = "none";
  document.getElementById("linge-products").style.display = "none";
  document.getElementById("shoe-products").style.display = "none";
  document.getElementById("t-shirt").style.color = "black";
  document.getElementById("sport").style.color = "black";
  document.getElementById("costum").style.color = "black";
  document.getElementById("pant").style.color = "#4f5d75";
  document.getElementById("ensembles").style.color = "black";
  document.getElementById("linge").style.color = "black";
  document.getElementById("shoe").style.color = "black";
  document.getElementById("section").innerHTML = "Pantalons";

});
document.getElementById("ensembles").addEventListener("click", () => {
  document.getElementById("t-shirt-products").style.display = "none";
  document.getElementById("sport-products").style.display = "none";
  document.getElementById("costum-products").style.display = "none";
  document.getElementById("pant-products").style.display = "none";
  document.getElementById("ensembles-products").style.display = "block";
  document.getElementById("linge-products").style.display = "none";
  document.getElementById("shoe-products").style.display = "none";
  document.getElementById("t-shirt").style.color = "black";
  document.getElementById("sport").style.color = "black";
  document.getElementById("costum").style.color = "black";
  document.getElementById("pant").style.color = "black";
  document.getElementById("ensembles").style.color = "#4f5d75";
  document.getElementById("linge").style.color = "black";
  document.getElementById("shoe").style.color = "black";
  document.getElementById("section").innerHTML = "Ensembles";

});
document.getElementById("linge").addEventListener("click", () => {
  document.getElementById("t-shirt-products").style.display = "none";
  document.getElementById("sport-products").style.display = "none";
  document.getElementById("costum-products").style.display = "none";
  document.getElementById("pant-products").style.display = "none";
  document.getElementById("ensembles-products").style.display = "none";
  document.getElementById("linge-products").style.display = "block";
  document.getElementById("shoe-products").style.display = "none";
  document.getElementById("t-shirt").style.color = "black";
  document.getElementById("sport").style.color = "black";
  document.getElementById("costum").style.color = "black";
  document.getElementById("pant").style.color = "black";
  document.getElementById("ensembles").style.color = "black";
  document.getElementById("linge").style.color = "#4f5d75";
  document.getElementById("shoe").style.color = "black";
  document.getElementById("section").innerHTML = "Sous-vêtements";
  
});
document.getElementById("shoe").addEventListener("click", () => {
  document.getElementById("t-shirt-products").style.display = "none";
  document.getElementById("sport-products").style.display = "none";
  document.getElementById("costum-products").style.display = "none";
  document.getElementById("pant-products").style.display = "none";
  document.getElementById("ensembles-products").style.display = "none";
  document.getElementById("linge-products").style.display = "none";
  document.getElementById("shoe-products").style.display = "block";
  document.getElementById("t-shirt").style.color = "black";
  document.getElementById("sport").style.color = "black";
  document.getElementById("costum").style.color = "black";
  document.getElementById("pant").style.color = "black";
  document.getElementById("ensembles").style.color = "black";
  document.getElementById("linge").style.color = "black";
  document.getElementById("shoe").style.color = "#4f5d75";
  document.getElementById("section").innerHTML = "Chaussures";
});
