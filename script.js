const button = document.getElementById("magicButton");

button.addEventListener("click", () => {
alert("Du bist super fleißig beim Lernen!");
});
// ... dein bestehender Code ...

// Uhr-Code einfügen
const clock = document.getElementById('clock');
for(let i=0;i<12;i++){
  const tick = document.createElement('div');
  tick.className='tick';
  tick.style.transform=`rotate(${i*30}deg) translateY(-150px)`;
  clock.appendChild(tick);
}

function setHands(){
  const now = new Date();
  const sec = now.getSeconds();
  const min = now.getMinutes() + sec/60;
  const hr = (now.getHours()%12) + min/60;

  const secDeg = sec * 6;
  const minDeg = min * 6;
  const hrDeg  = hr * 30;

  document.getElementById('second').style.transform = `translateX(-50%) translateY(-100%) rotate(${secDeg}deg)`;
  document.getElementById('minute').style.transform = `translateX(-50%) translateY(-100%) rotate(${minDeg}deg)`;
  document.getElementById('hour').style.transform   = `translateX(-50%) translateY(-100%) rotate(${hrDeg}deg)`;
}

setHands();
setInterval(setHands, 1000);
 
 // To-Do Elemente referenzieren
const todoInput = document.getElementById("todo-input");
const addTodoBtn = document.getElementById("add-todo");
const todoList = document.getElementById("todo-list");

// Aufgabe hinzufügen
function addTask() {
  const task = todoInput.value.trim();
  if (task !== "") {
    const li = document.createElement("li");
    li.innerHTML = `${task} <button class="delete-btn">✖</button>`;
    todoList.appendChild(li);
    todoInput.value = "";
  }
}

// Button-Klick auslösen
addTodoBtn.addEventListener("click", addTask);

// Enter-Taste als Auslöser
todoInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addTask();
  }
});

// Aufgaben löschen
todoList.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    event.target.parentElement.remove();
  }
});
/*musik*/
/* 🎵 Neue Musik-Playlist */
const player = document.getElementById("player");
const playButton = document.getElementById("playAudio");

const tracks = [
  "sounds/music1.mp3",
  "sounds/music2.mp3",
  "sounds/music3.mp3",
  "sounds/music4.mp3",
  "sounds/music5.mp3",
  "sounds/music6.mp3",
  "sounds/music7.mp3"
];

let current = 0;
let isPlaying = false;

// iOS Audio Entsperrung
document.body.addEventListener("click", () => {
  player.play().catch(() => {});
}, { once: true });

playButton.addEventListener("click", () => {
  if (!isPlaying) {
    player.src = tracks[current];
    player.play();
    isPlaying = true;
    playButton.textContent = "⏸️";
  } else {
    player.pause();
    isPlaying = false;
    playButton.textContent = "🎵";
  }
});

player.addEventListener("ended", () => {
  current++;
  if (current >= tracks.length) current = 0;
  player.src = tracks[current];
  player.play();
});



