import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Minimize2, Maximize2, X } from 'lucide-react';

interface TerminalLine {
  type: 'command' | 'output' | 'error' | 'ascii';
  content: string;
  timestamp?: Date;
}

const ASCII_ART = `
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║    ██╗   ██╗███████╗███╗   ███╗ █████╗     ██╗  ██╗         ║
║    ██║   ██║╚══███╔╝████╗ ████║██╔══██╗    ██║  ██║         ║
║    ██║   ██║  ███╔╝ ██╔████╔██║███████║    ███████║         ║
║    ██║   ██║ ███╔╝  ██║╚██╔╝██║██╔══██║    ██╔══██║         ║
║    ╚██████╔╝███████╗██║ ╚═╝ ██║██║  ██║██╗ ██║  ██║██╗      ║
║     ╚═════╝ ╚══════╝╚═╝     ╚═╝���═╝  ╚═╝╚═╝ ╚═╝  ╚═╝╚═╝      ║
║                                                              ║
║                Portfolio Terminal v2.0.25                   ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
`;

const COMMANDS = {
  help: {
    description: 'Show available commands',
    output: `Available commands:
  help          - Show this help menu
  about         - Learn about Uzma
  projects      - View project portfolio  
  skills        - List technical skills
  experience    - Show work experience
  contact       - Get contact information
  easter-egg    - Find hidden surprises
  clear         - Clear terminal
  date          - Show current date/time
  whoami        - Display current user info
  ls            - List available sections
  cat [file]    - Read file contents
  pwd           - Show current directory
  echo [text]   - Echo back text
  history       - Show command history
  theme         - Change terminal theme`
  },
  about: {
    description: 'Learn about Uzma',
    output: `> Loading profile...

Uzma Hamid - Full Stack Developer & AI Enthusiast

📍 Location: Texas, USA
🎓 Education: Computer Science
💼 Focus: AI/ML, Web Development, Innovation
🔬 Mission: Rebuilding AI industry for human good

"I code random stuff and turn coffee into features.
From Tomb Raider inspiration to enterprise solutions."

[SKILLS_LOADED] ✓ JavaScript/TypeScript ✓ React/Next.js ✓ Python/ML ✓ Basically she is good at everything
[PASSION_DETECTED] ✓ Innovation ✓ Problem-solving ✓ Human-centric tech ✓ and whatnot`
  },
  projects: {
    description: 'View project portfolio',
    output: `> Scanning project repositories...

┌──────────────────────────────────────────────────────────┐
│                    ACTIVE PROJECTS                       │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  🚀 Loading                                              │
│                                                          │
└──────────────────────────────────────────────────────────┘

Type 'cat project-[name]' for detailed information`
  },
  skills: {
    description: 'List technical skills',
    output: `> Analyzing skill matrix...

🛠️  TECHNICAL ARSENAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Frontend Mastery:
  ▓▓▓▓▓▓▓▓▓▓ JavaScript/TypeScript  [Expert]
  ▓▓▓▓▓▓▓▓▓▓ React/Next.js         [Expert]  
  ▓▓▓▓▓▓▓▓▓▓ HTML5/CSS3            [Expert]
  ▓▓▓▓▓▓▓▓▓░ Tailwind CSS          [Advanced]

Backend & Systems:
  ▓▓▓▓▓▓▓▓▓░ Node.js               [Advanced]
  ▓▓▓▓▓▓▓▓▓░ Python                [Advanced]
  ▓▓▓▓▓▓▓▓░░ Database Design       [Intermediate]
  ▓▓▓▓▓▓▓▓░░ Cloud Architecture    [Intermediate]

AI/ML Expertise:
  ▓▓▓▓▓▓▓▓▓░ Machine Learning      [Advanced]
  ▓▓▓▓▓▓▓▓░░ Computer Vision       [Intermediate]
  ▓▓▓▓▓▓▓▓░░ Natural Language      [Intermediate]
  ▓▓▓▓▓▓▓▓▓░ Data Analysis         [Advanced]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Specializations: Human-centric AI, Full-stack development, Machine Learning
Superpower: Turning complex problems into elegant solutions`
  },
  experience: {
    description: 'Show work experience',
    output: `> Loading career timeline...

📊 PROFESSIONAL JOURNEY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔬 RESEARCH EXCELLENCE
┌─────────────────────────────────────────────────────────────┐
│ AI/ML Research Intern @ Stanford University AI Lab         │
│ Computer Vision Research Assistant @ Drake University                  │
│ ML Intern @ EnaS Lab                                        │
│ Physics Researcher @ Drake University                          │
└─────────────────────────────────────────────────────────────┘

💻 SOFTWARE DEVELOPMENT  
┌─────────────────────────────────────────────────────────────┐
│ Software Engineer @ Olive Health               │
│ Full Stack Developer @ TeamUp - Cleo                      │
│ Software Engineer Intern @ ShieldEd Haven            │
└─────────────────────────────────────────────────────────────┘

👥 LEADERSHIP & TEACHING
┌─────────────────────────────────────────────────────────────┐
│ Teaching Assistant @ Texas A&M - Computer Science          │
│ Project Manager @ Aggie Coding Club               │
│ Computer Technician @ TAMU Technology Services             │
└─────────────────────────────────────────────────────────────┘

Career Path: Research → Development → Innovation → Impact`
  },
  contact: {
    description: 'Get contact information',
    output: `> Establishing communication channels...

📡 CONTACT PROTOCOLS ACTIVATED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📧 Primary Email:
   └─ uzma_hamid@tamu.edu
   
🔗 Professional Network:
   └─ linkedin.com/in/uzmah
   
💼 Portfolio Hub:
   └─ uzmah.netlify.app
   
☕ Coffee Chat:
   └─ Schedule a call (see contact section)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🤝 Open to: Collaborations, Opportunities, Coffee Discussions
⚡ Response Time: Usually within 24 hours
🌍 Time Zone: Central Standard Time (CST)`
  },
  'easter-egg': {
    description: 'Find hidden surprises',
    output: `> Scanning for easter eggs...
> Found hidden treasures! 🥚✨

🎮 KONAMI CODE ACTIVATED
Try the classic: ↑ ↑ ↓ ↓ ← → ← → B A

🎨 SECRET COMMANDS UNLOCKED:
  • Type 'matrix' for digital rain effect
  • Type 'coffee' for caffeine status
  • Type 'joke' for a programming joke
  • Type 'fortune' for tech wisdom
  • Hold 'alt' and click anywhere for particle explosion

🕵️ HIDDEN FEATURES:
  • Double-click the logo for surprise animation
  • Type your name to get personalized message
  • Press 'space' 5 times quickly for magic
  • Scroll sections backwards for hidden content

Keep exploring... there's more to discover! 🔍`
  },
  matrix: {
    description: 'Digital rain effect',
    output: `Wake up, Neo... The Matrix has you...

01001000 01100101 01101100 01101100 01101111
01010100 01101000 01100101 01110010 01100101
01001001 01110011 01001110 01101111 01010011
01110000 01101111 01101111 01101110 00101110
01000001 01101110 01100100 01001001 01100001
01101101 01001110 01101111 01110100 01001000
01100101 01110010 01100101 00101110 00101110

You are in a portfolio simulation.
Exit? [Y/n] _`
  },
  coffee: {
    description: 'Check caffeine status',
    output: `> Analyzing caffeine levels...

☕ CAFFEINE STATUS REPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Current Level: ████████░░ 80% (Optimal for coding)
Last Dose: 2.3 hours ago
Next Dose: Required in 47 minutes
Coffee Type: Ethiopian Single Origin

Productivity Correlation: STRONG POSITIVE ✓
Bug-fixing Ability: ENHANCED ✓
Creative Thinking: AMPLIFIED ✓

⚠️  WARNING: Caffeine dependency detected
💡 RECOMMENDATION: Keep emergency coffee supplies nearby`
  },
  joke: {
    description: 'Get a programming joke',
    output: `> Loading humor.exe...

🤡 RANDOM PROGRAMMING JOKE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Why do programmers prefer dark mode?

Because light attracts bugs! 🐛

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Debugging level: Dad joke tier
Audience satisfaction: Variable (depends on humor.tolerance)

Type 'joke' again for another one!`
  },
  fortune: {
    description: 'Get tech wisdom',
    output: `> Consulting the oracle of code...

🔮 TECH FORTUNE COOKIE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

"Code is like humor. When you have to explain it, it's bad."
                                          - Cory House

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Today's wisdom: Write code that tells a story
Lucky numbers: 42, 404, 200, 500
Debugging forecast: Clear skies ahead`
  }
};

