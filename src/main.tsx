import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HashRouter, Route, Routes } from 'react-router'
import Transcript from './transcript/Transcript.tsx';
import Numbers from './numbers/Numbers.tsx';

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <App />
    <Routes>
      <Route path="uva-practicum/" element={<App />} />
      <Route path="uva-practicum/transcript" element={<Transcript />} />
      <Route path="uva-practicum/numbers" element={<Numbers />} />
    </Routes>
  </HashRouter>,
);
