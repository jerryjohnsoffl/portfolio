import React from 'react'
import thumbnail from '../assets/thumbnail.jpg'
import { SiGit, SiGithub } from '@icons-pack/react-simple-icons'

const Projects = () => {

  const ProjectData = [
    {
      image: thumbnail,
      title: 'EcoSync',
      description: 
      'Carbon footprint tracker and sustainability app that helps users monitor and reduce their environmental impact through personalized insights and actionable recommendations.',
      tags: ['Next.js', 'Tailwind CSS', 'Vercel'],
      github: 'https://github.com/jerryjohnsoffl/ecosync',
      live: 'https://ecosync-beta.vercel.app/',
    },
    {
      image: thumbnail, 
      title: 'Moon Phase App',
      description: 
      'A web application that provides users with real-time information about the current phase of the moon, along with a calendar view of upcoming phases and related astronomical events.',
      tags: ['React', 'Tailwind CSS'],
      github: 'https://github.com/jerryjohnsoffl/moon-phase-app',
      live: 'https://jerryjohnsoffl.github.io/moon-phase-app/',
    },
    {
      image: thumbnail, 
      title: 'SkyLens',
      description: 
      'A full stack weather application that provides users with real-time weather information, forecasts, and interactive visualizations for locations around the world.',
      tags: ['React', 'Tailwind CSS', 'Django'],
      github: 'https://github.com/jerryjohnsoffl/skylens',
      live: 'https://jerryjohnsoffl.github.io/skylens/',
    }
  ]

  return (
    <section 
    id="projects"
    className="scroll-mt-24 bg-[#0d0d12] py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 opacity-0 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            My Projects
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            A collection of projects I've worked on, ranging from web
            applications to mobile apps and everything in between.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {  ProjectData.map((item, index) => (
            <div 
            key={index}
            className="bg-[#111114] border border-purple-500/20 rounded-2xl overflow-hidden opacity-0 animate-fade-up flex flex-col">
              <div className="w-full aspect-4/3 bg-gray-800 overflow-hidden">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-600 text-xs">
                    Add image
                  </div>
                )}
              </div>
              <div className="p-5 flex flex-col flex-1 gap-3">
                <h3 className="text-white font-bold text-base">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-purple-500/50 text-purple-300 text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 mt-auto pt-2">
                  <a 
                  href={item.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-purple-500 hover:bg-purple-600 transition-colors text-white text-xs font-semibold py-2 rounded-full"
                  >
                    View Details
                  </a>
                  <a 
                  href={item.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-purple-500/40 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500 transition-colors"
                  >
                    <SiGithub className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects