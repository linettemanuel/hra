const cards = {"cards" : [{"color" : "Crimson", 
               "group" : "erotika",
               "questions" : ["Jaký je tvůj nejhorší sexuální zážitek?",
                              "Jaké jsou tvé erotogenní zóny?",
                              "Oblíbené spodní prádlo? (Na tobě nebo protějšku)",
                              "Tichý vs hlasitý sex? Proč?",
                              "Jaký je tvůj největší erotický sen?",
                              "Co tě dokáže naprosto odradit?",
                              "Sex ve více lidech? Ano nebo ne? Proč?",
                              "Jaký je tvůj postoj k one night stand?",
                              "Jaká je tvá erotická úchylka?",
                              "Romantika nebo 50 Shades? Proč?"] 
               }, 
               {"color" : "MediumSpringGreen ", 
               "group" : "rodina",
               "questions" : ["Popiš každého člena tvé nejbližsí rodiny.",
                              "V čem tě jednotlivý členové tvé rodiny nejvíce ovlivnili?",
                              "Jaký bys chtěl(a) být rodič?",
                              "Kolik chceš mít dětí, jestli vůbec?",
                              "Jaký máš vztah s tátou?",
                              "Jaký máš vztah s mámou?",
                              "Co si myslíš o rodinných oslavách?",
                              "Jaká je vaše rodinná tradice?",
                              "Co bys na tvojí rodině vylepšil(a)?",
                              "Má tvoje rodina charakteristický znak?"]
               },
               {"color" : "blue", 
               "group" : "postoj",
               "questions" : ["Co je první, co tě napadne, když se tě zeptám, v co věříš?",
                              "Co si myslíš, že je láska?",
                              "Co bys chtěl(a), aby se o tobě říkalo na tvém pohřbu?",
                              "Máš smysl života? Jaký?",
                              "S kým bys z tvých přátel chtěl(a) strávit rok na pustém miniaturním ostrově? Proč?",
                              "Co si na sobě nejvíc vážíš?",
                              "Je lepší žádat o odpuštění nebo o svolení?",
                              "Tvůj vnitřní zákoník (rozhodovací systém), jedním slovem nebo větou?",
                              "Popiš 3 momenty v životě, které tě nejvíce ovlivní?",
                              "Co je pro tebe štěstí?"] 
               },
               {"color" : "LightSteelBlue", 
               "group" : "ex",
               "questions" : ["Jak dlouhý byl tvůj nejdelší vztah?",
                              "O čem jste se s ex partnerem / partnerkou nejčastěji hádali?",
                              "Co sis odnesl(a) ze svého minulého vztahu?",
                              "Jak snášíš rozchody?",
                              "Co se ti na tvém nejdelším vztahu líbilo a co bys změnil(a)?",
                              "Jak dlouhý byl tvůj nejkratší vztah?",
                              "Podvedl(a) jsi někdy partnera / partnerkou? Proč?",
                              "Byl jsi podveden(a)? Jaký byl / by byl tvůj postoj?",
                              "Jste stéle v kontaktu? Jaký máte vztah nyní?",
                              "Žolík! Je to na tobě."] 
               },
               {"color" : "pink", 
               "group" : "vzpomínky",
               "questions" : ["Jaká je tvoje oblíbená vzpomínka z dětství?",
                              "Byl(a) jsi na základce oblíbená / oblíbený?",
                              "Co tvý rodiče neví z tvého dětství?",
                              "Jaký byl tvůj dětský sen?",
                              "Jak probíhala tvoje puberta?",
                              "Čím jsi chtěl(a) v dětství být?",
                              "Jmenuj svého superhrdinu z dětství? Co se ti na něm / na ní líbilo?",
                              "Popiš svoji první dětskou lásku.",
                              "Kdy nebo čím vnímáš, že ti skončilo dětství?",
                              "Co ti z dětství zůstalo dodnes?"] 
               },
               {"color" : "MediumPurple", 
               "group" : "if",
               "questions" : ["Kdybys měl(a) poslední měsíc života, jak bys s ním naložil(a)?",
                              "Kdyby nebyly potřeba peníze? Co bys dělala?",
                              "Kdyby sis mohl(a) zopakovat životní událost / období, jaké by to bylo?",
                              "Kdybys mohl(a) pověčeřet s kýmkoliv na světě, kdo by to byl?",
                              "Kdyby sis mohl(a) vzít známou osobnost, kdo by to byl? Proč?",
                              "Kdybys byl(a) zvíře, jaké by to bylo? Proč?",
                              "Kdyby sis mohl(a) změnit jméno, jaké by to bylo? Proč?",
                              "Kdybys mohl(a) navštívit jakékoliv místo, jaké by to bylo?",
                              "Kdyby ses musel(a) vzdát smyslu, který by to byl?",
                              "Žolík! Je to na tobě."]
               },
               {"color" : "Gold", 
               "group" : "ego",
               "questions" : ["Jaká je tvá oblíbená hudba / žánr?",
                              "Čeho se nejvíce bojíš?",
                              "Pes nebo kočka, nebo obojí? Proč?",
                              "Jaká je práce tvých snů?",
                              "Plány vs. spontaneita?",
                              "Řekni tvůj oblíbený vtip.",
                              "Jmenuj 3 vlastnosti, které na sobě máš a nemáš rád(a)?",
                              "Co tě dokáže nakopnout?",
                              "Řád nebo anarchie? Proč?",
                              "Co je na tvém bucket listu?"]
               }] };

function getRandomNumber(max) {
    return Math.round(Math.random() * max)  
}

const text = document.querySelector(".nazev");
const question = document.querySelector(".otazka");
const body = document.querySelector(".body");
const icon = document.querySelector(".far");
const cardContainer = document.querySelector(".card-container");
const button = document.querySelector(".btn");
var deckOfCards = cards.cards;
var cnt = 0;



function checkIfNotEmpty(deck) {
    return (deck.length > 0) ? true : false
}

function showCards() {
    if((checkIfNotEmpty(cards.cards)) && (cnt < 70)) {
        cards.cards = cards.cards.filter(isTrue);
        deckOfCards = cards.cards;
        const deckSize = deckOfCards.length;
        const randomNumber = getRandomNumber(deckSize - 1);
        const groupName = chooseGroup(deckOfCards, randomNumber);
        text.innerHTML = groupName.group;
        var myGradient = "linear-gradient(to bottom right, " + groupName.color + ", black)";
        console.log(myGradient);
        cardContainer.style.backgroundImage = myGradient;
        cardContainer.style.border = "1px solid " + groupName.color;
        body.style.backgroundImage = "linear-gradient(to bottom left, " + groupName.color + ", black)";
        icon.style.color = groupName.color;
        var questionText = setRandomQuestion(groupName);
        question.innerHTML = questionText;
        deleteQuestion(deckOfCards[randomNumber].questions, questionText); 
        console.log(cnt); 
    } else {
        text.innerHTML = "vše je zodpovězeno"
        question.innerHTML = "už nezbylo více otázek";
        button.style.display = "none";
    }
}

function chooseGroup(deck, num) {
    return deck[num]
}

function isTrue(group) {
    return checkIfNotEmpty(group.questions) == true
}

function deleteQuestion(arr, i) {
    return arr.splice(arr.indexOf(i), 1);
}

function setRandomQuestion(givenGroup) {
    quantQuestions = givenGroup.questions.length;
    const randomQuestionNumber = getRandomNumber(quantQuestions - 1);
    const myQuestion = givenGroup.questions[randomQuestionNumber];
    cnt++;
    return myQuestion;
}

window.onload = () => {
    showCards();
}

button.onclick = () => {
    showCards();
}