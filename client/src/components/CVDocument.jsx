import { forwardRef } from 'react';
import profileImg from '../image/shared image.jpg';

const s = {
  page: {
    width: '794px',
    minHeight: '1123px',
    background: '#ffffff',
    padding: '48px 52px',
    fontFamily: "'Inter', Arial, sans-serif",
    color: '#1e293b',
    fontSize: '11px',
    lineHeight: '1.6',
    position: 'absolute',
    left: '-9999px',
    top: 0,
    boxSizing: 'border-box',
  },
  header: {
    borderBottom: '2px solid #4f46e5',
    paddingBottom: '20px',
    marginBottom: '24px',
  },
  name: {
    fontSize: '28px',
    fontWeight: '800',
    color: '#0f172a',
    margin: 0,
    letterSpacing: '-0.5px',
  },
  title: {
    fontSize: '13px',
    color: '#4f46e5',
    fontWeight: '600',
    marginTop: '4px',
    marginBottom: '10px',
  },
  contactRow: {
    display: 'flex',
    gap: '20px',
    fontSize: '10.5px',
    color: '#475569',
    flexWrap: 'wrap',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  section: {
    marginBottom: '22px',
  },
  sectionTitle: {
    fontSize: '10px',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    color: '#4f46e5',
    marginBottom: '10px',
    paddingBottom: '4px',
    borderBottom: '1px solid #e2e8f0',
  },
  entryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '2px',
  },
  entryTitle: {
    fontWeight: '700',
    fontSize: '11.5px',
    color: '#0f172a',
  },
  entryCompany: {
    fontWeight: '600',
    fontSize: '11px',
    color: '#4f46e5',
    marginBottom: '2px',
  },
  entryMeta: {
    fontSize: '10px',
    color: '#64748b',
    marginBottom: '4px',
  },
  entryPeriod: {
    fontSize: '10px',
    color: '#64748b',
    whiteSpace: 'nowrap',
    fontWeight: '600',
  },
  bullet: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '6px',
    marginBottom: '2px',
    fontSize: '10.5px',
    color: '#334155',
  },
  dot: {
    width: '4px',
    height: '4px',
    borderRadius: '50%',
    background: '#4f46e5',
    marginTop: '5px',
    flexShrink: 0,
  },
  entryBlock: {
    marginBottom: '14px',
  },
  skillsGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
  },
  skillTag: {
    padding: '3px 10px',
    background: '#eef2ff',
    color: '#4f46e5',
    borderRadius: '20px',
    fontSize: '10px',
    fontWeight: '600',
  },
  twoCol: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '24px',
  },
  summaryText: {
    fontSize: '11px',
    color: '#475569',
    lineHeight: '1.7',
  },
};

