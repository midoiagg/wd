import { useEffect, useState } from 'react'
import { catalogs, getCatalogUrl } from '../../catalogs'

const solutions = [
  {
    id: 'lavanderia',
    number: '01',
    title: 'Lavandería profesional',
    cardDescription: 'Detergentes, aditivos y dosificación para el lavado profesional.',
    image: '/images/laundry-reference.webp',
    imageAlt: 'Lavadoras industriales en una lavandería profesional.',
    intro:
      'Gama de detergentes y aditivos sólidos y líquidos para profesionales de la lavandería y distintos procesos de lavado. La web agrupa esta línea también bajo el nombre Fresh.',
    products: [
      'Detergentes líquidos y sólidos de prelavado y lavado.',
      'Suavizantes, aprestos, neutralizantes y blanqueantes.',
      'Humectantes, desmanchantes y aditivos especiales.',
      'Wet Cleaning System y equipos dosificadores.',
    ],
    benefit:
      'La combinación de producto y dosificación se plantea para ajustar dosis, optimizar ciclos y cuidar la ropa para prolongar su vida útil.',
    catalog: 'Lavandería',
  },
  {
    id: 'cocina',
    number: '02',
    title: 'Cocina y restauración',
    cardDescription: 'Limpieza de vajilla, utensilios y zonas de cocina.',
    image: '/images/hospitality-reference.webp',
    imageAlt: 'Equipamiento de lavado en una cocina profesional.',
    intro:
      'Productos de limpieza y desinfección para entornos culinarios, desde el lavado de vajilla hasta la limpieza de cocinas frías y calientes.',
    products: [
      'Lavavajillas para lavado automático y manual.',
      'Productos para vajilla, cristalería y utensilios.',
      'Detergentes y desengrasantes para cocina fría y caliente.',
      'Planes de higiene y protocolos de limpieza y desinfección.',
    ],
    benefit:
      'La página original vincula sus protocolos de higiene con los criterios APPCC para reducir el riesgo de contaminación cruzada.',
    catalog: 'Cocina',
  },
  {
    id: 'seguridad-alimentaria',
    number: '03',
    title: 'Seguridad alimentaria',
    cardDescription: 'Higiene para la manipulación y transformación de alimentos.',
    image: '/images/food-industry-reference.webp',
    imageAlt: 'Personal trabajando en una instalación de manipulación de alimentos.',
    intro:
      'Productos de limpieza y desinfección adaptados a las exigencias de los espacios donde se manipulan alimentos.',
    products: [
      'Desengrasantes e higienizantes.',
      'Productos antiespumantes.',
      'Desinfectantes con registro.',
    ],
    benefit:
      'La oferta se presenta para ayudar a mantener entornos de trabajo seguros y libres de contaminación.',
    applications: 'La web destaca almazaras, mataderos y salas de despiece, y queserías.',
    catalog: 'Seguridad alimentaria',
  },
  {
    id: 'industria',
    number: '04',
    title: 'Industria',
    cardDescription: 'Limpieza técnica y mantenimiento de entornos industriales.',
    image: '/images/industrial-cleaning-reference.webp',
    imageAlt: 'Operario trabajando junto a equipamiento de una instalación industrial.',
    intro:
      'Soluciones de limpieza y mantenimiento industrial para abordar residuos y tareas técnicas en espacios de trabajo.',
    products: [
      'Desengrasantes, desincrustantes y decapantes de pintura.',
      'Taladrinas, aceites de corte y productos aflojatodo.',
      'Cremas y geles lavamanos, sprays y dosificadores.',
      'Desmoldeantes, limpiadores dieléctricos y recubrimientos protectores.',
    ],
    benefit:
      'La web las presenta como soluciones robustas para eliminar residuos complejos y mantener los espacios industriales funcionales.',
    catalog: 'Industria',
  },
  {
    id: 'suelos-superficies',
    number: '05',
    title: 'Suelos y superficies',
    cardDescription: 'Limpieza y mantenimiento según el material y el espacio.',
    intro:
      'Productos para la limpieza y el mantenimiento de suelos y superficies, con opciones para distintos materiales y acabados.',
    products: [
      'Limpiadores neutros, alcalinos y de espuma controlada.',
      'Higienizantes, desincrustantes y productos de desinfección.',
      'Multisuperficies: madera, metal, gres, terrazo, cristal, fórmica y PVC.',
      'Ceras, autobrillantes y cristalizadores; soluciones para mármol, parquet y moqueta.',
    ],
    benefit:
      'La gama se adapta a distintos espacios y materiales; la web destaca brillo, desinfección y durabilidad.',
    catalog: 'Suelos y superficies',
  },
  {
    id: 'linea-verde',
    number: '06',
    title: 'Soluciones respetuosas con el medio ambiente',
    cardTitle: 'Línea verde',
    cardDescription: 'Productos Ecolabel y alternativas biológicas biodegradables.',
    intro:
      'La línea ecológica reúne productos con etiqueta Ecolabel y soluciones biológicas basadas en enzimas y microorganismos.',
    products: [
      'Productos identificados en la web con la etiqueta ecológica Ecolabel.',
      'Soluciones biológicas enzimáticas.',
      'Productos con enzimas y microorganismos para eliminar materia orgánica.',
    ],
    benefit:
      'La web indica que los productos Ecolabel cumplen criterios medioambientales y de rendimiento establecidos por la Unión Europea, y describe los biológicos como biodegradables.',
    catalog: 'Soluciones sostenibles',
  },
  {
    id: 'concentradas',
    number: '07',
    title: 'Soluciones concentradas',
    cardDescription: 'Formatos concentrados orientados al consumo y almacenamiento.',
    intro:
      'Productos de limpieza de alta concentración, organizados en la web bajo los sistemas Dry Mix System y Ultra C System.',
    products: ['Dry Mix System.', 'Ultra C System.', 'Dosificadores y embalajes asociados.'],
    benefit:
      'La información original señala control de costes de transporte y almacenamiento, rendimiento y reducción de residuos plásticos.',
  },
  {
    id: 'higiene-personal',
    number: '08',
    title: 'Higiene personal',
    cardDescription: 'Productos de higiene de manos y cuidado personal profesional.',
    intro:
      'Geles y productos de higiene personal destinados a la limpieza diaria en entornos profesionales.',
    products: [
      'Geles de aseo personal.',
      'Cremas y pastas lavamanos.',
      'Geles desengrasantes para manos.',
      'Sistema Wet Hand Matic y dosificadores.',
    ],
    catalog: 'Higiene personal',
  },
  {
    id: 'investigacion',
    number: '09',
    title: 'Investigación',
    cardDescription: 'Soluciones para laboratorios y entornos técnicos.',
    intro:
      'La web describe una línea especializada para laboratorios y entornos técnicos donde se requiere un nivel elevado de limpieza y control.',
    products: [],
    benefit:
      'La página indica que sus formulaciones buscan mantener condiciones óptimas y seguras, pero no concreta familias de producto propias.',
  },
  {
    id: 'automocion',
    number: '10',
    title: 'Automoción',
    cardDescription: 'Categoría de lavado de vehículos identificada en la web.',
    image: '/images/automotive-reference.webp',
    imageAlt: 'Taller de automoción, fotografía ilustrativa de referencia.',
    intro:
      'Automoción aparece como categoría y la página original la asocia al lavado de vehículos. Su texto de detalle está sin completar, por lo que no atribuimos productos, aplicaciones ni prestaciones.',
    products: [],
    catalog: 'Automoción',
    pending: true,
  },
  {
    id: 'toallitas',
    number: '11',
    title: 'Toallitas húmedas',
    cardDescription: 'La web identifica una gama de toallitas húmedas.',
    intro:
      'La página original menciona distintos tipos de toallitas húmedas, pero el resto de su descripción contiene texto de relleno. No se han confirmado formatos, usos ni beneficios.',
    products: [],
    catalog: 'Toallitas impregnadas',
    pending: true,
  },
  {
    id: 'system-box',
    number: '12',
    title: 'System Box',
    cardDescription: 'Línea listada en la navegación original; detalle por confirmar.',
    intro:
      'System Box figura en el menú de soluciones de la web original, pero su página no contiene información comercial verificable sobre productos o aplicaciones.',
    products: [],
    pending: true,
  },
]

