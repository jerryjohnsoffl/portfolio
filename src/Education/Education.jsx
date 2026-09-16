import React from 'react'

const EducationData = [
    {
        institution: 'APJ Abdul Kalam Technological University',
        degree: 'B.Tech in Artificial Intelligence and Machine Learning',
        duration: '2023 - 2027',
        description: 'Studied various programming languages and software engineering principles.'
    }
]

const Education = () => {
  return (
    <section
    id="education" 
    className="scroll-mt-24 px-4 sm:px-6 py-16 sm:py-24 max-w-6xl mx-auto"
    >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 opacity-0 animate-fade-up">
            Education
        </h2>
        <div className="relative flex flex-col gap-8">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-purple-500/30"></div>
            {EducationData.map((item, index) => (
                <div 
                key={index}
                className="relative flex items-start gap-6 opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
                >
                    <div className="flex flex-col items-center z-10 shrink-0">
                        <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center text-center justify-center text-white text-xs font-semibold"></div>
                    </div>
                    <div className="flex-1 bg-[#111114] border border-purple-500/20 rounded-2xl p-5 sm:p-6">
                        <h3 className="text-white font-bold text-base sm:text-lg">
                            {item.degree}
                        </h3>
                        <p className="text-purple-400 text-sm mt-1">
                            {item.institution}
                        </p>
                        <p className="text-gray-400 text-sm mt-1">
                            {item.duration}
                        </p>
                        <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Education