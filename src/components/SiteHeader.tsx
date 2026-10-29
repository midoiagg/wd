import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'

const navigation = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Empresa', href: '#empresa' },
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Catálogos', href: '#catalogos' },
  { label: 'Contacto', href: '#contacto' },
]

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')
  const headerRef = useRef<HTMLElement>(null)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (!menuOpen) return

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  useEffect(() => {
    const header = headerRef.current
    if (header === null) return
    const headerElement: HTMLElement = header

    const sections = navigation
      .map(({ href }) => document.querySelector<HTMLElement>(href))
      .filter((section): section is HTMLElement => section !== null)
    if (sections.length === 0) return

    let animationFrame = 0

    function updateActiveSection() {
      animationFrame = 0
      const headerHeight = Math.ceil(headerElement.getBoundingClientRect().height)
      const activationLine =
        headerHeight + (window.innerHeight - headerHeight) * 0.42
      const current = sections.find((section) => {
        const bounds = section.getBoundingClientRect()
        return bounds.top <= activationLine && bounds.bottom >= activationLine
      })
      if (current !== undefined) {
        setActiveSection(current.id)
        setIsScrolled(current.id !== 'inicio')
      }
    }

    function scheduleUpdate() {
      if (animationFrame === 0) {
        animationFrame = window.requestAnimationFrame(updateActiveSection)
      }
    }

    function syncWithLocation() {
      const hash = window.location.hash
      const item =
        navigation.find(({ href }) => href === hash) ??
        (hash.startsWith('#solucion-')
          ? navigation.find(({ href }) => href === '#soluciones')
          : undefined)

      if (item !== undefined) {
        const sectionId = item.href.slice(1)
        setActiveSection(sectionId)
        setIsScrolled(sectionId !== 'inicio')
      } else {
        scheduleUpdate()
      }
    }

    updateActiveSection()
    syncWithLocation()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    window.addEventListener('hashchange', syncWithLocation)

    return () => {
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      window.removeEventListener('hashchange', syncWithLocation)
      if (animationFrame !== 0) window.cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <motion.header
      className={`site-header${isScrolled ? ' is-scrolled' : ''}`}
      ref={headerRef}
      initial={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.45, ease: 'easeOut' }}
    >
      <div className="header-inner">
        <a
          className="brand-link"
          href="#inicio"
          aria-label="Ir al inicio de Wet&Dry Ibérica"
          onClick={() => setMenuOpen(false)}
        >
          <img
            className="brand-logo"
            src="/wetdry-logo.png"
            alt="Wet&Dry Ibérica"
            width="2481"
            height="1314"
          />
        </a>

        <nav className="desktop-navigation" aria-label="Navegación principal">
          {navigation.map((item) => (
            <motion.a
              className="navigation-link"
              href={item.href}
              key={item.label}
              aria-current={activeSection === item.href.slice(1) ? 'location' : undefined}
              onClick={() => setMenuOpen(false)}
              whileHover={shouldReduceMotion ? undefined : { y: -1 }}
              transition={{ duration: 0.16 }}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        <a
          className="header-contact"
          href="mailto:info@wetdryiberica.es?subject=Consulta%20a%20Wet%26Dry%20Ib%C3%A9rica"
        >
          <span>Contactar</span>
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 10h11M10 5l5 5-5 5" />
          </svg>
        </a>

        <button
          className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      <div id="mobile-navigation">
        <AnimatePresence initial={false}>
          {menuOpen && (
            <motion.nav
              className="mobile-navigation"
              aria-label="Navegación principal"
              initial={shouldReduceMotion ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.18, ease: 'easeOut' }}
            >
              {navigation.map((item) => (
                <a
                  className="mobile-navigation-link"
                  href={item.href}
                  key={item.label}
                  aria-current={activeSection === item.href.slice(1) ? 'location' : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                  <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
              <a className="mobile-phone-link" href="tel:+34976463833">
                Llamar al 976 463 833
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default SiteHeader
