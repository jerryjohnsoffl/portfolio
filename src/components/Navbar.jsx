import React from 'react'
import { useState } from 'react'

const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
        <div className="hidden sm:flex items-center gap-2 bg-black/40 backdrop-blur-md border border-purple-500/30 rounded-full px-4 py-3">
            {links.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    className='text-gray-300 hover:text-purple-400 text-sm font-medium px-3 py-1 rounded-full'
                >
                    {link.name}
                </a>
            ))

            }
        </div>
    </nav>
  )
}

export default Navbar