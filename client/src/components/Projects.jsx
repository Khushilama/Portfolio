import { useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useInView } from '../hooks/useInView';

const projects = [
  {
    title: 'FlowerSellingE-commerce',
    description:
      'A full-stack e-commerce platform for selling flowers, built with Python. Features a complete backend, frontend, and an integrated chatbot to assist customers with their orders.',
    tags: ['Python', 'Full Stack', 'E-commerce', 'Chatbot'],
    category: 'Full Stack',
    gradient: 'from-pink-400 to-rose-500',
    github: 'https://github.com/Khushilama/FlowerSellingE-commerce',
    live: '#',
  },
  {
    title: 'gymAppK',
    description:
      'A Flutter mobile application for gym management and fitness tracking. Built with Dart, designed to help users manage their gym activities on the go.',
    tags: ['Flutter', 'Dart', 'Mobile App'],
    category: 'Mobile',
    gradient: 'from-orange-400 to-amber-500',
    github: 'https://github.com/Khushilama/gymAppK',
    live: '#',
  },
  {
    title: 'CRUD-ClaudeCode',
    description:
      'A web-based CRUD (Create, Read, Update, Delete) application built with vanilla JavaScript, HTML, and custom CSS — demonstrating core data management operations in the browser.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    category: 'Frontend',
    gradient: 'from-indigo-400 to-violet-500',
    github: 'https://github.com/gamenic-khushi/CRUD-ClaudeCode',
    live: '#',
  },
];

const filters = ['All', 'Full Stack', 'Frontend', 'Mobile'];

export default function Projects() {
  const [active, setActive] = useState('All');
  const [ref, isInView] = useInView(0.1);

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-2">
            Projects
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
            Things I've Built
          </h2>
          <div className="mt-4 w-14 h-1 bg-indigo-600 mx-auto rounded-full" />
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                active === f
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                  : 'bg-slate-100 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className={`group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms`, transitionDuration: '600ms' }}
            >
              {/* Thumbnail */}
              <div
                className={`h-40 bg-gradient-to-br ${project.gradient} relative flex items-center justify-center overflow-hidden`}
              >
                <span className="text-white/30 text-8xl font-extrabold select-none">
                  {project.title.charAt(0)}
                </span>
                {/* Links overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white/90 rounded-xl text-slate-800 hover:bg-white transition-colors"
                    aria-label="GitHub"
                  >
                    <FiGithub size={18} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white/90 rounded-xl text-slate-800 hover:bg-white transition-colors"
                    aria-label="Live demo"
                  >
                    <FiExternalLink size={18} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-base font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-full border border-slate-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Khushilama"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors"
          >
            <FiGithub size={16} />
            See more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
