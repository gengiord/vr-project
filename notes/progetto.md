# Il Progetto — Info Generali

Esperienza VR psico-educativa sull'elaborazione del lutto

---

## Informazioni Generali

- **Tipo:** Esperienza VR psico-educativa sull'elaborazione del lutto (Death Education, livello primario)
- **Framework teorico:** Grief and Growth Therapy — GGT (De Luca, 2024)
- **Pilastri GGT tradotti:** Modello Duale del Lutto (DPM), Continuing Bonds (CB), Crescita Post Traumatica (PTG), Meaning-Making
- **Piattaforma:** Meta Quest (standalone)
- **Tecnologia:** Unity + Meta XR All-In-One SDK
- **Interazione:** Hand tracking (no controller), da seduti
- **Voce narrante:** ElevenLabs TTS — voce calma, profonda, intima
- **Durata stimata:** 15-25 minuti
- **Nota etica:** Non è terapia. È un'esperienza psico-educativa di sensibilizzazione alla finitudine

---

## Principio di Design

Tutto avviene nella **comfort zone del hand tracking da seduti**: ~60×60cm davanti al busto, tra vita e spalle. Il mondo arriva al giocatore, non il contrario. Gli oggetti fluttuano nella zona di comfort. Il giocatore è il centro immobile dell'esperienza.

La **voce narrante** guida con frasi brevi e pause lunghe. Parla solo per ~7% del tempo totale (~1m 40s su 15-25 min). Il resto è silenzio, suoni ambientali e azione del giocatore.

---

## Struttura

```
PROLOGO           ATTO 1                ATTO 2                      EPILOGO
L'Ingresso        "Fuoco e Acqua"       "L'Incontro sul Mare"       "L'Alba"
~1 min            5-8 min               5-10 min                     3-5 min
```

---

## Prologo — L'Ingresso (~1 min)

- **Ambiente:** Buio totale. Mani luminose. Pavimento d'acqua scura.
- **Cosa succede:** Tutorial guidato dalla voce narrante. 3 sfere insegnano i gesti base: tap, grab+release, throw.
- **Transizione:** Luce arancione in lontananza → dissolvenza.
- **GGT:** Finestra di Tolleranza — ingresso graduale, ambiente protetto, comfort zone fisica.

---

## Atto 1 — Fuoco e Acqua (5-8 min)

*Tema: Affrontare il dolore — GGT: Orientamento alla Perdita (OP), elaborazione emotiva, meaning-making*

### Fase 1.1 — La Fucina (Rabbia)
- **Ambiente:** Caverna con incudine, braci, scintille. Blocco incandescente + martello.
- **Cosa succede:** Il giocatore martella il blocco (8-15 colpi). Il blocco si spacca e rivela una chiave. La voce guida l'inizio, poi tace durante i colpi.
- **Gesti:** Grab martello → colpire dall'alto (20-30cm escursione) → grab chiave.

### Fase 1.2 — La Porta
- **Ambiente:** Buio. Una porta di pietra con serratura luminosa.
- **Cosa succede:** Il giocatore inserisce la chiave e la gira. La porta si apre.
- **Gesti:** Braccio avanti 30cm (snap magnetico) → wrist rotation 90°.

### Fase 1.3 — Il Mare (Senso di colpa)
- **Ambiente:** Scoglio su mare vasto e calmo, notte stellata. 6-10 pietre scure con frasi di colpa fluttuano davanti al petto.
- **Cosa succede:** Il giocatore lancia le pietre nel mare, una alla volta. Ad ogni lancio: splash, onda luminosa, acqua più chiara. Dal primo lancio, una sagoma dorata seduta su una sedia appare in lontananza e si avvicina ad ogni lancio.
- **Meccanica chiave:** Più pietre lanci → più la figura si avvicina.
- **GGT:** Meaning-making — il rilascio del peso (colpa) apre la possibilità di connessione. L'avvicinamento della sagoma anticipa il Continuing Bond.

---

## Atto 2 — L'Incontro sul Mare (5-10 min)

*Tema: Dialogo e connessione — GGT: Continuing Bonds (da esternalizzato a internalizzato), oscillazione OP/OR*

### Fase 2.1 — Il Silenzio Condiviso
Mare calmo e luminoso. Sagoma a 2m. Due figure faccia a faccia. 10-15s di silenzio.
- **GGT:** CB esternalizzato — presenza visiva del defunto, Senso di Presenza (SED) positivo.

### Fase 2.2 — Le Parole
Sfere-parola fluttuano: "Grazie", "Mi manchi", "Ti perdono", "Perdonami", "Vai in pace", "Ti voglio bene". Il giocatore tocca quelle che vuole (o nessuna). Nessun timer.
- **GGT:** CB in trasformazione — dal legame visivo al dialogo interiore. Le parole scelte diventano parte del legame internalizzato.

### Fase 2.3 — La Scelta di Proseguire
Una sfera dorata appare in grembo. Se il giocatore la prende e alza, la sagoma si dissolve — braccia aperte, particelle, riflessi sull'acqua. Resta un punto di luce.
- **GGT:** Metafora dello *Scrigno interno* — custodire l'essenza del legame. La dissoluzione della sagoma in luce è il *Distillato* — l'essenza più pura del defunto diventa risorsa interna attiva.

---

## Epilogo — L'Alba sul Mare (3-5 min)

*Tema: Rinascere — GGT: Orientamento alla Ricostruzione (OR), Crescita Post Traumatica (PTG)*

L'alba nasce dal punto dove sedeva la figura. Le mani del giocatore brillano della stessa luce. Gesti creativi liberi: palms up → stelle, push → onda di luce, finger wiggle → gabbiani, hands together → luce-cuore.

**Dimensioni PTG nell'epilogo:**
- **Forza personale:** le mani brillano della stessa luce della sagoma
- **Nuove possibilità:** gesti creativi che generano un mondo nuovo
- **Apprezzamento della vita:** l'alba come rinascita, “Il viaggio continua”
- **Relazione con gli altri:** “Ma non sei più solo”
- **Cambiamento spirituale/esistenziale:** “Sei parte di qualcosa di più grande. Sempre.”

Dissolvenza al bianco → titolo → nero.