function SolutionsSection() {
  const [activeSolution, setActiveSolution] = useState('')

  useEffect(() => {
    const details = Array.from(
      document.querySelectorAll<HTMLElement>('[data-solution-detail]'),
    )
    if (details.length === 0) return

    let animationFrame = 0

    function updateActiveSolution() {
      animationFrame = 0
      const activationLine = Math.round(window.innerHeight * 0.38)
      const current = details.find((detail) => {
        const bounds = detail.getBoundingClientRect()
        return bounds.top <= activationLine && bounds.bottom >= activationLine
      })
      setActiveSolution(current?.dataset.solutionDetail ?? '')
    }

    function scheduleUpdate() {
      if (animationFrame === 0) {
        animationFrame = window.requestAnimationFrame(updateActiveSolution)
      }
    }

    updateActiveSolution()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)

    return () => {
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      if (animationFrame !== 0) window.cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <section
      className="page-section solutions-section"
      id="soluciones"
      aria-labelledby="soluciones-title"
    >
      <div className="section-index">02 / Soluciones</div>
      <div className="solutions-intro">
        <div className="solutions-heading">
          <p className="eyebrow">Sectores profesionales</p>
          <h2 className="section-title" id="soluciones-title">
            La higiene cambia con cada entorno.
          </h2>
        </div>
        <p className="section-lede">
          Explora las soluciones de Wet&amp;Dry Ibérica y accede a información
          útil sin salir de esta página.
        </p>
      </div>
      <nav className="solutions-index" aria-label="Índice de soluciones">
        {solutions.map((solution) => {
          const title = solution.cardTitle ?? solution.title

          return (
            <a
              className={`solution-index-link${activeSolution === solution.id ? ' is-active' : ''}`}
              href={`#solucion-${solution.id}`}
              key={solution.id}
              aria-current={activeSolution === solution.id ? 'location' : undefined}
              onClick={() => setActiveSolution(solution.id)}
            >
              <span className="solution-index-number">{solution.number}</span>
              <span className="solution-index-title">{title}</span>
              <span className="solution-index-arrow" aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="none">
                  <path d="M4 10h11M10 5l5 5-5 5" />
                </svg>
              </span>
            </a>
          )
        })}
      </nav>

      <div className="solution-details" aria-label="Detalle de soluciones">
        {solutions.map((solution) => {
          const catalog = catalogs.find(
            (item) => item.category === solution.catalog,
          )
          const heading = solution.title

          return (
            <article
              className={`solution-detail${solution.image ? ' has-image' : ' is-editorial'}${solution.pending ? ' is-pending' : ''}`}
              data-solution-detail={solution.id}
              id={`solucion-${solution.id}`}
              key={solution.id}
              aria-labelledby={`solucion-${solution.id}-title`}
            >
              {solution.image ? (
                <figure className="solution-detail-media">
                  <img
                    src={solution.image}
                    alt={solution.imageAlt}
                    width="1200"
                    height="800"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption>Fotografía de referencia, no de producto Wet&amp;Dry.</figcaption>
                </figure>
              ) : (
                <div className="solution-detail-mark" aria-hidden="true">
                  <span>{solution.number}</span>
                  <span>{solution.cardTitle ?? solution.title}</span>
                </div>
              )}
              <div className="solution-detail-copy">
                <div className="solution-detail-index">
                  <span>{solution.number} / SOLUCIONES PROFESIONALES</span>
                  {solution.pending && (
                    <span className="solution-pending-label">
                      Información por validar
                    </span>
                  )}
                </div>
                <h3 id={`solucion-${solution.id}-title`}>{heading}</h3>
                <p className="solution-detail-intro">{solution.intro}</p>
                {solution.products.length > 0 && (
                  <div className="solution-detail-list">
                    <h4>Productos y aplicaciones</h4>
                    <ul>
                      {solution.products.map((product) => (
                        <li key={product}>{product}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {solution.applications && (
                  <p className="solution-applications">{solution.applications}</p>
                )}
                {solution.benefit && (
                  <p className="solution-benefit">{solution.benefit}</p>
                )}
                <div className="solution-detail-actions">
                  <a className="section-text-link" href="#contacto">
                    Solicitar información <span aria-hidden="true">&rarr;</span>
                  </a>
                  {catalog && (
                    <a
                      className="solution-catalog-link"
                      href={getCatalogUrl(catalog.fileId)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ver catálogo de {catalog.category}
                      <span aria-hidden="true">&nearr;</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          )
        })}
      </div>
      <p className="solution-source-note">
        Las fotografías son ilustrativas. Las líneas de Automoción, Toallitas
        húmedas y System Box se muestran con la información verificada disponible;
        sus páginas originales requieren completar o validar el contenido.
      </p>
    </section>
  )
}

export default SolutionsSection
