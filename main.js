// Liste der Zitate
const drachenlordQuotes = [
    "Ihr wisst es doch eh besser!",
    "Ich bin YouTuber, kein Kämpfer!",
    "Ich streame, wann ich will und wie ich will!",
    "Ihr seid alle nur neidisch auf mich!",
    "Mir doch egal, was ihr sagt!",
    "Ihr werdet es niemals schaffen, mich zu besiegen!",
    "Ich bin der Drache, der stärkste Mann in der Gemeinde!",
    "Hater sind nur erbärmliche Würstchen!",
    "Ich hab mehr im Kopf als ihr in der ganzen Birne!",
    "Ich mach das alles nur aus Spaß, und das versteht ihr nicht!",
    "Haltet die Schnauze, ich bin hier der Chef!",
    "Ich bin seit über 30 Jahren am Leben, ich weiß, was ich tue!",
    "Ihr habt keine Ahnung, was es bedeutet, ein YouTuber zu sein!",
    "Niveau ist keine Hautcreme!",
    "Man sieht sich immer zweimal im Leben, und beim dritten Mal gibt's aufs Maul!",
    "Stellt euch mein Gedächtnis wie ein Sieb vor.",
    "2011 war ich 12.",
    "Wut is ne Emotion, aber Hass ist keine Emotion.",
    "Meddl Pipull. Oder Pipl.",
    "I lörn hautu inglisch. Glaub ich.",
    "Ich schlaf vielleicht weniger als die meisten. Also nicht als die meisten, aber als viele.",
    "Das ist keine Erde die ich von irgendner Wiese oder nem Garten genommen hab. Das ist richtige Gartenerde.",
    "Wir sind besser als die Haider. Warum sind wir besser? Weil wir bessere Menschen sind.",
    "Ich war übrigens nicht beim Friseur, ich hab mir lediglich die Haare gewaschen.",
    "Du urteilst - tschuldige da fehlt ein 'h'.",
    "..und wenn ich darüber lüge, dann isses einfach weil es einen Selbstschutz ist.",
    "Meddl Leude, Servus und Herzlich Willkommen am Sonntag beziehungsweise das Video kommt eh am Dienstag.",
    "Ich werde jeden Tag laufen. Scheißegal obs regnet oder stürmt, des is scheißegal.",
    "Unter meinen Abonnenten sind so circa 13% Hater.",
    "Das Meer ist größer als die Welt.",
    "Das war äh… absichtliche bro… provokation!",
    "*Schnauf* *Schmatz* *Äh* *Schnauf*",
    "Das ist genau die Scheiße auf die ich keinen Bock hab!",
    "Des ist wieder so eine Sache.",
    "Die werden ewig in ihrem kleinen Schneckenhaus leben. Und mit Schneckenhaus meine ich nicht Vagina.",
    "Die Hater interessieren mich gar nicht, die sind mir egal.",
    "Bitte verlass uns.",
    "Ich habe hier noch etwas für euch und zwar mein Glauben an die Menschheit.",
    "Ich nehm zur Zeit ab und zwar ziemlich erfolgreich.",
    "Dieses Jahr hab ich keine Freundin.",
    "Sex ist in erster Linie reine Theorie.",
    "Du kannst kein Zimmer verschenken!",
    "Haider sind auch Fans!",
    "Gedroll wird nett, wer drollt fliegt!",
    "Meddler sind viel stärker als billige kleine Kaggnazis.",
    "Hat da jemand gelacht? Da hat doch jemand gelacht!",
    "MEIN SERVER - MEINE REGELN!",
    "Meine Persönlichkeit und mein Alter merkt man mir durchaus oft an.",
    "Was braucht Nahrung um zu wachsen? Richtig! Wasser.",
    "Hört auf, kluge Ratschläge zu geben die dumm sind!",
    "Der IQ is nur so groß wie man zulässt dass er is.",
    "Allgemeinbildung bringt dich im Leben nicht weiter.",
    "Die Haut ist kein Organ! Die Haut war nie ein Organ!",
    "Die Vlogs kommen weiterhin täglich.",
    "Mein Wort als Meddler ist mehr wert, als alle Diamanten der Welt.",
    "Dadurch dass ich ja tief in der Metal-Szene bin, bekomme ich so etwas oft lange vor anderen Menschen mit.",
    "Ein Meddla ist ein Meddla, weil er Meddl hört.",
    "Nun Jungs, da könnt ihr noch lange üben. Ich bin ein ziemlich extremer Headbanger und auch wenn ich jetzt seit fast 4 Monaten nur ein oder zwei Mal gebangt habe, habe ich doch vor einem Jahr fast jeden Freitag und Samstag geheadbangt, aber habe trotzdem Nackenschmerzen gehabt.",
    "Jedem das Seine. Ich bin Meddler, ich bin tolerant.",
    "We have lost the Krieg but the metal is strong with us.",
    "Ich schreibe ja unter anderem auch Songtexte und ich habe vor einiger Zeit mit einem Freund eine kleine Session gemacht, in der er Gitarre gespielt und ich gesungen habe.",
    "Und wer noch nicht mal weiß, dass Varg eine Band und Blutaar das Album von Varg ist, und meint mich verarschen zu müssen, dass Varg ein Album sei oder Blutaar von Burzum das komplett Unterschiede sind.",
    "Du hörst selber Meddl, schreist rum wie Hitler, da würd ich mal sagen: Wenn du Meddl hörst, hörst du NSBM-Meddl und das ist kein Meddl, das ist einfach nur Geficke!",
    "Hört auf mich zu nerven mit Frei.Wild sind Narzis. Wenn ihr keine Ahnung von der Materie habt, dann seid jetzt leise!",
    "Ich bin der YouTuber, ich mach die Videos, wem das nicht passt, da drüben ist die Tür. Schnauze halten, und abhauen.",
    "Ich seh YouTube wie ein ganz normales Gewerbe, bei dem ich grad angefangen hab.",
    "Ich hab mir alles in meinem Leben hart erarbeitet.",
    "Ich habe Monate nach Plugins gesucht, um überhaupt etwas Gutes zu bekommen. Soll heißen, es gibt kein anderes. Ich wollte das Mengele, aber das gibt es nicht mehr.",
    "Video Dreh mal anders :) Heute arbeite dran, morgen kommen es wird. Yoda mein Meister sei, die Macht stark in Seele von mir sein.",
    "Bei mir kommen die roten Augen von zu wenig Schlaf. Da ich selbstständig bin und viel arbeite (Rainer ist selbstständiger Schichtarbeiter, der sich zwischen 10 und 50 € die Stunde überweisen darf!)"
];

// Funktion zum Abrufen eines zufälligen Zitats
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * drachenlordQuotes.length);
    return drachenlordQuotes[randomIndex];
}

// DOM-Elemente
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote');
const tweetButton = document.getElementById('tweet-quote');

// Eventlistener für den Button "New Quote"
newQuoteButton.addEventListener('click', () => {
    // Lade zufälliges Zitat und aktualisiere den Blockquote-Bereich
    const newQuote = getRandomQuote();
    quoteText.textContent = newQuote;
    authorText.textContent = "- Drachenlord";
});

// Funktion zum Tweeten des Zitats
tweetButton.addEventListener('click', () => {
    const quote = quoteText.textContent;
    const author = authorText.textContent;

    // URL für das Tweeten
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" ${author}`)}`;
    
    // Öffne die Twitter-URL in einem neuen Tab
    window.open(tweetUrl, '_blank');
});

// Initiales Zitat anzeigen
quoteText.textContent = getRandomQuote();
authorText.textContent = "- Drachenlord";