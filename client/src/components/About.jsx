import { FiGithub, FiMail, FiHeart } from 'react-icons/fi';
import profileImg from '../image/shared image.jpg';
import { useInView } from '../hooks/useInView';

const qualities = [
  'Fast Learner', 'Detail-oriented', 'Creative Thinker',
  'Team Player', 'Problem Solver', 'Free Spirit',
];

export default function About() {
  const [ref, isInView] = useInView(0.2);

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-2">
            About Me
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
            Who I Am
          </h2>
          <div className="mt-4 w-14 h-1 bg-indigo-600 mx-auto rounded-full" />
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left — avatar + social */}
          <div className="flex flex-col items-center lg:items-start gap-6">
            <div className="relative">
              <div className="w-56 h-56 rounded-3xl overflow-hidden shadow-lg border border-indigo-100">
                <img
                  src={profileImg}
                  alt="Khushi Lama"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Floating heart */}
              <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-pink-50 border border-pink-100 rounded-xl flex items-center justify-center shadow-md">
                <FiHeart size={18} className="text-pink-400 fill-pink-400" />
              </div>
            </div>

            {/* Contact chips */}
            <div className="flex flex-col gap-2 w-full max-w-xs">
              <a
                href="mailto:lamakhusee@gmail.com"
                className="flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition-colors text-slate-600 text-sm font-medium border border-slate-100"
              >
                <FiMail size={16} className="text-indigo-500 flex-shrink-0" />
                lamakhusee@gmail.com
              </a>
              <a
                href="https://github.com/Khushilama"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition-colors text-slate-600 text-sm font-medium border border-slate-100"
              >
                <FiGithub size={16} className="text-indigo-500 flex-shrink-0" />
                github.com/Khushilama
              </a>
            </div>
          </div>

          {/* Right — bio */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">
                Frontend Designer expanding into the full stack
              </h3>
              <p className="text-slate-600 leading-relaxed">
                I'm Khushi — a creative soul who fell in love with building things for the web.
                I started as a designer who couldn't stop wondering how things work under the hood,
                which led me to dive into backend development and databases.
              </p>
              <p className="text-slate-600 leading-relaxed">
                With a background spanning sales, accounting, and now software development,
                I bring a unique perspective to every project. I believe good design isn't just about
                how things look — it's about how they work and how they make people feel.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed italic border-l-2 border-indigo-300 pl-4">
                "A free soul who is eager to learn more about the world — one line of code at a time."
              </p>
            </div>

            {/* Quality tags */}
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                What describes me
              </p>
              <div className="flex flex-wrap gap-2">
                {qualities.map((q) => (
                  <span
                    key={q}
                    className="px-3 py-1.5 bg-indigo-50 text-indigo-700 text-sm font-medium rounded-full border border-indigo-100 hover:bg-indigo-100 transition-colors cursor-default"
                  >
                    {q}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              {[
                { value: '2022', label: 'Started Working' },
                { value: '2024', label: 'Turned Developer' },
                { value: 'SIBS', label: 'Business Degree' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="text-center p-4 bg-slate-50 rounded-2xl border border-slate-100"
                >
                  <p className="text-lg font-bold text-indigo-600">{s.value}</p>
                  <p className="text-xs text-slate-500 mt-0.5 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
