import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { CardDrawOddsUI } from '../ui';

export const content: ToolLocaleContent<CardDrawOddsUI> = {
  slug: 'calculateur-probabilite-piocher-cartes',
  title: 'Calculateur de chances de pioche',
  description: 'Calculez avec la loi hypergéométrique la probabilité de piocher au moins un exemplaire d\'une carte avant un tour donné.',
  ui: {
    configureLabel: 'Définissez les règles du paquet', configureHint: 'Modifiez le paquet, la main, les pioches et le mulligan. Les résultats changent instantanément.',
    presetLabel: 'Point de départ', presetCustom: 'Règles personnalisées', presetStandard: 'Paquet de 60 · 4 exemplaires', presetLimited: 'Paquet de 40 · 4 exemplaires', presetSingleton: 'Paquet de 100 · 1 exemplaire',
    deckSizeLabel: 'Taille du paquet', targetCopiesLabel: 'Exemplaires de la carte', openingHandLabel: 'Main de départ', drawsPerTurnLabel: 'Pioches par tour', throughTurnLabel: "Afficher jusqu'au tour",
    mulliganLabel: 'Modèle de mulligan', mulliganNone: 'Sans mulligan', mulliganFullRedraw: 'Remplacer après un échec', visualLabel: 'Votre parcours de pioche', visualHint: 'L\'éventail s\'ouvre au fil des cartes ajoutées à l\'échantillon.',
    openingHandStage: 'Main de départ', turnLabel: 'Tour', cardsSeenLabel: 'Cartes vues', finalChanceLabel: 'Chance au dernier tour', expectedCopiesLabel: 'Exemplaires attendus jusque-là', probabilityByTurnLabel: 'Probabilité par tour', explanationLabel: 'Au moins un exemplaire',
    noMulliganNote: 'Sans mulligan, le modèle compte un seul échantillon du paquet mélangé.', fullRedrawNote: 'Remplacement après un échec, si la main de départ ne contient aucun exemplaire, elle est remplacée une fois.', invalidInput: 'Vérifiez les règles du paquet pour continuer.', invalidDeck: 'Choisissez une taille de paquet valide.', invalidCopies: 'Le nombre d\'exemplaires doit être compris entre zéro et la taille du paquet.', invalidHand: 'La main de départ ne peut pas dépasser le paquet.', invalidDraws: 'Les pioches par tour doivent être positives ou nulles.', invalidTurns: 'Choisissez un tour entre zéro et 60.', cardsLabel: 'cartes', copyLabel: 'exemplaires',
  },
  seo: [
    { type: 'title', level: 2, text: 'Calculez les chances de pioche de votre paquet' },
    { type: 'paragraph', html: 'Ce calculateur répond à une question concrète de construction de paquet, quelle est la probabilité de voir au moins un exemplaire d\'une carte avant un tour donné ? Saisissez la taille du paquet, les exemplaires, la main de départ, les pioches et la règle de mulligan.' },
    { type: 'paragraph', html: "La loi hypergéométrique convient aux cartes piochées sans remise. Elle s'applique aux jeux de cartes à collectionner, aux jeux de société, aux formats limité et aux autres ensembles finis." },
    { type: 'title', level: 2, text: 'Lire la chronologie de pioche' },
    { type: 'list', items: ['La main de départ est le premier échantillon du paquet mélangé.', 'Chaque tour ajoute le nombre de cartes indiqué.', 'Le pourcentage correspond à au moins un exemplaire, et non exactement un.', 'Les exemplaires attendus sont une moyenne distincte de la probabilité de toucher la carte.'] },
    { type: 'title', level: 2, text: 'Les hypothèses de mulligan sont réglables' },
    { type: 'paragraph', html: 'Le remplacement simule une règle simple, gardez une main qui contient la carte cible ; sinon, remplacez toute la main une fois et poursuivez avec cette nouvelle trajectoire. Les mulligans partiels, le regard, les tuteurs et les choix de jeu ne sont pas modélisés.' },
    { type: 'tip', title: 'Reproduisez les règles de votre jeu', html: "Si votre jeu utilise une autre main de départ, une pioche supplémentaire ou une autre procédure de mulligan, modifiez les champs. Le résultat dépend des règles et du nombre d'exemplaires." },
    { type: 'title', level: 2, text: 'L\'idée hypergéométrique en une ligne' },
    { type: 'paragraph', html: "Pour n cartes prises dans un paquet de N contenant K exemplaires cibles, la probabilité sans cible vaut C(N − K, n) / C(N, n). Le calculateur prend son complément 1 − cette valeur pour obtenir la probabilité d'au moins un exemplaire." },
    { type: 'diagnostic', variant: 'info', title: 'Ce que le calculateur ne simule pas', badge: 'LIMITES', html: "Il ne suit pas les cartes nommées, la sélection, les effets de remplacement, le regard, les tuteurs, plusieurs cibles ou l'état complet d'une partie. Utilisez le résultat comme base et ajoutez les règles particulières séparément." },
  ],
  faq: [
    { question: 'Quelle formule donne les chances de pioche ?', answer: 'Pour au moins un exemplaire en n cartes, le calcul est 1 − C(N − K, n) / C(N, n), avec N pour la taille du paquet et K pour le nombre d\'exemplaires.' },
    { question: 'Le calculateur fonctionne-t-il pour une pioche de 5 cartes ?', answer: 'Oui. Réglez la main de départ sur 5 et choisissez les pioches et les tours de votre jeu.' },
    { question: 'Comment fonctionne le mulligan ?', answer: 'Remplacer après un échec simule un remplacement complet et unique d\'une main sans carte cible. C\'est volontairement plus simple que les règles propres à chaque jeu.' },
    { question: 'Pourquoi les exemplaires attendus diffèrent-ils de la probabilité de toucher ?', answer: 'La probabilité demande s\'il y a au moins un exemplaire. Les exemplaires attendus donnent le nombre moyen présent dans l\'échantillon.' },
  ],
  bibliography,
  howTo: [
    { name: 'Saisir la taille et les exemplaires', text: "Indiquez le nombre total de cartes et le nombre d'exemplaires recherchés." },
    { name: 'Adapter la main et les pioches', text: 'Saisissez la main de départ, les cartes piochées par tour et le dernier tour.' },
    { name: 'Choisir un modèle de mulligan', text: 'Utilisez Sans mulligan pour un échantillon continu ou le remplacement après échec pour un remplacement complet.' },
    { name: 'Lire la chronologie', text: 'Comparez le pourcentage d\'au moins un exemplaire à chaque tour affiché.' },
  ],
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'Calculateur de chances de pioche', applicationCategory: 'GameApplication', operatingSystem: 'Web', description: 'Probabilités de pioche pour des paquets de cartes finis.' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'Quelle formule donne les chances de pioche ?', acceptedAnswer: { '@type': 'Answer', text: 'Le calculateur utilise le complément de la probabilité hypergéométrique sans cible.' } }] },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: 'Calculer les chances de pioche', step: [{ '@type': 'HowToStep', name: 'Définir les règles', text: 'Saisissez la taille, les exemplaires, la main, les pioches et les tours.' }, { '@type': 'HowToStep', name: 'Lire le résultat', text: 'Comparez la probabilité de voir au moins un exemplaire dans la chronologie.' }] },
  ],
};
