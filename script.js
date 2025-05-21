const words = {
    all: [
        { fr: 'sensibiliser un groupe de personnes', en: 'to raise awareness among + group' },
    ],
    semaine: [
        { fr: 'les défenseurs', en: 'the advocates' },
        { fr: 'manifester', en: 'to demonstrate' },
        { fr: 'obtenir gain de cause', en: 'to get one's way' },
        { fr: 'occasionner des dégâts', en: 'to cause damage' },
        { fr: 'entreprendre qqch', en: 'to undertake sthg' },
        { fr: 'il se peut que', en: 'it may + BV' },
        { fr: 'faciliter', en: 'to ease' },
        { fr: 's'assurer de', en: 'to check' },
        { fr: 'causer des ravages dans la vie de qqun', en: 'to wreak havoc in sb's life' },
        { fr: 'la véracité', en: 'the accuracy' },
        { fr: 'cautionner', en: 'to condone' },
        { fr: 'cela ne plaît pas à qqun', en: 'it is not to sb's liking' },
        { fr: 'que ce soit', en: 'be it/be they' },
        { fr: 'la religion musulmane, catholique et juive', en: 'the Muslim, Catholic or Jewish religion' },
        { fr: 'surexploité', en: 'pas poisson d\'avril ;) on est pas en avril' },
    ]
};


let currentCategory = "all"
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
});

document.addEventListener("DOMContentLoaded", showWord);
