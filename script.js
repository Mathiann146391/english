const words = {
    all: [
        { fr: "abandonner", en: "abandon" },
        { fr: "aborder", en: "approach" },
        { fr: "accélérer", en: "accelerate" },
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
        { fr: 'être dans une mauvaise position', en: 'to be in a bad position / to be poorly of' },
        { fr: 'laisser pour compte', en: 'to leave behind' },
        { fr: 'à tel point que', en: 'so much so that' },
        { fr: 'détaillé', en: 'thorough/detailed' },
        { fr: 'inexact', en: 'inaccurate' },
        { fr: 'précédent', en: 'previous' },
        { fr: 'une étude', en: 'a study' },
        { fr: 'affirmer', en: 'to assert' },
        { fr: 'réagir à qqch', en: 'to respond to sthg' },
        { fr: 'garantir', en: 'to ensure / to guarantee' },
        { fr: 'un porte-parole', en: 'a spokesperson / spokesman / spokeswoman' },
        { fr: 'une baisse de la criminalité', en: 'a fall in crime / a drop in crime' },
        { fr: "c'est la raison pour laquelle", en: 'this is the reason why' },
        { fr: 'flagrant', en: 'blatant' },
        { fr: 'transmettre, traduire', en: 'to convey, to reflect' },
        { fr: 'négliger', en: 'to overlook' },
        { fr: "s'effondrer", en: 'to collapse' },
        { fr: 'démissioner', en: 'to resign' },
        { fr: 'être impliqué dans qqch', en: 'to be involved in sthg' },
        { fr: 'un adversaire', en: 'an opponent' },
        { fr: 'le manque de qqch', en: 'the lack of sthg' },
        { fr: 'apparement', en: 'allegedly' },
        { fr: 'signaler', en: 'to point out' },
        { fr: 'reprendre', en: 'to resume' },
        { fr: 'la politique', en: 'politics' },
        { fr: 'un politique', en: 'a politician' },
        { fr: "Le ministre de l'Intérieur", en: 'the Home Secretary' },
        { fr: 'mener une politique', en: 'to carry out a policy' },
        { fr: 'retirer de', en: 'to withdraw from' },
        { fr: 'prochainement', en: 'shortly' }
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
