import { FaGithub, FaCheckCircle } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <div className="rounded-2xl bg-slate-900 border border-slate-700 p-8 shadow-lg hover:border-cyan-400 hover:-translate-y-2 hover:shadow-cyan-500/10 transition-all duration-300">

      {/* Project Title */}
      <h3 className="text-2xl font-bold text-cyan-400">
        {project.title}
      </h3>

      {/* Description */}
      <p className="mt-4 text-slate-300 leading-relaxed">
        {project.description}
      </p>

      {/* Highlights */}
      <div className="mt-6">
        <h4 className="text-lg font-semibold mb-3 text-white">
          Highlights
        </h4>

        <ul className="space-y-2">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-start gap-3 text-slate-300"
            >
              <FaCheckCircle className="text-cyan-400 mt-1 flex-shrink-0" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Technology Badges */}
      <div className="flex flex-wrap gap-2 mt-6">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="bg-slate-700 text-slate-200 px-3 py-1 rounded-full text-sm hover:bg-cyan-500 hover:text-white transition"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* GitHub Button */}
      <div className="mt-8">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-slate-800 px-5 py-3 rounded-lg hover:bg-cyan-500 transition"
        >
          <FaGithub />
          View on GitHub
        </a>
      </div>

    </div>
  );
}

export default ProjectCard;