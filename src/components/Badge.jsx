import { cn } from "../lib/utils";

export default function Badge({ className, children }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80",
        className
      )}
    >
      {children}
    </span>
  );
}
