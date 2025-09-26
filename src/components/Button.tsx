import React from "react";

type ButtonProps = {
  asLink?: boolean;
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "inverse" | "ghost";
};

const base =
  "inline-flex items-center justify-center rounded-full font-semibold transition " +
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-600 " +
  "disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  // Botón verde sólido
  primary:
    "bg-emerald-700 text-white hover:bg-emerald-800 shadow-md hover:shadow-lg px-5 py-2.5",

  // Burbuja blanca (ideal sobre fondos oscuros/imagen)
  inverse:
    "bg-white text-emerald-800 hover:bg-emerald-50 shadow-md hover:shadow-lg " +
    "ring-2 ring-white/70 px-6 py-3",

  // Transparente con borde (por si lo necesitas)
  ghost:
    "bg-transparent text-white hover:bg-white/10 border border-white/40 px-5 py-2.5",
};

export default function Button({
  asLink,
  href = "#",
  children,
  className = "",
  variant = "primary",
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`.trim();

  if (asLink) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return <button className={classes}>{children}</button>;
}
