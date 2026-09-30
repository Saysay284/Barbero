import { useMemo, useState } from 'react'
import PageLayout from './PageLayout'
import barber1 from '../assets/barber1.jpeg'
import barber2 from '../assets/barber2.jpeg'
import barber3 from '../assets/barber3.jpeg'

const services = [
  { name: 'The Royal Treatment', duration: 75, price: 120 },
  { name: 'Signature Precision Cut', duration: 45, price: 65 },
  { name: 'Beard Architecture', duration: 30, price: 45 },
]
const barbers = [
  { name: 'Julian Vance', role: 'Founder · Master Row Stylist', image: barber1 },
  { name: 'Matteo Rossi', role: 'Senior Master Stylist', image: barber2 },
  { name: 'Christian Sterling', role: 'Razor & Skin Specialist', image: barber3 },
]
const slots = ['10:00', '11:15', '12:30', '13:30', '15:00', '16:15', '17:30', '18:45']

const toDateValue = (date) => {
  const year = date.getFullYear()
  const month = `${date.getMonth() + 1}`.padStart(2, '0')
  const day = `${date.getDate()}`.padStart(2, '0')
  return `${year}-${month}-${day}`
}

const readableDate = (value) => new Date(`${value}T12:00:00`).toLocaleDateString('en-GB', {
  weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
})

