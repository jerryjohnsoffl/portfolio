import React from 'react'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    
    const handleClick = (e, href) => {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
        setMenuOpen(false)
    }
  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
        <div className="hidden sm:flex items-center gap-2 bg-black/40 backdrop-blur-md border border-purple-500/30 rounded-full px-4 py-3">
            {links.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className='text-gray-300 hover:text-purple-400 text-sm font-medium px-3 py-1 rounded-full'
                >
                    {link.name}
                </a>
            ))

            }
        </div>

        <div className="block sm:hidden w-[calc(100vw-2rem)] max-w-md">
            <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            className="flex items-center bg-black/40 backdrop-blur-md border border-purple-500/30 rounded-full px-5 py-3 text-white"
            >
                {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
                <span className="ml-2">{menuOpen ? 'Close' : 'Menu'}</span>
            </button>
            {menuOpen && (
                <div className="mt-2 flex flex-col gap-1 bg-black/70 backdrop-blur-md border border-purple-500/30 rounded-2xl p-3">
                    {links.map((link) => (
                        <a 
                        key={link.name}
                        href={link.href} 
                        onClick={(e) => handleClick(e, link.href)}
                        className="text-gray-300 hover:text-purple-400 text-sm font-medium text-center py-2"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar