import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'

function ReviewsCarousel({ reviews, interval = 6000 }) {
  const [index, setIndex] = useState(0)

  const goTo = (i) => setIndex((i + reviews.length) % reviews.length)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % reviews.length)
    }, interval)
    return () => clearInterval(timer)
  }, [reviews.length, interval])

  const review = reviews[index]

  return (
    <div className="flex h-full flex-col justify-between rounded-3xl bg-neutral-50 p-8 md:p-10">
      <div>
        <div className="flex gap-1 text-wood-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4"
              fill={i < (review.rating ?? 5) ? 'currentColor' : 'none'}
              strokeWidth={1.5}
            />
          ))}
        </div>
        <p className="mt-5 text-base leading-relaxed text-neutral-700 md:text-lg">
          “{review.text}”
        </p>
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-neutral-900">{review.author}</p>
            <p className="text-sm text-neutral-500">{review.date}</p>
          </div>
          <div className="flex gap-2">
            {reviews.map((r, i) => (
              <button
                key={r.author}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Ver reseña de ${r.author}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? 'w-6 bg-wood-400' : 'w-2 bg-neutral-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewsCarousel
