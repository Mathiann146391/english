// Liste étendue de mots en français et leurs traductions en anglais
const words = [
    { french: 'Bonjour', english: 'Hello' },
    { french: 'Chat', english: 'Cat' },
    { french: 'Chien', english: 'Dog' },
    { french: 'Maison', english: 'House' },
    { french: 'Livre', english: 'Book' },
    { french: 'Voiture', english: 'Car' },
    { french: 'Arbre', english: 'Tree' },
    { french: 'Fleur', english: 'Flower' },
    { french: 'École', english: 'School' },
    { french: 'Fenêtre', english: 'Window' },
    { french: 'Ordinateur', english: 'Computer' },
    { french: 'Soleil', english: 'Sun' },
    { french: 'Lune', english: 'Moon' },
    { french: 'Mer', english: 'Sea' },
    { french: 'Montagne', english: 'Mountain' },
    { french: 'Papier', english: 'Paper' },
    { french: 'Téléphone', english: 'Phone' },
    { french: 'Vélo', english: 'Bicycle' },
    { french: 'Fête', english: 'Party' },
    { french: 'Plage', english: 'Beach' },
    { french: 'Rien', english: 'Nothing' }
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

// Fonction pour faire tourner la carte
function flipCardHandler() {
    flipCard.querySelector('.card-inner').classList.toggle('flipped');
}

// Initialisation de la carte avec un mot aléatoire
displayRandomWord();

// Ajouter un événement de clic ou de tap pour retourner la carte
flipCard.addEventListener('click', flipCardHandler);
flipCard.addEventListener('touchstart', flipCardHandler, { passive: true });

// Ajouter un événement pour afficher un nouveau mot au clic du bouton
newWordBtn.addEventListener('click', () => {
    displayRandomWord();
    flipCard.querySelector('.card-inner').classList.remove('flipped'); // Réinitialiser la carte
});
