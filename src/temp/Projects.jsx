import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section
      id="projects"
      data-aos="fade-up"
      className="bg-slate-800 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Featured Projects */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
        </div>

        {/* Other Projects */}
        <h2 className="text-4xl font-bold text-center mt-24 mb-12">
          Other Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects
            .filter((project) => !project.featured)
            .map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;