// Tiny classnames joiner — filters falsy values, joins with spaces.
export function cn(...args) {
  return args
    .flat()
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

// Format a number as Indian Rupees, no decimals.
export const formatINR = (n) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);
