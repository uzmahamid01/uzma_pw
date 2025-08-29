import { Mail, MessageCircle, Instagram, Globe, Linkedin, Twitter, Send, Coffee } from 'lucide-react';
import React, { useState } from 'react';
import Link from 'next/link';


export function Contact() {
  const [suggestion, setSuggestion] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSuggestionSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!suggestion.trim()) return;

  setIsSubmitting(true);

  try {
    const response = await fetch("https://formspree.io/f/xkgvolqz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: suggestion }),
    });

    if (!response.ok) throw new Error("Failed to submit");

    setIsSubmitted(true);
    setSuggestion("");

    setTimeout(() => setIsSubmitted(false), 3000);
  } catch (error) {
    console.error(error);
    alert("Failed to send suggestion. Try again.");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section id="contact" className="py-8 relative doodle-container">

      <div className="max-w-7xl mx-auto px-2 relative z-10">
        <div className="mb-16">
          <h2 className="text-lg md:text-xl font-medium text-foreground mb-12">
            [CONTACT]
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
              <div className="space-y-6">
              </div>

              <div className="space-y-6">
                <div>
                  <a 
                    href="mailto:uzma_hamid@tamu.edu"
                    className="underline hover:underline underline-offset-4 decoration-2 inline-flex items-center gap-1 text-gray-800 hover:text-gray-900 hover:scale-105 transition-transform duration-200"
                  >
                    email
                  </a>
                </div>
                
                <div>
                  <a 
                    href="https://linkedin.com/in/uzmah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:underline underline-offset-4 decoration-2 inline-flex items-center gap-1 text-gray-800 hover:text-gray-900 hover:scale-105 transition-transform duration-200"
                  >
                    linkedin
                  </a>
                  </div>
                <div>
                  <a
                    href="/assets/MasterResumeUHM.pdf"
                     download="MasterResumeUHM.pdf"
                    className="underline hover:underline underline-offset-4 decoration-2 inline-flex items-center gap-1 text-gray-800 hover:text-gray-900 hover:scale-105 transition-transform duration-200"
                  >
                    my resume
                  </a>
                </div>
        
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 relative overflow-hidden">
        
              
              <div className="flex items-center gap-3 mb-4">
                <Coffee className="text-amber-600" size={20} />
                <div>
                  <h3 className="text-sm font-medium text-foreground">/fueled by coffee</h3>
                </div>
              </div>

              <form onSubmit={handleSuggestionSubmit} className="space-y-4">
                <div>
                  <label htmlFor="suggestion" className="text-xs font-medium text-foreground mb-2 block tracking-wider">
                    WHAT SHOULD I BUILD NEXT?
                  </label>
                  <textarea
                    id="suggestion"
                    value={suggestion}
                    onChange={(e) => setSuggestion(e.target.value)}
                    placeholder="share anything or just say /hi"
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 resize-none bg-white"
                    rows={3}
                    disabled={isSubmitting}
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting || !suggestion.trim() || isSubmitted}
                  className={`w-full px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center justify-center gap-2 ${
                    isSubmitted
                      ? 'bg-green-100 text-green-700 cursor-default'
                      : isSubmitting || !suggestion.trim()
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <span className="w-4 h-4 text-green-600">✓</span>
                      Thanks for the suggestion!
                    </>
                  ) : isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      Send Suggestion
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="relative flex items-end justify-between gap-4">
          <p className="text-sm text-gray-500">
            ©2025
          </p>
          <h1 className="text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-bold tracking-tighter text-foreground leading-[0.8]">
            UZMA H.
          </h1>
        </div>
      </div>
    </section>
  );
}