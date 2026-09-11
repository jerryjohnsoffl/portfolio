import React from 'react'

const skillsData = [
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Next.js', 'TypeScript'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'MongoDB', 'Python', 'SQL', 'Django', 'REST APIs', 'Flask'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Figma', 'VS Code', 'Postman'],
  },
]

const Skills = () => {
  return (
    <section 
    id="skills"
    className="scroll-mt-24 px-4 sm:px-6 py-16 sm:py-24 max-w-6xl mx-auto"
    >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 opacity-0 animate-fade-up">
            Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {skillsData.map((card, index) => (
                <div 
                key={index}
                className="bg-[#111114] border border-purple-500/20 rounded-2xl p-6 opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 0.15}s` }}
                >
                    <h3 className="text-white font-bold text-lg mb-4">
                        {card.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {card.skills.map((skill) => (
                            <span 
                            key={skill}
                            className="border border-purple-500/50 text-purple-300 text-xs px-3 py-1 rounded-full"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Skills