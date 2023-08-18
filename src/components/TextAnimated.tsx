'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function TextAnimated() {
  const rotatingWords = ['Boleto?', 'Cartão?', 'Empréstimo?']
  const [lastWordIndex, setLastWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setLastWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [rotatingWords.length])

  const rotatingWord = rotatingWords[lastWordIndex]

  const fadeInOutAnimation = {
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.5 },
  }

  return (
    <div className="">
      <h1 className="text-5xl font-bold mb-3">Você foi vítima do golpe do:</h1>
      {rotatingWord === 'Boleto?' && (
        <motion.span
          className="text-5xl font-bold text-primary"
          {...fadeInOutAnimation}
        >
          Boleto?
        </motion.span>
      )}
      {rotatingWord === 'Cartão?' && (
        <motion.span
          className="text-5xl font-bold text-primary"
          {...fadeInOutAnimation}
        >
          Cartão?
        </motion.span>
      )}
      {rotatingWord === 'Empréstimo?' && (
        <motion.span
          className="text-5xl font-bold text-primary"
          {...fadeInOutAnimation}
        >
          Empréstimo?
        </motion.span>
      )}
    </div>
  )
}
