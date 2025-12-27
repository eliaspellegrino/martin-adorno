import { cn } from "../lib/utils";

export default function Card({
  as: Comp = "div",
  className,
  variant = "glass", // glass | solid | outline | darkGlass | darkSolid | darkOutline
  hover = true,
  children,
  ...props
}) {
  const base = "rounded-3xl border shadow-sm transition-all duration-200";

  const variants = {
    // Light
    glass: "bg-white/70 backdrop-blur border-slate-200",
    solid: "bg-white border-slate-200",
    outline: "bg-transparent border-slate-300",

    // Dark (para tu landing actual)
    darkGlass: "bg-white/5 backdrop-blur border-white/10",
    darkSolid: "bg-black/30 border-white/10",
    darkOutline: "bg-transparent border-white/15",
  };

  const hoverStyles = hover ? "hover:shadow-md hover:-translate-y-0.5" : "";

  return (
    <Comp
      className={cn(base, variants[variant], hoverStyles, className)}
      {...props}
    >
      {children}
    </Comp>
  );
}

export function CardHeader({ className, children, ...props }) {
  return (
    <div className={cn("p-6 pb-3", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ className, children, ...props }) {
  return (
    <h3 className={cn("text-lg font-semibold", className)} {...props}>
      {children}
    </h3>
  );
}

export function CardDescription({ className, children, ...props }) {
  return (
    <p className={cn("mt-1 text-sm opacity-80", className)} {...props}>
      {children}
    </p>
  );
}

export function CardContent({ className, children, ...props }) {
  return (
    <div className={cn("px-6 pb-6", className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ className, children, ...props }) {
  return (
    <div className={cn("px-6 pb-6 pt-2", className)} {...props}>
      {children}
    </div>
  );
}
