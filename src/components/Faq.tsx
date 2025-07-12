'use client'

import { faQuestions } from "@/lib/faQuestions"
import { useState } from "react"
import {motion, AnimatePresence} from "framer-motion"
import { FaChevronLeft } from "react-icons/fa";

export default function Faq() {

  const [openQuestion, setOpenQuestion] = useState<number | null>(null)

  const toggleQuestion = ( id: number ) => {
    setOpenQuestion(prev => prev === id ? null : id)
  }

  return (
    <div className="max-w-[900px] mx-auto px-8">
      {faQuestions.map(question => {

        const isOpen = openQuestion === question.id
        const contentId = `faq-${question.id}-content` 

        return (
          <div 
            key={question.id}
            className="border-b border-primary pb-4 group mb-4"
          >
            <button
              onClick={() => toggleQuestion(question.id)}
              className="flex justify-between items-center w-full text-left font-semibold text-lg focus:outline-none"
              aria-expanded={isOpen}
              aria-controls={contentId}
            >
              <span className="text-primary group-hover:text-dark-accent text-balance">
                {question.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? -90 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-primary group-hover:text-dark-accent"
              >
                <FaChevronLeft size={20} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
           {isOpen && <motion.div
              key="content"
              id={contentId}
              initial={{height: 0, opacity: 0}}
              animate={{height: "auto", opacity: 1}}
              exit={{height: 0, opacity: 0}}
              transition={{duration: 0.3, ease: 'easeInOut'}}
              className="overflow-hidden text-primary text-base"
            >
              <p className="py-2">{question.answer}</p>
            </motion.div>}
          </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
