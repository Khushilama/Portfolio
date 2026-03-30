import { FiGithub, FiMail, FiArrowRight } from 'react-icons/fi';
import profileImg from '../image/shared image.jpg';

export default function Hero({ onDownloadCV }) {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50/40"
    >
      {/* Background blobs */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-indigo-100/60 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-72 h-72 bg-violet-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — text content */}
          <div className="space-y-6 animate-slide-up">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-sm text-indigo-600 font-medium">
              <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
              Open to opportunities
            </div>

            {/* Name */}
            <div>
              <p className="text-slate-500 text-lg mb-1 font-medium">Hi there, I'm</p>
              <h1 className="text-5xl lg:text-[68px] font-extrabold text-slate-900 leading-tight tracking-tight">
                Khushi
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500">
                  Lama
                </span>
              </h1>
            </div>

            {/* Title */}
            <p className="text-lg text-slate-600 font-semibold">
              Frontend Designer &amp; Developer
            </p>

            {/* Bio */}
            <p className="text-slate-500 text-base leading-relaxed max-w-md">
              A free soul passionate about crafting beautiful digital experiences.
              Expanding my horizons into backend &amp; databases — always eager to
              learn more about the world.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all hover:-translate-y-0.5 shadow-lg shadow-indigo-200"
              >
                View My Work <FiArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:border-indigo-300 hover:text-indigo-600 transition-all hover:-translate-y-0.5"
              >
                Let's Connect
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://github.com/Khushilama"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="mailto:lamakhusee@gmail.com"
                className="flex items-center gap-2 p-2.5 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors"
                aria-label="Email"
              >
                <FiMail size={20} />
              </a>
              <span className="text-sm text-slate-400 ml-1">lamakhusee@gmail.com</span>
            </div>
          </div>

          {/* Right — avatar card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main card */}
              <div className="w-72 h-72 lg:w-[360px] lg:h-[360px] rounded-3xl relative overflow-hidden border border-indigo-100 shadow-xl">
                <img
                  src={profileImg}
                  alt="Khushi Lama"
                  className="w-full h-full object-cover object-top"
                />
                {/* Decorative dots */}
                <div className="absolute top-4 right-4 grid grid-cols-4 gap-1.5">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  ))}
                </div>
              </div>

              {/* Floating status card */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-3.5 border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-green-50 rounded-xl flex items-center justify-center">
                    <span className="text-green-500 text-lg">✦</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Currently at</p>
                    <p className="text-xs font-bold text-slate-800">Gamenic Virtual Studio Pvt. Ltd</p>
                  </div>
                </div>
              </div>

              {/* Floating skills card */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-3.5 border border-slate-100">
                <p className="text-xs text-slate-400 mb-1.5">Tech Stack</p>
                <div className="flex gap-1.5 flex-wrap max-w-[120px]">
                  {['React', 'Tailwind', 'Node.js'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-indigo-50 text-indigo-600 text-[10px] font-semibold rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 flex flex-wrap gap-8 max-w-sm">
          {[
            { value: '3+', label: 'Years Working' },
            { value: '3', label: 'Companies' },
            { value: '∞', label: 'Curiosity' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-extrabold text-slate-900">{stat.value}</p>
              <p className="text-xs text-slate-500 mt-0.5 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
