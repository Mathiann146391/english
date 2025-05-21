const words = {
    all: [
        { fr: 'sensibiliser un groupe de personnes', en: 'to raise awareness among + group' },
    ],
    semaine: [
        { fr: 'les défenseurs', en: 'the advocates' },
        { fr: 'manifester', en: 'to demonstrate' },
        { fr: 'obtenir gain de cause', en: "to get one's way" },
        { fr: 'occasionner des dégâts', en: 'to cause damage' },
        { fr: 'entreprendre qqch', en: 'to undertake sthg' },
        { fr: 'il se peut que', en: 'it may + BV' },
        { fr: 'faciliter', en: 'to ease' },
        { fr: 's\'assurer de', en: 'to check' },
        { fr: 'causer des ravages dans la vie de qqun', en: "to wreak havoc in sb's life" },
        { fr: 'la véracité', en: 'the accuracy' },
        { fr: 'cautionner', en: 'to condone' },
        { fr: 'cela ne plaît pas à qqun', en: 'it is not to sb\'s liking' },
        { fr: 'que ce soit', en: 'be it / be they' },
        { fr: 'la religion musulmane, catholique et juive', en: 'the Muslim, Catholic or Jewish religion' },
        { fr: 'surexploité', en: 'overexploited' }, // Correction ici
    ]
};

let currentCategory = "all";
let usedWords = [];
let currentWord = null;
let isFlipped = false;

const card = document.getElementById("card");
const front = document.getElementById("front");
const back = document.getElementById("back");
const allButton = document.getElementById("allButton");
const weekButton = document.getElementById("weekButton");
const nextButton = document.getElementById("nextButton");

// Obtenir un mot aléatoire non encore utilisé
function getRandomWord() {
    const list = words[currentCategory];
    if (usedWords.length === list.length) usedWords = [];

    let word;
    do {
        word = list[Math.floor(Math.random() * list.length)];
    } while (usedWords.includes(word) && usedWords.length < list.length);

    usedWords.push(word);
    return word;
}

// Afficher un nouveau mot
function showWord() {
    currentWord = getRandomWord();
    front.innerHTML = `<span>${currentWord.fr}</span>`;
    back.innerHTML = `<span>${currentWord.en}</span>`;

    adjustTextSize(front);
    adjustTextSize(back);
}

// Ajuster dynamiquement la taille du texte
function adjustTextSize(element) {
    const span = element.querySelector("span");
    const parent = element;

    let fontSize = 24;
    span.style.fontSize = fontSize + "px";

    while ((span.scrollHeight > parent.clientHeight || span.scrollWidth > parent.clientWidth) && fontSize > 10) {
        fontSize--;
        span.style.fontSize = fontSize + "px";
    }

    if (span.scrollHeight > parent.clientHeight || span.scrollWidth > parent.clientWidth) {
        span.style.whiteSpace = "pre-wrap";
        span.style.wordBreak = "break-word";
    }
}

// Retourner la carte (recto <-> verso)
function flipCard() {
    card.classList.toggle("flipped");
    isFlipped = !isFlipped;
}

// Affiche un mot et s'assure que la carte est retournée au recto
function showNewFront() {
    if (isFlipped) {
        card.classList.remove("flipped");
        isFlipped = false;
        setTimeout(showWord, 300);
    } else {
        showWord();
    }
}

// Gestion des boutons
allButton.addEventListener("click", () => {
    currentCategory = "all";
    usedWords = [];
    showNewFront();
});

weekButton.addEventListener("click", () => {
    currentCategory = "semaine";
    usedWords = [];
    showNewFront();
});

nextButton.addEventListener("click", showNewFront);

// Événements interactifs
card.addEventListener("click", flipCard);
card.addEventListener("touchstart", (event) => {
    event.preventDefault();
    flipCard();
});

// Optionnel : Support clavier (accessibilité)
document.addEventListener("keydown", (e) => {
    if (e.key === " " || e.key === "Enter") {
        flipCard();
    } else if (e.key === "ArrowRight") {
        showNewFront();
    }
});

// Chargement initial
document.addEventListener("DOMContentLoaded", showWord);
