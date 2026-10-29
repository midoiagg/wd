function ContactSection() {
  return (
    <section
      className="page-section contact-section"
      id="contacto"
      aria-labelledby="contacto-title"
    >
      <div className="section-index">05 / Contacto</div>
      <div className="contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">Atención profesional y personalizada</p>
          <h2 className="section-title" id="contacto-title">
            Hablemos de lo que necesita tu empresa.
          </h2>
          <p className="section-lede">
            Contacta con el equipo de Wet&Dry Ibérica para solicitar
            asesoramiento o información sobre sus soluciones.
          </p>
          <a
            className="button button-light"
            href="mailto:info@wetdryiberica.es?subject=Consulta%20a%20Wet%26Dry%20Ib%C3%A9rica"
          >
            Escribir un correo <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
        <address className="contact-details">
          <div>
            <span className="contact-label">Teléfono</span>
            <a href="tel:+34976463833">976 463 833</a>
          </div>
          <div>
            <span className="contact-label">Correo</span>
            <a href="mailto:info@wetdryiberica.es">info@wetdryiberica.es</a>
          </div>
          <div>
            <span className="contact-label">Dirección</span>
            <span>C/ Río Gállego 18-20, 50410 Cuarte de Huerva (Zaragoza)</span>
          </div>
          <div>
            <span className="contact-label">Horario publicado</span>
            <span>De lunes a viernes, de 07:00 a 15:00</span>
          </div>
        </address>
      </div>
      <footer className="onepage-footer">
        <a className="footer-home-link" href="#inicio">
          Volver al inicio <span aria-hidden="true">&uarr;</span>
        </a>
        <div className="legal-links" aria-label="Información legal">
          <a href="https://wetdryiberica.es/aviso-legal/">Aviso legal</a>
          <a href="https://wetdryiberica.es/politica-privacidad/">
            Privacidad
          </a>
          <a href="https://wetdryiberica.es/politica-de-cookies/">Cookies</a>
        </div>
      </footer>
    </section>
  )
}

export default ContactSection
