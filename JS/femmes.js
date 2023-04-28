window.addEventListener("load", () => {
  document.getElementById('submenu-women').style.display = 'block'
  document.getElementById("t-shirt-products").style.display = "block";
  document.getElementById("sport-products").style.display = "none";
  document.getElementById("costum-products").style.display = "none";
  document.getElementById("skirt-products").style.display = "none";
  document.getElementById("dress-products").style.display = "none";
  document.getElementById("linge-products").style.display = "none";
  document.getElementById("shoe-products").style.display = "none";
  document.getElementById("women").style.borderBottom = "5px solid #ff5964";
  document.getElementById("women").style.paddingBottom = "10px";
  document.getElementById("t-shirt").style.color = "#ff5964";
  document.getElementById("section").innerHTML = "Tee-shirts";

});

document.getElementById("t-shirt").addEventListener("click", () => {
  document.getElementById("t-shirt-products").style.display = "block";
  document.getElementById("sport-products").style.display = "none";
  document.getElementById("costum-products").style.display = "none";
  document.getElementById("skirt-products").style.display = "none";
  document.getElementById("dress-products").style.display = "none";
  document.getElementById("linge-products").style.display = "none";
  document.getElementById("shoe-products").style.display = "none";
  document.getElementById("t-shirt").style.color = "#ff5964";
  document.getElementById("sport").style.color = "black";
  document.getElementById("costum").style.color = "black";
  document.getElementById("skirt").style.color = "black";
  document.getElementById("dress").style.color = "black";
  document.getElementById("linge").style.color = "black";
  document.getElementById("shoe").style.color = "black";
  document.getElementById("section").innerHTML = "Tee-shirts";

});
document.getElementById("sport").addEventListener("click", () => {
  document.getElementById("t-shirt-products").style.display = "none";
  document.getElementById("sport-products").style.display = "block";
  document.getElementById("costum-products").style.display = "none";
  document.getElementById("skirt-products").style.display = "none";
  document.getElementById("dress-products").style.display = "none";
  document.getElementById("linge-products").style.display = "none";
  document.getElementById("shoe-products").style.display = "none";
  document.getElementById("t-shirt").style.color = "black";
  document.getElementById("sport").style.color = "#ff5964";
  document.getElementById("costum").style.color = "black";
  document.getElementById("skirt").style.color = "black";
  document.getElementById("dress").style.color = "black";
  document.getElementById("linge").style.color = "black";
  document.getElementById("shoe").style.color = "black";
  document.getElementById("section").innerHTML = "Sports";

});
document.getElementById("costum").addEventListener("click", () => {
  document.getElementById("t-shirt-products").style.display = "none";
  document.getElementById("sport-products").style.display = "none";
  document.getElementById("costum-products").style.display = "block";
  document.getElementById("skirt-products").style.display = "none";
  document.getElementById("dress-products").style.display = "none";
  document.getElementById("linge-products").style.display = "none";
  document.getElementById("shoe-products").style.display = "none";
  document.getElementById("t-shirt").style.color = "black";
  document.getElementById("sport").style.color = "black";
  document.getElementById("costum").style.color = "#ff5964";
  document.getElementById("skirt").style.color = "black";
  document.getElementById("dress").style.color = "black";
  document.getElementById("linge").style.color = "black";
  document.getElementById("shoe").style.color = "black";
  document.getElementById("section").innerHTML = "Costumes et tailleurs";

});
document.getElementById("skirt").addEventListener("click", () => {
  document.getElementById("t-shirt-products").style.display = "none";
  document.getElementById("sport-products").style.display = "none";
  document.getElementById("costum-products").style.display = "none";
  document.getElementById("skirt-products").style.display = "block";
  document.getElementById("dress-products").style.display = "none";
  document.getElementById("linge-products").style.display = "none";
  document.getElementById("shoe-products").style.display = "none";
  document.getElementById("t-shirt").style.color = "black";
  document.getElementById("sport").style.color = "black";
  document.getElementById("costum").style.color = "black";
  document.getElementById("skirt").style.color = "#ff5964";
  document.getElementById("dress").style.color = "black";
  document.getElementById("linge").style.color = "black";
  document.getElementById("shoe").style.color = "black";
  document.getElementById("section").innerHTML = "Pantalons et jupes";
});
document.getElementById("dress").addEventListener("click", () => {
  document.getElementById("t-shirt-products").style.display = "none";
  document.getElementById("sport-products").style.display = "none";
  document.getElementById("costum-products").style.display = "none";
  document.getElementById("skirt-products").style.display = "none";
  document.getElementById("dress-products").style.display = "block";
  document.getElementById("linge-products").style.display = "none";
  document.getElementById("shoe-products").style.display = "none";
  document.getElementById("t-shirt").style.color = "black";
  document.getElementById("sport").style.color = "black";
  document.getElementById("costum").style.color = "black";
  document.getElementById("skirt").style.color = "black";
  document.getElementById("dress").style.color = "#ff5964";
  document.getElementById("linge").style.color = "black";
  document.getElementById("shoe").style.color = "black";
  document.getElementById("section").innerHTML = "Robes";

});
document.getElementById("linge").addEventListener("click", () => {
  document.getElementById("t-shirt-products").style.display = "none";
  document.getElementById("sport-products").style.display = "none";
  document.getElementById("costum-products").style.display = "none";
  document.getElementById("skirt-products").style.display = "none";
  document.getElementById("dress-products").style.display = "none";
  document.getElementById("linge-products").style.display = "block";
  document.getElementById("shoe-products").style.display = "none";
  document.getElementById("t-shirt").style.color = "black";
  document.getElementById("sport").style.color = "black";
  document.getElementById("costum").style.color = "black";
  document.getElementById("skirt").style.color = "black";
  document.getElementById("dress").style.color = "black";
  document.getElementById("linge").style.color = "#ff5964";
  document.getElementById("shoe").style.color = "black";
  document.getElementById("section").innerHTML = "Lingerie";

});
document.getElementById("shoe").addEventListener("click", () => {
  document.getElementById("t-shirt-products").style.display = "none";
  document.getElementById("sport-products").style.display = "none";
  document.getElementById("costum-products").style.display = "none";
  document.getElementById("skirt-products").style.display = "none";
  document.getElementById("dress-products").style.display = "none";
  document.getElementById("linge-products").style.display = "none";
  document.getElementById("shoe-products").style.display = "block";
  document.getElementById("t-shirt").style.color = "black";
  document.getElementById("sport").style.color = "black";
  document.getElementById("costum").style.color = "black";
  document.getElementById("skirt").style.color = "black";
  document.getElementById("dress").style.color = "black";
  document.getElementById("linge").style.color = "black";
  document.getElementById("shoe").style.color = "#ff5964";
  document.getElementById("section").innerHTML = "Chaussures";

});




