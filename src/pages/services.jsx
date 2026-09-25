import { useState } from 'react'
import PageLayout from './PageLayout'

const services = [
  ['The Signature Precision Cut', '45 mins', '£65', 'Hair & Styling', 'Tailored consultation, botanical wash, precision scissor and clipper architecture, hot towel neck finish.'],
  ['Artisanal Beard Sculpting & Line-up', '30 mins', '£45', 'Beard & Shave', 'Hot towel steam infusion, razor-sharp edge detailing and structural sculpting with cedarwood balm.'],
  ['The Royal Treatment', '75 mins', '£120', 'The Royal Packages', 'Our quintessential atelier ceremony: full precision cut, traditional straight razor shave, scalp ritual and finishing consultation.'],
  ['Traditional Hot Lather Shave', '45 mins', '£55', 'Beard & Shave', 'Three-tier pre-shave oil therapy, rich lather, dual-pass straight razor finish and a chilled damask rosewater towel.'],
  ['Grey Blending & Subtle Camouflage', '30 mins', '£50', 'Hair & Styling', 'Discrete demi-permanent pigmentation expertly calibrated at the wash basin to soften silver tones without artificial brassiness.'],
  ['Clarifying Scalp Therapy & Head Massage', '30 mins', '£40', 'Scalp & Skin Rituals', 'Exfoliating organic tea tree and volcanic ash scrub followed by dedicated acupressure scalp massage.'],
]

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All Services')
  const categories = ['All Services', 'Hair & Styling', 'Beard & Shave', 'The Royal Packages', 'Scalp & Skin Rituals']
  const visibleServices = activeCategory === 'All Services'
    ? services
    : services.filter((service) => service[3] === activeCategory)

  return (
    <PageLayout activePage="/services">
      <section className="page-intro">
        <p className="overline">MENU OF GROOMING RITUALS</p>
        <h1>Artisanal grooming crafted for the modern gentleman.</h1>
        <p className="lead">Every ritual at BARBERO is performed with deliberate pacing, bespoke botanical formulations and traditional straight razor precision. We consider grooming not an obligation, but an architectural art form.</p>
      </section>
      <div className="service-filters" role="group" aria-label="Filter services">
        {categories.map((category) => <button key={category} className={activeCategory === category ? 'selected' : ''} type="button" onClick={() => setActiveCategory(category)}>{category}</button>)}
      </div>
      <section className="service-editorial-grid">
        {visibleServices.map(([name, duration, price, , description]) => (
          <article className={`editorial-service-card ${name === 'The Royal Treatment' ? 'featured' : ''}`} key={name}>
            {name === 'The Royal Treatment' && <span className="service-featured-label">Signature experience</span>}
            <div className="card-meta"><span>{duration}</span><strong>{price}</strong></div>
            <h2>{name}</h2>
            <p>{description}</p>
            <a className={`service-card-action ${name === 'The Royal Treatment' ? 'dark' : ''}`} href={`#/contact?service=${encodeURIComponent(name)}`}>{name === 'The Royal Treatment' ? 'Book flagship' : 'Book this ritual'}</a>
          </article>
        ))}
      </section>
      <section className="membership-section">
        <div className="section-title">
          <p className="overline">EXCLUSIVE PRIVILEGES</p>
          <h2>The Barbero Club</h2>
          <p>Continuous refinement for patrons who demand perpetual sharpness.</p>
        </div>
        <div className="membership-grid">
          <article>
            <div className="membership-heading"><h3>The Patron</h3><strong>£110 <small>/ MO</small></strong></div>
            <p>Designed for the bi-weekly connoisseur maintaining a disciplined personal appearance.</p>
            <ul><li>Two Signature Precision Cuts monthly</li><li>Complimentary neck trims</li><li>10% private apothecary allowance</li></ul>
            <a className="light-button" href="#/contact">Apply for Patron</a>
          </article>
          <article className="membership-featured">
            <span className="membership-badge">Most distinguished</span>
            <div className="membership-heading"><h3>The Sovereign</h3><strong>£220 <small>/ MO</small></strong></div>
            <p>Unrestricted atelier access, private grooming alcoves and premier bespoke hospitality.</p>
            <ul><li>Unlimited precision haircuts and beard detailing</li><li>Priority private suite reservations</li><li>Direct concierge booking line</li></ul>
            <a className="dark-button" href="#/contact">Apply for Sovereign</a>
          </article>
        </div>
      </section>
      <section className="standard-section">
        <p className="overline">THE ATELIER STANDARD</p>
        <h2>Every appointment includes</h2>
        <div className="standard-grid">
          {['Single-malt bar', 'Cold brew & espresso', 'Hot steamed towels', 'Bespoke fragrance'].map((item) => <article key={item}><span>✦</span><h3>{item}</h3><p>Thoughtful hospitality, prepared with the same care as your grooming ritual.</p></article>)}
        </div>
      </section>
    </PageLayout>
  )
}
