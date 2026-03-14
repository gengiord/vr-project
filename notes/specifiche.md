# Specifiche Tecniche

Software, strumenti AI, audio, ambienti e gesture

---

## Software e SDK

| Strumento | Versione | Ruolo |
|---|---|---|
| Unity | 2022.3 LTS | Game engine principale |
| Meta XR All-In-One SDK | Latest | Hand tracking, passthrough, interazione VR |
| Meta Quest | Quest 3 / Quest 2 | Piattaforma target (standalone) |
| ElevenLabs | Multilingual v3 | Generazione voce narrante (TTS) |
| Visual Studio Code | Latest | Editor codice C# |

---

## Strumenti AI

Il progetto utilizza strumenti AI per accelerare la produzione:

| Strumento | Uso |
|---|---|
| Windsurf (Cascade) | Assistente di codifica per sviluppo Unity, debugging, documentazione e gestione del sito |
| Google Gemini | Ricerca, analisi testi accademici, generazione bozze per la tesi, brainstorming |
| ElevenLabs | Generazione voce narrante italiana custom (Multilingual v3) |
| Meshy AI | Generazione modelli 3D e concept art per ambienti e oggetti interattivi |

---

## Audio

Voce narrante (38 battute, ~1m 40s), musica adattiva e SFX spaziali 3D. Per lo script completo, le tempistiche e il sound design dettagliato vedi la pagina **Audio**.

---

## Ambienti

| Ambiente | Seduto su... | Oggetti zona mani |
|---|---|---|
| Prologo | Vuoto (sedia reale) | 3 sfere tutorial |
| Fucina | Roccia bassa | Incudine, martello, blocco |
| Porta | Buio | Chiave, porta |
| Mare — Pietre | Scoglio | Pietre fluttuanti |
| Mare — Incontro | Scoglio | Sfere-parola + sfera dorata |
| Alba | Scoglio | Nulla (mani = strumento) |

---

## Gesture

| Gesture | Descrizione | Dove |
|---|---|---|
| Grab | Chiudere la mano su un oggetto | Davanti al corpo |
| Release | Aprire la mano per lasciare | Davanti al corpo |
| Tap | Toccare con l'indice | Davanti al corpo |
| Push | Spingere con il palmo aperto | In avanti |
| Throw | Afferrare e lanciare in avanti | Davanti al corpo → avanti |
| Wrist rotation | Ruotare il polso | Davanti al petto |
| Palms up | Aprire le mani verso l'alto | Grembo/petto |
| Hands together | Unire le mani | Centro petto |

Tutti i gesti sono equivalenti a movimenti quotidiani da seduti. Escursione massima 30-40cm. Gomito mai sopra la spalla.
