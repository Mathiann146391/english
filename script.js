// Liste étendue de mots en français et leurs traductions en anglais
const words = [
    { french: 'être dans une mauvaise position', english: 'to be in a bad position / to be poorly of' },
    { french: 'laisser pour compte', english: 'to leave behind' },
    { french: 'à tel point que', english: 'so much so that' },
    { french: 'détaillé', english: 'thorough/detailed' },
    { french: 'inexact', english: 'inaccurate' },
    { french: 'précédent', english: 'previous' },
    { french: 'une étude', english: 'a study' },
    { french: 'affirmer', english: 'to assert' },
    { french: 'réagir à qqch', english: 'to respond to sthg' },
    { french: 'garantir', english: 'to ensure / to guarantee' },
    { french: 'un porte-parole', english: 'a spokesperson / spokesman / spokeswoman' },
    { french: 'une baisse de la criminalité', english: 'a fall in crime / a drop in crime' },
    { french: "c'est la raison pour laquelle", english: 'this is the reason why' },
    { french: 'flagrant', english: 'blatant' },
    { french: 'transmettre, traduire', english: 'to convey, to reflect' },
    { french: 'négliger', english: 'to overlook' },
    { french: "s'effondrer", english: 'to collapse' },
    { french: 'démissioner', english: 'to resign' },
    { french: 'être impliqué dans qqch', english: 'to be involved in sthg' },
    { french: 'un adversaire', english: 'an opponent' },
    { french: 'le manque de qqch', english: 'the lack of sthg' },
    { french: 'apparement', english: 'allegedly' },
    { french: 'signaler', english: 'to point out' },
    { french: 'reprendre', english: 'to resume' },
    { french: 'la politique', english: 'politics' },
    { french: 'un politique', english: 'a politician' },
    { french: "Le ministre de l'Intérieur", english: 'the Home Secretary' },
    { french: 'mener une politique', english: 'to carry out a policy' },
    { french: 'retirer de', english: 'to withdraw from' },
    { french: 'prochainement', english: 'shortly' },


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
