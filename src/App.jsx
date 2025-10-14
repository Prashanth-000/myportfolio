import React, { useState, useEffect } from 'react';
import { ChevronUpIcon, GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from './components/Icons';
import portfolioData from './data/portfolioData';

export default function App() {
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        setScrolled(offset > 50);
        setShowScrollTop(offset > 300);

        const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
        let currentSection = 'home';
        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section && section.offsetTop <= window.scrollY + 100) currentSection = sectionId;
        });
        setActiveSection(currentSection);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('fade-in-up');
            });
        }, { threshold: 0.12 });

        document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
    };

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <div className="min-h-screen bg-[color:var(--bg)] text-slate-300">
            {/* Header */}
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 shadow-2xl backdrop-blur-sm' : 'bg-transparent'}`}>
                <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <a href="#home" onClick={(e)=>handleNavClick(e,'home')} className="text-2xl font-bold text-white tracking-wider">
                                P<span className="text-teal-400">.</span>
                            </a>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {['home','about','skills','projects','education','contact'].map(id => (
                                    <a key={id} href={`#${id}`} onClick={(e)=>handleNavClick(e,id)}
                                       className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${activeSection===id ? 'bg-teal-500 text-white shadow-lg' : 'text-slate-300 hover:bg-slate-700 hover:text-white'}`}>
                                        {id.charAt(0).toUpperCase()+id.slice(1)}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <main>
                {/* Hero */}
                <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{backgroundImage: "linear-gradient(rgba(15,23,42,0.85), rgba(15,23,42,1)), url('https://placehold.co/1920x1080/0f172a/94a3b8?text=')", backgroundSize: 'cover'}}>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="hero-blob w-96 h-96 rounded-full bg-gradient-to-r from-teal-400 to-violet-500 opacity-30"></div>
                    </div>
                    <div className="text-center z-10 animate-on-scroll">
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4">
                            Hi, I'm <span className="gradient-text">{portfolioData.name}</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8">
                            A Creative Developer & Machine Learning Enthusiast.
                        </p>
                        <a href="#projects" onClick={(e)=>handleNavClick(e,'projects')} className="inline-block bg-teal-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-teal-600 transition-transform duration-300 transform hover:scale-105 shadow-lg">
                            View My Work
                        </a>
                    </div>
                </section>

                {/* About */}
                <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 animate-on-scroll">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-slate-100 tracking-tight">About Me</h2>
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="md:w-1/3">
                                <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden shadow-2xl ring-4 ring-teal-500/50 bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center">
                                    <img src="/src/assets/silhouette.svg" alt="silhouette" className="w-48 h-48 object-contain" />
                                </div>
                            </div>
                            <div className="md:w-2/3 text-lg text-slate-300 text-center md:text-left">
                                <p className="mb-4">{portfolioData.summary}</p>
                                <p>I enjoy turning complex problems into simple, beautiful, and intuitive solutions. When I'm not coding or experimenting with new technologies, you'll find me exploring the latest advancements in AI, or contributing to open-source projects.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills */}
                <section id="skills" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 animate-on-scroll">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-slate-100 tracking-tight">My Skills</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {portfolioData.skills.map(skill => (
                                <div key={skill.name} className="bg-slate-800 p-6 rounded-lg shadow-lg">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                                        <span className="text-teal-400 font-bold">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-slate-700 rounded-full h-2.5">
                                        <div className="bg-teal-500 h-2.5 rounded-full skill-bar-fill" style={{ width: `${scrolled ? skill.level : 0}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Projects */}
                <section id="projects" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 animate-on-scroll">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-slate-100 tracking-tight">Projects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {portfolioData.projects.map((project, index) => (
                                <div key={index} className="bg-slate-800 rounded-lg shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
                                    <div className="p-6 flex-grow">
                                        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                        <p className="text-slate-400 mb-4 flex-grow">{project.description}</p>
                                    </div>
                                    <div className="p-6 bg-slate-800/50">
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.technologies.map(tech => (
                                                <span key={tech} className="bg-teal-900/50 text-teal-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tech}</span>
                                            ))}
                                        </div>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-semibold text-teal-400 hover:text-teal-300 transition-colors duration-300">
                                            View on GitHub
                                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Education */}
                <section id="education" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 animate-on-scroll">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-slate-100 tracking-tight">Education & Courses</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-8 relative">
                                {portfolioData.education.map((edu, index) => (
                                    <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-teal-500 bg-slate-800 text-teal-400 shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                                        </div>
                                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800 p-4 rounded-lg shadow-lg">
                                            <div className="flex items-center justify-between">
                                                <h3 className="font-bold text-white">{edu.degree}</h3>
                                                <p className="font-semibold text-teal-400">{edu.year}</p>
                                            </div>
                                            <p className="text-sm text-slate-400">{edu.institution}</p>
                                            <p className="text-sm font-medium text-slate-300 mt-1">{edu.score}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-6">
                                {portfolioData.courses.map((course, index) => (
                                    <div key={index} className="bg-slate-800 p-5 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                                        <p className="font-bold text-white">{course.title}</p>
                                        <p className="text-sm text-teal-400">{course.issuer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact */}
                <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 animate-on-scroll">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">Get In Touch</h2>
                        <p className="text-lg max-w-2xl mx-auto mb-10">I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out. My inbox is always open!</p>
                        <div className="flex justify-center items-center space-x-6 md:space-x-8">
                            <a href={`mailto:${portfolioData.contact.email}`} className="text-slate-400 hover:text-teal-400 transition-transform duration-300 transform hover:scale-110"><MailIcon /></a>
                            <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-transform duration-300 transform hover:scale-110"><GithubIcon /></a>
                            <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-transform duration-300 transform hover:scale-110"><LinkedinIcon /></a>
                            <a href={`tel:${portfolioData.contact.phone}`} className="text-slate-400 hover:text-teal-400 transition-transform duration-300 transform hover:scale-110"><PhoneIcon /></a>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-slate-900/50 border-t border-slate-800 py-6">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500">
                    <p>&copy; {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.</p>
                </div>
            </footer>

            <button onClick={scrollToTop} className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-teal-500 text-white flex items-center justify-center shadow-lg transition-all duration-300 transform ${showScrollTop ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} aria-label="Scroll to top">
                <ChevronUpIcon />
            </button>
        </div>
    );
}
