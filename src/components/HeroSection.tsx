import { motion, useReducedMotion } from 'motion/react'

const introMotion = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: 'easeOut' },
  },
} as const

function HeroSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <motion.div
        className="hero-copy"
        initial={shouldReduceMotion ? false : 'hidden'}
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: shouldReduceMotion ? 0 : 0.1,
              delayChildren: shouldReduceMotion ? 0 : 0.1,
            },
          },
        }}
      >
        <motion.p className="eyebrow" variants={introMotion}>
          Soluciones profesionales · Wet&Dry Ibérica
        </motion.p>
        <motion.h1 className="hero-title" id="hero-title" variants={introMotion}>
          <span>Soluciones</span>
          <span>de limpieza</span>
          <span className="accent">profesional.</span>
        </motion.h1>
        <motion.p className="hero-description" variants={introMotion}>
          Productos químicos, complementos y asesoramiento técnico para
          profesionales de la limpieza y la higiene.
        </motion.p>
        <motion.div className="hero-actions" variants={introMotion}>
          <motion.a
            className="button button-primary"
            href="#soluciones"
            whileHover={shouldReduceMotion ? undefined : { y: -2 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
            transition={{ duration: 0.16 }}
          >
            Descubrir soluciones
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 10h11M10 5l5 5-5 5" />
            </svg>
          </motion.a>
          <motion.a
            className="text-link"
            href="tel:+34976463833"
            whileHover={shouldReduceMotion ? undefined : { x: 2 }}
            transition={{ duration: 0.16 }}
          >
            Llamar al equipo
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 10h11M10 5l5 5-5 5" />
            </svg>
          </motion.a>
        </motion.div>
        <motion.p className="hero-notes" variants={introMotion}>
          <span>Distribución profesional</span>
          <span>Asesoramiento técnico</span>
          <span>Servicio especializado</span>
        </motion.p>
      </motion.div>

      <motion.figure
        className="hero-visual"
        initial={
          shouldReduceMotion
            ? false
            : { opacity: 0, clipPath: 'inset(0 0 0 10%)' }
        }
        animate={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.75,
          delay: shouldReduceMotion ? 0 : 0.15,
          ease: 'easeOut',
        }}
      >
        <img
          className="hero-image"
          src="/images/industrial-cleaning-reference.webp"
          alt="Trabajador limpiando una cinta transportadora en un entorno industrial. Fotografía genérica, no perteneciente a Wet&Dry Ibérica."
          width="1500"
          height="1400"
          fetchPriority="high"
          decoding="async"
        />
        <figcaption className="image-caption">
          Fotografía genérica de referencia · Unsplash
        </figcaption>
      </motion.figure>
    </section>
  )
}

export default HeroSection
