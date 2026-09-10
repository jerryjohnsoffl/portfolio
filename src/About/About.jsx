import React from 'react'

const About = () => {
  return (
    <section
    id="about" 
    className="px-4 sm:px-6 py-16 sm:py-24 max-w-6xl mx-auto"
    >
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="flex-1 text-center md:text-left opacity-0 animate-fade-up">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                    About Me
                </h2>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                    I'm a passionate creative developer and designer with over 5
                    years of experience building digital products that users love. I
                    believe in the power of good design and clean code to solve real
                    problems.
                </p>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                    I'm a passionate creative developer and designer with over 5
                    years of experience building digital products that users love. I
                    believe in the power of good design and clean code to solve real
                    problems.
                </p>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    I'm always excited to work on projects that challenge me to grow
                    and learn something new.
                </p>
            </div>
            <div className="flex-1 flex items-center justify-center opacity-0 animate-fade-up [animation-delay:0.2s]">
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center">
                    <span className="absolute top-2 left-4 w-2 h-2 bg-purple-400 rounded-full opacity-50 animate-float"></span>
                    <span className="absolute bottom-6 right-2 w-3 h-3 bg-white rounded-full opacity-30 animate-float [animation-delay:0.5s]"></span>
                    <span className="absolute top-10 right-6 w-1.5 h-1.5 bg-purple-300 rounded-full opacity-60 animate-float [animation-delay:1s]"></span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About