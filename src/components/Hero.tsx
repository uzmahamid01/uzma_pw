import { useEffect, useState } from "react";
import { ImageWithFallback } from './figma/ImageWithFallback';
import doodle from "../assets/doodle.png";
import { Typed } from "react-typed";
import { Link } from 'react-router-dom'

export function Hero() {
  const fullText = "latest: something cool is coming soon...";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, currentIndex + 1));
      currentIndex++;

      if (currentIndex === fullText.length) {
        clearInterval(interval);
      } 
    }, 100); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-8 pb-12 relative doodle-container">
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[70vh]">
         
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <a 
                href="https://calendly.com/uzma_hamid-tamu/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black text-white px-6 py-3 text-sm tracking-wide hover:bg-gray-800 transition-colors duration-200 inline-flex items-center gap-2"
              >
                Schedule a call
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              </div>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-md">
              learner · &lt;coder&gt; · software developer
              <br/> 
              <span className="text-indigo-800 font-semibold">{displayedText}</span>
            </p>
          </div>
          

          <div className="lg:col-span-5 flex flex-col justify-between items-end space-y-8 min-h-[400px]">
            <div className="flex justify-center lg:justify-end w-full">
              <img 
                src={doodle}
                alt="Doodle illustration" 
                className="w-full max-w-sm lg:max-w-md object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>

       
        <div className="mt-2 relative">
          <h1 className="text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[12rem] font-bold tracking-tighter text-foreground leading-none">
            <Link to="/" className="hover:text-blue-500 transition-colors">
              UZMA H.
            </Link>
          </h1>
          
          
          <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32">
            <ImageWithFallback
              src="https://media.licdn.com/dms/image/v2/D5603AQHwRdMUG4oVsA/profile-displayphoto-shrink_200_200/B56ZROy_2HHQAY-/0/1736488779695?e=1758758400&v=beta&t=5ULDuTZ57hAhjPF11c_fS2uE2-BV6BwsbVS9jwBftMY"
              alt="Uzma Hamid"
              className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}