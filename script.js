const words = {
    all: [
        { fr: "cos(a+b)=", en: "cos(a)cos(b)-sin(a)sin(b)" },
        { fr: "sin(a+b)=", en: "sin(a)cos(b)+cos(a)sin(b)" },
        { fr: "tan(a+b)=", en: "tan(a)+tan(b)" },
        { fr: "accomplir", en: "accomplish" },
        { fr: "accroître", en: "increase" },
        { fr: "adapter", en: "adapt" },
        { fr: "administration", en: "administration" },
        { fr: "adopter", en: "adopt" },
        { fr: "affirmer", en: "claim" },
        { fr: "agriculture", en: "agriculture" },
        { fr: "allouer", en: "allocate" },
        { fr: "ambition", en: "ambition" },
        { fr: "analyse", en: "analysis" },
        { fr: "anticiper", en: "anticipate" },
        { fr: "apparence", en: "appearance" },
        { fr: "approuver", en: "approve" },
        { fr: "argumenter", en: "argue" },
        { fr: "artificiel", en: "artificial" },
        { fr: "assistance", en: "assistance" },
        { fr: "assumer", en: "assume" },
        { fr: "attitude", en: "attitude" },
        { fr: "audience", en: "audience" },
        { fr: "autorité", en: "authority" },
        { fr: "autrement", en: "otherwise" },
        { fr: "avantage", en: "advantage" },
        { fr: "avertir", en: "warn" },
        { fr: "bénéfice", en: "benefit" },
        { fr: "bien-être", en: "well-being" },
        { fr: "biodiversité", en: "biodiversity" },
        { fr: "capacité", en: "capacity" },
        { fr: "catégorie", en: "category" },
        { fr: "célébration", en: "celebration" },
        { fr: "circonstance", en: "circumstance" },
        { fr: "collaborer", en: "collaborate" },
        { fr: "collecte", en: "collection" },
        { fr: "combiner", en: "combine" },
        { fr: "commerce", en: "trade" },
        { fr: "compétence", en: "skill" },
        { fr: "compléter", en: "complete" },
        { fr: "comportement", en: "behavior" },
        { fr: "concept", en: "concept" },
        { fr: "concerné", en: "concerned" },
        { fr: "conclusion", en: "conclusion" },
        { fr: "condition", en: "condition" },
        { fr: "confiance", en: "trust" },
        { fr: "conflit", en: "conflict" },
        { fr: "conséquence", en: "consequence" },
        { fr: "considérer", en: "consider" },
        { fr: "construction", en: "construction" },
        { fr: "contacter", en: "contact" },
        { fr: "contestation", en: "challenge" },
        { fr: "continuer", en: "continue" },
        { fr: "contrainte", en: "constraint" },
        { fr: "contribution", en: "contribution" },
        { fr: "convaincre", en: "convince" },
        { fr: "crédibilité", en: "credibility" },
        { fr: "critique", en: "criticism" },
        { fr: "croissance", en: "growth" },
        { fr: "curiosité", en: "curiosity" },
        { fr: "débat", en: "debate" },
        { fr: "décision", en: "decision" },
        { fr: "défier", en: "defy" },
        { fr: "déléguer", en: "delegate" },
        { fr: "délibéré", en: "deliberate" },
        { fr: "démonstration", en: "demonstration" },
        { fr: "dépendre", en: "depend" },
        { fr: "désavantage", en: "disadvantage" },
        { fr: "détruire", en: "destroy" },
        { fr: "difficile", en: "difficult" },
        { fr: "diffuser", en: "broadcast" },
        { fr: "discrimination", en: "discrimination" },
        { fr: "disponible", en: "available" },
        { fr: "diversité", en: "diversity" },
        { fr: "dominer", en: "dominate" },
        { fr: "économie", en: "economy" },
        { fr: "éducation", en: "education" },
        { fr: "efficacité", en: "efficiency" },
        { fr: "énergie", en: "energy" },
        { fr: "environnement", en: "environment" },
        { fr: "épidémie", en: "epidemic" },
        { fr: "éthique", en: "ethics" },
        { fr: "évolution", en: "evolution" },
        { fr: "expérience", en: "experience" },
        { fr: "expliquer", en: "explain" },
        { fr: "explorer", en: "explore" },
        { fr: "expression", en: "expression" },
        { fr: "facteur", en: "factor" },
        { fr: "flexibilité", en: "flexibility" },
        { fr: "fonction", en: "function" },
        { fr: "fondamental", en: "fundamental" },
        { fr: "gouvernance", en: "governance" },
        { fr: "identité", en: "identity" },
        { fr: "imagination", en: "imagination" }
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
