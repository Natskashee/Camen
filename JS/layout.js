

// const subline = document.querySelector('#men');
// const subline2 = document.querySelector('#women')
// const subline3 = document.querySelector('#children')

document.getElementById("men").addEventListener("click", () => {
  document.getElementById('submenu-men').style.display = 'block'
  document.getElementById('submenu-women').style.display = 'none'
  document.getElementById('submenu-children').style.display = 'none'
  // submenuMen.classList.toggle("active");
  // submenuWomen.classList.toggle("none");
  // submenuChildren.classList.toggle("none");

});


document.getElementById("women").addEventListener("click", () => {
  document.getElementById('submenu-men').style.display = 'none'
  document.getElementById('submenu-women').style.display = 'block'
  document.getElementById('submenu-children').style.display = 'none'
  // submenuWomen.classList.toggle("active");
  // submenuMen.classList.toggle("none");
  // submenuChildren.classList.toggle("none");

});

document.getElementById("children").addEventListener("click", () => {
  document.getElementById('submenu-men').style.display = 'none'
  document.getElementById('submenu-women').style.display = 'none'
  document.getElementById('submenu-children').style.display = 'block'
  // submenuWomen.classList.toggle("none");
  // submenuMen.classList.toggle("none");
  // submenuChildren.classList.toggle("active");
});



const sidebar = document.getElementsByClassName('responsive-navbar')[0];
const menuicon = document.getElementsByClassName('icon-menu')[0];
const resolve = document.getElementsByClassName('reso')[0];
const navbar = document.getElementsByClassName('navbar2')[0];

menuicon.addEventListener("click", (e) => {
    sidebar.style.visibility = "visible";
    navbar.classList.toggle('position');
});

const close = document.getElementsByClassName('close-icon')[0];

close.addEventListener("click", (e) => {
  sidebar.style.visibility = "hidden"
  navbar.classList.remove('position');
});

const cards = document.querySelectorAll('.card');
const modal = document.querySelector('.content-modal');
const modalImg = modal.querySelector('img');
const modalDescription = modal.querySelector('p');
const modalName = modal.querySelector('h3');
const modalPrice = modal.querySelector('.price-popup');
const modalSquare = modal.querySelector('.squares-2');
const contentPopup = document.querySelector('.content-background');
const modalClose = document.querySelector('.close');


cards.forEach(card => {
  card.addEventListener('click', () => {
    contentPopup.style.display = "flex";
    const imgSrc = card.querySelector('img').src;
    const name = card.querySelector('.name').textContent;
    const description = card.querySelector('.description').textContent;
    const priceCard = card.querySelector('.price').textContent;
    const squares = card.querySelector('.squares');
    
    modalImg.src = imgSrc;
    modalDescription.textContent = description;
    modalPrice.textContent = priceCard;
    modalName.textContent = name;

    modalSquare.innerHTML = '';
    modalSquare.appendChild(squares.cloneNode(true));

  });

});

modalClose.addEventListener('click', (event) => {
    event.preventDefault();
    contentPopup.style.display = "none";
});