export function InteractiveTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: 'ascii', content: ASCII_ART },
    { type: 'output', content: 'Welcome to Uzma\'s Portfolio Terminal!' },
    { type: 'output', content: 'Type "help" to see available commands.' },
    { type: 'output', content: '' }
  ]);
  const [currentInput, setCurrentInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isTyping, setIsTyping] = useState(false);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  const processCommand = async (command: string) => {
    const cmd = command.toLowerCase().trim();
    
    // Add command to history
    setCommandHistory(prev => [...prev, command]);
    setHistoryIndex(-1);
    
    // Add command line
    setLines(prev => [...prev, { 
      type: 'command', 
      content: `uzma@portfolio:~$ ${command}`,
      timestamp: new Date()
    }]);

    setIsTyping(true);
    
    // Simulate typing delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    if (cmd === 'clear') {
      setLines([]);
      setIsTyping(false);
      return;
    }
    
    if (cmd === 'date') {
      setLines(prev => [...prev, { 
        type: 'output', 
        content: new Date().toString()
      }]);
      setIsTyping(false);
      return;
    }
    
    if (cmd === 'whoami') {
      setLines(prev => [...prev, { 
        type: 'output', 
        content: 'guest_user (exploring Uzma\'s portfolio)'
      }]);
      setIsTyping(false);
      return;
    }
    
    if (cmd === 'pwd') {
      setLines(prev => [...prev, { 
        type: 'output', 
        content: '/home/uzma/portfolio'
      }]);
      setIsTyping(false);
      return;
    }
    
    if (cmd === 'ls') {
      setLines(prev => [...prev, { 
        type: 'output', 
        content: 'about.md  projects/  skills.json  experience.log  contact.vcf'
      }]);
      setIsTyping(false);
      return;
    }
    
    if (cmd.startsWith('echo ')) {
      const text = command.slice(5);
      setLines(prev => [...prev, { 
        type: 'output', 
        content: text
      }]);
      setIsTyping(false);
      return;
    }
    
    if (cmd === 'history') {
      setLines(prev => [...prev, { 
        type: 'output', 
        content: commandHistory.map((cmd, i) => `${i + 1}  ${cmd}`).join('\n')
      }]);
      setIsTyping(false);
      return;
    }

    // Handle predefined commands
    if (COMMANDS[cmd as keyof typeof COMMANDS]) {
      // Simulate typing effect for output
      const output = COMMANDS[cmd as keyof typeof COMMANDS].output;
      setLines(prev => [...prev, { 
        type: 'output', 
        content: output
      }]);
    } else {
      setLines(prev => [...prev, { 
        type: 'error', 
        content: `Command not found: ${command}\nType 'help' for available commands.`
      }]);
    }
    
    setIsTyping(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentInput.trim() && !isTyping) {
      processCommand(currentInput.trim());
      setCurrentInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCurrentInput('');
      }
    }
  };

  return (
    <>
      {/* Terminal Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 bg-black text-white p-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Terminal size={24} />
      </motion.button>

      {/* Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ 
              opacity: 1, 
              scale: isMinimized ? 0.1 : 1, 
              y: isMinimized ? 400 : 0 
            }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 bg-black rounded-lg shadow-2xl overflow-hidden border border-gray-700"
            style={{ transformOrigin: 'bottom right' }}
          >
            {/* Terminal Header */}
            <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-300 text-sm ml-2">Portfolio Terminal</span>
              </div>
              
              <div className="flex gap-1">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1 hover:bg-gray-700 rounded"
                >
                  <Minimize2 size={14} className="text-gray-400" />
                </button>
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1 hover:bg-gray-700 rounded"
                >
                  <Maximize2 size={14} className="text-gray-400" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-gray-700 rounded"
                >
                  <X size={14} className="text-gray-400" />
                </button>
              </div>
            </div>

            {/* Terminal Content */}
            {!isMinimized && (
              <div className="h-full bg-black text-green-400 font-mono text-sm flex flex-col">
                <div 
                  ref={terminalRef}
                  className="flex-1 p-4 overflow-y-auto space-y-1"
                >
                  {lines.map((line, index) => (
                    <div key={index} className={`whitespace-pre-wrap ${
                      line.type === 'command' ? 'text-cyan-400' :
                      line.type === 'error' ? 'text-red-400' :
                      line.type === 'ascii' ? 'text-green-300 text-xs' :
                      'text-green-400'
                    }`}>
                      {line.content}
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="text-green-400">
                      <span className="animate-pulse">Processing...</span>
                    </div>
                  )}
                </div>

                {/* Command Input */}
                <form onSubmit={handleSubmit} className="p-4 border-t border-gray-800">
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400">uzma@portfolio:~$</span>
                    <input
                      ref={inputRef}
                      type="text"
                      value={currentInput}
                      onChange={(e) => setCurrentInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      className="flex-1 bg-transparent text-green-400 outline-none"
                      disabled={isTyping}
                      placeholder="Type a command..."
                    />
                    <span className="text-green-400 animate-pulse">|</span>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}