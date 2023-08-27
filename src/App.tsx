import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Auth } from './Auth';
import { Top } from './Top';
// import { useSpotifyAuthCode } from './hooks/useSpotifyAuthCode';

function App() {
  const [code, setCode] = useState<string|null>(null);

  useEffect(() => {
    if(!code) return;

    const urlParams = new URLSearchParams(window.location.search);
    const paramCode = urlParams.get('code');
    setCode(paramCode);
  }, [code]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/top" element={<Top />} />
    </Routes>
  )
}

export default App