const flashcards = [
{ question: "Definiton: stabile Schichtung", answer: "Antwort: T. in Umgebung ist höher als im bewegten luftpaket, es kommt nicht zur Wolkenbildung, da aufsteigende Luft kälter und dichter ist als umgebende Luft, Luftpaket kann nicht weiter aufsteigen, bleibt in gleicer Höhe oder sinkt leicht ab" },
{ question: "Definiton: labile Schichtung", answer: "aufsteigende Luft ist wärmer als die umgebende Luft, ermöglicht weiteres Austeige -> Wolkenbildung" },
{ question: "Definiton: Inversion", answer: "aufsteigende Luftmasse, die sich zunehmend ankühlt, stößt gegen wärmere Luftschicht und sie wirkt wie eine Sperrschicht, die das weitere Aufsteigen verhindert. Die Vertikalbewegung erfolgt somit nur bis zum unteren Rand der Inversion(z.b. in Senken und Tälern, an Randgebirg, in Verdichtungsräumen)" },
{ question: "Definiton: adiabatische Prozesse", answer: "Vorgänge in der Atmosphäre, bei denen sich in einem vertikal aufsteigenden Luftpaket physikalische Eigenschaften(T.,Druck,Feuchtigkeit) ändern, ohne dass zw. dem Luftpaket und der Umgebung  Wärmeaustausch stattfindet." },
{ question: "Definiton: trockenadiabatische Temperaturänderung", answer: "T.änderung mit Höhe ohne Änderung des Aggregatzustands des Wasserdampfes 1K je 100m bis zu der Taupunkttemperatur" },
{ question: "Definiton: feuchtadiabatische Temperaturänderung", answer: "T.Änderung mit der Hähe mit Umwandlung des Aggregatzustandes ab der Taupunkttemperatur. Der Wasserdampf kondensiert dabei zu Wassertröpfchen und es setzt sich Kondensationswärme frei, die mit zunehmnder Höhe die Abkühlung verlangsamt auf 0,5-0,7 K je 100m. " },
{ question: "Definiton: absolute Luftfeuchtigkeit", answer: "Ein wert zu Angabe der tatsächlich enthaltenen Menge an wasserdampf in Gramm pro Kubikmeter" },
{ question: "Definiton: Luftfeuchtigkeit", answer: "wasserdampfgehalt der Luft" },
{ question: "Definiton: maximale LF", answer: "maximal möglichen Menge an Wasserdampf in einem Kubikmeter Luft" },
{ question: "Definiton: relative LF", answer: "Ein Wert, dass den verhältnis zw. absoluter und maximaler Luftfeuchtigkeit in Prozent anzeigt" },
{ question: "Definiton: Sättigungstemp./Taupunkttemp.", answer: "Temperaturwert, bei dem die relative Lf 100% erreicht, d.h. in der atmosphäre ist die tatsächlich erhaltene Menge an wasserdampf gleich der maximal möglichen." },
{ question: "Definiton: Kondensation", answer: "Übergang von gasförmig in flüssig" },
{ question: "Definiton: Resublimation(Deposition)", answer: "Übergang von gasförmig in fest" },
{ question: "Definiton: Wolken", answer: "kleine Wassertröpfchen bzw. Eiskristalle, die in der Luft schweben und zu leicht sind, um zu fallen" },
{ question:"Definition: Kondensationskern", answer: "um zu kondensieren oder resublimieren, werden Aerosole, kleinste teilchen wie staub, verwendet und an sie lagert sich wasserdampf an.  ohne sie müsste die luft viel gesättigter sein, um zu kondesieren/resublimieren."},
{ question:"Definition: Konvektion", answer: "starker auftrieb der Luftmassen aufgrund der Erwärmung durch starke sonneneinstrahlung. bei Kondesation sorgt zusätzliche Energie für weiteren Aufrieb (feuchtadibatische Abkühlung) und es bilden sich haufenwolken Cumulus, welche eine große vertikale ausdehnung erreichen können."},
{ question:"Definition: Divergenzen", answer: "In der Höhe strömen LM auseinander, dadurch entsteht ein Druckfall (Luftmassenverlusst). um diesen auszugleichen, strömt Luft aus tieferen Schichten aufwärts (Hebungsantrieb). dies verursaht schließlich den dynamischen Bodentiefdruckgebiet"},
{ question:"Definition: Konvergenzen", answer: "In der Höhe (in Jetstream, in in der oberen Tropospäre) strömen Luftmassen horizontal zusammen und können nicht seitlich ausweichen, also sinkt die Luft nach unten ab (abwärtsgerichtete Luftbewegung oder auch subsidente Bewegung). Die Folgen sind oft die Auflösung der Wolken. Die Luft erwärmt sich beim Absinken und dadurch entsteht am Boden ein dynamischer hochdruckgebiet."},
{ question:"Definition: Advektion", answer: "horizontale Bewegung der Luftmassen, die vertikale Bewegung indirekt auslösen kann, in dem es den Isobaren verändert. wenn die warmluft horizontal hineinströmt, dann heben sich die Isobaren infolge der Ausdehnung der Warmluft, sodass die Luft allmählich nach oben gedrückt wird. als folge entstehen schichtichtwolken stratus. Srömt Kaltluft horizontal gegen Warmluft, so schiebt sich die Kaltluft, da sie dichter und schwerer ist, unter die warmluft. warmluft wird so zum Aufsteigen gezwungen. Als folge Quellwolken Cumulus."}, 
{ question:"Definition: Sublimation", answer: "Übergang von fest in gasfärmig"},
{ question:"Definition: Föhn", answer: "ist ein regionales Windsystem, dass als warme, abwärtsgerichtete winde, die beim überströmen von Gebirgen auf der leeseite auftreten."},
{ question:"Definition: luv und leeseite", answer: "windzugewandte seite und windabgewandte seite"},
{ question:"Definition: Front", answer: "mehrere Kilometerweite Übergangsbereiche zwischen zwei unterschiedlich temperierten Luftmassen"},
{ question:"Definition: Atmosphärische Zirkulation", answer: "alle großräumige vertikale und horizontale Luftbewegungen, die sich aus Verteilung großer Luftdruckgebieteergeben."},
{ question:"Definition: thermische Druckgebiete", answer: " entstehen durch starke Abkühlung ode Erwärmung der atmosphäre. z.b. die äquatoriale Tiefdruckrinne und polares hoch"},
{ question:"Definition: Hadley-Zirkulation", answer: "großräumige vertikale Luftkreisläufe in Bereichen der Passatzirkulation "},
{ question:"Definition: dynamische Druckgebiete", answer:"subtropischen Hochdruckgebiete und suppolare Tiefdruckgebiet, enstehen durch Rossby-Wellen (Wellenbewegungen im Jetstream),Corioliskraft,Druckgradientkraft in der Höhe."},
{ question:"Definition: planetarische Frontalzone ",answer:"der Bereich zwischen dem 35. und 65. Breitenkreis, wo besonders hohe Temperatur und Luftdruckgefälle herrschen. Innerhalb dieser Zine werden die Winde auf beoden Halbkugel nach Westen abgelenkt durch die Coriolisablenkung. "},
{ question:"Definition: orographischen hindernisse",answer:"erzwungener aufstieg z.b. durch Gebirge , häufigverbunden mit Turbulenzen"},
{ question:"Definition: regionales windsystem ",answer:"ein regelmäßig auftrendes Windsystem in einem bestimmten Gebiet/Region, das meistens durch Unterschiede in Temperatur, Luftdrck oder Relief entstehen. Als Beispiel föhn und land-see-windsystem. "},
{ question:"Luftdruck",answer:"...ist das gewicht der Luftsäule, die sich vertikal über einer bestimmten Fläche in der Atmosphäre befindet"},
{ question:"Wind",answer:"Die strömung der Luft vom Hochdruck zu Tiefdruckgebiet, da die Luftmassen sicd bestrebt einen Luftausgleich herzustellen. Wind wird angegeben nach der richtung wher er kommt. Die Windstärke ist proportional dem Druckgefälle und wird in der beaufort-skala 1-12 angegeben"},
{ question:"jetstream",answer:"gehört zu geostopischen Winden, den man innerhalb der planetarischen Frontalzone in Polarfront-Jetstream und subtropischen Jetstream unterteilt. bildet sich im bereichen des großen t. und druckabfalls im bereich zw. 35° und 65° Breitenkreis, ist mäanderförmig. ensteht in 9-12km höhe und erreicht die v von über 30m pro s. die länge ist mehrere 1000km und 100-500km breite, vertikale ausdehnung (Mächtigkeit) 1-4km "},
{ question:"druckgradientkraft",answer:"...ist die Kraft, die Luftmassen vom höheren zum niedrigeren Druck antreibt. Sie entsteht aus horizontalen Druckunterschieden in der Atmosphäre"},
{ question:"dynamischer Druckgebiet",answer:"enstehen im bereich der pl. Frontalzone aus Verwirbelungsprozessen. Sowohl in der Hähe als auch am Boden herrschen selbe Drucksituation "}
];

