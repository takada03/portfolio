import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    let mouseX = 0
    let mouseY = 0

    let currentX = 0
    let currentY = 0

    const moveCursor = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener('mousemove', moveCursor)

    const animate = () => {
      currentX += (mouseX - currentX) * 0.15
      currentY += (mouseY - currentY) * 0.15

      if (cursorRef.current) {
        cursorRef.current.style.transform =
          `translate(${currentX}px, ${currentY}px)`
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="hidden lg:block fixed top-0 left-0 w-5 h-5 rounded-full bg-white mix-blend-difference pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
    />
  )
}