const btn = document.getElementById('btn-menu');

function ativaMenu(evento) {
  if (evento.type == 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav')
  nav.classList.toggle('ativado')
};

function desativaMenu() {
  
}







btn.addEventListener('click', ativaMenu);
btn.addEventListener('touchstart', ativaMenu);
btn.addEventListener('click', desativaMenu);