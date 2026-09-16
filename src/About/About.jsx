import React from 'react'

const About = () => {
    const CurrentYear = new Date().getFullYear()
    const year = CurrentYear - 2023
  return (
    <section
    id="about" 
    className="scroll-mt-24 px-4 sm:px-6 py-16 sm:py-24 max-w-6xl mx-auto"
    >
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="flex-1 text-justify md:text-left opacity-0 animate-fade-up">
                <h2 className="text-3xl text-center md:text-left sm:text-4xl font-bold text-white mb-6">
                    About Me
                </h2>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                    I'm a passionate creative developer and designer with over {year+ " "}
                    years of experience building digital products that users love. I
                    believe in the power of good design and clean code to solve real
                    problems.
                </p>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    I'm always excited to work on projects that challenge me to grow
                    and learn something new.
                </p>
            </div>
            <div className="flex-1 hidden md:flex items-center justify-center opacity-0 animate-fade-up [animation-delay:0.2s]">
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center">
                    <div className="absolute w-40 h-40 rounded-full bg-purple-500 opacity-40 blur-xl"></div>
                    <div className="absolute animate-orbit">
                        <div className="w-32 h-32 rounded-full bg-purple-500 opacity-70 blur-lg"></div>
                    </div>
                    <div className="absolute animate-orbit-reverse">
                        <div className="w-20 h-20 rounded-full bg-violet-400 opacity-60 blur-md"></div>
                    </div>
                    <div className="absolute animate-orbit-slow">
                        <div className="w-16 h-16 rounded-full bg-fuchsia-400 opacity-50 blur-md"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About