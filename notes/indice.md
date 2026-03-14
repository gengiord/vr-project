# Indice della Tesi

Struttura dettagliata — ~80-98 cartelle

---

## Sezioni Preliminari

- Frontespizio
- Abstract (italiano + inglese)
- Indice

---

## Introduzione (~8-12 cartelle)

Contestualizzazione del tema, motivazione personale, domanda di ricerca e presentazione della struttura della tesi.

- **Le 6W del progetto**
  - What? — Argomento, titolo, oggetto, framework teorico
  - Why? — Motivazione personale e accademica, obiettivi
  - Who? — Candidato, relatore, collaboratori, destinatari
  - How? — Framework teorico, tecnologia, interazione, metodologia
  - Where? — Piattaforma, distribuzione, documentazione
  - When? — Sessione di laurea, timeline produzione
- **Domanda di ricerca**
- **Struttura della tesi**

---

## Capitolo 1 — Lutto, tecnologia e nuovi strumenti (~15-18 cartelle)

Capitolo unico di contesto che introduce il lutto, la sua evoluzione nell'era digitale e la Grief and Growth Therapy come framework del progetto.

### 1.1 Il lutto: definizioni e modelli
- Definizioni: lutto, cordoglio, elaborazione della perdita
- Panoramica sintetica dei modelli classici: Freud, Bowlby, Kübler-Ross, Worden, Stroebe & Schut
- Limiti dei modelli tradizionali

### 1.2 La Grief and Growth Therapy
- Origine, autori e cornice di analisi transazionale
- Principi fondamentali: dalla perdita alla crescita
- Fasi e componenti del percorso terapeutico
- Tecniche terapeutiche principali (sedia vuota, lettera, rituale simbolico, lavoro sugli stati dell'Io, ecc.)
- Perché la GGT è stata scelta come framework per questo progetto

### 1.3 Lutto e tecnologia digitale
- Morte nell'era dei social media, memorial digitali
- Davide Sisto: *La morte si fa social*, *Online Afterlives*
- Dalla commemorazione passiva al supporto attivo

### 1.4 Realtà Virtuale come strumento terapeutico e psico-educativo
- VR in ambito terapeutico: cenni (PTSD, fobie, esposizione)
- Presenza, embodiment ed emozioni in VR (Slater, Bailenson, Riva)
- Serious games per la salute mentale
- VR e lutto: stato dell'arte (Road to Acceptance, "Meeting You", ecc.)
- Il gap: assenza di esperienze VR basate su framework terapeutici strutturati

---

## Capitolo 2 — Game Design Document (~15-20 cartelle)

Capitolo dedicato interamente alla progettazione dell'esperienza VR. Il GDD è il cuore concettuale del progetto.

### 2.1 Concept e visione
- Obiettivo: esperienza VR psico-educativa basata sulla GGT
- Target utente: persone in lutto, utenti inesperti di VR
- Genere: puzzle / esperienza interattiva / serious game

### 2.2 Consulenza con lo psicologo
- Validazione del framework teorico
- Indicazioni per il design dell'esperienza
- Confini etici: cosa il gioco è e cosa non è (non è terapia)

### 2.3 Dalla GGT al gameplay: tradurre le tecniche in meccaniche
- Mappatura tecniche GGT → meccaniche VR
- Design delle interazioni basate su hand tracking
- Design for emotion: come progettare per le emozioni

### 2.4 Struttura dell'esperienza
- Struttura dei livelli / dell'esperienza
- Flow: onboarding → esperienza principale → conclusione
- Navigazione (lineare vs non lineare)
- Progressione emotiva dell'esperienza

### 2.5 Narrativa e storytelling
- Trama e personaggi (se presenti)
- Simbolismo e metafore
- Tono e registro emotivo

### 2.6 Scelte di design
- **Hand tracking:** motivazioni, implicazioni, impatto sull'immersione
- **Stile visivo:** moodboard, palette colori, atmosfere per sezione
- **Comparto audio:** musica, SFX, voce — come supportano l'esperienza emotiva
- **UI/UX:** interfaccia minimale, indicazioni diegetiche

---

## Capitolo 3 — Realizzazione del progetto (~25-30 cartelle)

Capitolo principale della tesi. Documentazione tecnica e pratica dell'intero processo di sviluppo.

### 3.1 Pre-produzione
- **3.1.1** Pianificazione e organizzazione — Timeline e milestones, strumenti di project management
- **3.1.2** Prototipazione — Schizzi, wireframe, storyboard dell'esperienza, prototipi rapidi e test iniziali

### 3.2 Setup tecnico
- **3.2.1** Unity + Meta XR All-In-One SDK — Configurazione progetto, setup hand tracking, architettura
- **3.2.2** Pipeline di sviluppo — Workflow asset (modelli 3D, texture, audio), version control

### 3.3 Sviluppo degli ambienti
- **3.3.1** Creazione degli ambienti 3D — Modellazione, sculpting, materiali, texture, illuminazione
- **3.3.2** Environment e atmosfera — Cielo, particelle, effetti volumetrici, transizioni

### 3.4 Implementazione delle meccaniche
- **3.4.1** Sistema di hand tracking — Gesture recognition, feedback visivo e aptico, gestione grab/poke/pinch
- **3.4.2** Meccaniche di gameplay — Implementazione tecniche GGT, interazioni con oggetti, progressione e trigger narrativi
- **3.4.3** Navigazione e locomotion — Sistema di movimento, comfort e motion sickness

### 3.5 Comparto audio
- **3.5.1** Musica e colonna sonora — Selezione e/o creazione tracce, audio adattivo e dinamico
- **3.5.2** Sound design — Effetti sonori ambientali e di interazione, spatial audio
- **3.5.3** Voce — Narrazione, dialoghi, indicazioni

### 3.6 Effetti visivi
- Effetti particellari (per sezione/livello)
- Effetti volumetrici (fumo, nebbia, luce divina)
- Shader e post-processing

### 3.7 Testing e iterazioni
- **3.7.1** Playtest — Sessioni di test, feedback raccolti, iterazioni
- **3.7.2** Ottimizzazione — Performance su Meta Quest, draw call, texture, poligoni
- **3.7.3** Bug fix e polish finale

### 3.8 Build e distribuzione
- Esportazione per Meta Quest
- Piattaforma di distribuzione (da definire)
- Documentazione visiva: screenshot, video, materiali per tesi

---

## Conclusioni (~5-8 cartelle)

- Riflessioni sul processo di ricerca e sviluppo
- Competenze acquisite (tecniche, umane, concettuali)
- Risposta alla domanda di ricerca
- Limiti del progetto
- Sviluppi futuri (co-design con psicologi, valutazione clinica, iterazioni)
- Riflessione personale sull'importanza dell'arte e della tecnologia per l'elaborazione del lutto

---

## Sezioni Finali

- **Bibliografia**
- **Sitografia**
- **Appendice** — GDD completo, screenshot, diagrammi, moodboard
- **Ringraziamenti**