export default function Contact() {
  const defaultDate = useMemo(() => {
    const date = new Date()
    date.setDate(date.getDate() + 4)
    return toDateValue(date)
  }, [])
  const requestedService = new URLSearchParams(window.location.hash.split('?')[1] || '').get('service')
  const initialServiceIndex = services.findIndex((item) => requestedService
    && (item.name === requestedService || item.name.includes(requestedService) || requestedService.includes(item.name)))
  const [serviceIndex, setServiceIndex] = useState(initialServiceIndex >= 0 ? initialServiceIndex : 0)
  const [barberIndex, setBarberIndex] = useState(0)
  const [date, setDate] = useState(defaultDate)
  const [time, setTime] = useState('15:00')
  const [details, setDetails] = useState({ name: '', email: '', phone: '', beverage: 'Espresso', notes: '' })
  const [confirmed, setConfirmed] = useState(false)
  const [message, setMessage] = useState('')
  const service = services[serviceIndex]
  const barber = barbers[barberIndex]

  const appointment = useMemo(() => {
    const start = new Date(`${date}T${time}:00`)
    const end = new Date(start)
    end.setMinutes(end.getMinutes() + service.duration)
    return { start, end }
  }, [date, service.duration, time])

  const googleCalendar = useMemo(() => {
    const googleDate = (value) => value.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z')
    const title = `Barbero Atelier — ${service.name} with ${barber.name}`
    const description = `Service: ${service.name}. Barber: ${barber.name}. Guest: ${details.name || 'Guest'}. Beverage: ${details.beverage}. Notes: ${details.notes || 'None'}.`
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${googleDate(appointment.start)}/${googleDate(appointment.end)}&details=${encodeURIComponent(description)}&location=${encodeURIComponent('42 Mount Street, Mayfair, London W1K 2RN, Suite 2')}`
  }, [appointment, barber.name, details.beverage, details.name, details.notes, service.name])

  const appleCalendar = useMemo(() => {
    const icsDate = (value) => value.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z')
    const content = [
      'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Barbero//Appointment//EN', 'BEGIN:VEVENT',
      `UID:barbero-${date}-${time}-${service.name.replace(/\s+/g, '-').toLowerCase()}@barberoatelier.com`,
      `DTSTAMP:${icsDate(appointment.start)}`, `DTSTART:${icsDate(appointment.start)}`, `DTEND:${icsDate(appointment.end)}`,
      `SUMMARY:Barbero Atelier — ${service.name} with ${barber.name}`, 'LOCATION:42 Mount Street, Mayfair, London W1K 2RN, Suite 2',
      `DESCRIPTION:Guest: ${details.name || 'Guest'}. Beverage: ${details.beverage}. Notes: ${details.notes || 'None'}.`,
      'END:VEVENT', 'END:VCALENDAR',
    ].join('\r\n')
    return `data:text/calendar;charset=utf-8,${encodeURIComponent(content)}`
  }, [appointment, barber.name, date, details.beverage, details.name, details.notes, service.name, time])

  const updateDetails = (event) => setDetails((current) => ({ ...current, [event.target.name]: event.target.value }))
  const submit = (event) => {
    event.preventDefault()
    if (!details.name || !details.email || !details.phone) {
      setMessage('Please add your name, email and phone number to confirm your appointment.')
      return
    }
    setConfirmed(true)
    setMessage('Your appointment is confirmed. Add it to your calendar below.')
  }

  return (
    <PageLayout activePage="/contact">
      <section className="page-intro booking-intro">
        <p className="overline">BESPOKE APPOINTMENT CONCIERGE</p>
        <h1>Reserve Your Private Ritual</h1>
        <p className="lead">Select your preferred service, master barber and time slot. Enjoy dedicated attention in our private Mayfair suites.</p>
      </section>

      <div className="booking-progress"><span className="complete"> <b>Step 01</b> Service</span><span className="complete"> <b>Step 02</b> Master Barber</span><span className="active">03 <b>Active step</b> Date &amp; Time</span><span className="muted">04 <b>Final step</b> Guest Details &amp; Sync</span></div>
      <section className="booking-reference-grid">
        <div className="booking-main-column">
          <div className="booking-section-heading"><span>01.</span><h2>Selected Service &amp; Ritual</h2><button type="button" onClick={() => setServiceIndex((serviceIndex + 1) % services.length)}>Change</button></div>
          <div className="selected-service-card"><span className="confirmed-label">✓ Confirmed selection</span><p className="overline">SIGNATURE MAYFAIR EXPERIENCE</p><h2>{service.name}</h2><p>Handcrafted bespoke precision haircut, infused botanical hot-towel steam shave, cooling menthol compress, tailored scalp treatment and single-malt consultation.</p><footer><span>◷ {service.duration} minutes · Private Suite 2</span><strong>£{service.price}.00</strong></footer></div>
          <div className="service-pills">{services.map((item, index) => <button key={item.name} type="button" className={index === serviceIndex ? 'selected' : ''} onClick={() => setServiceIndex(index)}>{item.name} (£{item.price})</button>)}</div>

          <div className="booking-section-heading"><span>02.</span><h2>Choose your master barber</h2><button type="button" onClick={() => setBarberIndex((barberIndex + 1) % barbers.length)}>All specialists</button></div>
          <div className="selected-barber-card"><img src={barber.image} alt={barber.name} /><div><p className="overline">{barber.role}</p><h3>{barber.name}</h3><p>★ 5.0 · 240+ private appointments reviewed</p></div><span>Available on selected date</span></div>
          <div className="barber-choice-row">{barbers.map((item, index) => <button type="button" className={index === barberIndex ? 'selected' : ''} key={item.name} onClick={() => setBarberIndex(index)}>{item.name}</button>)}</div>

          <div className="booking-calendar-panel"><div className="booking-calendar-heading"><div><p className="overline">SELECT YOUR DATE</p><h2>{new Date(`${date}T12:00:00`).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}</h2></div><input type="date" value={date} onChange={(event) => setDate(event.target.value)} /></div><div className="slot-group"><span>Morning session</span><div>{slots.slice(0, 3).map((slot) => <button type="button" className={slot === time ? 'selected' : ''} key={slot} onClick={() => setTime(slot)}>{slot}</button>)}</div></div><div className="slot-group"><span>Afternoon session</span><div>{slots.slice(3, 6).map((slot) => <button type="button" className={slot === time ? 'selected' : ''} key={slot} onClick={() => setTime(slot)}>{slot}</button>)}</div></div><div className="slot-group"><span>Evening session</span><div>{slots.slice(6).map((slot) => <button type="button" className={slot === time ? 'selected' : ''} key={slot} onClick={() => setTime(slot)}>{slot}</button>)}</div></div></div>

          <form className="booking-panel guest-details-panel" onSubmit={submit}><p className="overline">04 · GUEST DETAILS</p><div className="booking-fields"><label>Full name<input name="name" value={details.name} onChange={updateDetails} placeholder="Your full name" /></label><label>Email address<input type="email" name="email" value={details.email} onChange={updateDetails} placeholder="you@example.com" /></label></div><label>Telephone number (for SMS reminders)<input name="phone" value={details.phone} onChange={updateDetails} placeholder="+44 7700 900123" /></label><label>Complimentary beverage<select name="beverage" value={details.beverage} onChange={updateDetails}><option>Espresso</option><option>Single-malt tasting</option><option>Earl Grey tea</option><option>Sparkling water</option><option>No beverage</option></select></label><label>Special requests<textarea name="notes" value={details.notes} onChange={updateDetails} placeholder="Any scalp sensitivities, specific razor preferences or quiet appointment requests..." rows="3" /></label><button className="dark-button booking-confirm-button" type="submit">Confirm &amp; reserve private suite →</button>{message && <p className="booking-message">{message}</p>}</form>
        </div>

        <aside className="booking-side-column"><div className="booking-summary"><p className="overline">ATELIER APPOINTMENT · MAYFAIR</p><h2>Reservation Ledger</h2><p className="summary-service-name">{service.name} with {barber.name}</p><dl><div><dt>{service.duration} min bespoke service</dt><dd>£{service.price}.00</dd></div><div><dt>Private grooming suite fee</dt><dd>Complimentary</dd></div><div><dt>Selected beverage</dt><dd>Included</dd></div><div><dt>Botanical finishing elixir</dt><dd>Included</dd></div><div><dt>VAT (20% included)</dt><dd>£{Math.round(service.price / 6)}.00</dd></div><div className="total"><dt>Total payable</dt><dd>£{service.price}.00</dd></div></dl><small>Payment settled upon conclusion of service via card, cash or atelier house account.</small></div><div className="studio-card"><p className="overline">FLAGSHIP SANCTUARY</p><img src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=80" alt="Barbero Mayfair studio" /><p>◉ Physical Address<br /><strong>42 Mount Street, Mayfair, London W1K 2RN</strong></p><p>⌕ Private Concierge Line<br /><strong>+44 (0)20 7946 9120</strong></p><p>Atelier Hours<br /><strong>Monday – Saturday · 9:00 AM – 8:00 PM</strong></p></div></aside>
      </section>

      {confirmed && <section className="calendar-integration"><div><p className="overline">CONFIRMED APPOINTMENT</p><h2>Instant Calendar Integration</h2><p>{readableDate(date)} · {time}–{new Date(appointment.end).toLocaleTimeString('en-GB', { hour: 'numeric', minute: '2-digit' })} · {service.name} with {barber.name}</p></div><div className="calendar-actions"><a href={googleCalendar} target="_blank" rel="noreferrer">Add to Google Calendar</a><a href={appleCalendar} download="barbero-appointment.ics">Add to Apple Calendar (.ics)</a></div></section>}
    </PageLayout>
  )
}
