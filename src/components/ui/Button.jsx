import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";
import Magnetic from "./Magnetic";

// Premium button: gradient/glass variants, glow, sheen sweep, magnetic pull.
// Renders as <a>, <Link>, or <button> depending on props.
const base =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-heading font-semibold tracking-tight transition-[transform,box-shadow,background] duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none";

const sizes = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-7 text-[0.95rem]",
  lg: "h-14 px-9 text-base",
};

const variants = {
  primary:
    "text-white bg-brand shadow-[0_10px_30px_-8px_rgba(255,77,0,0.7)] hover:shadow-[0_16px_44px_-8px_rgba(255,77,0,0.85)] hover:-translate-y-0.5",
  accent:
    "text-secondary bg-accent shadow-[0_10px_30px_-8px_rgba(255,214,0,0.65)] hover:shadow-[0_16px_44px_-8px_rgba(255,214,0,0.8)] hover:-translate-y-0.5",
  glass:
    "glass text-content hover:border-brand/50 hover:-translate-y-0.5",
  outline:
    "border border-content/25 text-content hover:border-brand hover:text-brand hover:-translate-y-0.5",
  ghost: "text-content hover:bg-content/5",
};

const Button = forwardRef(function Button(
  {
    children,
    variant = "primary",
    size = "md",
    className,
    href,
    to,
    magnetic = true,
    icon: Icon,
    iconRight,
    ...props
  },
  ref
) {
  const classes = cn(base, sizes[size], variants[variant], className);

  const inner = (
    <>
      {/* sheen sweep */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
      {Icon && !iconRight && <Icon className="size-[1.1em]" aria-hidden />}
      <span className="relative z-10">{children}</span>
      {Icon && iconRight && (
        <Icon
          className="size-[1.1em] transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden
        />
      )}
    </>
  );

  let el;
  if (to) {
    el = (
      <Link ref={ref} to={to} className={classes} {...props}>
        {inner}
      </Link>
    );
  } else if (href) {
    el = (
      <a ref={ref} href={href} className={classes} {...props}>
        {inner}
      </a>
    );
  } else {
    el = (
      <button ref={ref} className={classes} {...props}>
        {inner}
      </button>
    );
  }

  return magnetic ? <Magnetic strength={0.25}>{el}</Magnetic> : el;
});

export default Button;