let currentIndex = 0;

const flashcard = document.getElementById("flashcard");
const question = document.getElementById("cardQuestion");
const answer = document.getElementById("cardAnswer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateFlashcard() {
flashcard.classList.remove("flipped");
question.textContent = flashcards[currentIndex].question;
answer.textContent = flashcards[currentIndex].answer;
}

flashcard.addEventListener("click", () => {
flashcard.classList.toggle("flipped");
});

nextBtn.addEventListener("click", () => {
currentIndex = (currentIndex + 1) % flashcards.length;
updateFlashcard();
});

prevBtn.addEventListener("click", () => {
currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
updateFlashcard();
});

updateFlashcard();

const flashcards2 = [
  { question: "Was passiert beim Aufsteigen der Luft?", answer: "Die Luft steigt infolge einer starken Aufwärmung. Dabei verringert sich der Luftdruck der umgebenden Luft. Deswegen kann sich die Luft ausdehnen. Schließlich kühlt es ab" },
  { question: "beschreibe die wirkung der luft, wenn der wasserdampfgehalt gleich bleibt, die Temperatur aber unterschiedlich ist (wenn relative LF unterschiedlich ist)", answer: "z.b. die luft mit 9,4 g/m^3 bei 30°C ist sehr trocken, bei 10°C dagegeh sehr feucht. Ursache: je höher die T. desto größer der Vermögen Wasserdampf aufzunehmen." },
  { question:"Wieso verläuft die Abkühlung der Luft nach dem Erreichen des Taupunktes feuchtadiabatisch ?", answer: "Wegen der bei der Kondesation frei werdenende Wärme"},
  { question:"vorraussetzung für wolkenbildung ... ", answer: "großräumige Hebungsvorgänge der Luft"},
  { question: "nenne die abhängigkeit der wasserdampfaufnahmekapazität von de temperatur", answer: "je häher die t. desto größere Mengen an wasserdampf kann die Luft aufnehmen" },
  { question:"Wolkenbildung",answer:"Am boden steigt erwärmte Luft auf. Mit zunehmender Höhe verringert scih der Druck und der Luftpaket dehnt sich aus. Beim Aufsteigen Abkühlung(T. sinkt)relative LF steigt, da sich absolute der maximalen annähert. wasserdampf kondensiert wenn 100% der relativen LF erreicht sind. Die Wassertröpfchen lagern sich an Kondensationskerne an. Bei Resublimation das gleiche, nur mehr Energiefreisetzung"},
{ question:"ursachen für die vertikalen Luftbewegungen", answer: "Konvektion und Advektion"},
{ question:"welche Wolkenarten gibt es?", answer: "hohe(cirrus,cirrocumulus,cirrostratus),mittelhohe(Altocumulus,Altostratus),tiefe(Stratocumulus,Stratus,Cumulus) und mit großer Vertikalausdehnung(Nimbostratus,Cumulonimbus)"},
  { question:"Wovon ist die art der wolken abhängig",answer:" von tröpfchengröße, Art der Kondensation (Kon oder Ad) sowie T.Schichtung und Höhe der Kondensation"},
  { question:"Entstehung thermischer Druckgebiete",answer:"Thermische Druckgebiete entstehen durch Temperaturunterschiede infolge von Konvektion (vertikaler Wärmetransport) und Advektion (horizontaler Wärmetransport).Sie beruhen auf Dichteunterschieden der Luftmassen."},
  { question:"Entstehung dynamischer Druckgebiete",answer:"Dynamische Druckgebiete entstehen durch Konvergenz- und Divergenzprozesse in der oberen Troposphäre, die zu vertikalen Ausgleichsbewegungen führen.Diese Bewegungen verursachen Hebungsantriebe (Tiefs) oder subsidente Luftströmungen (Hochs)."},
  { question:"Entstehung von Niederschlag",answer:"Wenn Gravitationskraft > Auftrieb, sind Wassertröpfchen größer und fallen in form von ns. Bei großem T.unterschied kommt es teilweise zur Verdunstung, aber keine vollständige."},
  { question:"wovon ist die Art des Ns abhängig ",answer:"Art und Höhe der kondensation, "},
  { question:"Erkläre den Verlauf des Föhns?",answer:"Luvseite: Erzwungener Aufstieg der Luft. Abkühlung bis zu Taupunktt. trockenadiabatisch, falls das Gebirge noch nicht überwunden ist, dann feuchtadiabatische Abkühlung -> Stauniederschläge-> Verringerung der absoluten LF. Es bildet sich sog. Föhnmauer über dem Gebirgskamm. Nach überwindung des gebirgskammes, Erwärmung der Luft trockenadiabatisch beim absinken. Die Luft auf der leesite ist somit trockener und wärmer als auf Luvseite(Ursache Kondensationswärme des NS auf der Luvseite)"},
  { question:"Erkläre die Eigenschaften des Föhns?",answer:"trocken und warm, hohe windv, günstig für Pflanzenwuchs im Frühjahr und Herbst. Zu schnelle Reife der Früchte durch viele NS, auswirkungen auf das vegetative Nervensystem (Probleme mit Kreislauf,Kopfschmerzen,Unwohlsein.)"},
  { question:"erkläre das globale Windsystem",answer:"in Polarzone: Ostwinde aus Hochdruckgebieten kalte Luft in den subpolaren Gürtel (tiefdruckgebiet) durch Corioliskraft. Zwischen 65°-35° Breitengrad:Westwindzirkulation, meridionaler Luftausstausch und Energietransporte zw. subtropischen Hochdruckgebiet und subpolaren Tiefdruckgebiet. 30°-Äquator: tropische passatzirkulation, durch Druckgefälle zw. subttropischen Hochdruckgürtel auf eiden Halbkugeln und der äqutorialen Tiefdruckrinne "},
  { question:"ergleiche die luv und Leeseite beim Durchzug des Föhns",answer:"Luv: wolkenbedeckter himmel, kühke T., viel Ns Lee: wolkenloser Himmel oder kleine Föhnfischwolken, klare Fernsicht()wenig Auerosole und tiefblauer Himmel, wolken stürzen sich ein wenig ins Tal, trockener, heißer Fallwind, im Frühjahr Lawinen"},
  { question:"wie enstehen Starkwinde ",answer:"da sich unsere Erde um ihre eigene Achse dreht, dreht sich dei Atmosphäre mit ihr. DAbei ist die Rotationsv am Äquator am größten und an den Polen am geringsten. Wenn also Winde, die von dem äquatorialem Bereich kommen, in höheren Breiten ostwärts besitzen sie eine größere v als die erdrotation selbst.relativ der erdoberfläche ergibt sich daraus auf nordhalbkugel ablenkung nach rechts und südhalbkugel nach links. außerdem ist druckgradient von bedeutung "},
  { question:"erkläre die Mäanderbildung des Jetsreams",answer:"Zuerst nahezu isobarenparalleles zum Breitenkreis verlauf der Westwindströmung -> Block des Lmaustausches und Energieaustausches zw. pol. kaltluft und rop. warmluft. Strömung verlauft immer wellenförmig-> Ablenkung der Strömung durch Land-Meer-gegensatz und oder meridionale Gebirgszüge wie Kordinellen -> Stau vor dem Gebirge, Konvergenz, Ablenkung richtung des Poles-> erhöhung der v nach dem Gebirge, Divergenz, mit Ablenkung richtung Äquator. Verstärkung der Mäanderbildung durch T.-unterschiede über 6K/100km, Kaltlufttröge und Warmluftrücken. Abschnürung einzelner t.zellen in nähe der Wendekreise-> verwirblung polarischer und tropischer LM-> neue Ausbildung der westwindströmung  "},
  { question:"erkläre das extrem wechselhaftes Wetter",answer:"beeinflussung von dem wechsel der dznamischen hoch und tiefdruckgebieten aus der pl. frontalzone-> beeinflussung durch Lm aus unters. regionen"},
  { question:"wodurch wird die Vertikalstreckung bestimmt",answer:"durch kondesationsniveaus, durch ihren Energiegehalt und Temperaturschichtung der umgebenden Atmosphäre. spätenstens aber an der Inversionsschicht der Tropopause endet die vertikalbewegung"},
  { question:"Enstehung vertikaler Luftbewegungen",answer:"Durch Konvektion, Advektion, Konvergenzen und Divergenzen owie orographischen Hindernissen"}
];
let currentIndex2 = 0;

const flashcard2 = document.getElementById("flashcard2");
const question2 = document.getElementById("cardQuestion2");
const answer2 = document.getElementById("cardAnswer2");
const nextBtn2 = document.getElementById("nextBtn2");
const prevBtn2 = document.getElementById("prevBtn2");

function updateFlashcard2() {
  flashcard2.classList.remove("flipped");
  question2.textContent = flashcards2[currentIndex2].question;
  answer2.textContent = flashcards2[currentIndex2].answer;
}

flashcard2.addEventListener("click", () => {
  flashcard2.classList.toggle("flipped");
});

nextBtn2.addEventListener("click", () => {
  currentIndex2 = (currentIndex2 + 1) % flashcards2.length;
  updateFlashcard2();
});

prevBtn2.addEventListener("click", () => {
  currentIndex2 = (currentIndex2 - 1 + flashcards2.length) % flashcards2.length;
  updateFlashcard2();
});

updateFlashcard2();

