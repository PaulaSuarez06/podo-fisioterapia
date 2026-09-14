import { useEffect, useState } from 'react'

function Carousel({ images, interval = 4000 }) {
  const [index, setIndex] = useState(0)

  const goTo = (i) => setIndex((i + images.length) % images.length)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % images.length)
    }, interval)
    return () => clearInterval(timer)
  }, [images.length, interval])

  return (
    <div className="relative">
      <div className="aspect-4/5 w-full overflow-hidden rounded-3xl shadow-sm">
        <img
          src={images[index].src}
          alt={images[index].alt}
          className="h-full w-full object-cover"
        />
      </div>

      <button
        type="button"
        onClick={() => goTo(index - 1)}
        aria-label="Imagen anterior"
        className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-neutral-700 shadow-sm transition-colors hover:bg-white"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={() => goTo(index + 1)}
        aria-label="Imagen siguiente"
        className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-neutral-700 shadow-sm transition-colors hover:bg-white"
      >
        ›
      </button>

      <div className="mt-4 flex justify-center gap-2">
        {images.map((image, i) => (
          <button
            key={image.src}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Ver imagen ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === index ? 'w-6 bg-wood-400' : 'w-2 bg-neutral-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
