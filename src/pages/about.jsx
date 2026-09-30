import PageLayout from './PageLayout'
import { Hourglass, Scissors, Sparkles } from 'lucide-react'
import barber1 from '../assets/barber1.jpeg'
import barber2 from '../assets/barber2.jpeg'
import barber3 from '../assets/barber3.jpeg'

const pillars = [
  ['01', 'Precision', 'Scissor-over-comb mastery passed through generations of master craftsmen. We sculpt with uncompromising structural geometry tailored to skull contour and natural follicle growth patterns.', 'Tolerance: ±0.5 millimeters'],
  ['02', 'Atmosphere', 'An intimate sanctuary devoid of commercial haste. Appointments are scheduled with deliberate buffers, guaranteeing unhurried hot-towel immersion, quiet dialogue and absolute discretion.', 'Pace: 60-minute dedicated blocks'],
  ['03', 'Integrity', 'Exclusively cold-pressed botanical tonics, virgin argan infusions and micro-batched beeswax pomades formulated without synthetic preservatives or heavy fragrances.', 'Purity: 100% biodynamic formulas'],
]

const barbers = [
  [barber1, 'Julian Vance', 'Founder & Creative Director', 'Julian is the classical British cut authority behind our signature silhouettes and considered consultation ritual.'],
  [barber2, 'Matteo Rossi', 'Senior Master Stylist', 'Matteo pairs modern texture and natural fades with the precision of Italian tailoring.'],
  [barber3, 'Christian Sterling', 'Razor & Skin Specialist', 'Christian brings a calm, exacting approach to straight-razor detailing and restorative skin rituals.'],
]

export default function About() {
  return (
    <PageLayout activePage="/about">
      <section className="about-reference-hero">
        <div>
          <p className="overline">THE BARBERO HERITAGE</p>
          <h1>Elevating the barber&apos;s craft into fine sartorial art.</h1>
          <p className="about-reference-copy">Founded along the quiet cobblestones of London&apos;s Mayfair, BARBERO was born out of an uncompromising reverence for classic European barbering tradition, thoughtfully reimagined with contemporary architectural discernment.</p>
          <p className="about-reference-copy">We view each client relationship not as a routine maintenance interval, but as an intimate sartorial study. Here, razor precision, bespoke consultation and tactile calm intertwine to restore personal bearing and absolute composure.</p>
          <div className="about-stats"><div><strong>1912</strong><span>Heritage root</span></div><div><strong>4</strong><span>Private suites</span></div><div><strong>100%</strong><span>Organic tonics</span></div></div>
        </div>
        <figure className="about-hero-figure"><img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1100&q=85" alt="Bespoke barber tools arranged on a marble counter" /><figcaption><span>Fig. 01 — Bespoke hand-forged instruments</span><b>Mayfair Atelier</b></figcaption></figure>
      </section>

      <section className="about-reference-section">
        <p className="overline">CONVICTION &amp; DISCIPLINE</p>
        <h2>The Three Pillars of Our Ethos</h2>
        <div className="about-pillar-grid">{pillars.map(([number, title, text, footer]) => {
          const Icon = number === '01' ? Scissors : number === '02' ? Hourglass : Sparkles
          return <article key={number}><div className="about-card-top"><span>Pillar {number}</span><b><Icon size={16} strokeWidth={1.7} aria-hidden="true" /></b></div><h3>{title}</h3><p>{text}</p><footer>{footer}</footer></article>
        })}</div>
      </section>

      <section className="about-reference-section">
        <div className="about-lookbook-heading"><div><p className="overline">THE ARTISANS</p><h2>Master Barbers Lookbook</h2></div><p>Every resident artisan possesses a minimum of eight years of classical European conservatory training and bespoke tailoring discipline.</p></div>
        <div className="about-lookbook-grid">{barbers.map(([image, name, role, bio]) => <article className="lookbook-card" key={name}><div className="lookbook-image"><img src={image} alt={`${name}, ${role}`} /><span>5.0 ★★★★★</span><b>{role}</b></div><div className="lookbook-copy"><h3>{name}</h3><small>{role}</small><p>{bio}</p><div className="lookbook-tags"><span>Classic technique</span><span>Private consultations</span></div><a className="ritual-button" href="#/contact">Book with {name.split(' ')[0]}</a></div></article>)}</div>
      </section>

      <section className="about-reference-section architecture-section">
        <div className="about-lookbook-heading"><div><p className="overline">THE SANCTUARY</p><h2>Interior Architecture</h2></div><p>Designed in collaboration with London architectural studio Rowe &amp; Percy, our spaces are built around calm, craft and quiet confidence.</p></div>
        <div className="architecture-grid"><figure className="architecture-wide"><img src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1200&q=85" alt="Warm, refined barbershop interior" /><figcaption>Carrara marble stations &amp; bespoke saddle leather</figcaption></figure><figure><img src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=700&q=85" alt="Polished barber mirror and station" /><figcaption>Brushed brass &amp; fluted glass</figcaption></figure><figure><img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=700&q=85" alt="Barber library lounge" /><figcaption>The members&apos; library lounge</figcaption></figure><figure className="architecture-wide"><img src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1200&q=85" alt="Botanical apothecary bottles" /><figcaption>The cold-pressed botanical dispensary</figcaption></figure></div>
      </section>

      <section className="about-press"><p className="overline">SELECTED ACCOLADES</p><h2>Press &amp; Accolades</h2><div className="press-grid"><article><strong>GQ</strong><p>&ldquo;BARBERO has quietly redefined men&apos;s grooming in London.&rdquo;</p></article><article><strong>ESQUIRE</strong><p>&ldquo;From the silence of their private suites to the masterful ritual.&rdquo;</p></article><article><strong>MONOCLE</strong><p>&ldquo;An oasis of high-touch craft, where attention becomes the defining difference.&rdquo;</p></article></div></section>

      <section className="about-final-cta"><p className="overline">YOUR NEXT RITUAL</p><h2>Ready to experience the distinction?</h2><p>Appointments are strictly limited each day to preserve unhurried calm and our master barbers&apos; dedicated attention.</p><a className="dark-button" href="#/contact">Reserve an appointment</a><a className="light-button" href="tel:+442079462145">Call the atelier</a></section>

      <section className="terms-block" id="terms"><p className="overline">TERMS &amp; CONDITIONS</p><h2>Your appointment, thoughtfully considered.</h2><p id="etiquette">Please arrive 10 minutes before your appointment. Cancellations or reschedules within 24 hours may incur a £15 change fee. Late arrivals may reduce service time. We reserve the right to adjust a service recommendation based on hair condition, scalp health and client goals.</p></section>
    </PageLayout>
  )
}
