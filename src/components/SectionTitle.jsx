export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="text-sm font-semibold tracking-wider text-teal-400">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-base leading-relaxed text-white/70">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
