// Liste de mots en français et leurs traductions en anglais
const words = [
    { french: 'Bonjour', english: 'Hello' },
    { french: 'Chat', english: 'Cat' },
    { french: 'Chien', english: 'Dog' },
    { french: 'Maison', english: 'House' },
    { french: 'Livre', english: 'Book' },
    { french: 'Voiture', english: 'Car' },
    { french: 'Arbre', english: 'Tree' },
    { french: 'Fleur', english: 'Flower' }
];

// Sélectionner les éléments du DOM
const frenchWordElement = document.getElementById('french-word');
const englishWordElement = document.getElementById('english-word');
const flipCard = document.getElementById('flip-card');
const newWordBtn = document.getElementById('new-word-btn');

// Fonction pour choisir un mot au hasard
function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

// Fonction pour afficher un mot sur la carte
function displayRandomWord() {
    const word = getRandomWord();
    frenchWordElement.textContent = word.french;
    englishWordElement.textContent = word.english;
}

// Fonction pour gérer le retour de la carte
function flipCardHandler() {
    // Ajout d'une classe pour gérer la rotation
    flipCard.querySelector('.card-inner').classList.toggle('flipped');
}

// Initialisation de la carte avec un mot aléatoire
displayRandomWord();

// Ajout d'un événement de clic et de toucher pour faire tourner la carte
flipCard.addEventListener('click', flipCardHandler);
flipCard.addEventListener('touchstart', flipCardHandler, { passive: true });

// Ajout de l'événement de clic pour afficher un nouveau mot
newWordBtn.addEventListener('click', () => {
    displayRandomWord();
    // Réinitialiser la carte après avoir affiché un nouveau mot
    flipCard.querySelector('.card-inner').classList.remove('flipped');
});
