document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = document.querySelectorAll('#menu a');
    // Gérer le défilement fluide des ancres du menu
    // ...
    // Masquer initialement le contenu des sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
    const content = section.innerHTML;
    section.dataset.content = content;
    section.innerHTML = 
    `<h1>${section.querySelector('h1').textContent}</h1>`;
    });
    // Afficher le contenu de la section lorsqu'on clique sur le titre
    const titles = document.querySelectorAll('section h1');
    titles.forEach(title => {
    title.addEventListener('click', event => {
    const section = event.target.parentElement;
    if (section.innerHTML === section.dataset.content) {
    section.innerHTML = 
    `<h1>${section.querySelector('h1').textContent}</h1>`;
    } else {
    section.innerHTML = section.dataset.content;
    }
    });
    });
    });