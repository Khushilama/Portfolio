import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onDownloadCV }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-0.5">
            <span className="text-xl font-bold text-slate-900">Khushi</span>
            <span className="text-2xl font-bold text-indigo-600">.</span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Download CV */}
          <div className="hidden md:block">
            <button
              onClick={onDownloadCV}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
            >
              <FiDownload size={14} />
              Download CV
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 shadow-lg rounded-b-2xl pb-4 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-5 py-2.5 text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="px-5 pt-3">
              <button
                onClick={() => { setIsOpen(false); onDownloadCV(); }}
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-semibold text-white bg-indigo-600 rounded-lg"
              >
                <FiDownload size={14} />
                Download CV
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
