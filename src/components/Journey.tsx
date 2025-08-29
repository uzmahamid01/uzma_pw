

interface JourneyItem {
  title: string;
  company: string;
  period?: string;
}

interface JourneySection {
  title: string;
  items: JourneyItem[];
}

const journeyData: JourneySection[] = [
  {
    title: 'Research',
    items: [
      {
        title: 'ML Intern',
        company: 'EnaS Lab'
      },
      {
        title: 'AI/ML Research Intern',
        company: 'Stanford University AI Research Lab'
      },
      {
        title: 'Computer Vision Research Assistant',
        company: 'Drake University'
      },
      {
        title: 'Undergraduate Physics Researcher',
        company: 'Drake University - Physics'
      }
    ]
  },
  {
    title: 'Software',
    items: [
      {
        title: 'Software Engineer - CTO',
        company: 'ShieldEd Haven'
      },
      {
        title: 'Software Engineer',
        company: 'Olive Health'
      },
      {
        title: 'Full Stack Developer',
        company: 'TeamUp - Cleo'
      }
    ]
  },
  {
    title: 'Leadership & Teaching',
    items: [
      {
        title: 'Computer Technician',
        company: 'TAMU - Technology Services DSA'
      },
      {
        title: 'Teaching Assistant',
        company: 'Texas A&M University - Computer Science'
      },
      {
        title: 'Project Manager',
        company: 'Aggie Coding Club'
      }
    ]
  }
];

export function Journey() {
  return (
    <section id="journey" className="py-24 text-black relative doodle-container">
      
      
      <div className="max-w-7xl mx-auto  px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-lg md:text-xl font-medium text-foreground mb-8">
            [MY JOURNEY]
          </h2>
          <div className="max-w-2xl">
            <p className="text-2xl md:text-2xl lg:text-4xl font-medium text-foreground leading-relaxed">
              cool places I've <span className="doodle-highlight">worked at,</span> <span className="doodle-highlight"> learned </span> <br /> and made <span className="doodle-highlight"> <strong> a difference</strong></span>.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {journeyData.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-8">
              <div className="border-b border-gray-600 pb-4">
                <h3 className="text-xl font-medium text-black tracking-wide">
                  {section.title}
                </h3>
              </div>

              <div className="space-y-6">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="space-y-2">
                    <h4 className=" font-medium text-black leading-relaxed">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed">
                      {item.company}
                    </p>
                    {item.period && (
                      <p className="text-xs text-gray-500">
                        {item.period}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}