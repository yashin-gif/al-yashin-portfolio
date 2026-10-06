export default function CardHeading({ icon: Icon, title }) {
  return (
    <div className="mb-5 flex items-center gap-4">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-teal-400/30 bg-teal-400/10 text-teal-300">
        <Icon size={22} />
      </span>
      <h3 className="text-xl font-bold text-white sm:text-2xl">{title}</h3>
    </div>
  );
}