import certifications from "../data/Certifications";
import CertificationCard from "./CertificationCard";

function Certifications() {
  return (
    <section
      id="certifications"
      data-aos="fade-up"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((certification) => (
            <CertificationCard
              key={certification.id}
              certification={certification}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;