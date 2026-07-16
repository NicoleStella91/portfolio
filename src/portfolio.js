export const portfolio  = [
    {
        id: 1,
        name: "Destinazione Italiano",
        description: {
            ITA: "Unità didattica digitale gamificata per studenti adulti di italiano L2 principianti assoluti.",
            ENG: "Gamified digital didactic unit for adult beginners in Italian L2."
        },
        link: "https://destinazioneitaliano.netlify.app/",
        image: "/capotreno.png",
        tags: [
            "gamification",
            "language learning",
            "digital learning"
        ],
        paragraphs: [
            {
                id: 1,
                paragraphTitle: {
                    ITA: "La sfida",
                    ENG: "The challenge"
                },
                paragraphText: {
                    ITA: "Come può uno studente straniero adulto, appena arrivato in Italia, comunicare in classe fin dal primo giorno, senza dover ricorrere a una lingua veicolare? Da questa domanda concreta nasce Destinazione Italiano, un percorso pensato per principianti assoluti di italiano L2 (in particolare studenti adulti in procinto di iniziare un percorso di studi in Italia). L'obiettivo è fornire loro gli strumenti linguistici essenziali per interagire in un contesto scolastico: saluti, presentazioni, istruzioni, richieste cortesi, oltre a un primo orientamento su verbi, sostantivi e aggettivi. Ho scelto un formato digitale e interattivo per offrire feedback immediato, un dizionario e un manuale sempre a portata di clic, e la possibilità di esercitarsi in autonomia, anche fuori dall'aula.",
                    ENG: "How can an adult foreign student, just arrived in Italy, communicate in class from day one without having to resort to a vehicular language? From this concrete question comes Destinazione Italiano, a learning path designed for absolute beginners of Italian L2 (particularly adult students about to start a study program in Italy). The goal is to provide them with the essential linguistic tools to interact in a school context: greetings, introductions, instructions, polite requests, as well as an initial orientation on verbs, nouns and adjectives. I chose a digital and interactive format to offer immediate feedback, a dictionary and a manual always at hand, and the possibility of practising autonomously, even outside the classroom."
                }
            },
            {
                id: 2,
                paragraphTitle: {
                    ITA: "Il processo di progettazione",
                    ENG: "The design process"
                },
                paragraphText: {
                    ITA: "Destinazione Italiano è il prodotto finale del Master di primo livello <<Le nuove competenze digitali: open education, social e mobile learning>> dell'Università di Firenze. Il progetto parte dall'analisi dei destinatari e dalla definizione di obiettivi di apprendimento specifici e misurabili. I contenuti sono organizzati in quattro capitoli progressivi (saluti, presentazioni, istruzioni e richieste, parti del discorso), ciascuno con dialoghi contestualizzati, esercizi interattivi e una verifica finale. Il principio guida è lo scaffolding: ogni attività introduce gradualmente nuovi elementi linguistici, offrendo supporto prima di richiedere produzione autonoma. Ho sviluppato l'intero sito in React, curando personalmente anche layout responsive e mobile-first, oltre all'integrazione di immagini generate con strumenti di intelligenza artificiale (ChatGPT e Canva) e audio realizzati con Eleven Labs. La valutazione dell'apprendimento avviene tramite quiz, esercizi di associazione e completamento, tutti con feedback immediato; il gradimento è rilevato con un questionario anonimo.",
                    ENG: "Destinazione Italiano is the final product of the first-level Master <<Le nuove competenze digitali: Open Education, Social and Mobile Learning>> at the University of Florence. The project starts with learner analysis and the definition of specific and measurable learning objectives. The content is organized into four progressive chapters (greetings, introductions, classroom instructions and requests, parts of speech), each featuring contextualized dialogues, interactive exercises, and a final assessment. The guiding principle was scaffolding: each activity gradually introduces new linguistic elements, providing support before autonomous production. I developed the entire website in React, personally handling responsive and mobile-first layouts, as well as integrating images generated with artificial intelligence tools (ChatGPT and Canva) and audio created with Eleven Labs. Learning assessment is carried out through quizzes, matching and gap-fill exercises, all with immediate feedback; satisfaction is measured with an anonymous questionnaire."
                },
            },
            {
                id: 3,
                paragraphTitle: {
                    ITA: "L'uso della gamification",
                    ENG: "The use of gamification"
                },
                paragraphText: {
                    ITA: "Nel mio lavoro di insegnante vedo spesso quanto l'apprendimento di una lingua possa risultare frustrante, specialmente all'inizio. Con Destinazione Italiano volevo mantenere alta la motivazione e basso il filtro affettivo, attraverso meccaniche di gioco e uno storytelling coinvolgente ma volutamente semplice, per non appesantire il carico cognitivo. Il percorso è un viaggio verso l'Italia: lo studente è un passeggero che, guidato dalla Capotreno, affronta le tappe del viaggio acquisendo gli strumenti linguistici necessari per arrivare a destinazione, raccogliendo alcuni beni virtuali superando prove linguistiche lungo il tragitto. Le meccaniche di gioco includono barre di progresso che rendono visibile l'avanzamento, feedback immediati che guidano verso la risposta corretta senza penalizzare l'errore, e una struttura narrativa che sostiene la motivazione nel tempo. Per la progettazione degli elementi di gioco ho utilizzato due strumenti di riferimento: il meta-modello G.A.M.E. (Goal, Accessibility, Motivation, Environment) e l'Octalysis Framework.",
                    ENG: "In my work as a teacher, I often see how learning a language can be frustrating, especially at the beginning. With Destinazione Italiano, I wanted to maintain high motivation and low affective filter through game mechanics and an engaging storytelling approach, albeit intentionally simple, to avoid overburdening the cognitive load. The journey is a trip to Italy: the student is a passenger who, guided by Capotreno, faces the stages of the journey while acquiring the necessary linguistic tools to reach their destination, collecting some virtual goods by overcoming linguistic challenges along the way. The game mechanics include progress bars that make advancement visible, immediate feedback that guides toward the correct answer without penalizing mistakes, and a narrative structure that supports motivation over time. For designing the game elements, I used two reference tools: the G.A.M.E. meta-model (Goal, Accessibility, Motivation, Environment) and the Octalysis Framework."
                }
            },
            {
                id: 4,
                paragraphTitle: {
                    ITA: "Il risultato",
                    ENG: "The outcome"
                },
                paragraphText: {
                    ITA: "Destinazione Italiano è un percorso digitale autonomo, pensato per essere integrato in un corso di italiano L2 (in presenza, blended o online) oppure utilizzato per lo studio indipendente. La struttura narrativa e gli elementi di gamification sono pensati per essere replicabili: lo stesso modello può essere adattato ad altri livelli linguistici, ad altri contenuti grammaticali e, potenzialmente, ad altre lingue L2.",
                    ENG: "Destinazione Italiano is an autonomous digital learning path, designed to be integrated into an Italian L2 course (in-person, blended or online) or used for independent study. The narrative structure and gamification elements are designed to be replicable: the same model can be adapted to other language levels, other grammatical content, and potentially other L2 languages."
                }
            },
            {
                id: 5,
                paragraphTitle: {
                    ITA: "Il test con gli utenti",
                    ENG: "The user testing"
                },
                paragraphText: {
                    ITA: "Destinazione Italiano è stato testato con due studenti anglofoni principianti assoluti e con un gruppo di otto futuri insegnanti di italiano L2, in un contesto di formazione universitaria. I risultati confermano il potenziale motivazionale della narrazione (entrambi gli studenti hanno assegnato il punteggio massimo al coinvolgimento della storia e dei personaggi) e la validità della progressione didattica, giudicata adeguata dalla totalità dei futuri insegnanti coinvolti. Il test ha anche portato alla luce una tensione di design interessante. Per ascoltare i dialoghi, ho scelto di richiedere un click intenzionale da parte dello studente invece di un autoplay: una decisione presa insieme alla mia relatrice, per lasciare allo studente il controllo sui tempi di ascolto e favorire un coinvolgimento attivo piuttosto che una fruizione passiva. Un utente ha segnalato che questa scelta, unita alla distanza tra i pulsanti sullo schermo, rendeva il flusso di navigazione poco naturale. Ho deciso di mantenere l'impostazione pedagogica originale correggendo l'aspetto di usabilità (ravvicinando i pulsanti), riservandomi di verificare con un campione più ampio se la frizione segnalata sia un caso isolato o un problema più diffuso. Non tutti i dati sono stati ugualmente positivi, e credo sia utile condividerli con la stessa trasparenza: un futuro insegnante, su otto, ha valutato con un punteggio basso l'allineamento tra l'attività e gli obiettivi didattici dichiarati (un segnale isolato rispetto al resto del campione, che meriterebbe un approfondimento mirato). Anche la percezione dell'efficacia della gamification, pur complessivamente positiva, è risultata più eterogenea proprio tra i partecipanti con maggiore esperienza didattica pregressa: un dato che mi ha fatto riflettere su come l'expertise professionale possa generare aspettative diverse nei confronti di uno strumento gamificato. È importante specificare i limiti di questi test: il campione di studenti finali è ridotto (due persone), e i dati sulla fiducia nelle competenze acquisite riflettono una percezione soggettiva, non una misurazione oggettiva dell'apprendimento. I prossimi passi prevedono un test con un campione più ampio e la raccolta di dati più strutturati sulla efficacia didattica reale.",
                    ENG: "Destinazione Italiano was tested with two absolute beginner English-speaking students and with a group of eight future Italian L2 teachers in a university training context. The results confirm the motivational potential of storytelling (both students gave the maximum score for engagement with the story and characters) and the validity of the didactic progression, judged appropriate by all the future teachers involved. The test also highlighted an interesting design tension. To listen to the dialogues, I chose to require an intentional click from the student instead of autoplay: a decision made together with my supervisor, to give the student control over listening times and encourage active engagement rather than passive consumption. One user reported that this choice, combined with the distance between buttons on the screen, made the navigation flow feel unnatural. I decided to maintain the original pedagogical setting while correcting the usability aspect (bringing the buttons closer together), reserving the right to verify with a larger sample whether the reported friction is an isolated case or a more widespread problem. Not all data were equally positive, and I believe it is useful to share them with the same transparency: one future teacher, out of eight, rated low alignment between the activity and the stated learning objectives (an isolated signal compared to the rest of the sample, which would deserve targeted follow-up). Even perceptions of gamification effectiveness, while overall positive, were more heterogeneous among participants with greater prior teaching experience: a data point that made me reflect on how professional expertise can generate different expectations towards a gamified tool. It is important to specify the limitations of these tests: the final student sample is small (two people), and data on confidence in acquired skills reflect subjective perception, not an objective measurement of learning. Next steps include testing with a larger sample and collecting more structured data on actual didactic effectiveness."
                }
            }
        ]
    },
    /*{
        id: 2,
        name: "Italian Verbs",
        description: {
            ITA: "Unità didattica digitale gamificata per studenti adulti di italiano L2 principianti assoluti.",
            ENG: "Gamified digital didactic unit for adult beginners in Italian L2."
        },
        link: "https://italianverbsapp.netlify.app/",
        image: "/italianverbs.png",
        tags: [
            "gamification",
            "language learning",
            "digital learning"
        ],
        paragraphs: [
            {
                id: 1,
                paragraphTitle: {
                    ITA: "Perché questo progetto?",
                    ENG: "Why this project?"
                },
                paragraphText: {
                    ITA: "La coniugazione verbale è uno degli ostacoli più comuni nell'apprendimento dell'italiano L2. Memorizzare le forme richiede esposizione ripetuta e pratica costante, un tipo di apprendimento che si presta naturalmente al formato digitale interattivo. <<Italian Verbs>> nasce come strumento di pratica autonoma per studenti di italiano L2 che vogliono consolidare la coniugazione verbale attraverso l'esercizio, non attraverso la memorizzazione passiva. L'app propone due modalità di gioco complementari: la scelta dell'ausiliare corretto tra essere e avere, e la produzione della forma coniugata a partire da un soggetto e un infinito forniti casualmente dal sistema. I tempi verbali disponibili al momento sono il presente indicativo, il passato prossimo, l'imperfetto indicativo e il futuro semplice, con l'intenzione di espandere progressivamente il database.",
                    ENG: "Verb conjugation is one of the most common obstacles in learning Italian L2. Memorising verb forms requires repeated exposure and consistent practice, a type of learning that lends itself naturally to an interactive digital format. <<Italian Verbs>> was created as an autonomous practice tool for Italian L2 students who want to consolidate verb conjugation through active exercise, not passive memorisation. The app offers two complementary game modes: choosing the correct auxiliary between essere and avere, and producing the conjugated form from a subject and infinitive randomly provided by the system. The verb tenses currently available are the present indicative, passato prossimo, imperfetto indicativo, and futuro semplice, with the intention of progressively expanding the database."
                }
            },
            {
                id: 2,
                paragraphTitle: {
                    ITA: "Il processo di progettazione",
                    ENG: "The design process"
                },
                paragraphText: {
                    ITA: "La progettazione ha preso le mosse da un'analisi delle difficoltà tipiche degli studenti di italiano L2 nella produzione verbale: la scelta dell'ausiliare nei tempi composti, la gestione delle irregolarità e la velocità di recupero delle forme memorizzate. Da questa analisi sono derivate le due modalità di gioco, ciascuna mirata a un aspetto specifico della competenza verbale. L'interfaccia è stata progettata per essere essenziale e priva di distrazioni, con un'interazione ridotta al minimo: l'utente legge il prompt, produce la risposta, riceve feedback immediato. Il timer da 10 secondi introduce un elemento di pressione che simula le condizioni della produzione reale, anche se si tratta di un aspetto su cui è in corso una riflessione, poiché un tempo eccessivamente breve potrebbe generare ansia piuttosto che motivazione. Il sistema di punteggio non è fine a se stesso, ma funziona come una sorta di 'valuta virtuale' che lo studente può 'spendere' per ricevere un aiuto nella coniugazione.",
                    ENG: "The design process started from an analysis of the typical difficulties Italian L2 students face in verb production: choosing the correct auxiliary in compound tenses, managing irregularities, and the speed of retrieving memorised forms. From this analysis came the two game modes, each targeting a specific aspect of verbal competence. The interface was designed to be minimal and distraction-free, with interaction reduced to its essentials: the user reads the prompt, produces the answer, and receives immediate feedback. The 10-second timer introduces a pressure element that simulates real-world production conditions, though this is an aspect currently under review, as an overly short time limit may generate anxiety rather than motivation. The scoring system is not an end in itself, but functions as a sort of 'virtual currency' that the student can 'spend' to receive help with conjugation."
                }
            },
            {
                id: 3,
                paragraphTitle: {
                    ITA: "L'uso della gamification",
                    ENG: "The use of gamification"
                },
                paragraphText: {
                    ITA: "Italian Verbs integra alcuni elementi di gamification. Il timer crea urgenza e allena la velocità di recupero delle forme verbali, avvicinando la pratica alle condizioni della comunicazione reale. Il sistema di punti introduce un ciclo di ricompensa che incentiva la correttezza e la costanza. La meccanica più originale è però quella dell'aiuto a pagamento: lo studente può scegliere di spendere i punti accumulati per ricevere un suggerimento — alcune lettere della risposta corretta — trasformando la sessione di pratica in un gioco di gestione delle risorse. Questa scelta ha un valore didattico preciso: spingere lo studente a interrogarsi su quanto è sicuro della propria risposta prima di agire, attivando processi metacognitivi che favoriscono l'apprendimento a lungo termine.",
                    ENG: "Italian Verbs integrates some elements of gamification. The timer creates urgency and trains the speed of verbal form retrieval, bringing practice closer to the conditions of real communication. The points system introduces a reward loop that incentivises accuracy and consistency. The most original mechanic, however, is the paid hint: the student can choose to spend accumulated points to receive a hint — some letters of the correct answer — turning the practice session into a resource management game. This choice has a precise pedagogical value: it prompts the student to reflect on how confident they are before acting, activating metacognitive processes that support long-term learning."
                }
            },
            {
                id: 4,
                paragraphTitle: {
                    ITA: "Il risultato e i prossimi sviluppi",
                    ENG: "The outcome and next steps"
                },
                paragraphText: {
                    ITA: "Italian Verbs è uno strumento di pratica autonoma progettato per integrarsi facilmente in un percorso didattico di italiano L2, come attività di rinforzo a casa o come warm-up in classe. Nella sua versione attuale copre quattro tempi verbali fondamentali, con un database di verbi destinato a crescere. I prossimi sviluppi previsti riguardano l'ampliamento del database, la revisione del timer per trovare un equilibrio migliore tra sfida e accessibilità, e l'eventuale introduzione di livelli di difficoltà progressivi.",
                    ENG: "Italian Verbs is an autonomous practice tool designed to integrate easily into an Italian L2 learning path, as a reinforcement activity at home or as a warm-up in class. In its current version it covers four fundamental verb tenses, with a verb database set to expand. Planned next steps include enlarging the database, revising the timer to find a better balance between challenge and accessibility, and the possible introduction of progressive difficulty levels."
                }
            }
        ]
    },
*/
{
    id: 3,
    name: "Ciak!",
    description: {
        ITA: "Gioco da tavolo didattico per studenti adulti di italiano L2.",
        ENG: "Learning board game for adult Italian L2 learners."
    },
    link: "", // aggiungere link quando disponibile
    image: "/ciak2.png", 
    tags: [
        "game-based learning",
        "language learning",
        "instructional design"
    ],
    paragraphs: [
        {
            id: 1,
            paragraphTitle: {
                ITA: "La sfida",
                ENG: "The challenge"
            },
            paragraphText: {
                ITA: "Come si può creare un'attività che spinga studenti adulti di italiano L2 a comunicare spontaneamente, senza percepire la lingua come un esercizio? Da questa domanda nasce Ciak!, un serious game cooperativo ambientato sul set di un documentario. I giocatori interpretano una troupe cinematografica straniera arrivata in Italia per raccontarne la vita quotidiana. Per completare le riprese devono interagire in diversi luoghi della città (un bar, un museo, una fermata dell'autobus,...), collaborando con il resto della squadra per realizzare il documentario.",
                ENG: "How can we create an activity that encourages adult Italian L2 learners to communicate spontaneously, without perceiving the language as an exercise? This question sparkled the idea for Ciak!, a cooperative serious game taking place on the set of a documentary. Players take on the roles of a foreign film crew arriving in Italy to document the Italian lifestyle. To complete the filming, they must interact in various locations around the city (a bar, a museum, a bus stop,...), collaborating with the rest of the team to produce the documentary."
            }
        },
        {
            id: 2,
            paragraphTitle: {
                ITA: "Il concept",
                ENG: "The concept"
            },
            paragraphText: {
                ITA: "Ogni luogo del gioco propone una situazione comunicativa autentica, che richiede ai giocatori di parlare, negoziare e prendere decisioni in italiano. La partita culmina nella stesura di un diario di produzione, che trasforma tutte le interazioni svolte durante il gioco in un prodotto finale condiviso. Per progettare le meccaniche di gioco mi sono basata sull'Octalysis Framework di Yu-kai Chou e sui principi descritti in Play to Learn di Sharon Boller e Karl Kapp, cercando un equilibrio tra coinvolgimento ludico e obiettivi didattici.",
                ENG: "Every place in the game is connected to an authentic communicative situation, requiring players to talk, negotiate and make decisions in Italian. The game ends with the writing of a production diary, which transforms all the interactions happened within the match in a shared final product. To design the game mechanics, I relied on Yu-kai Chou's Octalysis Framework and the principles described in Play to Learn by Sharon Boller and Karl Kapp, seeking a balance between playful engagement and educational objectives."
            }
        },
        {
            id: 3,
            paragraphTitle: {
                ITA: "Le principali decisioni di design",
                ENG: "The main design decisions",
            },
            paragraphText: {}
        },
        {
            id: 4,
            paragraphTitle: {
                ITA: "Una narrazione che dia senso alle attività",
                ENG: "A narrative that gives meaning to the activities"
            },
            paragraphText: {
                ITA: "Ho scelto l'ambientazione cinematografica perché offre un obiettivo comune credibile e permette di collegare naturalmente situazioni comunicative molto diverse all'interno della stessa esperienza.",
                ENG: "I chose the cinematic setting because it offers a credible common goal and allows for natural connections between very different communicative situations within the same experience."
            }
        },
        {
            id: 5,
            paragraphTitle: {
                ITA: "Cooperazione invece di competizione",
                ENG: "Cooperation instead of competition"
            },
            paragraphText: {
                ITA: "La vittoria dipende dal contributo dell'intera troupe. Questa scelta riduce la pressione tipica della produzione orale in L2 e favorisce il supporto reciproco tra i partecipanti.",
                ENG: "Victory depends on the contribution of the entire troupe. This choice reduces the typical pressure of oral production in L2 and fosters mutual support among participants."
            }
        },
        {
            id: 6,
            paragraphTitle: {
                ITA: "Valutare la comunicazione, non la perfezione",
                ENG: "Evaluate communication, not perfection"
            },
            paragraphText: {
                ITA: "Fin dalle prime fasi di progettazione ho cercato di premiare la partecipazione e la capacità di comunicare, piuttosto che la correttezza grammaticale assoluta. L'obiettivo del gioco è creare occasioni di interazione autentica, non verificare la conoscenza delle regole.",
                ENG: "From the early stages of design, I aimed to reward participation and communication skills rather than absolute grammatical accuracy. The goal of the game is to create opportunities for authentic interaction, not to test knowledge of the rules."
            }
        },
        {
            id: 7,
            paragraphTitle: {
                ITA: "Il primo playtest",
                ENG: "The first playtest"
            },
            paragraphText: {
                ITA: "Il primo playtest mi ha permesso di osservare come i giocatori interagivano con il sistema di gioco e quali elementi risultavano poco chiari o poco fluidi. Più che confermare il progetto iniziale, il test ha evidenziato nuove opportunità di miglioramento, portandomi a ripensare alcune scelte di design.",
                ENG: "The first playtest allowed me to observe how players interacted with the game system and which elements were unclear or not fluid. Rather than confirming the initial project, the test highlighted new opportunities for improvement, leading me to reconsider some design choices."
            }
        },
        {
            id: 8,
            paragraphTitle: {
                ITA: "Iterazione dopo il playtest",
                ENG: "Iteration after the playtest"
            },
            paragraphText: {
                ITA: "Il playtest non ha portato solo a piccoli aggiustamenti, ma a una revisione significativa del sistema di gioco.",
                ENG: "The playtest led not only to small adjustments, but to a significant revision of the game system."
            }
        },
        {
            id: 9,
            paragraphTitle: {
                ITA: "Una struttura più semplice",
                ENG: "A simpler structure"
            },
            paragraphText: {
                ITA: "La prima versione era organizzata in tre livelli progressivi, ciascuno con obiettivi linguistici differenti. Durante il playtest ho osservato che questa struttura rendeva le partite troppo lunghe e aumentava la stanchezza dei giocatori. Per questo motivo ho eliminato la suddivisione in livelli, trasformando Ciak! in un'esperienza più compatta. La progressione linguistica non è scomparsa, ma è stata integrata in modo più naturale all'interno delle situazioni di gioco, riducendo il carico cognitivo e migliorando il ritmo della partita.",
                ENG: "The first version was organized into three progressive levels, each with different linguistic objectives. During the playtest, I observed that this structure made the matches too long and increased player fatigue. For this reason, I eliminated the level division, transforming Ciak! into a more compact experience. The linguistic progression has not disappeared, but has been integrated more naturally within the game situations, reducing cognitive load and improving the pace of the match."
            }
        },
        {
            id: 10,
            paragraphTitle: {
                ITA: "Un tabellone più dinamico",
                ENG: "A more dynamic game board"
            },
            paragraphText: {
                ITA: "Nella prima versione (vedi immagine sotto), ogni luogo era associato a una casella specifica del tabellone. Questo comportava una conseguenza inattesa: due giocatori consecutivi potevano ritrovarsi nello stesso luogo e affrontare la stessa situazione comunicativa. Per aumentare varietà e rigiocabilità, ho modificato il tabellone introducendo una casella Luogo: quando un giocatore vi arriva pesca casualmente una carta contenente il luogo e la relativa situazione comunicativa. In questo modo ogni partita genera combinazioni diverse e riduce la ripetitività.",
                ENG: "In the first version (see image below), each location was associated with a specific space on the game board. This led to an unexpected consequence: consecutive players could end up in the same location and face the same communicative situation. To increase variety and re-playability, I modified the game board by introducing a Location space: when a player lands there, they randomly draw a card containing the location and its corresponding communicative situation. In this way, each game generates different combinations and reduces repetitiveness."
            },
            paragraphImage: "/ciak2.png",
        },
        {
            id: 11, 
            paragraphTitle: {
                ITA: "Il vecchio tabellone:",
                ENG: "The old game board:"
            },
            paragraphText: {},
            paragraphImage: "/ciak.png"
        },
        {
            id: 12,
            paragraphTitle: {
                ITA: "Più attenzione alla grammatica",
                ENG: "More attention to grammar"
            },
            paragraphText: {
                ITA: "Benché l'obiettivo principale del gioco sia la comunicazione, ho pensato di arricchirlo con la pratica di alcuni tempi verbali, in quanto la coniugazione è uno degli ostacoli più comuni e importanti per gli studenti di italiano L2. Ho quindi introdotto la casella Scuola di Italiano, che richiede di pescare una carta con un mini-task grammaticale. La grammatica rimane, comunque, secondaria nella struttura del punteggio (vedi sotto).",
                ENG: "Although the main objective of the game is communication, I thought to enrich it with practice of some verb tenses, as conjugation is one of the most common and important obstacles for Italian L2 students. Therefore, I introduced the Italian School space, which requires drawing a card with a grammatical mini-task. Grammar remains, however, secondary in the scoring structure (see below)."
            }
        },
        {
            id: 13,
            paragraphTitle: {
                ITA: "Più spazio alla comunicazione non verbale",
                ENG: "More space for non-verbal communication"
            },
            paragraphText: {
                ITA: "Nella prima versione erano presenti le Carte Ricerca, dedicate a curiosità sulla cultura italiana. Dopo il playtest ho deciso di sostituirle con le Carte Fuori Copione, che invitano i giocatori a mimare brevi situazioni utilizzando alcuni gesti tipici della comunicazione italiana. Gli altri membri della troupe devono interpretare la scena e indovinarne il significato. Questa modifica ha permesso di valorizzare un aspetto fondamentale dell'interazione interculturale — la comunicazione non verbale — senza interrompere il ritmo della partita con attività di tipo nozionistico. Inoltre, introduce un'alternanza tra produzione orale e comunicazione gestuale che rende l'esperienza più varia e coinvolgente.",
                ENG: "In the first version, there were Research Cards dedicated to curiosities about Italian culture. After the playtest, I decided to replace them with Off-Script Cards, which invite players to mime brief situations using some typical gestures of Italian communication. The other members of the troupe must interpret the scene and guess its meaning. This modification allowed me to highlight a fundamental aspect of intercultural interaction — non-verbal communication — without disrupting the pace of the game with knowledge-based activities. Moreover, it introduces an alternation between oral production and gestural communication that makes the experience more varied and engaging."
            }
        },
        {
            id: 14,
            paragraphTitle: {
                ITA: "Un sistema di punteggio più intuitivo",
                ENG: "A more intuitive scoring system"
            },
            paragraphText: {
                ITA: "Anche il sistema di ricompense è stato ripensato. Nella prima versione i giocatori accumulavano followers, una meccanica coerente con la narrazione del documentario ma poco immediata durante la partita. Ho sostituito questo sistema con due ricompense più semplici e leggibili: i gettoni Ciak, ottenuti completando i task comunicativi, e le stelle, assegnate durante le attività Fuori Copione. Il nuovo sistema rende il punteggio più chiaro e permette ai giocatori di concentrarsi maggiormente sull'esperienza di gioco.",
                ENG: "The reward system has also been reconsidered. In the first version, players accumulated followers, a mechanic consistent with the documentary narrative but not very immediate during the game. I replaced this system with two simpler and more readable rewards: the Camera tokens, obtained by completing communication tasks, and the stars, assigned during the Off-Script activities. The new system makes the score clearer and allows players to focus more on the gaming experience."
            }
        },
        {
            id: 15,
            paragraphTitle: {
                ITA: "Cosa ho imparato",
                ENG: "What I learned"
            },
            paragraphText: {
                ITA: "Questo progetto mi ha insegnato che progettare un serious game significa trovare un equilibrio continuo tra obiettivi didattici ed esperienza di gioco. Il playtest mi ha mostrato che una soluzione progettualmente coerente non è necessariamente la più efficace durante una partita. In alcuni casi, semplificare la struttura, eliminare meccaniche superflue o ripensare il modo in cui vengono presentate le attività può migliorare contemporaneamente l'usabilità, il coinvolgimento e il valore didattico del gioco. Per questo considero il playtest una parte integrante della progettazione, non una semplice fase di verifica finale.",
                ENG: "This project taught me that designing a serious game means finding a continuous balance between educational objectives and gaming experience. The playtesting showed me that a conceptually coherent solution is not necessarily the most effective during gameplay. In some cases, simplifying the structure, removing unnecessary mechanics, or rethinking how activities are presented can simultaneously improve usability, engagement, and the educational value of the game. For this reason, I consider playtesting an integral part of the design process, not just a final verification phase."
            }
        },
        {
            id: 16,
            paragraphTitle: {
                ITA: "Stato attuale",
                ENG: "Current state"
            },
            paragraphText: {
                ITA: "Ciak! è attualmente in fase beta. Sto continuando a iterare il progetto attraverso nuovi playtest con studenti e insegnanti di italiano L2, con l'obiettivo di validare le modifiche introdotte e raccogliere dati più strutturati sull'esperienza di gioco e sull'efficacia didattica.",
                ENG: "Ciak! is currently in beta phase. I am continuing to iterate the project through new playtests with Italian L2 students and teachers, with the goal of validating the introduced changes and collecting more structured data on the gaming experience and educational effectiveness."
            }
        }

    ]
    },
    /*
{
    id: 4,
    name: "Destinazione Pronomi",
    description: {
        ITA: "Libro-gioco gamificato per lo studio dei pronomi personali in italiano L2.",
        ENG: "Gamified gamebook for learning Italian L2 personal pronouns."
    },
    link: "https://eduki.com/it/materiale/1696286/destinazione-pronomi",
    image: "/destinazionepronomi.jpg", 
    tags: [
        "gamification",
        "language learning",
        "instructional design"
    ],
    paragraphs: [
        {
            id: 1,
            paragraphTitle: {
                ITA: "Perché questo progetto?",
                ENG: "Why this project?"
            },
            paragraphText: {
                ITA: "I pronomi personali sono uno degli argomenti più ostici per chi studia italiano L2: le forme sono brevi, ma le regole d'uso (posizione, scelta tra diretto e indiretto, eccezioni) richiedono molta pratica e possono risultare aride se affrontate in modo puramente formale. <<Destinazione Pronomi>> nasce come e-tivity del Master in Instructional Design con l'obiettivo di trasformare questo argomento in un'esperienza coinvolgente, sfruttando le potenzialità narrative e visive di un formato editoriale piuttosto che digitale: il libro-gioco.",
                ENG: "Personal pronouns are one of the most challenging topics for Italian L2 learners: the forms themselves are short, but the rules governing their use (position, choice between direct and indirect, exceptions) require extensive practice and can feel dry when approached in a purely formal way. <<Destinazione Pronomi>> was created as an e-tivity for the Master's in Instructional Design, with the goal of turning this topic into an engaging experience by leveraging the narrative and visual potential of an editorial format, rather than a digital one: the gamebook."
            }
        },
        {
            id: 2,
            paragraphTitle: {
                ITA: "Il processo di progettazione",
                ENG: "The design process"
            },
            paragraphText: {
                ITA: "Il progetto è stato sviluppato interamente con Canva, in formato PDF illustrato. I contenuti sono organizzati in un percorso progressivo che affronta, uno alla volta, i pronomi personali soggetto, i pronomi riflessivi e i pronomi diretti e indiretti, includendo un focus dedicato a costruzioni verbali particolari come il verbo 'piacere'. Ogni sezione alterna spiegazione, esempi contestualizzati e momenti di verifica. Un elemento cardine della progettazione è il meccanismo di auto-valutazione: al termine di ogni sezione, lo studente affronta un quiz il cui punteggio determina il percorso successivo, indirizzandolo a procedere verso il capitolo successivo oppure a tornare a ripassare quello corrente. Questa struttura a bivi, per quanto realizzata in un PDF statico, introduce un primo livello di adattività e responsabilizza lo studente rispetto al proprio percorso di apprendimento.",
                ENG: "The project was developed entirely in Canva, as an illustrated PDF. The content is organised into a progressive path that addresses, one at a time, subject personal pronouns, reflexive pronouns, and direct and indirect object pronouns, including a dedicated focus on specific verb constructions such as 'piacere'. Each section alternates explanation, contextualised examples, and checkpoints. A key element of the design is the self-assessment mechanism: at the end of each section, the student takes a quiz whose score determines the next step, directing them either to move on to the following chapter or to go back and review the current one. This branching structure, although implemented within a static PDF, introduces a first level of adaptivity and makes the student an active agent in their own learning path."
            }
        },
        {
            id: 3,
            paragraphTitle: {
                ITA: "L'uso della gamification",
                ENG: "The use of gamification"
            },
            paragraphText: {
                ITA: "Il libro adotta un'ambientazione a tema piratesco: lo studente è guidato da Capitan Book, un personaggio che si rivolge a lui in prima persona, spiega le regole grammaticali con un tono complice e informale, e lo accompagna lungo una mappa del tesoro che si ricompone, pezzo dopo pezzo, ad ogni argomento completato. Ogni categoria di pronomi corrisponde a un luogo della mappa (la Baia dei Pronomi Personali Soggetto, la Cascata dei Pronomi Riflessivi, la Foresta dei Pronomi Oggetto,...) rendendo visibile e concreto l'avanzamento nello studio. Questa scelta narrativa e visiva ha una funzione precisa: trasformare un percorso grammaticale, spesso percepito come astratto e ripetitivo, in un'avventura con una direzione chiara, una guida amichevole e un obiettivo finale tangibile.",
                ENG: "The book adopts a pirate-themed setting: the student is guided by Captain Book, a character who speaks to them directly, explains grammar rules in a warm, informal tone, and accompanies them along a treasure map that is pieced together, chapter after chapter, as each topic is completed. Each category of pronouns corresponds to a location on the map (the Bay of Subject Personal Pronouns, the Waterfall of Reflexive Pronouns, the Forest of Object Pronouns,...) making progress through the material visible and tangible. This narrative and visual choice serves a precise purpose: turning a grammar-focused path, often perceived as abstract and repetitive, into an adventure with a clear direction, a friendly guide, and a tangible final goal."
            }
        },
        {
            id: 4,
            paragraphTitle: {
                ITA: "Il risultato",
                ENG: "The outcome"
            },
            paragraphText: {
                ITA: "Destinazione Pronomi è un materiale didattico autonomo, pensato per lo studio individuale ma utilizzabile anche come supporto in classe o come compito assegnato a casa. È disponibile su Eduki, piattaforma di condivisione di materiali didattici per insegnanti.",
                ENG: "Destinazione Pronomi is a standalone teaching resource, designed for independent study but also usable as classroom support or homework material. It is available on Eduki, a platform for sharing teaching materials among educators."
            }
        }
    ]
    },
{
    id: 5,
    name: "ConjugAction",
    description: {
        ITA: "Gioco di carte per la pratica della coniugazione verbale in italiano L2.",
        ENG: "Card game for practising Italian L2 verb conjugation."
    },
    link: "", // aggiungere link quando disponibile
    image: "/conjugaction.png", 
    tags: [
        "game-based learning",
        "language learning",
        "instructional design"
    ],
    paragraphs: [
        {
            id: 1,
            paragraphTitle: {
                ITA: "Perché questo progetto?",
                ENG: "Why this project?"
            },
            paragraphText: {
                ITA: "La coniugazione verbale è uno degli aspetti più tecnici dell'italiano L2: richiede memorizzazione, riconoscimento di pattern e, soprattutto, automatizzazione, con la capacità di recuperare la forma corretta in modo rapido e spontaneo. Gli esercizi tradizionali funzionano per la fase di acquisizione iniziale, ma diventano presto meccanici e poco motivanti. <<ConjugAction>> nasce dalla convinzione che un contesto di gioco possa creare le condizioni ideali per praticare la coniugazione in modo ripetuto senza che la ripetizione pesi.",
                ENG: "Verb conjugation is one of the most technical aspects of Italian L2: it requires memorisation, pattern recognition, and above all automatisation, with the ability to retrieve the correct form quickly and spontaneously. Traditional exercises work well during the initial acquisition phase, but they soon become mechanical and demotivating. <<ConjugAction>> was born from the conviction that a game context can create the ideal conditions for repeated conjugation practice without the repetition feeling like a burden."
            }
        },
        {
            id: 2,
            paragraphTitle: {
                ITA: "Il processo di progettazione",
                ENG: "The design process"
            },
            paragraphText: {
                ITA: "Il punto di partenza è stato un gioco conosciutissimo (Uno) e la domanda: come si può sfruttare una meccanica già familiare per creare un contesto di pratica linguistica? Le carte di ConjugAction riportano ciascuna un soggetto e un verbo all'infinito. I giocatori devono abbinare le carte in mano a quella sul tavolo secondo tre criteri possibili: stesso soggetto, stesso ausiliare (essere o avere, rilevante soprattutto per i tempi composti) o stessa classe verbale (verbi in -are, -ere, -ire o irregolari). Ogni volta che un giocatore posa una carta, deve coniugare il verbo nel tempo stabilito all'inizio della partita: se sbaglia, pesca una carta. Questo meccanismo trasforma ogni turno in un micro-task di produzione linguistica, integrato naturalmente nel flusso del gioco. Sono presenti anche carte speciali — salta un turno, +2, e la carta <<Sfida il compagno>>, che assegna a un altro giocatore un verbo irregolare da coniugare. L'obiettivo, come in Uno, è restare senza carte.",
                ENG: "The starting point was a universally known game (Uno) and the question: how can a familiar mechanic be used to create a meaningful language practice context? Each ConjugAction card displays a subject and a verb in the infinitive. Players must match the card in their hand to the one on the table according to three possible criteria: same subject, same auxiliary verb (essere or avere, particularly relevant for compound tenses), or same verb class (-are, -ere, -ire, or irregular). Each time a player places a card, they must conjugate the verb in the tense agreed upon at the start of the game: if they make a mistake, they draw a card. This mechanism turns every turn into a micro linguistic production task, naturally integrated into the flow of the game. Special cards are also included — skip a turn, +2, and the <<Challenge a classmate>> card, which assigns another player an irregular verb to conjugate. The goal, as in Uno, is to be left with no cards."
            }
        },
        {
            id: 3,
            paragraphTitle: {
                ITA: "Le scelte didattiche",
                ENG: "The pedagogical choices"
            },
            paragraphText: {
                ITA: "La scelta di offrire tre criteri di abbinamento diversi non è solo una questione di varietà: ogni criterio attiva un tipo diverso di elaborazione linguistica. Abbinare per soggetto spinge lo studente a concentrarsi sulla persona grammaticale; abbinare per ausiliare richiede di classificare i verbi in base alla loro struttura nei tempi composti; abbinare per classe verbale richiede di riconoscere i pattern morfologici. In questo senso, il gioco non si limita a far praticare la coniugazione: stimola contemporaneamente diverse categorie di conoscenza grammaticale. Il gioco è stato progettato principalmente per i tempi composti, dove il criterio dell'ausiliare è particolarmente significativo. Per i tempi semplici è utilizzabile rimuovendo o sostituendo questo criterio, aprendo a possibili adattamenti futuri.",
                ENG: "The choice to offer three different matching criteria is not simply a matter of variety: each criterion activates a different type of linguistic processing. Matching by subject pushes the student to focus on grammatical person; matching by auxiliary requires classifying verbs according to their structure in compound tenses; matching by verb class requires recognising morphological patterns. In this sense, the game does more than practise conjugation: it simultaneously stimulates different categories of grammatical knowledge. The game was designed primarily for compound tenses, where the auxiliary criterion is particularly meaningful. For simple tenses it can be used by removing or substituting this criterion, opening the door to future adaptations."
            }
        },
        {
            id: 4,
            paragraphTitle: {
                ITA: "Il playtest e i prossimi sviluppi",
                ENG: "Playtesting and next steps"
            },
            paragraphText: {
                ITA: "Il gioco è stato testato in una sessione con due studenti, con esito positivo. Le meccaniche principali hanno funzionato senza problemi. La carta <<Sfida il compagno>> ha richiesto un piccolo aggiustamento in corso di partita: la sequenza di turni successiva alla sfida non era sufficientemente chiara nelle istruzioni. Il problema è stato subito risolto con una correzione sulla sequenza dei turni. I prossimi passi prevedono lo sviluppo di un'identità grafica, la stesura di un regolamento definitivo e l'ampliamento del mazzo con nuove carte e possibili varianti per i tempi verbali semplici.",
                ENG: "The game was tested in a session with two students, with positive results. The main mechanics worked without issues. The <<Challenge a classmate>> card required a small in-game adjustment: the sequence of turns following the challenge was not sufficiently clear in the instructions. The problem was immediately resolved with a correction to the turn sequence. Next steps include developing a graphic identity, drafting a final rulebook, and expanding the deck with new cards and possible variants for simple verb tenses."
            }
        }
    ]
}
    */
]   