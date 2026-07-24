import {
  FaAws,
  FaDocker,
  FaPython,
  FaJs,
} from "react-icons/fa";

import {
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiCplusplus,
} from "react-icons/si";

function Skills() {
  return (
    <section
      id="skills"
      data-aos="fade-up"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Technical Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-slate-800 rounded-xl p-6 text-center">
            <FaAws className="text-5xl mx-auto text-orange-400" />
            <p className="mt-4">AWS</p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 text-center">
            <FaDocker className="text-5xl mx-auto text-blue-400" />
            <p className="mt-4">Docker</p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 text-center">
            <SiKubernetes className="text-5xl mx-auto text-blue-500" />
            <p className="mt-4">Kubernetes</p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 text-center">
            <SiTerraform className="text-5xl mx-auto text-purple-500" />
            <p className="mt-4">Terraform</p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 text-center">
            <SiJenkins className="text-5xl mx-auto text-red-400" />
            <p className="mt-4">Jenkins</p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 text-center">
            <FaPython className="text-5xl mx-auto text-yellow-400" />
            <p className="mt-4">Python</p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 text-center">
            <FaJs className="text-5xl mx-auto text-yellow-300" />
            <p className="mt-4">JavaScript</p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 text-center">
            <SiCplusplus className="text-5xl mx-auto text-blue-400" />
            <p className="mt-4">C++</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;