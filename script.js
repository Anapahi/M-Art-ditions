const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');

menuButton?.addEventListener('click', () => {
  const opened = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', opened);
});

nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

document.querySelectorAll('.album img').forEach((image, index) => {
  image.addEventListener('error', () => {
    const number = image.dataset.tome || String(index + 1).padStart(2, '0');
    const colors = [['#a9dccd','#173b37'],['#f8c94b','#ed8053'],['#ed8053','#fffaf0'],['#397b65','#f8c94b']];
    const [background, accent] = colors[index % colors.length];
    image.src = `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800"><rect width="600" height="800" fill="${background}"/><circle cx="300" cy="320" r="125" fill="${accent}" opacity=".9"/><path d="M170 580 Q300 420 430 580" stroke="${accent}" fill="none" stroke-width="35" stroke-linecap="round"/><text x="300" y="105" text-anchor="middle" font-family="Georgia" font-size="35" font-weight="bold" fill="#173b37">VERT SINGE &amp; TORIX</text><text x="300" y="715" text-anchor="middle" font-family="Arial" font-size="24" letter-spacing="5" fill="#173b37">ALBUM ${number}</text></svg>`)}`;
    image.alt = `Emplacement pour la couverture de l'album ${number}`;
  }, { once: true });
});
