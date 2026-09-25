import { useState } from 'react'
import PageLayout from './PageLayout'

const pillars = [
  ['01', 'Master Craftsmanship', 'Artisans with 15+ years of Savile Row and Mayfair grooming pedigree. Every stroke is measured, considered and executed with razor-sharp accuracy.', 'Our lineage'],
  ['02', 'Artisan Formulations', 'Small-batch botanical tonics, Italian cedarwood pomades and warm lavender towels steeped in pure essential oils for restorative calm.', 'Apothecary lab'],
  ['03', 'Private Suite Sanctuary', 'Complimentary sage single-malt whisky or artisan espresso bar, seated in sound-dampened private leather booths designed for total executive privacy.', 'The suites'],
]

const rituals = [
  ['45 MIN · CONSULTATION INCLUDED', 'Signature Tailored Haircut', 'Comprehensive facial consultation, scissor-over-comb architecture, neck taper with cutthroat razor, followed by a botanical hair wash.', '£65'],
  ['35 MIN · HOT TOWEL RITUAL', 'Beard Sculpting & Hot Towel', 'Precision beard clipper & razor line work, infused dual lavender towels, organic conditioning beard oil infusion, complete with a cooling balm.', '£45'],
  ['85 MIN · FULL IMMERSION', 'The Mayfair Royal Treatment', 'The pinnacle grooming experience: tailored haircut, traditional wet shave with straight razor, acupressure scalp massage, and bespoke apothecary facial detox mask.', '£120'],
]

const barbers = [
  ['JV', 'Julian Vance', 'Head of Atelier', 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=700&q=85', 'Julian Vance is the reigning classical British cut authority and the creative director behind every Barbero ritual.'],
  ['MR', 'Matteo Rossi', 'Senior Stylist', 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=700&q=85', 'Specialist in modern texture, natural fades and bespoke Italian tailoring.'],
]

export default function Home() {
  const [showAnnouncement, setShowAnnouncement] = useState(true)

  return (
    <PageLayout activePage="/">
      <section className="home-reference-hero">
        <div className="home-reference-copy">
          <div className="home-badges"><span>Voted Best Men&apos;s Grooming Atelier 2024</span><span>Private Grooming Suites</span></div>
          <h1>Crafted precision.<br /><em>Timeless</em> distinction.</h1>
          <p className="lead">A sanctuary of refined grooming where generational mastery meets modern sartorial precision. Experience bespoke tailoring for hair, beard and face in London&apos;s most prestigious quarters.</p>
          <div className="editorial-actions"><a className="dark-button" href="#/contact">Reserve an appointment</a><a className="light-button" href="#/services">Explore the rituals</a></div>
          <div className="editorial-stat-row"><div><strong>15+</strong><span>Master artisans</span></div><div><strong>5.0 ★</strong><span>Mayfair concierge score</span></div><div><strong>100%</strong><span>Private quarters</span></div></div>
        </div>
        <div className="home-reference-visual">
          <img src="https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=1200&q=85" alt="Barber giving a refined haircut in a warm atelier" />
          <div><strong>ATELIER HIGHLIGHT</strong><span>The Signature Razor Taper</span><b>£65</b></div>
        </div>
      </section>

      <section className="home-section home-architecture">
        <div className="section-title"><p className="overline">THE ARCHITECTURE OF GROOMING</p><h2>Precision in Every Gesture</h2></div>
        <p>Our atelier honors traditional Savile Row tailoring principles, applying bespoke calibration to facial anatomy and hair growth patterns.</p>
      </section>

      <section className="home-section">
        <div className="home-pillar-grid">{pillars.map(([number, title, text, footer]) => <article className="home-pillar-card" key={number}><span className="pillar-number">{number}</span><h3>{title}</h3><p>{text}</p><footer>{footer}<span>→</span></footer></article>)}</div>
      </section>

      <section className="home-section home-rituals">
        <div className="section-title"><p className="overline">THE MENU</p><h2>Curated Rituals &amp; Grooming</h2></div>
        <a className="text-link" href="#/services">View complete atelier tariff (14 offerings)</a>
        <div className="home-ritual-grid">{rituals.map(([meta, title, text, price], index) => <article className={`home-ritual-card ${index === 1 ? 'featured' : ''}`} key={title}>{index === 1 && <span className="ritual-tag">Atelier classic</span>}<div className="card-meta"><span>{meta}</span><strong>{price}</strong></div><h3>{title}</h3><p>{text}</p><ul><li>Facial symmetry contouring</li><li>Single-malt or flat white beverage service</li></ul><a className="ritual-button" href="#/contact">Select service</a></article>)}</div>
      </section>

      <section className="home-section home-artisans">
        <div className="section-title"><p className="overline">THE ARTISANS</p><h2>Resident Master Barbers</h2></div>
        <p className="artisan-intro">Hand-selected practitioners combining classical European barbering disciplines with high-fashion runway sensibilities.</p>
        <div className="home-barber-grid">{barbers.map(([, name, role, image, bio]) => <article className="home-barber-card" key={name}><img src={image} alt={`${name}, ${role}`} /><div><div className="barber-card-heading"><span>{role}</span><b>5.0 ★★★★★</b></div><h3>{name}</h3><p>{bio}</p><footer>Availability: today <a href="#/contact">Book with {name.split(' ')[0]} →</a></footer></div></article>)}</div>
      </section>

      <section className="home-section home-cadence">
        <div className="cadence-copy"><p className="overline">CONCIERGE RESERVATION</p><h2>Select Your Cadence</h2><p>We accept reservations up to 30 days in advance. Private Grooming Suite access is allocated automatically for appointments 60 minutes and over.</p><ul><li><strong>Concierge Guarantee</strong><span>Zero wait time. Your artisan is prepared the moment you step through our doors.</span></li><li><strong>Beverage Hospitality</strong><span>Rare single-malt Scotch collection &amp; artisan roasts poured upon entry.</span></li></ul></div>
        <div className="cadence-preview"><p className="overline">BESPOKE SLOT CONFIGURATOR</p><div><span>1. Choose your ritual</span><div className="choice-row"><b>Haircut<br /><small>£65 · 45 min</small></b><b>Beard Sculpt<br /><small>£45 · 35 min</small></b><b>The Royal<br /><small>£120 · 85 min</small></b></div></div><div><span>2. Desired artisan</span><div className="choice-row"><b>Julian Vance (Head)</b><b>Matteo Rossi (Senior)</b></div></div><a className="dark-button" href="#/contact">Confirm atelier reservation · £65</a></div>
      </section>

      {showAnnouncement && <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="announcement-title"><div className="promo-modal home-announcement"><button className="close-modal" type="button" aria-label="Close announcement" onClick={() => setShowAnnouncement(false)}>×</button><p className="overline">Barbero ber-months privilege</p><h2 id="announcement-title">Enter autumn looking your sharpest.</h2><p>For September through November, enjoy a complimentary botanical scalp therapy with any Royal Treatment booking.</p><strong className="announcement-code">BER-MONTHS</strong><div className="modal-actions"><a className="dark-button" href="#/contact" onClick={() => setShowAnnouncement(false)}>Book the offer</a><button className="light-button" type="button" onClick={() => setShowAnnouncement(false)}>Maybe later</button></div></div></div>}
    </PageLayout>
  )
}
