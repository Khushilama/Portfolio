import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import { useInView } from '../hooks/useInView';

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Gamenic Virtual Pvt Ltd',
    period: '2024 — Present',
    type: 'Full-time',
    location: 'On-site',
    current: true,
    highlights: [
      'Building responsive and interactive web interfaces using React and Tailwind CSS.',
      'Collaborating with designers and backend developers to deliver polished features.',
      'Translating Figma designs into pixel-perfect, accessible components.',
    ],
  },
  {
    role: 'Accountant',
    company: 'Papercloud',
    period: '2023 — 2024',
    type: 'Full-time',
    location: 'On-site',
    current: false,
    highlights: [
      'Managed financial records, bookkeeping, and monthly reconciliations.',
      'Used digital tools and spreadsheets for financial tracking and reporting.',
      'Developed strong attention to detail and structured thinking.',
    ],
  },
  {
    role: 'Sales Clerk',
    company: 'Masala Beads',
    period: '2022',
    type: 'Full-time',
    location: 'On-site',
    current: false,
    highlights: [
      'Handled customer service, sales operations, and inventory management.',
      'Developed communication and people skills working with diverse customers.',
    ],
  },
];

export default function Experience() {
  const [ref, isInView] = useInView(0.1);

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-2">
            Experience
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
            My Work Journey
          </h2>
          <div className="mt-4 w-14 h-1 bg-indigo-600 mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div ref={ref} className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-5 lg:left-8 top-0 bottom-0 w-px bg-slate-100" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`relative flex gap-6 lg:gap-10 transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div
                    className={`w-10 h-10 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center border-2 shadow-sm z-10 ${
                      exp.current
                        ? 'bg-indigo-600 border-indigo-600 shadow-indigo-200'
                        : 'bg-white border-slate-200'
                    }`}
                  >
                    <FiBriefcase
                      size={18}
                      className={exp.current ? 'text-white' : 'text-slate-400'}
                    />
                  </div>
                </div>

                {/* Content card */}
                <div
                  className={`flex-1 pb-2 bg-white rounded-2xl p-6 border shadow-sm mb-2 ${
                    exp.current ? 'border-indigo-100 shadow-indigo-50' : 'border-slate-100'
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-base font-bold text-slate-900">{exp.role}</h3>
                      <p className="text-indigo-600 font-semibold text-sm">{exp.company}</p>
                    </div>
                    {exp.current && (
                      <span className="px-2.5 py-1 bg-green-50 text-green-600 text-xs font-semibold rounded-full border border-green-100">
                        Current
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-3 mb-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <FiCalendar size={12} /> {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiMapPin size={12} /> {exp.location}
                    </span>
                    <span className="px-2 py-0.5 bg-slate-100 rounded-full">{exp.type}</span>
                  </div>

                  <ul className="space-y-1.5">
                    {exp.highlights.map((point, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
