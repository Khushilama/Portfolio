import { FiGithub, FiMail, FiHeart } from 'react-icons/fi';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-0.5">
            <span className="text-xl font-bold text-white">Khushi</span>
            <span className="text-2xl font-bold text-indigo-400">.</span>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Khushilama"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={18} />
            </a>
            <a
              href="mailto:lamakhusee@gmail.com"
              className="p-2 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Email"
            >
              <FiMail size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 text-center text-xs text-slate-600">
          <p className="flex items-center justify-center gap-1.5">
            &copy; {year} Khushi Lama. Built with
            <FiHeart size={12} className="text-pink-500 fill-pink-500" />
            using React &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
