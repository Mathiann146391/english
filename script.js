const words = {
    all: [
        { fr: "chat", en: "cat" },
        { fr: "chien", en: "dog" },
        { fr: "pomme", en: "apple" },
        { fr: "maison", en: "house" }
    ],
    semaine: [
        { fr: "lundi", en: "Monday" },
        { fr: "mardi", en: "Tuesday" },
        { fr: "mercredi", en: "Wednesday" },
        { fr: "jeudi", en: "Thursday" }
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
    front.textContent = currentWord.fr;
    back.textContent = currentWord.en;
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
