import { cn } from "../lib/utils";

export default function Button({
  as = "button",
  className,
  variant = "primary",
  href,
  target,
  rel,
  children,
  ...props
}) {
  const Comp = as;

  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-teal-400/60 focus:ring-offset-2 focus:ring-offset-black";

  const styles = {
    primary: "bg-teal-500 text-black hover:bg-teal-400",
    secondary:
      "bg-white/10 text-white hover:bg-white/15 border border-white/10",
    ghost: "text-white/80 hover:text-white hover:bg-white/10",
  };

  return (
    <Comp
      className={cn(base, styles[variant], className)}
      href={href}
      target={target}
      rel={rel}
      {...props}
    >
      {children}
    </Comp>
  );
}
