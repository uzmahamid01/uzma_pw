import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Work } from './components/Work';
import { Journey } from './components/Journey';
import { Contact } from './components/Contact';
import { Notion } from './components/Notion';
import { useEffect, useState } from 'react';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const location = useLocation(); // React Router location

  useEffect(() => {
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-KVW5T1X70G";
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-KVW5T1X70G', { page_path: window.location.pathname });
    `;
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-KVW5T1X70G", { page_path: location.pathname });
    }
  }, [location]);

  const renderPage = () => {
    return (
      <main className="relative z-10">
        <Hero />
        <About />
        <Work />
        <Journey />
        <Notion />
        <Contact />
      </main>
    );
  };

  return (
    <div className="min-h-screen bg-ivory overflow-x-hidden relative">
      {/* <InteractiveTerminal /> */}
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}
