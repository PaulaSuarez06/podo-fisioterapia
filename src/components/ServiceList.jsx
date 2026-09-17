import { useState } from 'react'
import Reveal from './Reveal'

function ServiceRow({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-neutral-200 py-5">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-baseline gap-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="flex-1 font-semibold tracking-tight text-neutral-900">
          {item.title}
        </span>
        <span
          className={`shrink-0 text-xl font-normal text-wood-400 transition-transform duration-300 ${
            isOpen ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-[58ch] pt-3 text-sm leading-relaxed text-neutral-600">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  )
}

function ServiceList({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="border-t border-neutral-200">
      {items.map((item, index) => (
        <Reveal key={item.title} delay={index * 60}>
          <ServiceRow
            item={item}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
          />
        </Reveal>
      ))}
    </div>
  )
}

export default ServiceList
