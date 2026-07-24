function About() {
  return (
    <section
      id="about"
      data-aos="fade-up"
      className="bg-slate-800 text-white py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          About Me
        </h2>

        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 shadow-lg">
          <p className="text-slate-300 leading-8 text-lg mb-6">
            I'm a Computer Science undergraduate with a strong interest in
            Site Reliability Engineering, DevOps, and Cloud Infrastructure.
            I enjoy designing reliable systems, automating deployments, and
            improving application availability through monitoring and
            infrastructure as code.
          </p>

          <p className="text-slate-300 leading-8 text-lg mb-6">
            Over the past year, I've built hands-on projects using AWS,
            Docker, Kubernetes, Jenkins, Terraform, Prometheus, and Grafana.
            These projects have given me practical experience with
            containerization, CI/CD pipelines, Kubernetes deployments,
            infrastructure provisioning, and observability.
          </p>

          <p className="text-slate-300 leading-8 text-lg mb-6">
            Beyond cloud infrastructure, I also have experience developing
            full-stack web applications using Node.js, Express, MongoDB,
            and JavaScript, which helps me understand both application
            development and production operations.
          </p>

          <p className="text-slate-300 leading-8 text-lg">
            I'm currently seeking opportunities as a Site Reliability
            Engineer or DevOps Engineer where I can contribute to building
            scalable, reliable systems while continuing to grow my expertise
            in cloud technologies, automation, and platform engineering.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;