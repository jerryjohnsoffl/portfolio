import React from 'react'

const Hero = () => {
  return (
    <section 
    id="home"
    className="scroll-mt-24 min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-28 sm:pt-32 pb-16"
    >
        <span className="animate-float border border-purple-500 text-purple-300 text-xs sm:text-sm px-4 py-1 rounded-full mb-6 animate-fade-up [animation-delay:0.1s]">
            Available for new Projects
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white animate-fade-up [animation-delay:0.25s]">
            Hey! , I am <span className="text-purple-500">Jerry</span>
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300 mt-4 animate-fade-up [animation-delay:0.4s]">
            Front-End Developer
        </h2>
        <p className="text-sm sm:text-base text-gray-400 max-w-xs sm:max-w-md md:max-w-xl mt-6 opacity-0 animate-fade-up [animation-delay:0.55s]">
            I craft beautiful, functional digital experiences that bring ideas to
            life. Specializing in modern web development and user-centered
            design.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full max-w-xs sm:max-w-none sm:w-auto opacity-0 animate-fade-up [animation-delay:0.7s]">
            <a 
            href="#projects"
            className="bg-purple-500 hover:bg-purple-600 hover:scale-105 transition-all duration-300 text-white px-6 py-3 rounded-full font-medium text-center"
            >
                View My Work
            </a>
            <a 
            href="#contact"
            className="border border-purple-500 hover:bg-purple-500/10 hover:scale-105 transition-all duration-300 text-white px-6 py-3 rounded-full font-medium text-center"
            >
                Get in Touch
            </a>
        </div>
    </section>
  )
}

export default Hero