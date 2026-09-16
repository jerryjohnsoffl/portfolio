import { SiGithub, SiInstagram, SiX } from '@icons-pack/react-simple-icons'
import { Linkedin, Mail } from 'lucide-react'
import React from 'react'


const  links = [
  {
    name: 'GitHub',
    url: 'https://github.com/jerryjohnsoffl',
    icon: <SiGithub className="w-5 h-5" />
  },
  {
    name: 'X',
    url: 'https://x.com/JerryJoffl',
    icon: <SiX className="w-5 h-5" />
  },
  {
    name: 'Email',
    url: 'mailto:jerryjohnsont878@gmail.com',
    icon: <Mail className="w-5 h-5" />
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/jerrydev2023',
    icon: <SiInstagram className="w-5 h-5" />
  }
]

const Socials = () => {
  return (
    <div className="flex gap-3 flex-wrap">
      {links.map((link) => (
        <a 
          href={link.url} 
          target="_blank"
          rel="noreferrer"
          className="w-11 h-11 rounded-full border border-purple-500/40 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500 transition-colors"
        >
          {link.icon}
        </a>
      ))}
    </div>
  )
}

export default Socials