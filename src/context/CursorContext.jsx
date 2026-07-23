import { createContext, useContext, useState, useCallback, useMemo } from "react";

const CursorContext = createContext(null);

// Lets any component set the cursor's variant + optional label on hover.
export function CursorProvider({ children }) {
  const [cursor, setCursor] = useState({ variant: "default", label: "" });

  const setVariant = useCallback(
    (variant = "default", label = "") => setCursor({ variant, label }),
    []
  );
  const reset = useCallback(() => setCursor({ variant: "default", label: "" }), []);

  const value = useMemo(() => ({ cursor, setVariant, reset }), [cursor, setVariant, reset]);
  return <CursorContext.Provider value={value}>{children}</CursorContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCursor() {
  return useContext(CursorContext) ?? { cursor: { variant: "default" }, setVariant() {}, reset() {} };
}

// Spread onto any element to drive the cursor on hover.
// eslint-disable-next-line react-refresh/only-export-components
export function cursorHover(setVariant, reset, variant = "hover", label = "") {
  return {
    onMouseEnter: () => setVariant(variant, label),
    onMouseLeave: () => reset(),
  };
}
