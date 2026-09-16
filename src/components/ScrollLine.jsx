import { useEffect, useRef, useState } from 'react'

function ScrollLine() {
  const ref = useRef(null)
  const [phase, setPhase] = useState('idle')

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && phase === 'idle') {
          setPhase('crossing')
          window.setTimeout(() => setPhase('gone'), 900)
        }
      },
      { threshold: 0.5 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [phase])

  return (
    <div ref={ref} className="mx-auto h-px w-full max-w-md overflow-hidden">
      <div
        className={`h-px w-full max-w-md bg-wood-300 transition-transform duration-700 ease-in ${
          phase === 'idle'
            ? '-translate-x-full'
            : phase === 'crossing'
              ? 'translate-x-0'
              : 'translate-x-full'
        }`}
      />
    </div>
  )
}

export default ScrollLine
