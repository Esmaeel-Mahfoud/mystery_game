import { Link, NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import HowToPlay from './pages/HowToPlay';
import Mysteries from './pages/Mysteries';
import Play from './pages/Play';
import Result from './pages/Result';

import Navbar from './components/Navbar';
import NotFound from "./pages/NotFound";
export default function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-to-play" element={<HowToPlay />} />
          <Route path="/mysteries" element={<Mysteries />} />
          <Route path="/mysteries/:id" element={<Play />} />
          <Route path="/mysteries/:id/result" element={<Result />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

