const services = [
  {
    number: '01',
    title: 'Venta e instalación de maquinaria y mobiliario para hostelería',
    image: '/images/hospitality-reference.webp',
    imageAlt: 'Equipamiento en una cocina profesional, imagen ilustrativa.',
    introduction:
      'Maquinaria y mobiliario profesional para restaurantes, hoteles, cafeterías y otros establecimientos hosteleros. Wet&Dry Ibérica asesora en la elección del equipo y ofrece instalación y puesta en marcha.',
    label: 'Equipamiento publicado en la web',
    details: [
      'Lavavajillas y lavavasos industriales.',
      'Máquinas de hielo y equipos de refrigeración.',
      'Cocinas industriales, planchas, freidoras y hornos.',
      'Mobiliario de acero inoxidable para cocinas profesionales.',
      'Sistemas de dosificación y dispensadores.',
    ],
  },
  {
    number: '02',
    title: 'Servicio técnico especializado',
    image: '/images/industrial-cleaning-reference.webp',
    imageAlt: 'Operario junto a maquinaria industrial, imagen ilustrativa.',
    introduction:
      'Servicio técnico para maquinaria y sistemas de higiene. La web original detalla trabajos de instalación, mantenimiento, revisión, asistencia y reparación.',
    label: 'Actividades descritas por Wet&Dry Ibérica',
    details: [
      'Instalación de sistemas de dosificación, maquinaria de hostelería y equipos de higiene industrial.',
      'Revisiones y mantenimiento preventivo y correctivo.',
      'Reparación de lavavajillas industriales, sistemas de dispensación y otros equipos de hostelería.',
    ],
  },
]

function ServicesSection() {
  return (
    <section
      className="page-section services-section"
      id="servicios"
      aria-labelledby="servicios-title"
    >
      <div className="section-index">03 / Servicios</div>
      <div className="services-intro">
        <div className="services-heading">
          <p className="eyebrow">Equipamiento y soporte técnico</p>
          <h2 className="section-title" id="servicios-title">
            Dos servicios para el día a día profesional.
          </h2>
        </div>
        <p className="section-lede">
          Maquinaria y mobiliario para hostelería, junto con servicio técnico
          especializado en los equipos y sistemas descritos en la web de
          Wet&amp;Dry Ibérica.
        </p>
      </div>
      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <figure className="service-card-media">
              <img
                src={service.image}
                alt={service.imageAlt}
                width="1200"
                height="800"
                loading="lazy"
                decoding="async"
              />
              <figcaption>{service.number} / Imagen de referencia</figcaption>
            </figure>
            <div className="service-card-copy">
              <span className="service-card-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p className="service-card-intro">{service.introduction}</p>
              <h4>{service.label}</h4>
              <ul>
                {service.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <a className="section-text-link" href="#contacto">
                Consultar este servicio <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection
