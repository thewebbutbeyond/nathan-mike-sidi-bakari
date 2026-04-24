import { ENTRIES, LENSES, NOTES, type Entry, type Lens, type Note } from "@/content/data";

export type Locale = "en" | "fr";

type EntryCopy = Partial<
  Pick<Entry, "title" | "type" | "summary" | "body" | "tags" | "role" | "outcome">
>;
type NoteCopy = Partial<Pick<Note, "title" | "summary" | "body" | "tags" | "coverAlt">>;

const FR_LENSES: Record<Lens, { label: string; description: string }> = {
  engineer: {
    label: "ingénierie",
    description: "Ce que j'ai conçu, construit, réparé ou rendu plus fiable.",
  },
  entrepreneur: {
    label: "entrepreneuriat",
    description: "Entreprises, produits, opérations, erreurs et notes de terrain.",
  },
  investor: {
    label: "investissement",
    description: "Thèses, gains, pertes et ce qu'ils m'ont appris.",
  },
  artist: {
    label: "art",
    description: "Musique, dessins, peintures, poèmes et autres formes.",
  },
};

const FR_ENTRY_COPY: Record<string, EntryCopy> = {
  "cyberphysical-robocup-soccer-teams": {
    title: "Equipes RoboCup cyberphysiques",
    type: "simulation robotique",
    summary:
      "Système de benchmarking RoboCup que j'ai construit en simulation 2D et 3D, avec comparaison de stratégies, sweeps OFAT de paramètres, analyse par rôle, documentation Doxygen et preuves de gestion de projet.",
    body: `Ce projet a traité le football RoboCup comme un benchmark d'ingénierie, pas comme une simple démonstration visuelle. L'équipe s'est appuyée sur des stacks RoboCup 2D et 3D existants, puis a utilisé des matchs répétés pour comparer des stratégies complètes et isoler les paramètres responsables des changements de comportement.

Le coeur technique était le pipeline de benchmarking. Les runs par stratégie comparaient BASIC, NOISE, DEFLOCK, HIPRESS, DIRECT et AGGRO. Les sweeps de paramètres variaient ensuite la portée de tir, le seuil de pressing et la formation autour de la baseline, afin d'interpréter les résultats des attaquants, défenseurs et gardiens par mécanisme plutôt que par simple nom de stratégie.

Le résultat utile n'était pas seulement qu'AGGRO était le meilleur bundle testé. Le résultat le plus fort était explicatif : augmenter la portée de tir améliorait la production offensive, un pressing plus fort augmentait récupérations et interceptions tout en réduisant la stabilité défensive, et la formation changeait l'exposition aux tirs subie par le gardien. Le simulateur 2D séparait mieux les stratégies ; le simulateur 3D comprimait les résultats parce que la dynamique incarnée rendait les buts plus rares et plus bruités.

Mon rôle était à la fois technique et organisationnel. J'ai construit le pipeline de benchmarking 2D, puis un chemin de benchmarking 3D indépendant quand le projet avait besoin d'avancer plus vite, et j'ai étendu les deux environnements avec la couche d'expériences paramétriques. J'ai aussi proposé l'approche initiale par comparaison de stratégies et traduit le feedback de la design review en méthode OFAT d'isolation des paramètres, qui est devenue l'argument technique le plus solide.

En plus de ce travail d'implémentation, j'ai assuré la coordination, intégré la narration finale des preuves, cadré honnêtement la frontière Stage 1, et préparé la surface logicielle publique avec README, notes de benchmark, documentation API Doxygen et déploiement GitHub Actions.`,
    tags: [
      "robotique",
      "robocup",
      "simulation",
      "benchmarking",
      "multi-agent",
      "doxygen",
      "gestion-projet",
    ],
    role: "Lead technique et team lead : construction du pipeline de benchmarking 2D, construction d'un chemin de benchmark 3D indépendant, ajout de la couche OFAT sur les deux environnements, cadrage de la méthodologie stratégie-vers-paramètres, coordination de l'équipe, intégration du rapport et préparation du dépôt public/Doxygen.",
    outcome:
      "Livraison d'un package Stage 1 de simulation et d'analyse : workflows RoboCup 2D/3D, benchmarking par stratégie et OFAT, interprétation par rôle, preuves de gestion de projet et documentation API publiée.",
  },
  "argus-real-time-safety-supervisor": {
    title: "A.R.G.U.S.",
    type: "systèmes embarqués",
    summary:
      "Superviseur de sécurité temps réel, validé sur banc, pour un bras robotique : caméra, machine d'état guardian, interlock et contrôle servo sur Raspberry Pi 5.",
    body: `A.R.G.U.S. a commencé comme un brief de systèmes embarqués temps réel et est devenu une chaîne matérielle/logicielle complète de sécurité pour un petit bras robotique. Le système observe un flux caméra en direct, détecte l'exposition d'une couche couleur dangereuse, et fait passer chaque commande de mouvement par une logique guardian et interlock avant qu'elle atteigne le bras.

Le choix de conception important était de rendre l'arrêt explicite. Les images dangereuses passent par GuardianStateMachine et RobotInterlock avant que MotionController pilote le MeArm via une carte servo PCA9685. Sur le banc, le flux validé était : détecter le danger, arrêter la routine, se rétracter vers une pose plus sûre, figer, puis attendre un acquittement opérateur avant de reprendre.

Ma contribution portait sur le mouvement et l'orchestration : AppController, MotionController, le chemin de sortie PCA9685, les modes d'exécution, les contrôles CLI et le câblage matériel. Le travail a forcé la frontière logicielle à suivre le système physique : timing caméra, latence servo, entrée opérateur et contrat de machine d'état devaient rester cohérents en conditions live.

Le banc final tournait sur Raspberry Pi 5 avec caméra Pi, PCA9685, MeArm à quatre servos et bouton GPIO physique d'acquittement. Les métriques rapportées par le projet incluaient un traitement image sous la milliseconde, une détection dangereuse en 4 ms, une émission de freeze en 458 ms et un arrêt contrôlé dans la cible du projet.`,
    tags: ["c++", "raspberry-pi", "opencv", "embarqué", "robotique", "sécurité", "temps-réel"],
    role: "Responsable d'AppController et MotionController : sortie servo PCA9685, modes d'exécution, contrôles CLI, câblage matériel et intégration des commandes de mouvement avec le flux guardian/interlock.",
    outcome:
      "Validation d'une démo live sur Raspberry Pi 5 où une entrée caméra dangereuse déclenche l'arrêt de routine, la rétraction de sécurité, le maintien en freeze et une reprise contrôlée par acquittement opérateur.",
  },
  "mobile-robot-hybrid-controller": {
    title: "Contrôleur hybride de robot mobile",
    type: "rapport de contrôle",
    summary:
      "Contrôleur MATLAB de navigation pour robot mobile combinant suivi de points, évitement d'obstacles par ANN et récupération wall-follow, archivé avec son état qualitatif actuel et une analyse quantitative en travaux futurs.",
    body: `Ce travail de contrôleur de robot mobile vient du devoir ENG5009 Advanced Control. Le simulateur MATLAB fourni contenait le modèle du robot, la génération des murs, le modèle de capteurs et la boucle de tracé. Mon travail consistait à construire et régler la logique de contrôle capable d'abord d'atteindre un point cible, puis de parcourir une série de checkpoints en évitant les obstacles.

Le contrôleur final est volontairement petit. Un suivi de point rotate-then-drive donne la direction du but, une couche ANN à seuil réagit aux lectures d'obstacles asymétriques, et un mode de récupération wall-follow de style Bug prend le relais quand l'ANN cale près des murs frontaux ou dans une symétrie locale. L'arbitrage est explicite : arrêt, puis wall-follow, puis évitement ANN, puis suivi de point.

Le rapport est l'artefact que je veux garder. Il est proche d'un niveau publiable par sa structure, son positionnement dans la littérature, ses figures et sa justification de conception, mais il reste honnête sur son caractère surtout qualitatif. Les paramètres ont été choisis par observation en simulation plutôt que par optimisation formelle, et le chemin final est faisable plutôt qu'optimal.

Les travaux futurs sont donc clairs : ajouter des dérivations formelles plus fortes pour le contrôleur et transformer la comparaison qualitative en analyse quantitative. Des métriques utiles seraient le temps de complétion des checkpoints, la longueur de chemin, la marge de collision, le nombre de récupérations, l'erreur de cap et la sensibilité aux variantes de carte ou de seuil.`,
    tags: [
      "matlab",
      "contrôle",
      "robotique",
      "robots-mobiles",
      "évitement-obstacles",
      "simulation",
      "rapport",
    ],
    role: "Conception, implémentation et réglage du contrôleur MATLAB ; comparaison des variantes suivi de point, évitement ANN, récupération fixe et wall-follow ; rédaction du rapport.",
    outcome:
      "Production d'un rapport presque publiable et de preuves de simulation montrant que le contrôleur hybride préserve la progression dans le champ d'obstacles fourni. Les travaux futurs portent sur des dérivations formelles plus fortes et une analyse quantitative.",
  },
  "ledger-engine-v2": {
    title: "Ledger Engine v2",
    type: "système",
    summary:
      "Noyau de comptabilité en partie double, réécrit autour d'un journal d'événements append-only et de réducteurs déterministes.",
    body: `La première version dérivait sous charge. Les requêtes de réconciliation grandissaient avec le nombre de comptes, et chaque correction historique demandait des migrations manuelles. v2 traite chaque écriture comme un événement immuable et calcule les soldes comme un pli sur un flux stable et ordonné.

Le gain principal n'est pas la performance, même si elle s'est améliorée. Le gain, c'est que l'audit devient simple : chaque état, à chaque instant, est une fonction pure du journal jusqu'à ce point. Les corrections sont de nouveaux événements, jamais des modifications. Le système est devenu assez fiable pour être laissé tranquille.

Construit en Rust, avec une couche Postgres LISTEN/NOTIFY pour les consommateurs en aval. Environ 14 000 lignes, ~91 % de couverture ligne. Six semaines en shadow mode avant bascule.`,
    tags: ["rust", "postgres", "comptabilité", "event-sourcing"],
    role: "Conception du modèle de réducteurs, écriture du noyau, supervision de la migration.",
    outcome: "Clôture mensuelle réduite de 4 jours à 6 heures. Zéro rollback depuis le lancement.",
  },
  "operator-letter-q3-2024": {
    title: "Lettre opérateur, T3 2024",
    type: "lettre",
    summary:
      "Lettre trimestrielle à l'équipe sur le mix de revenus, l'arrêt du segment consumer et la manière d'embaucher sous contrainte.",
    body: `Trois choses ce trimestre. D'abord, la concentration des revenus a franchi un seuil qui ne me convient plus : les trois premiers clients représentent 61 %. Nous ne changeons pas de stratégie pour autant ; nous changeons de cadence. L'outbound reprend en novembre.

Ensuite, le segment consumer. Il a servi de canal de découverte et nous avons appris ce que nous devions apprendre. Il ne justifie plus l'attention qu'il coûte. Nous l'arrêtons par étapes au T4 et remboursons quand c'est approprié.

Enfin, le recrutement. Nous avançons toujours plus lentement que ce que le marché attend d'une entreprise à notre stade. C'est un choix. Chaque embauche rend l'équipe plus simple ou plus difficile à coordonner, et je préfère une année plus lente à une année plus bruyante.`,
    tags: ["opérations", "écriture", "lettres"],
    role: "Auteur.",
  },
  "thesis-vertical-llms": {
    title: "Thèse d'investissement : outillage LLM vertical",
    type: "mémo",
    summary:
      "Note de position sur pourquoi les prochains produits LLM utiles seront étroits, opinionated, et proches d'outils internes au départ.",
    body: `Les copilotes horizontaux sont devenus nécessaires et peu rentables. La surface intéressante se trouve dans des workflows étroits (gestion de sinistres, revue de contrats, réconciliation freight) où le modèle n'est qu'une partie d'un système qui possède déjà données, utilisateurs et relation commerciale.

Trois motifs que j'accepte d'underwriter : (a) des produits façonnés par le workflow qui ressemblent d'abord à des outils internes puis deviennent des plateformes ; (b) l'arbitrage du coût d'inférence comme moat temporaire, à convertir en données propriétaires sous 18 mois ; (c) des verticales régulées où la dette d'intégration est le moat, pas le modèle.

Je n'underwrite pas : wrappers de foundation models sans flywheel de données, ni decks "AI for X" qui ressemblent à un deck SaaS de 2014 avec un nom remplacé.`,
    tags: ["llm", "thèse", "saas", "vertical"],
  },
  "close-the-books": {
    title: "Clore les dossiers",
    type: "essai",
    summary:
      "Sur la discipline de finir, et pourquoi je traite la fin d'un projet comme un travail séparé.",
    body: `La plupart de ce que j'ai abandonné n'a pas été abandonné au début. C'était quelque part entre 80 % et 95 %, dans la partie du travail qui n'a plus d'élan et pas encore de public. Le travail de clôture.

Clore est une compétence à part entière. C'est écrire le README qui rend la chose transmissible, supprimer les trois branches qui ne seront jamais mergées, régler les petites dettes que l'on connaît en privé, et dire clairement, par écrit, ce que la chose a fait et n'a pas fait. C'est l'acte le plus sous-estimé d'une vie de travail.

Je planifie maintenant la clôture comme je planifie le départ. Une chose finie, même petite, compose. Une chose presque finie se dégrade.`,
    tags: ["pratique", "écriture", "processus"],
  },
  "graphite-studies": {
    title: "Études au graphite, 2023-2024",
    type: "série de dessins",
    summary:
      "Quarante petits dessins au graphite réalisés sur quatorze mois. Surtout des mains, surtout le soir.",
    body: `Une pratique privée devenue série presque par accident. J'ai commencé à dessiner des mains le soir parce que je voulais une activité quotidienne sans livrable. Après un an, il y en avait quarante.

Ils ne sont pas techniquement ambitieux. Le point, c'était le rythme. Je les ai scannés fin 2024, et une petite sélection vit ici.`,
    tags: ["dessin", "graphite", "pratique", "mains"],
  },
  "first-company-postmortem": {
    title: "Postmortem : première entreprise, 2017-2020",
    type: "postmortem",
    summary:
      "Ce que j'ai bien fait, ce que j'ai mal compris, et ce que je ne crois plus sur la construction d'une première entreprise.",
    body: `Nous avons vendu en 2020 pour moins que le dernier tour et plus que ce que les fondateurs avaient raison d'espérer. Les deux peuvent être vrais. Trois ans plus tard, voilà ce que je pense qu'il s'est passé.

Juste : recruter lentement la première année, choisir un marché difficile, refuser de lever une Series A sur une croissance que je ne pensais pas durable. Faux : croire que le produit porterait le fondateur, construire trop avant de facturer, confondre amour client et volonté de payer. Je ne crois plus que la ténacité du fondateur soit un bon prédicteur. La distribution l'est.`,
    tags: ["postmortem", "première-entreprise", "leçons"],
  },
  "memo-fintech-infra-2023": {
    title: "Mémo : infrastructure fintech, fin 2023",
    type: "mémo",
    summary:
      "Position prise sur l'orchestration des paiements à un moment où la catégorie semblait saturée, alors qu'elle ne l'était pas.",
    body: `Le pitch que j'entendais en 2023 disait que l'orchestration était une fonctionnalité, pas une catégorie. C'était faux, et le biais derrière (les entreprises d'infra devraient être "thin") a tenu de bons investisseurs loin d'une vague qu'ils auraient dû voir.

J'ai écrit un petit chèque dans une équipe de cet espace en novembre 2023. La thèse était simple : chaque moyen de paiement supplémentaire transforme une intégration ponctuelle en coût opérationnel récurrent, et quelqu'un va absorber ce coût professionnellement.`,
    tags: ["fintech", "paiements", "mémo"],
  },
  "tiny-pcb-clock": {
    title: "Petite horloge PCB",
    type: "hardware",
    summary:
      "Une horloge de bureau 35x35mm autour d'un ATtiny et d'un afficheur 7 segments. Un projet de week-end qui a duré quatre mois.",
    body: `Commencé comme projet de week-end, terminé comme étude du scope creep. La première version fonctionnait en deux jours. Les seize week-ends suivants sont partis dans le boîtier, le firmware basse consommation, et une petite série de dix envoyée à des amis.

Je ne recommande pas de concevoir son propre PCB pour économiser de l'argent. Je recommande de le faire une fois.`,
    tags: ["hardware", "pcb", "projet-parallèle"],
  },
  "generative-prints-001": {
    title: "Tirages génératifs, série 001",
    type: "série d'impressions",
    summary:
      "Douze impressions risograph générées depuis un petit programme Rust et imprimées en deux couleurs.",
    body: `Le programme fait vingt pages de Rust et produit des sorties déterministes à partir d'une seed. J'ai généré environ trois cents candidats, sélectionné douze images, puis les ai imprimées sur une RISO empruntée en deux couleurs.

La partie intéressante était la sélection : rester avec les sorties pendant deux week-ends et voir lesquelles revenaient. Le travail génératif rend l'étape curatoriale visible d'une manière que le dessin ne rend pas toujours.`,
    tags: ["génératif", "riso", "rust", "impression"],
  },
  "infra-bill-audit-2024": {
    title: "Audit de facture infra, mi-2024",
    type: "note d'opération",
    summary:
      "Audit ligne par ligne de notre facture cloud, qui a récupéré 38 % sans changement d'architecture.",
    body: `La plupart des économies venaient de trois endroits : environnements non-prod inactifs, tier Postgres managé surdimensionné pour un pic qui n'est jamais revenu, et egress vers un fournisseur dont nous avions déjà migré.

À faire chaque année. Moins cher qu'une réarchitecture, et très instructif sur le comportement réel du système.`,
    tags: ["opérations", "cloud", "coût"],
  },
  "reading-list-2024": {
    title: "Liste de lecture, 2024",
    type: "liste",
    summary:
      "Quarante et un livres terminés en 2024, avec les sept que je recommanderais vraiment.",
    body: `Les sept : *Seeing Like a State* (Scott), *The Idea of the Brain* (Cobb), *A Pattern Language* (Alexander et al.), *The Power Broker* (Caro, enfin), *Working in Public* (Eghbal), *The Goal* (Goldratt), *Piranesi* (Clarke).

Abandonnés ou sautés : beaucoup. Le temps passé à abandonner un livre est du temps passé à honorer le temps.`,
    tags: ["lecture", "liste", "annuel"],
  },
  "early-employee-handbook": {
    title: "Manuel early employee (brouillon)",
    type: "manuel",
    summary:
      "Court guide pour les dix premières personnes d'une entreprise, écrit pour elles, pas pour le fondateur.",
    body: `La plupart des conseils "first ten" sont écrits pour les fondateurs. Celui-ci est pour les personnes qu'ils recrutent : quoi demander pendant l'offre, comment lire des termes d'equity sans payer un avocat, comment savoir quand partir.

Environ 9 000 mots pour l'instant. J'y ajoute quelque chose tous les quelques mois quand une situation me fait souhaiter que quelqu'un l'ait écrit.`,
    tags: ["recrutement", "écriture", "manuel"],
  },
};

const FR_NOTE_COPY: Record<string, NoteCopy> = {
  "on-archives-not-portfolios": {
    title: "Sur les archives, pas les portfolios",
    summary: "Pourquoi j'ai arrêté de maintenir un portfolio et commencé à garder une trace.",
    tags: ["méta", "écriture", "archive"],
    coverAlt: "Deux boîtes d'archive claires sur une étagère doucement éclairée.",
    body: `Un portfolio est un document de vente. Il sélectionne, polit, présente, et le critère de sélection est presque toujours : "ceci impressionnera quelqu'un." Ce critère déforme discrètement ce que l'on fabrique. Sur assez d'années, on commence à choisir des projets pour le portfolio qu'on écrira plus tard, et le travail se rétrécit.

Une archive est différente. Le critère d'inclusion est simplement : est-ce arrivé, et est-ce que cela vaut la peine d'en garder une trace ? Les échecs restent. Les travaux à moitié finis restent. Les lettres restent. La forme du registre est celle de la vie de travail, pas celle du pitch.

J'ai fait ce changement il y a environ un an. Le premier mois, l'absence de polish se sentait : envie d'ajouter un badge "featured", de recadrer une capture, d'écrire dans une voix marketing. J'ai attendu que ça passe. Ce qui reste est quelque chose que je peux assumer dans dix ans, parce que cela ne demande rien au visiteur.

Le coût est réel. Une archive ne convertit pas. Elle ne génère pas de leads, ne construit pas une personal brand, ne performe pas sur les plateformes faites pour la performance. Elle s'accumule lentement, et reste lisible surtout pour les personnes qui ont déjà une raison de regarder. C'est tout le point.`,
  },
  "the-cost-of-context": {
    title: "Le coût du contexte",
    summary:
      "Notes sur pourquoi garder plusieurs domaines en tête coûte cher, et pourquoi cela vaut quand même la peine.",
    tags: ["pratique", "ingénierie", "investissement"],
    coverAlt: "Un carnet ouvert, posé avec des feuilles ocre et ivoire.",
    body: `Travailler entre ingénierie, opérations, investissement et une pratique artistique discrète n'est pas une stratégie. C'est une description de la manière dont mon attention se comporte quand on la laisse tranquille. Je ne le défends pas. Je note le coût.

Le coût, c'est le contexte. Chaque domaine a son vocabulaire, son rythme, sa définition d'une bonne journée. Les journées d'ingénierie sont longues et ininterrompues ; les journées d'investissement sont courtes et conversationnelles ; les journées d'opération sont réactives ; les journées de dessin sont petites et souvent le soir. Les taxes de changement sont réelles et pas symétriques. Une bonne session d'ingénierie détruite par un call investisseur coûte plus cher que l'inverse.

Ce qui rend la chose supportable, c'est que les domaines ne sont pas séparés. Le goût d'ingénierie apparaît dans la lecture d'un mémo. Les réflexes d'opération apparaissent dans le dessin. La pratique du dessin apparaît, surtout, dans la patience nécessaire pour rester avec un système avant de le changer. Rien de tout cela n'est une compétence transférable au sens LinkedIn. C'est un sédiment.

Je ne le recommande pas. Je l'écris pour que, les années où les taxes semblent les plus lourdes, je garde la trace d'avoir choisi cela.`,
  },
  "what-investing-taught-me-about-product": {
    title: "Ce que l'investissement m'a appris sur le produit",
    summary:
      "Trois habitudes prises en analysant les entreprises des autres, qui ont changé ma manière de construire les miennes.",
    tags: ["investissement", "produit", "leçons"],
    coverAlt: "Une tasse de café à côté d'un carnet en cuir et d'un stylo sur du lin chaud.",
    body: `Un. Lire la cap table avant le pitch. Pas parce qu'elle prédit l'issue, mais parce qu'elle dit ce que le fondateur a déjà décidé à propos de la distribution de valeur, et c'est souvent plus porteur que le deck. Équivalent produit : lire le schéma avant la spec.

Deux. Time-boxer la diligence. Ce qu'une quatrième réunion révèle n'est presque jamais, dans mon expérience, ce qui compte vraiment. La décision était souvent disponible après la deuxième réunion ; le reste cherche du confort. Je l'applique maintenant aux revues produit : si je ne peux pas dire pourquoi je planifie une troisième revue, je devrais décider.

Trois. Underwriter une histoire que l'on défendrait dans cinq ans, pas cinq mois. Les investissements dont je suis le plus fier étaient démodés à l'entrée. Les fonctionnalités dont je suis le plus fier aussi.`,
  },
  "drawing-as-rest": {
    title: "Dessiner comme repos",
    summary: "Une pratique du soir qui n'est ni productive, ni thérapeutique, ni pour quelqu'un.",
    tags: ["pratique", "dessin", "repos"],
    coverAlt: "Un crayon posé sur du papier crème sous une lampe douce du soir.",
    body: `Je dessine la plupart des soirs entre quinze minutes et une heure. Ce n'est pas productif ; rien ne sort de la pièce. Ce n'est pas thérapeutique ; je ne me sens pas traité ensuite. Ce n'est pas pour quelqu'un, parce que je ne montre presque rien. C'est plus proche de marcher.

Ce que j'en retire, c'est l'absence de métriques. Pas de compte, pas de streak, pas d'audience, pas de courbe d'amélioration que je surveille. Je m'assois avec un crayon et un petit morceau de papier pendant un moment, puis j'arrête. Le lendemain je recommence, ou non. Les deux vont bien.

Un ami m'a demandé un jour à quoi servait cette pratique. La réponse honnête est peut-être que c'est la partie de ma semaine qui ne sert à rien. Tout le reste sert à quelque chose. Les dessins sont la soupape.`,
  },
};

export function localizeEntry(entry: Entry, locale: Locale): Entry {
  if (locale === "en") return entry;
  return { ...entry, ...FR_ENTRY_COPY[entry.slug] };
}

export function localizeNote(note: Note, locale: Locale): Note {
  if (locale === "en") return note;
  return { ...note, ...FR_NOTE_COPY[note.slug] };
}

export function entries(locale: Locale): Entry[] {
  return ENTRIES.map((entry) => localizeEntry(entry, locale));
}

export function notes(locale: Locale): Note[] {
  return NOTES.map((note) => localizeNote(note, locale));
}

export function sortedLocalizedEntries(locale: Locale): Entry[] {
  return entries(locale).sort((a, b) => b.date.localeCompare(a.date));
}

export function sortedLocalizedNotes(locale: Locale): Note[] {
  return notes(locale).sort((a, b) => b.date.localeCompare(a.date));
}

export function localizedTags(locale: Locale): string[] {
  return Array.from(
    new Set([
      ...entries(locale).flatMap((entry) => entry.tags),
      ...notes(locale).flatMap((note) => note.tags),
    ]),
  ).sort();
}

export function getLocalizedEntry(slug: string, locale: Locale): Entry | undefined {
  const entry = ENTRIES.find((item) => item.slug === slug);
  return entry ? localizeEntry(entry, locale) : undefined;
}

export function getLocalizedNote(slug: string, locale: Locale): Note | undefined {
  const note = NOTES.find((item) => item.slug === slug);
  return note ? localizeNote(note, locale) : undefined;
}

export function localizedLenses(locale: Locale) {
  if (locale === "en") return LENSES;
  return LENSES.map((lens) => ({
    ...lens,
    label: FR_LENSES[lens.slug].label,
    description: FR_LENSES[lens.slug].description,
  }));
}

export function localizedLensLabel(slug: Lens, locale: Locale): string {
  if (locale === "fr") return FR_LENSES[slug]?.label ?? slug;
  return LENSES.find((lens) => lens.slug === slug)?.label ?? slug;
}

export function localizedLensLabels(slugs: Lens[], locale: Locale): string[] {
  return slugs.map((slug) => localizedLensLabel(slug, locale));
}

export function localizedStatusLabel(status: Entry["status"], locale: Locale): string {
  if (locale === "en") return status;
  const labels: Record<Entry["status"], string> = {
    active: "actif",
    archived: "archivé",
    "in-progress": "en cours",
    historical: "historique",
    draft: "brouillon",
  };
  return labels[status];
}

export function entriesByLocalizedLens(slug: Lens, locale: Locale): Entry[] {
  return entries(locale)
    .filter((entry) => entry.lenses.includes(slug))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function formatLocalizedDate(
  iso: string,
  locale: Locale,
  opts?: {
    long?: boolean;
  },
) {
  if (!opts?.long) return iso.slice(0, 10);
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString(locale === "fr" ? "fr-FR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function localizedPath(locale: Locale, path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === "en") {
    if (normalized === "/fr") return "/";
    if (normalized.startsWith("/fr/")) return normalized.slice(3) || "/";
    return normalized;
  }
  if (normalized === "/") return "/fr";
  if (normalized === "/fr" || normalized.startsWith("/fr/")) return normalized;
  return `/fr${normalized}`;
}
