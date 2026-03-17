import { useState } from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import SectionCard from '../components/SectionCard';

function PromptBlock({ label, children }) {
  const [copied, setCopied] = useState(false);
  const text = typeof children === 'string' ? children : children;

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="prompt-block">
      {label && <div className="prompt-label">{label}</div>}
      <pre className="prompt-text">{children}</pre>
      <button className="prompt-copy" onClick={handleCopy}>
        {copied ? '✓ Copiato' : '⎘ Copia'}
      </button>
    </div>
  );
}

export default function Prompts() {
  const [tab, setTab] = useState('storyboard');

  return (
    <Layout section="progetto">
      <div className="page">
        <PageHeader
          icon="🤖"
          title="Prompt Gemini"
          subtitle="Prompt aggiornati per la generazione delle immagini con Google Gemini"
        />

        <SectionCard title="Note sull'utilizzo">
          <p>
            Questi prompt sono pensati per <strong>Google Gemini</strong> (Gemini 2.0 Flash / Gemini Pro Vision)
            per generare le immagini del progetto. Ogni prompt specifica stile, atmosfera e soggetto del frame.
          </p>
          <div className="spec-item"><strong>Stile globale</strong> 3D Low Poly Art — stilizzato, non fotorealistico, emozione {`>`} realismo</div>
          <div className="spec-item"><strong>Personaggio</strong> Animella — forma geometrica astratta, luce dorata, senza volto, senza sedia</div>
          <div className="spec-item"><strong>Coerenza</strong> L'animella deve avere lo stesso design in tutti i frame (frame 09–17)</div>
          <div className="spec-item"><strong>Lingua prompt</strong> Inglese (migliori risultati con Gemini)</div>
        </SectionCard>

        <div className="tabs">
          <button className={`tab-btn${tab === 'storyboard' ? ' active' : ''}`} onClick={() => setTab('storyboard')}>
            🎬 Storyboard — Animella
          </button>
          <button className={`tab-btn${tab === 'companion' ? ' active' : ''}`} onClick={() => setTab('companion')}>
            📱 Companion App
          </button>
          <button className={`tab-btn${tab === 'logo' ? ' active' : ''}`} onClick={() => setTab('logo')}>
            🎨 Logo & Branding
          </button>
        </div>

        {/* ===== STORYBOARD ===== */}
        {tab === 'storyboard' && (
          <>
            <h2 className="section-header">Prompt Base (System Prompt)</h2>
            <SectionCard>
              <p>Includi questo testo all'inizio di ogni sessione Gemini prima di generare i frame:</p>
              <PromptBlock>
{`You are generating concept art for a VR game called "Il Viaggio" (The Journey), a psycho-educational experience about grief processing.

VISUAL STYLE:
- 3D Low Poly Art — geometric, stylized, non-photorealistic
- Flat shading with selective toon shading
- Low polygon density, clean silhouettes
- Emotional lighting over realism — light tells the story

THE ANIMELLA (Soul Character):
- Abstract geometric shape representing a soul/spirit
- Made of soft golden particles and luminous geometric forms
- No face, no chair, no realistic human features
- Floats above the water surface — never sits on a chair
- Consistent across ALL frames: same abstract form, same golden glow
- Think: a glowing geometric heart/core with soft luminous outlines,
  somewhere between an orb and a simplified humanoid silhouette
- Simple, poetic, stylized — not a ghost, not a person

ENVIRONMENTS:
- All scenes are viewed from first-person seated perspective
- Comfort zone: objects appear ~60x60cm in front of the player's torso
- The world comes to the player, not the other way around

COLOR PALETTES:
- Prologue: deep black (#0a0a0f), golden glow (#d4a857)
- Act 1 - Fire: ember red (#8b2500), fire orange (#d4500a), golden sparks (#f5a623)
- Act 2 - Water: deep night sea (#0d1b2a), dark water (#1a3a5c), luminous splash (#7ec8e3)
- Act 3 - Meeting: calm sea (#3a6b8c), golden animella (#d4a857), crystal spheres (#f0e4d0)
- Epilogue: deep violet (#4a2060), pink (#e8788a), gold (#ffd700)

Render as a wide cinematic frame (16:9). No UI, no text overlays.`}
              </PromptBlock>
            </SectionCard>

            <h2 className="section-header">Frame 09–12 — Atto 2: L'Acqua (con Animella)</h2>

            <SectionCard>
              <PromptBlock label="Frame 09 — Il Lancio: la pietra in volo">
{`Frame 09 — "The Throw: stone in flight"

Scene: A VR player's hands (first-person view) have just thrown a dark stone toward the sea.
The stone is mid-flight, dissolving into luminous particles. The scene is dynamic.
Far in the distance on the horizon of the dark night sea, barely visible:
a faint golden ANIMELLA — an abstract geometric glowing form, floating above the water surface.
No chair. No human figure. Just a soft golden geometric shape in the far distance.

Setting: Night sea, rocky shore. The player sits on a low rock.
Atmosphere: Act 2 palette — deep night sea (#0d1b2a), dark water (#1a3a5c).
Low poly stylized art. Cinematic wide shot.`}
              </PromptBlock>

              <PromptBlock label="Frame 10 — Lo Splash: onda luminosa">
{`Frame 10 — "The Splash: luminous wave"

Scene: The stone has hit the sea surface. A large luminous splash erupts —
the water illuminates with a circular wave of cyan-white light (#7ec8e3).
The surrounding water grows brighter and clearer.
In the background, the golden ANIMELLA is slightly closer than before.
Same abstract geometric floating form — consistent design.

Setting: Night sea. First-person view from the rocky shore.
Atmosphere: Act 2 palette. The splash is the visual focus.
Low poly stylized art. Cinematic wide shot.`}
              </PromptBlock>

              <PromptBlock label="Frame 11 — L'Animella si avvicina">
{`Frame 11 — "The Animella approaches"

Scene: Half the stones have been thrown. The golden ANIMELLA is now clearly visible
at medium distance — floating calmly above the sea.
The ANIMELLA: abstract geometric form made of golden particles,
a luminous core with soft geometric outlines. No face, no chair, no human features.
Patient, still, oriented toward the player.

Setting: Vast night sea, starry sky. Low poly rocks in foreground.
The water between player and animella glows softly.
Atmosphere: Act 2 palette transitioning to warmer tones.
Low poly stylized art. Cinematic wide shot.`}
              </PromptBlock>

              <PromptBlock label="Frame 12 — L'ultimo lancio: l'Animella è vicina">
{`Frame 12 — "The last throw: the Animella is close"

Scene: The player's hand holds the last stone. The golden ANIMELLA is now very close —
2-3 meters away, floating above the luminous water.
The ANIMELLA is an abstract but recognizable form: a warm luminous core
with stylized geometric outlines, oriented toward the player.
The water between them is almost entirely bright and luminous.

Setting: Night sea, intimate moment. Almost all water is glowing.
The animella fills a significant portion of the frame — close and present.
Atmosphere: Emotional tension. Warm gold meets cool water glow.
Low poly stylized art. Cinematic wide shot.`}
              </PromptBlock>
            </SectionCard>

            <h2 className="section-header">Frame 13–17 — Atto 3: L'Incontro (con Animella)</h2>

            <SectionCard>
              <PromptBlock label="Frame 13 — Faccia a faccia">
{`Frame 13 — "Face to face"

Scene: All stones have been thrown. The golden ANIMELLA floats 2 meters in front of the player,
above the luminous sea. Two presences face to face under a vast starry sky.
The ANIMELLA: golden abstract geometric form, no face, floating — consistent with previous frames.
Simple, stylized, coherent with the low poly aesthetic. Just two presences.

Setting: Calm luminous sea at night. Starry sky. Wide, intimate shot.
The animella is centered in the frame, bathed in golden light.
Atmosphere: Deep intimacy. Act 3 palette — calm sea (#3a6b8c), golden animella (#d4a857).
Low poly stylized art. Cinematic wide shot.`}
              </PromptBlock>

              <PromptBlock label="Frame 14 — Le sfere-parola">
{`Frame 14 — "The word-spheres"

Scene: Small crystal spheres float in a slow semicircle around the golden ANIMELLA.
Each sphere contains a luminous word: "Grazie" (Thank you), "Mi manchi" (I miss you),
"Ti perdono" (I forgive you), "Ti voglio bene" (I love you).
The player's hand reaches toward one of the spheres.
The ANIMELLA floats calmly behind the spheres — consistent abstract geometric form.

Setting: Luminous night sea. Intimate close-medium shot.
The spheres glow with soft crystal light (#f0e4d0).
Atmosphere: Gentle, poetic. Act 3 palette.
Low poly stylized art. Cinematic frame.`}
              </PromptBlock>

              <PromptBlock label="Frame 15 — Il tocco: la parola che raggiunge">
{`Frame 15 — "The touch: the word that reaches"

Scene: Close-up. The player's index finger touches a word-sphere.
The sphere dissolves into a flow of golden particles streaming toward the ANIMELLA.
The ANIMELLA reacts with a warm pulse of light and a slight movement of its geometric outlines —
subtle, beautiful, emotional.

Setting: Night sea background, defocused. Close-up on hands and sphere.
The particle flow connects player to animella.
Atmosphere: Emotional resonance. Crystal sounds implied.
Low poly stylized art. Cinematic close-up.`}
              </PromptBlock>

              <PromptBlock label="Frame 16 — Il silenzio: due presenze sul mare">
{`Frame 16 — "The silence: two presences on the sea"

Scene: Wide shot. No spheres, no objects. Just the player's point of view and the ANIMELLA,
face to face on the calm luminous sea under a vast starry sky.
The ANIMELLA pulses softly with golden light — same consistent abstract geometric form.
Pure silence implied. The most intimate moment of the entire experience.

Setting: Vast calm luminous sea. Immense starry sky.
The animella is perfectly centered, 2 meters away, floating.
Atmosphere: Pure silence and connection. Warmest moment.
Low poly stylized art. Wide cinematic shot.`}
              </PromptBlock>

              <PromptBlock label="Frame 17 — La Dissoluzione">
{`Frame 17 — "The Dissolution"

Scene: The golden ANIMELLA begins to dissolve. Its geometric outlines open toward the player —
like an embrace of light. Golden particles separate:
- Some fall on the water as golden reflections
- Some rise toward the sky like stars
- Some float suspended like fireflies
Where the animella was: a permanent golden point of light remains.

Setting: Night sea transitioning — first hints of color on the horizon.
The dissolution fills the frame with soft golden light.
Atmosphere: Bittersweet beauty. A goodbye that is also a transformation.
Low poly stylized art. Cinematic wide shot.`}
              </PromptBlock>
            </SectionCard>
          </>
        )}

        {/* ===== COMPANION APP ===== */}
        {tab === 'companion' && (
          <>
            <h2 className="section-header">Prompt per Mockup Companion App</h2>
            <SectionCard>
              <p>Questi prompt generano riferimenti visivi per il design della Companion App in Figma.</p>
              <PromptBlock label="Schermata Home — Concept Visivo">
{`Design concept for a mobile app companion to a VR grief therapy experience called "Il Viaggio".

APP MOOD: Calm, warm, intimate. NOT clinical. NOT cold.
Colors: deep navy background (#1a1a2e), warm gold accents (#d4a857), soft white text.
Typography: elegant serif for titles, clean sans-serif for body.
Style: minimal, emotional, spa-like — think "Calm" app meets "Headspace" meets "Journey game".

HOME SCREEN contains:
- Top: app name "Il Viaggio" with a small golden animella icon (abstract geometric soul)
- Status card: "Sessione completata il [data]" or "Pronto per la prossima sessione"
- Two large buttons:
  1. "Modalità Psicologo" (brain icon, description: guided by a professional)
  2. "Modalità Autonoma" (headphones icon, description: narrator voice only)
- Section: "Journaling Post-Sessione" with a soft card (pen icon)
- Section: "Esercizi GGT" with small exercise cards
- Bottom nav: Home, Journal, Sessioni, Profilo

Render as a mobile phone mockup (iPhone 14 style), dark mode.
UI design reference, not a photograph.`}
              </PromptBlock>

              <PromptBlock label="Schermata Journal — Concept Visivo">
{`Mobile app screen — journaling section for "Il Viaggio" grief VR companion app.

MOOD: Reflective, quiet, safe. A space to write without judgment.
Same visual style: deep navy (#1a1a2e), gold accents (#d4a857).

JOURNAL SCREEN:
- Header: "Diario delle Sessioni" with a feather/pen icon in gold
- Current entry card: date, session completed, text area with placeholder
  "Come ti senti dopo questa sessione?"
- Suggested reflection prompts (3 small cards):
  "Cosa hai sentito durante Il Fuoco?"
  "C'è qualcosa che vorresti dire ancora?"
  "Cosa porti con te da questa esperienza?"
- Previous entries list (2-3 entries, blurred for privacy)
- Floating action button: "Salva" in gold

Render as a mobile phone mockup (iPhone 14 style), dark mode.`}
              </PromptBlock>
            </SectionCard>
          </>
        )}

        {/* ===== LOGO ===== */}
        {tab === 'logo' && (
          <>
            <h2 className="section-header">Prompt per Logo e Identità Visiva</h2>
            <SectionCard>
              <p>Prompt per esplorare concept di logo e identità visiva del progetto.</p>
              <PromptBlock label="Concept Logo — Varianti">
{`Logo design concepts for "Il Viaggio" — a VR psycho-educational experience about grief.

BRAND PERSONALITY: Warm, intimate, hopeful, poetic. Not clinical. Not mournful.
The name means "The Journey" in Italian.

DESIGN BRIEF:
- The logo should work in both light and dark backgrounds
- Minimal, modern, emotionally resonant
- The animella (abstract soul) could be the icon/symbol
- Color palette: deep navy (#1a1a2e), warm gold (#d4a857), soft white

CONCEPT VARIATIONS to explore:
1. Wordmark only: elegant italic "Il Viaggio" with a subtle golden particle trail
2. Icon + wordmark: abstract geometric animella (golden orb/soul) next to the name
3. Abstract mark: a minimal golden path/journey line that forms a subtle infinity or wave
4. Hands + light: two open hands with a golden orb of light between them

Show 3-4 logo variations on a dark background.
Each should feel premium, emotional, suitable for both VR game and academic thesis.
Vector style, clean, minimal.`}
              </PromptBlock>
            </SectionCard>
          </>
        )}
      </div>
    </Layout>
  );
}
