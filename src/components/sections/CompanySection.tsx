function CompanySection() {
  return (
    <section
      className="page-section company-section"
      id="empresa"
      aria-labelledby="empresa-title"
    >
      <div className="section-index">01 / Empresa</div>
      <div className="company-layout">
        <div className="company-copy">
          <p className="eyebrow">Wet&Dry Ibérica · Zaragoza</p>
          <h2 className="section-title" id="empresa-title">
            Más de 20 años cerca de quienes hacen el trabajo.
          </h2>
          <p className="company-intro">
            Empresa familiar especializada en distribuir productos químicos y
            complementos para profesionales de la limpieza e higiene.
          </p>
          <p className="company-location">
            Desde Cuarte de Huerva, combina experiencia, atención personalizada
            y conocimiento del día a día de cada sector.
          </p>
        </div>
        <figure className="company-product">
          <img
            src="/images/wetdry-product.png"
            alt="Envase de producto con la marca Wet&Dry, publicado en la web corporativa actual."
            width="407"
            height="547"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            <span>01 — Cap</span>
            Cap
          </figcaption>
        </figure>
      </div>
      <div className="company-proof" aria-label="Datos de la empresa">
        <span>Empresa familiar</span>
        <span>Atención personalizada</span>
        <span>Experiencia desde Zaragoza</span>
      </div>
     
    </section>
  )
}

export default CompanySection
