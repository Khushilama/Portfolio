import { useState } from 'react';
import { FiMail, FiGithub, FiSend, FiCheck } from 'react-icons/fi';
import { useInView } from '../hooks/useInView';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [ref, isInView] = useInView(0.1);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:lamakhusee@gmail.com?subject=${subject}&body=${body}`;
    setStatus('success');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-2">
            Contact
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
            Get In Touch
          </h2>
          <div className="mt-4 w-14 h-1 bg-indigo-600 mx-auto rounded-full" />
          <p className="mt-4 text-slate-500 max-w-md mx-auto text-sm">
            Have a project in mind, a question, or just want to say hello? I'd love to hear from you!
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-5 gap-10 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left — contact info */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col gap-5">
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1">Let's work together</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  I'm open to freelance projects, job opportunities, and collaborations. Reach out through any channel below.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href="mailto:lamakhusee@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all group"
                >
                  <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-100 transition-colors">
                    <FiMail size={18} className="text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Email</p>
                    <p className="text-sm font-semibold text-slate-700">lamakhusee@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://github.com/Khushilama"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all group"
                >
                  <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-slate-100 transition-colors">
                    <FiGithub size={18} className="text-slate-700" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">GitHub</p>
                    <p className="text-sm font-semibold text-slate-700">Khushilama</p>
                  </div>
                </a>

                <a
                  href="https://teams.live.com/l/message/19:0e43e5471f4cc08dad158ecc5911fdacdced2fc0789a1d8f6fe9ea068feeb8a7@oneToOne.skype/1774587826576?context=%7B%22contextType%22%3A%22chat%22%7D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all group"
                >
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                    <span className="text-blue-600 font-bold text-sm">MS</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Microsoft Teams</p>
                    <p className="text-sm font-semibold text-slate-700">Chat on Teams</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Availability card */}
            <div className="bg-gradient-to-br from-indigo-600 to-violet-600 rounded-3xl p-6 text-white shadow-lg shadow-indigo-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold">Available for opportunities</span>
              </div>
              <p className="text-indigo-100 text-xs leading-relaxed">
                Currently open to frontend roles, freelance projects, and exciting collaborations.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 mb-6">Send me a message</h3>

            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-64 gap-4 text-center">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center">
                  <FiCheck size={28} className="text-green-500" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Message sent!</p>
                  <p className="text-slate-500 text-sm mt-1">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </div>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-indigo-600 text-sm font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or just say hi..."
                    className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
                >
                  <FiSend size={16} />
                  Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
