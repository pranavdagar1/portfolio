import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-800 text-white py-24 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-6">
          Let's Connect
        </h2>

        <p className="text-slate-400 mb-12">
          I'm actively seeking Site Reliability Engineering and DevOps
          opportunities. Feel free to reach out or explore my work.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          <a
            href="mailto:your-email@example.com"
            className="flex items-center gap-4 bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-cyan-400 hover:-translate-y-1 transition-all"
          >
            <FaEnvelope className="text-3xl text-cyan-400" />
            <div className="text-left">
              <h3 className="font-semibold">Email</h3>
              <p className="text-slate-400">
                your-email@example.com
              </p>
            </div>
          </a>

          <a
            href="https://github.com/pranavdagar1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-cyan-400 hover:-translate-y-1 transition-all"
          >
            <FaGithub className="text-3xl text-cyan-400" />
            <div className="text-left">
              <h3 className="font-semibold">GitHub</h3>
              <p className="text-slate-400">
                github.com/yourusername
              </p>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-cyan-400 hover:-translate-y-1 transition-all"
          >
            <FaLinkedin className="text-3xl text-cyan-400" />
            <div className="text-left">
              <h3 className="font-semibold">LinkedIn</h3>
              <p className="text-slate-400">
                linkedin.com/in/yourprofile
              </p>
            </div>
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            className="flex items-center gap-4 bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-cyan-400 hover:-translate-y-1 transition-all"
          >
            <FaFileDownload className="text-3xl text-cyan-400" />
            <div className="text-left">
              <h3 className="font-semibold">Resume</h3>
              <p className="text-slate-400">
                Download PDF
              </p>
            </div>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;