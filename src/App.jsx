import { Routes, Route } from 'react-router-dom';
import './style.css';

import Home from './pages/Home';
import Tesi from './pages/Tesi';
import Indice from './pages/Indice';
import Bibliografia from './pages/Bibliografia';
import Documenti from './pages/Documenti';
import Progetto from './pages/Progetto';
import Storia from './pages/Storia';
import Specifiche from './pages/Specifiche';
import Gameplay from './pages/Gameplay';
import Moodboard from './pages/Moodboard';
import Storyboard from './pages/Storyboard';
import Audio from './pages/Audio';
import Reference from './pages/Reference';
import Timeline from './pages/Timeline';
import Team from './pages/Team';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tesi" element={<Tesi />} />
      <Route path="/indice" element={<Indice />} />
      <Route path="/bibliografia" element={<Bibliografia />} />
      <Route path="/documenti" element={<Documenti />} />
      <Route path="/progetto" element={<Progetto />} />
      <Route path="/storia" element={<Storia />} />
      <Route path="/specifiche" element={<Specifiche />} />
      <Route path="/gameplay" element={<Gameplay />} />
      <Route path="/moodboard" element={<Moodboard />} />
      <Route path="/storyboard" element={<Storyboard />} />
      <Route path="/audio" element={<Audio />} />
      <Route path="/reference" element={<Reference />} />
      <Route path="/timeline" element={<Timeline />} />
      <Route path="/team" element={<Team />} />
    </Routes>
  );
}
