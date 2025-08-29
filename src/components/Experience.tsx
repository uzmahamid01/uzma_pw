import { Calendar, MapPin } from 'lucide-react';

export function Experience() {
  const workCategories = [
    {
      category: 'Software Engineer',
      companies: [
        { name: 'TechVision Solutions', role: 'Senior Full Stack Engineer', period: '2021-2024' },
        { name: 'InnovateTech Inc.', role: 'Software Engineer', period: '2019-2021' },
        { name: 'CloudFirst Technologies', role: 'Junior Developer', period: '2018-2019' }
      ]
    },
    {
      category: 'Research',
      companies: [
        { name: 'Stanford AI Lab', role: 'Research Intern', period: '2020' },
        { name: 'MIT Innovation Lab', role: 'Research Assistant', period: '2019' },
        { name: 'Google Research', role: 'Student Researcher', period: '2018' }
      ]
    },
    {
      category: 'Leadership',
      companies: [
        { name: 'TechVision Solutions', role: 'Team Lead', period: '2022-2024' },
        { name: 'Women in Tech', role: 'Chapter President', period: '2021-2023' },
        { name: 'Diversity Council', role: 'Board Member', period: '2020-2022' }
      ]
    }
  ];

  return (
    <section id="work" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-8">
        {/* Work Experience Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl tracking-tight text-foreground mb-8">
            //work exp
          </h2>
        </div>

        <div className="space-y-16">
          {workCategories.map((category, index) => (
            <div key={index} className="space-y-8">
              <h3 className="text-xl text-foreground">
                /{category.category.toLowerCase().replace(' ', '')}
              </h3>
              
              <div className="space-y-6 ml-8">
                {category.companies.map((company, companyIndex) => (
                  <div key={companyIndex} className="border-l border-border pl-8 py-4">
                    <div className="space-y-2">
                      <h4 className="text-lg text-foreground">{company.name}</h4>
                      <p className="text-muted-foreground">{company.role}</p>
                      <span className="text-sm text-muted-foreground">{company.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 pt-16 border-t border-border">
          <h3 className="text-xl text-foreground mb-8">//skills</h3>
          <div className="flex flex-wrap gap-3">
            {[
              'React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 
              'Machine Learning', 'Leadership', 'Product Strategy', 'Team Management',
              'System Design', 'Agile', 'DevOps', 'UI/UX Design'
            ].map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-muted text-muted-foreground text-sm rounded-full border border-border hover:bg-accent transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}