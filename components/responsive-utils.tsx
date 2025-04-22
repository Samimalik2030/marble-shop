"use client"

import type React from "react"

import { useEffect, useState } from "react"

// Custom hook for responsive design
export function useResponsive() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  })

  const [device, setDevice] = useState<"mobile" | "tablet" | "desktop">("desktop")

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })

      // Update device type
      if (window.innerWidth < 640) {
        setDevice("mobile")
      } else if (window.innerWidth < 1024) {
        setDevice("tablet")
      } else {
        setDevice("desktop")
      }
    }

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, []) // Empty array ensures that effect is only run on mount and unmount

  return {
    windowSize,
    device,
    isMobile: device === "mobile",
    isTablet: device === "tablet",
    isDesktop: device === "desktop",
  }
}

// Responsive container component
export function ResponsiveContainer({
  children,
  className = "",
  mobileClassName = "",
  tabletClassName = "",
  desktopClassName = "",
}: {
  children: React.ReactNode
  className?: string
  mobileClassName?: string
  tabletClassName?: string
  desktopClassName?: string
}) {
  const { device } = useResponsive()

  let responsiveClass = className

  if (device === "mobile" && mobileClassName) {
    responsiveClass += ` ${mobileClassName}`
  } else if (device === "tablet" && tabletClassName) {
    responsiveClass += ` ${tabletClassName}`
  } else if (device === "desktop" && desktopClassName) {
    responsiveClass += ` ${desktopClassName}`
  }

  return <div className={responsiveClass}>{children}</div>
}

// Responsive visibility component
export function ResponsiveVisible({
  children,
  showOnMobile = true,
  showOnTablet = true,
  showOnDesktop = true,
}: {
  children: React.ReactNode
  showOnMobile?: boolean
  showOnTablet?: boolean
  showOnDesktop?: boolean
}) {
  const { device } = useResponsive()

  if (
    (device === "mobile" && !showOnMobile) ||
    (device === "tablet" && !showOnTablet) ||
    (device === "desktop" && !showOnDesktop)
  ) {
    return null
  }

  return <>{children}</>
}