const CVDocument = forwardRef(function CVDocument(_props, ref) {
  return (
    <div ref={ref} style={s.page}>
      {/* Header */}
      <div style={{ ...s.header, display: 'flex', alignItems: 'center', gap: '24px' }}>
        {/* Profile photo */}
        <img
          src={profileImg}
          alt="Khushi Lama"
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            objectFit: 'cover',
            objectPosition: 'top',
            border: '3px solid #4f46e5',
            flexShrink: 0,
          }}
          crossOrigin="anonymous"
        />
        {/* Name & contact */}
        <div>
          <h1 style={s.name}>Khushi Lama</h1>
          <p style={s.title}>Frontend Designer &amp; Developer</p>
          <div style={s.contactRow}>
            <span style={s.contactItem}>📧 lamakhusee@gmail.com</span>
            <span style={s.contactItem}>💻 github.com/Khushilama</span>
            <span style={s.contactItem}>🌐 Portfolio Website</span>
          </div>
        </div>
      </div>

      {/* Profile */}
      <div style={s.section}>
        <p style={s.sectionTitle}>Profile</p>
        <p style={s.summaryText}>
          Frontend Designer and Developer with a passion for building beautiful, responsive web
          experiences. Currently expanding expertise into backend development and databases.
          A fast learner with a creative mindset and strong attention to detail — bringing a
          unique perspective from a background in business, accounting, and sales.
        </p>
      </div>

      {/* Two column: Experience + (Education + Skills) */}
      <div style={s.twoCol}>
        {/* Left — Experience */}
        <div>
          <div style={s.section}>
            <p style={s.sectionTitle}>Experience</p>

            <div style={s.entryBlock}>
              <div style={s.entryRow}>
                <span style={s.entryTitle}>Frontend Developer</span>
                <span style={s.entryPeriod}>2024 — Present</span>
              </div>
              <p style={s.entryCompany}>Gamenic Virtual Studio Pvt. Ltd</p>
              <div style={s.bullet}><span style={s.dot}/><span>Building responsive UIs with React and Tailwind CSS.</span></div>
              <div style={s.bullet}><span style={s.dot}/><span>Translating Figma designs into pixel-perfect components.</span></div>
              <div style={s.bullet}><span style={s.dot}/><span>Collaborating with design and backend teams.</span></div>
            </div>

            <div style={s.entryBlock}>
              <div style={s.entryRow}>
                <span style={s.entryTitle}>Accountant</span>
                <span style={s.entryPeriod}>2023 — 2024</span>
              </div>
              <p style={s.entryCompany}>Paper Cloud Pvt. Ltd</p>
              <div style={s.bullet}><span style={s.dot}/><span>Managed financial records and monthly reconciliations.</span></div>
              <div style={s.bullet}><span style={s.dot}/><span>Maintained structured digital tracking and reporting.</span></div>
            </div>

            <div style={s.entryBlock}>
              <div style={s.entryRow}>
                <span style={s.entryTitle}>Sales Clerk</span>
                <span style={s.entryPeriod}>2022</span>
              </div>
              <p style={s.entryCompany}>Masala Beads</p>
              <div style={s.bullet}><span style={s.dot}/><span>Customer service, sales operations, and inventory management.</span></div>
            </div>
          </div>
        </div>

        {/* Right — Education + Skills */}
        <div>
          <div style={s.section}>
            <p style={s.sectionTitle}>Education</p>

            <div style={s.entryBlock}>
              <div style={s.entryRow}>
                <span style={s.entryTitle}>Bachelor's with Honours</span>
                <span style={s.entryPeriod}>2021 — 2025</span>
              </div>
              <p style={s.entryCompany}>Sunway International Business School</p>
              <p style={{ ...s.entryMeta }}>Business Administration (Hons)</p>
            </div>

            <div style={s.entryBlock}>
              <div style={s.entryRow}>
                <span style={s.entryTitle}>Higher Secondary (A-Level)</span>
                <span style={s.entryPeriod}>2019</span>
              </div>
              <p style={s.entryCompany}>Reliance Academy</p>
            </div>
          </div>

          <div style={s.section}>
            <p style={s.sectionTitle}>Technical Skills</p>
            <div style={{ marginBottom: '10px' }}>
              <p style={{ ...s.entryMeta, marginBottom: '5px', fontWeight: '600' }}>Frontend &amp; Design</p>
              <div style={s.skillsGrid}>
                {['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Figma', 'Responsive Design'].map(sk => (
                  <span key={sk} style={s.skillTag}>{sk}</span>
                ))}
              </div>
            </div>
            <div>
              <p style={{ ...s.entryMeta, marginBottom: '5px', fontWeight: '600' }}>Backend &amp; Tools</p>
              <div style={s.skillsGrid}>
                {['Node.js', 'Express', 'SQL', 'REST API', 'Git', 'GitHub'].map(sk => (
                  <span key={sk} style={s.skillTag}>{sk}</span>
                ))}
              </div>
            </div>
          </div>

          <div style={s.section}>
            <p style={s.sectionTitle}>Soft Skills</p>
            <div style={s.skillsGrid}>
              {['Fast Learner', 'Detail-oriented', 'Creative', 'Team Player', 'Problem Solver'].map(sk => (
                <span key={sk} style={{ ...s.skillTag, background: '#f0fdf4', color: '#16a34a' }}>{sk}</span>
              ))}
            </div>
          </div>

          <div style={s.section}>
            <p style={s.sectionTitle}>Projects</p>

            <div style={s.entryBlock}>
              <div style={s.entryRow}>
                <span style={s.entryTitle}>FlowerSellingE-commerce</span>
              </div>
              <p style={{ ...s.entryMeta, marginBottom: '3px' }}>Python · Full Stack · Chatbot</p>
              <div style={s.bullet}><span style={s.dot}/><span>Full-stack e-commerce platform for selling flowers with backend, frontend, and integrated chatbot.</span></div>
              <p style={{ ...s.entryMeta, marginTop: '2px' }}>github.com/Khushilama/FlowerSellingE-commerce</p>
            </div>

            <div style={s.entryBlock}>
              <div style={s.entryRow}>
                <span style={s.entryTitle}>gymAppK</span>
              </div>
              <p style={{ ...s.entryMeta, marginBottom: '3px' }}>Flutter · Dart · Mobile App</p>
              <div style={s.bullet}><span style={s.dot}/><span>Flutter mobile application for gym management and fitness tracking.</span></div>
              <p style={{ ...s.entryMeta, marginTop: '2px' }}>github.com/Khushilama/gymAppK</p>
            </div>

            <div style={s.entryBlock}>
              <div style={s.entryRow}>
                <span style={s.entryTitle}>CRUD-ClaudeCode</span>
              </div>
              <p style={{ ...s.entryMeta, marginBottom: '3px' }}>JavaScript · HTML · CSS</p>
              <div style={s.bullet}><span style={s.dot}/><span>Web-based CRUD application demonstrating Create, Read, Update, and Delete operations in the browser.</span></div>
              <p style={{ ...s.entryMeta, marginTop: '2px' }}>github.com/gamenic-khushi/CRUD-ClaudeCode</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default CVDocument;
