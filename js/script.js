// Ce fichier contient le code JavaScript qui ajoute de l'interactivité au site web.

// Fonction pour gérer l'envoi du formulaire
function handleFormSubmit(event) {
    // Empêche le comportement par défaut de soumission du formulaire
    event.preventDefault();

    // Récupère les valeurs des champs du formulaire
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    // Affiche un message de confirmation à l'utilisateur
    alert(`Merci, ${name} ! Votre message a été envoyé.\nEmail : ${email}\nMessage : ${message}`);
}

// Fonction pour initialiser les écouteurs d'événements
function init() {
    // Sélectionne l'élément formulaire et ajoute un écouteur d'événement pour la soumission
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }

    // Gestion du mode nuit
    const toggleThemeButton = document.getElementById('toggleTheme');
    if (toggleThemeButton) {
        let isNightMode = localStorage.getItem('theme') === 'night';

        // Applique le mode nuit si enregistré
        if (isNightMode) {
            const nightStylesheet = document.createElement('link');
            nightStylesheet.rel = 'stylesheet';
            nightStylesheet.href = 'css/nuit.css';
            nightStylesheet.id = 'nightStylesheet';
            document.head.appendChild(nightStylesheet);
            toggleThemeButton.textContent = '☀️';
        }

        // Écouteur pour basculer entre les thèmes
        toggleThemeButton.addEventListener('click', () => {
            if (!isNightMode) {
                const nightStylesheet = document.createElement('link');
                nightStylesheet.rel = 'stylesheet';
                nightStylesheet.href = 'css/nuit.css';
                nightStylesheet.id = 'nightStylesheet';
                document.head.appendChild(nightStylesheet);
                toggleThemeButton.textContent = '☀️';
                localStorage.setItem('theme', 'night');
                isNightMode = true;
            } else {
                const nightStylesheet = document.getElementById('nightStylesheet');
                if (nightStylesheet) {
                    nightStylesheet.remove();
                }
                toggleThemeButton.textContent = '🌙';
                localStorage.setItem('theme', 'day');
                isNightMode = false;
            }
        });
    }
}

// Appelle la fonction init lorsque le DOM est entièrement chargé
document.addEventListener('DOMContentLoaded', () => {
    init();
});