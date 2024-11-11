function toggleMenu() {
  const dropdownMenu = document.getElementById("dropdownMenu");
  const isMenuVisible = dropdownMenu.style.display === "flex";

  if (isMenuVisible) {

      dropdownMenu.style.display = "none";
      document.removeEventListener("click", closeMenuOnClickOutside);
  } else {

      dropdownMenu.style.display = "flex";
      setTimeout(() => {
          document.addEventListener("click", closeMenuOnClickOutside);
      }, 0);
  }
}

function closeMenuOnClickOutside(event) {
  const dropdownMenu = document.getElementById("dropdownMenu");
  const hamburgerMenu = document.querySelector(".hamburger-menu");


  if (!dropdownMenu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
      dropdownMenu.style.display = "none";
      document.removeEventListener("click", closeMenuOnClickOutside); 
  }
}


//EXPANDE AS IMAGENS DOS "OSSOS"
function expandButton(button) {
  button.style.transform = 'scale(1.1)'; 
  button.style.transition = 'transform 0.3s'; 
}


function shrinkButton(button) {
  button.style.transform = 'scale(1)'; 
}
const buttons = document.querySelectorAll('.button-container img');


 buttons.forEach((button) => {
  button.addEventListener('mouseover', () => expandButton(button));
   button.addEventListener('mouseout', () => shrinkButton(button));
 });


function expandCard(card) {
  card.style.transform = 'scale(1.05)';
  card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.4)';
}

function shrinkCard(card) {
  card.style.transform = 'scale(1)';
  card.style.boxShadow = 'none';
}
const verMaisBtn = document.getElementById("verMaisBtn");
const verMenosBtn = document.getElementById("verMenosBtn");


verMaisBtn.addEventListener("click", function() {
const hiddenCards = document.querySelectorAll(".card.hidden");

hiddenCards.forEach(card => {
  card.classList.remove("hidden");
});

verMaisBtn.style.display = "none"; 
verMenosBtn.style.display = "block"; 
});


verMenosBtn.addEventListener("click", function() {
const allCards = document.querySelectorAll(".card-container .card");

allCards.forEach((card, index) => {
  if (index >= 8) { 
    card.classList.add("hidden");
  }
});

verMaisBtn.style.display = "block"; 
verMenosBtn.style.display = "none"; 
});



function logar() {

  const login = document.getElementById("login").value;
  const senha = document.getElementById("senha").value;
  const errorMsg = document.getElementById("errorMsg");
  const loginForm = document.getElementById("loginForm");
  const loginOverlay = document.getElementById("loginOverlay");


  if (login === "admin" && senha === "admin") {

      loginOverlay.style.display = "none";
  } else {

      errorMsg.textContent = "Login ou senha incorretos. Tente novamente.";
      loginForm.classList.add("shake");


      setTimeout(() => loginForm.classList.remove("shake"), 300);
  }
}
