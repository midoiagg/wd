import { useState } from 'react'
import { catalogs, getCatalogUrl } from '../../catalogs'

const brands = [
  'Betik',
  'Claro Systems',
  'Coreco',
  'Cuatrograsa',
  'Distform',
  'Fricosmos',
  'Vileda',
]

function CatalogSection() {
  const [showAllCatalogs, setShowAllCatalogs] = useState(false)
  const featuredCatalogs = catalogs.filter((catalog) => catalog.featured)
  const additionalCatalogs = catalogs.filter((catalog) => !catalog.featured)
  const visibleCatalogs = showAllCatalogs
    ? [...featuredCatalogs, ...additionalCatalogs]
    : featuredCatalogs

  return (
    <section
      className="page-section catalog-section"
      id="catalogos"
      aria-labelledby="catalogos-title"
    >
      <div className="section-index">04 / Catálogos y marcas</div>
      <div className="catalog-layout">
        <div className="catalog-copy">
          <p className="eyebrow">Documentación para profesionales</p>
          <h2 className="section-title" id="catalogos-title">
            Catálogos organizados por sector.
          </h2>
          <p className="section-lede">
            Consulta los {catalogs.length} catálogos publicados en la web
            corporativa. Cada enlace abre el documento disponible en Google
            Drive.
          </p>
          <button
            className="section-text-link catalog-toggle"
            type="button"
            aria-expanded={showAllCatalogs}
            aria-controls="catalog-downloads"
            onClick={() => setShowAllCatalogs((visible) => !visible)}
          >
            {showAllCatalogs
              ? 'Mostrar menos'
              : `Ver todos los catálogos (${catalogs.length})`}
            <span aria-hidden="true">{showAllCatalogs ? '\u2212' : '\u002b'}</span>
          </button>
        </div>
        <div
          className="catalog-downloads"
          id="catalog-downloads"
          aria-label="Catálogos disponibles"
        >
          {visibleCatalogs.map((catalog, index) => (
            <a
              className="catalog-download"
              href={getCatalogUrl(catalog.fileId)}
              key={catalog.fileId}
              target="_blank"
              rel="noreferrer"
              aria-label={`Abrir catálogo de ${catalog.category} en Google Drive`}
            >
              <span className="catalog-download-number">
                {String(index + 1).padStart(2, '0')}
                <span>CATÁLOGO</span>
              </span>
              <span className="catalog-download-copy">
                <span className="catalog-download-title">{catalog.category}</span>
                <span className="catalog-download-description">
                  Abrir documento en Google Drive
                </span>
              </span>
              <span className="catalog-download-arrow" aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="none">
                  <path d="M5 15 15 5M6 5h9v9" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
      <div className="brands-strip">
        <div className="brands-heading">
          <span className="catalog-note-label">Marcas</span>
          <p>Marcas mostradas en la web corporativa actual.</p>
        </div>
        <ul className="brand-list" aria-label="Marcas identificadas">
          {brands.map((brand) => (
            <li key={brand}>{brand}</li>
          ))}
        </ul>
        <span className="brands-note">
          Confirmar selección y permisos de uso antes de publicación.
        </span>
      </div>
    </section>
  )
}

export default CatalogSection
