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
import Timeline from './pages/Timeline';
import Team from './pages/Team';
import Changelog from './pages/Changelog';
import NotFound from './pages/NotFound';
import Presentazione from './pages/Presentazione';

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
      <Route path="/timeline" element={<Timeline />} />
      <Route path="/team" element={<Team />} />
      <Route path="/changelog" element={<Changelog />} />
      <Route path="/presentazione" element={<Presentazione />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
