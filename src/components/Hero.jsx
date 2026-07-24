function Hero() {
  return (
    <section className="min-h-screen pt-24 bg-slate-900 text-white flex items-center justify-center">
      <div className="text-center max-w-4xl px-6">
        <p className="text-cyan-400 font-semibold">
          Hello, I'm
        </p>

        <h1 className="mt-3 text-5xl md:text-7xl font-bold">
          Pranav Dagar
        </h1>

        <h2 className="mt-4 text-xl md:text-2xl text-slate-300">
          Aspiring Site Reliability Engineer
        </h2>

        <p className="mt-2 text-cyan-400 font-medium">
          Cloud • DevOps • Kubernetes • AWS
        </p>

        <p className="mt-8 text-lg text-slate-400 leading-8">
          Computer Science student passionate about building reliable,
          scalable cloud infrastructure using AWS, Kubernetes, Docker,
          Terraform, Jenkins, and Prometheus. I enjoy automating
          deployments, improving system reliability, and solving
          infrastructure challenges.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-600"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            download
            className="rounded-lg border border-cyan-500 px-6 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-white"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;