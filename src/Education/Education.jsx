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
    </section>
  )
}

export default Education