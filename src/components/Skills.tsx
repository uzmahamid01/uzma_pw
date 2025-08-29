export function Skills() {
  const skillCategories = [
    {
      title: 'Leadership & Strategy',
      skills: [
        { name: 'Strategic Planning', level: 95 },
        { name: 'Team Leadership', level: 98 },
        { name: 'Product Management', level: 90 },
        { name: 'Business Development', level: 85 },
      ]
    },
    {
      title: 'Technical Expertise',
      skills: [
        { name: 'Software Architecture', level: 92 },
        { name: 'Cloud Computing', level: 88 },
        { name: 'AI/Machine Learning', level: 80 },
        { name: 'Data Analytics', level: 85 },
      ]
    },
    {
      title: 'Technologies',
      skills: [
        { name: 'React/TypeScript', level: 90 },
        { name: 'Python/Node.js', level: 85 },
        { name: 'AWS/Azure', level: 88 },
        { name: 'Docker/Kubernetes', level: 82 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl text-stone-800 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto">
            A comprehensive skill set spanning leadership, strategy, and cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-stone-50 rounded-lg p-8">
              <h3 className="text-xl text-stone-800 mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-stone-700">{skill.name}</span>
                      <span className="text-stone-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-stone-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-rose-400 to-rose-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl text-stone-800 mb-8">Certifications & Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'AWS Certified Solutions Architect',
              'PMP Certified Project Manager',
              'Forbes 30 Under 30',
              'Women in Tech Leadership Award'
            ].map((achievement, index) => (
              <div key={index} className="bg-gradient-to-br from-rose-50 to-stone-50 p-6 rounded-lg border border-rose-200">
                <p className="text-stone-700 text-sm">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}