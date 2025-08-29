import { ImageWithFallback } from './figma/ImageWithFallback';
import { Instagram, Linkedin, Twitter, Globe, MailCheckIcon, MailIcon, Github } from 'lucide-react';
import {InlineDoodle } from './DoodleElements';

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 min-h-screen flex items-center relative doodle-container">

      
      <div className="max-w-7xl mx-auto px-2 w-full relative z-10">
        <div className="mb-16">
          <h2 className="text-lg md:text-xl font-medium text-foreground mb-12">
            [ABOUT]
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-4">
            <div className="aspect-[2/3] max-w-lg">
              <ImageWithFallback
                src="	https://uzmah.netlify.app/full2.jpg"
                alt="Uzma Hamid"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>

          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-8">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-relaxed max-w-2xl">
                Hi, I'm <span className="doodle-highlight">Uzma</span>. I code random stuff. 
                <br/> I am on a mission to rebuild <span className="doodle-highlight">Tech industry</span>. This time for <span className="doodle-highlight">human good</span>.
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
              <div>
                <h4 className="text-sm font-medium text-foreground mb-4 tracking-wider">MY LIFE</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  I'm Kashmiri. I live in Texas, USA. I'm a coffee addict. I love innovation. I hate limitations. I'm 
                  optimistic relentlessly. I have infinite ambitions. I don't rest(barely). I'm on a mission to make it work wonders for people everywhere.(how? still figuring it out…but that’s half the fun☕)
              </p>

              </div>

              <div>
                <h4 className="text-sm font-medium text-foreground mb-4 tracking-wider">BUSINESS</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Tomb Raider—yep, that's what first sparked my love for coding. From there, I discovered the endless world of technology. 
                  Now, my mission is clear: tech for human good all around the world (even if i LOL my way through the process). What I stand for is DATA and PRIVACY: protecting people’s digital lives while building tools that empower them. However, I’m also endlessly curious: fashion, space, and new tech all inspire me, because the future isn’t just one dimensional, it’s a mix of everything, woven together.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 pt-8">
              <div className="flex gap-6">
                <a 
                  href="mailto:uzma_hamid@tamu.edu"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <MailIcon size={18} className="text-gray-600" />
                </a>
                <a 
                  href="https://linkedin.com/in/uzmah" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <Linkedin size={18} className="text-gray-600" />
                </a>
                <a 
                  href="https://github.com/uzmahamid01" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <Github size={18} className="text-gray-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}