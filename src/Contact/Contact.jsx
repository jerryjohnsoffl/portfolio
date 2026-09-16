import React, { useState } from 'react'
import Socials from '../components/Socials'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
    }
    const services =[
        'Web & Mobile Development',
        'UI/UX Design',
        'Technical Consulting',
        'Speaking & Workshops',
    ]

  return (
    <section 
    id="contact"
    className="scroll-mt-24 px-4 sm:px-6 py-16 sm:py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 opacity-0 animate-fade-up">
            Let's Work Together
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 bg-[#111114] border border-purple-500/20 rounded-2xl p-6 sm:p-8 opacity-0 animate-fade-up">
                <h3 className="text-white font-bold text-lg mb-6">
                    Send me a message
                </h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="text-gray-400 text-sm">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="bg-[#111114] text-gray-400 placeholder:text-gray-500 border border-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Your name"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-gray-400 text-sm">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-[#111114] text-gray-400 placeholder:text-gray-500 border border-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Your email"
                        />  
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-gray-400 text-sm">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell me about your project..."
                            rows={5}
                            className="bg-black/40 border border-purple-500/30 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-purple-500 transition-colors resize-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-purple-500 hover:bg-purple-600 transition-colors text-white font-semibold py-3 rounded-full mt-2"
                        >
                        Send Message
                    </button>
                </form>
            </div>
            <div className="flex-1 flex flex-col gap-8 opacity-0 animate-fade-up [animation-delay:0.2s]">
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    I'm always open to discussing new opportunities, creative
                    projects, or partnerships. Whether you have a specific project in
                    mind or just want to explore possibilities, I'd love to connect.
                </p>
                <div>
                    <ul className="flex flex-col gap-3 mt-2">
                        {services.map((item, index)=> (
                            <li key={index} className="flex items-center gap-3 text-gray-300 text-sm">
                                <span className="w-2 h-2 rounded-full bg-purple-500 shrink-0"></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-bold text-base mb-4">
                        Connect with Me
                    </h3>
                    <Socials />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact