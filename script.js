const words = {
    all: [
       
        { fr: 'sensibiliser un groupe de personnes', en: 'to raise awareness among + group' },
    ],
    semaine: [
        { fr: 'sensibiliser un groupe de personnes', en: 'to raise awareness among + group' },
        { fr: 'les personnes âgées', en: 'the elderly' },
        { fr: 'encourager qqun', en: 'to urge so t do sthg' },
        { fr: 'participer à qqch', en: 'to play a part in sthg' },
        { fr: 'être à la traîne', en: 'to lag/be behind' },
        { fr: 'rattraper so retard sur qqun', en: 'to catch up with sb' },
        { fr: 'mettre en danger', en: 'to jeopardize, to engander' },
        { fr: 'des déséquilibres', en: 'imbalances' },
        { fr: 'sur le long/court terme', en: 'in the long/short term' },
        { fr: 'un contrecoup', en: 'a backlash' },
        { fr: 'efficace', en: 'effective(cela fontionne) vs efficient(c'est rapide)' },
        { fr: 'laisser de côté', en: 'to overlook, to dismiss' },
        { fr: "supprimer de façon progressive", en: 'to phase out gradually' },
        { fr: 'to rely on', en: 'reposer sur' },
        { fr: 'pertinent(adj)', en: 'relevant' },
        { fr: 'surexploité', en: 'overused' },
        { fr: "précipité", en: 'hasty' },
        { fr: 'licencier', en: 'to fire / let go' },
        { fr: 'être bien conscient de ', en: 'to be well aware of' },
        { fr: 'se laisser aller à +V, se permettre', en: 'to indulge in +V-ing' },
        { fr: 'fermer ses portes définitivement', en: 'to shut down' },
        { fr: 'le plus récent, le dernier', en: 'the latest' },
        { fr: 'des militants', en: 'activists' },
        { fr: 'minifester', en: 'poisson d'avril il y a pas' },
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

function getRandomWord() {
    if (usedWords.length === words[currentCategory].length) {
        usedWords = [];
    }

    let word;
    do {
        word = words[currentCategory][Math.floor(Math.random() * words[currentCategory].length)];
    } while (usedWords.includes(word));

    usedWords.push(word);
    return word;
}

function showWord() {
    currentWord = getRandomWord();
    front.innerHTML = `<span>${currentWord.fr}</span>`;
    back.innerHTML = `<span>${currentWord.en}</span>`;

    adjustTextSize(front);
    adjustTextSize(back);
}

function adjustTextSize(element) {
    const span = element.querySelector("span");
    const parent = element;

    let fontSize = parseInt(window.getComputedStyle(parent).fontSize, 10);
    span.style.fontSize = fontSize + "px";

    while (span.scrollHeight > parent.clientHeight || span.scrollWidth > parent.clientWidth) {
        fontSize--;
        span.style.fontSize = fontSize + "px";
    }

    if (span.scrollHeight > parent.clientHeight || span.scrollWidth > parent.clientWidth) {
        span.style.whiteSpace = "pre-wrap";
        span.style.wordBreak = "break-word";
    }
}

function flipToFrenchThenChangeWord() {
    if (isFlipped) {
        card.classList.remove("flipped");
        isFlipped = false;
        setTimeout(showWord, 600);
    } else {
        showWord();
    }
}

function flipCard() {
    card.classList.toggle("flipped");
    isFlipped = !isFlipped;
}

allButton.addEventListener("click", () => {
    currentCategory = "all";
    usedWords = [];
    flipToFrenchThenChangeWord();
});

weekButton.addEventListener("click", () => {
    currentCategory = "semaine";
    usedWords = [];
    flipToFrenchThenChangeWord();
});

nextButton.addEventListener("click", flipToFrenchThenChangeWord);

card.addEventListener("click", flipCard);
card.addEventListener("touchstart", (event) => {
    event.preventDefault();
    flipCard();
}); // Support tactile

document.addEventListener("DOMContentLoaded", showWord);
