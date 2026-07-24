function CertificationCard({ certification }) {
  return (
    <div className="rounded-2xl bg-slate-900 border border-slate-700 p-6 shadow-lg hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300">
      <h3 className="text-xl font-bold text-cyan-400">
        {certification.title}
      </h3>

      <p className="mt-2 text-slate-300">
        {certification.issuer}
      </p>

      <div className="mt-4 flex justify-between text-sm text-slate-400">
        <span>{certification.status}</span>
        <span>{certification.date}</span>
      </div>
    </div>
  );
}

export default CertificationCard;