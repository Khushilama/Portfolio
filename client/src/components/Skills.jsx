import { useInView } from '../hooks/useInView';

const frontendSkills = [
  { name: 'HTML & CSS', level: 92 },
  { name: 'JavaScript', level: 85 },
  { name: 'React.js', level: 82 },
  { name: 'Tailwind CSS', level: 88 },
  { name: 'UI / UX Design', level: 80 },
  { name: 'Responsive Design', level: 90 },
];

const backendSkills = [
  { name: 'Node.js', level: 65 },
  { name: 'Express.js', level: 60 },
  { name: 'SQL / Databases', level: 58 },
  { name: 'Git & GitHub', level: 82 },
  { name: 'Figma', level: 78 },
  { name: 'REST APIs', level: 65 },
];

function SkillBar({ name, level, isInView, delay }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-slate-700">{name}</span>
        <span className="text-xs font-semibold text-indigo-600">{level}%</span>
      </div>
      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isInView ? `${level}%` : '0%',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

const techBadges = [
  'React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind',
  'Node.js', 'Express', 'SQL', 'Git', 'GitHub', 'Figma', 'REST API',
];

const softSkills = [
  { label: 'Fast Learner', icon: '⚡', desc: 'Picks up new tools and concepts quickly' },
  { label: 'Detail-oriented', icon: '🎯', desc: 'Careful eye for design and code quality' },
  { label: 'Creative Thinker', icon: '💡', desc: 'Finds fresh solutions to design problems' },
  { label: 'Team Player', icon: '🤝', desc: 'Collaborates well across roles and teams' },
  { label: 'Adaptable', icon: '🌱', desc: 'Thrives in changing environments' },
  { label: 'Curious', icon: '🔭', desc: 'Always eager to explore and learn more' },
  { label: 'Communication', icon: '💬', desc: 'Clear and effective across all levels' },
  { label: 'Problem Solver', icon: '🔧', desc: 'Breaks down challenges methodically' },
];

export default function Skills() {
  const [ref, isInView] = useInView(0.15);

  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-2">
            My Skills
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
            Technologies I Work With
          </h2>
          <div className="mt-4 w-14 h-1 bg-indigo-600 mx-auto rounded-full" />
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Frontend column */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center">
                <span className="text-indigo-600 text-lg font-bold">&lt;/&gt;</span>
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Frontend & Design</h3>
                <p className="text-xs text-slate-400">What I love most</p>
              </div>
            </div>
            <div className="space-y-5">
              {frontendSkills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  isInView={isInView}
                  delay={i * 100}
                />
              ))}
            </div>
          </div>

          {/* Backend column */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-10 bg-violet-50 rounded-xl flex items-center justify-center">
                <span className="text-violet-600 text-lg font-bold">{ }</span>
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Backend & Tools</h3>
                <p className="text-xs text-slate-400">Growing every day</p>
              </div>
            </div>
            <div className="space-y-5">
              {backendSkills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  isInView={isInView}
                  delay={i * 100 + 100}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Tech badge cloud */}
        <div className="mt-12 text-center">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Tech I've touched
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {techBadges.map((tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 bg-white text-slate-600 text-sm font-medium rounded-full border border-slate-200 hover:border-indigo-300 hover:text-indigo-600 transition-colors cursor-default shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Soft skills */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
              Beyond the code
            </p>
            <h3 className="text-xl font-bold text-slate-900">Soft Skills</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {softSkills.map((skill) => (
              <div
                key={skill.label}
                className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all group text-center"
              >
                <span className="text-2xl block mb-2">{skill.icon}</span>
                <p className="text-sm font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                  {skill.label}
                </p>
                <p className="text-xs text-slate-400 mt-1 leading-snug">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
