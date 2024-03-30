const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

/*------------*/
function trocarImagem() {
    var imagem = document.getElementById('figura');
    if (imagem.src.match("contato.png")) {
        imagem.src = "escola.png";
        imagem.alt = "Imagem 2";
    } else {
        imagem.src = "contato.png";
        imagem.alt = "Imagem 1";
    }
}