import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { CardDrawOddsUI } from '../ui';

export const content: ToolLocaleContent<CardDrawOddsUI> = {
  slug: 'karten-ziehwahrscheinlichkeit-rechner',
  title: 'Rechner für Karten Ziehchancen',
  description: 'Berechne mit der hypergeometrischen Verteilung die Chance, bis zu einem bestimmten Zug mindestens eine Kopie einer Karte zu ziehen.',
  ui: {
    configureLabel: 'Deckregeln festlegen', configureHint: 'Passe Deck, Hand, Ziehen und Mulligan an. Die Ergebnisse ändern sich sofort.',
    presetLabel: 'Ausgangspunkt', presetCustom: 'Eigene Regeln', presetStandard: '60 Karten · 4 Kopien', presetLimited: '40 Karten · 4 Kopien', presetSingleton: '100 Karten · 1 Kopie',
    deckSizeLabel: 'Deckgröße', targetCopiesLabel: 'Kopien der Karte', openingHandLabel: 'Starthand', drawsPerTurnLabel: 'Gezogene Karten pro Zug', throughTurnLabel: 'Bis Zug anzeigen',
    mulliganLabel: 'Mulligan-Modell', mulliganNone: 'Kein Mulligan', mulliganFullRedraw: 'Nach Fehlen neu ziehen', visualLabel: 'Dein Ziehpfad', visualHint: 'Der Kartenfächer öffnet sich, wenn weitere Karten in die Stichprobe kommen.',
    openingHandStage: 'Starthand', turnLabel: 'Zug', cardsSeenLabel: 'Gesehene Karten', finalChanceLabel: 'Chance bis zum letzten Zug', expectedCopiesLabel: 'Erwartete Kopien bis dahin', probabilityByTurnLabel: 'Wahrscheinlichkeit pro Zug', explanationLabel: 'Mindestens eine Kopie',
    noMulliganNote: 'Ohne Mulligan: Das Modell zählt eine Stichprobe aus dem gemischten Deck.', fullRedrawNote: 'Nach Fehlen neu ziehen: Enthält die Starthand keine Kopie, wird sie einmal vollständig ersetzt.', invalidInput: 'Prüfe die Deckregeln, um fortzufahren.', invalidDeck: 'Wähle eine gültige Deckgröße.', invalidCopies: 'Die Kopien müssen zwischen null und der Deckgröße liegen.', invalidHand: 'Die Starthand darf nicht größer als das Deck sein.', invalidDraws: 'Gezogene Karten pro Zug müssen mindestens null sein.', invalidTurns: 'Wähle einen Zug zwischen null und 60.', cardsLabel: 'Karten', copyLabel: 'Kopien',
  },
  seo: [
    { type: 'title', level: 2, text: 'Karten-Ziehchancen für Tabletop-Decks berechnen' },
    { type: 'paragraph', html: 'Dieser Rechner zeigt, wie wahrscheinlich es ist, bis zu einem bestimmten Zug mindestens eine gesuchte Karte zu sehen. Gib Deckgröße, Kopien, Starthand, Ziehrate und Mulligan-Regel ein und vergleiche den Verlauf Zug für Zug.' },
    { type: 'paragraph', html: 'Die hypergeometrische Verteilung passt zu Kartenstapeln, weil ohne Zurücklegen gezogen wird. Deshalb eignet sich das Modell für Sammelkartenspiele, Brettspiele, Limited-Decks und andere endliche Kartenpools.' },
    { type: 'title', level: 2, text: 'Die Zeitleiste richtig lesen' },
    { type: 'list', items: ['Die Starthand ist die erste Stichprobe aus dem gemischten Deck.', 'Jeder Zug fügt die eingestellte Zahl gezogener Karten hinzu.', 'Der Prozentwert bedeutet mindestens eine Kopie, nicht genau eine.', 'Erwartete Kopien ist ein eigener Durchschnittswert und misst nicht dasselbe wie die Trefferchance.'] },
    { type: 'title', level: 2, text: 'Mulligan-Annahmen bleiben einstellbar' },
    { type: 'paragraph', html: 'Die Option zum erneuten Ziehen bildet eine einfache Regel ab: Eine Starthand mit Zielkarte wird behalten; bei keinem Treffer wird sie einmal vollständig ersetzt. Teil-Mulligans, Scry-Effekte, Tutoren und spielabhängige Entscheidungen sind nicht enthalten.' },
    { type: 'tip', title: 'Nutze die Regeln deines Spiels', html: 'Ändere Starthand, zusätzliche Ziehschritte und Mulligan-Modell, wenn dein Spiel andere Regeln hat. Das Ergebnis hängt immer von diesen Regeln und der Kopienzahl ab.' },
    { type: 'title', level: 2, text: 'Die hypergeometrische Idee in einer Zeile' },
    { type: 'paragraph', html: 'Für n Karten aus einem Deck mit N Karten und K Zielkopien ist die Chance ohne Treffer C(N − K, n) / C(N, n). Der Rechner verwendet das Gegenereignis 1 − ohne Treffer und liefert damit die Chance auf mindestens eine Zielkarte.' },
    { type: 'diagnostic', variant: 'info', title: 'Was dieser Rechner nicht simuliert', badge: 'GRENZEN', html: 'Benannte Kartenauswahl, Ersatzeffekte, Scrying, Tutoren, mehrere Ziele und ein vollständiger Spielzustand fehlen. Nutze das Ergebnis als Ausgangswert und ergänze besondere Regeln separat.' },
  ],
  faq: [
    { question: 'Welche Formel wird für Karten-Ziehchancen verwendet?', answer: 'Für mindestens eine Kopie in n Karten gilt 1 − C(N − K, n) / C(N, n), wobei N die Deckgröße und K die Kopienzahl ist.' },
    { question: 'Funktioniert der Rechner für eine Ziehung von 5 Karten?', answer: 'Ja. Setze die Starthand auf 5 und wähle Ziehungen und Züge passend zu deinem Spiel.' },
    { question: 'Wie funktioniert die Mulligan-Option?', answer: 'Bei einem Fehlschlag wird eine Starthand ohne Zielkopie einmal vollständig ersetzt. Das ist bewusst einfacher als spielabhängige Teil-Mulligans.' },
    { question: 'Warum unterscheidet sich die erwartete Kopienzahl von der Trefferchance?', answer: 'Die Trefferchance fragt nach einer oder mehr Kopien. Die erwartete Kopienzahl ist der durchschnittliche Kopienwert der Stichprobe.' },
  ],
  bibliography,
  howTo: [
    { name: 'Deckgröße und Kopien eingeben', text: 'Lege die Gesamtzahl der Karten und die Zahl der gesuchten Kopien fest.' },
    { name: 'Starthand und Ziehregeln anpassen', text: 'Gib Handgröße, Karten pro Zug und den letzten anzuzeigenden Zug ein.' },
    { name: 'Mulligan-Modell wählen', text: 'Nutze keinen Mulligan für eine durchgehende Stichprobe oder einen vollständigen Ersatz nach einem Fehlschlag.' },
    { name: 'Zeitleiste lesen', text: 'Vergleiche die Chance auf mindestens eine Kopie in der Starthand und in jedem Zug.' },
  ],
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'Rechner für Karten-Ziehchancen', applicationCategory: 'GameApplication', operatingSystem: 'Web', description: 'Karten-Ziehchancen für endliche Tabletop-Decks.' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'Welche Formel wird für Karten-Ziehchancen verwendet?', acceptedAnswer: { '@type': 'Answer', text: 'Der Rechner verwendet das Gegenereignis der hypergeometrischen Wahrscheinlichkeit ohne Treffer.' } }] },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: 'Karten-Ziehchancen berechnen', step: [{ '@type': 'HowToStep', name: 'Deckregeln setzen', text: 'Gib Deckgröße, Kopien, Handgröße, Ziehungen und Züge ein.' }, { '@type': 'HowToStep', name: 'Ergebnis lesen', text: 'Vergleiche die Chance auf mindestens eine Kopie in der Zeitleiste.' }] },
  ],
};
