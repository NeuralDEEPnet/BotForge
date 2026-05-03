import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    // Avoid synchronous state setting in effect initial run where possible, or just set it once inside a timeout.
    // Instead we can just do:
    const initialMatch = window.innerWidth < MOBILE_BREAKPOINT
    if (isMobile !== initialMatch) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsMobile(initialMatch)
    }
    return () => mql.removeEventListener("change", onChange)
  }, [isMobile])

  return !!isMobile
}
