import { FiBook, FiCalendar, FiAward } from 'react-icons/fi';
import { useInView } from '../hooks/useInView';

const education = [
  {
    degree: "Bachelor's of Business with Honours",
    institution: 'Sunway International Business School',
    period: '2021 — 2025',
    detail: 'Graduated with Honours — combining business fundamentals with a passion for technology and digital innovation.',
  },
  {
    degree: 'Higher Secondary Education (A-Level)',
    institution: 'Reliance Academy',
    period: '2019',
    detail: 'Completed higher secondary schooling, building a strong academic foundation.',
  },
];

export default function Education() {
  const [ref, isInView] = useInView(0.1);

  return (
    <section id="education" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-2">
            Education
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
            Academic Background
          </h2>
          <div className="mt-4 w-14 h-1 bg-indigo-600 mx-auto rounded-full" />
        </div>

        <div ref={ref} className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-5 lg:left-8 top-0 bottom-0 w-px bg-slate-200" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <div
                key={i}
                className={`relative flex gap-6 lg:gap-10 transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 lg:w-16 lg:h-16 bg-indigo-50 border-2 border-indigo-200 rounded-2xl flex items-center justify-center z-10 shadow-sm">
                    <FiBook size={18} className="text-indigo-600" />
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm mb-2">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="text-base font-bold text-slate-900 max-w-xs">{edu.degree}</h3>
                    <span className="flex items-center gap-1 text-xs text-slate-500 whitespace-nowrap">
                      <FiCalendar size={12} /> {edu.period}
                    </span>
                  </div>
                  <p className="text-indigo-600 font-semibold text-sm mb-3 flex items-center gap-1.5">
                    <FiAward size={14} />
                    {edu.institution}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">{edu.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
