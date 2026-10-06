export default function AboutCard({ children, className = "" }) {
  return (
    <div
      className={`h-full rounded-3xl border border-white/10 bg-[#131f38] p-6 transition-colors duration-300 hover:border-teal-400/40 sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}