/*BOTÃO MOBILE MENU */
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

/*trocar de imagens */
  var imagens = ["contato.png", "escola.png", "fazenda.png"]; // Lista de caminhos das imagens
  var indiceAtual = 0; // Índice da imagem atual

  function trocarImagem() {
    var imagem = document.getElementById("figura");
    indiceAtual = (indiceAtual + 1) % imagens.length; // Atualiza o índice para a próxima imagem
    imagem.src = imagens[indiceAtual]; // Define o novo caminho da imagem
    imagem.alt = "Imagem " + (indiceAtual + 1); // Atualiza o texto alternativo, se necessário
  }