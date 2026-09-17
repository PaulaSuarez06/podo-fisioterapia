import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

function AccordionItem({ question, children, isOpen, onToggle }) {
  return (
    <div className="border-b border-neutral-200 py-5">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-neutral-900">{question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-wood-400 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? 'mt-3 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="text-justify text-sm leading-relaxed text-neutral-600">{children}</div>
        </div>
      </div>
    </div>
  )
}

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem
          key={item.question}
          question={item.question}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
        >
          {item.answer}
        </AccordionItem>
      ))}
    </div>
  )
}

export default Accordion
