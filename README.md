# Barbero Atelier

Barbero Atelier is a responsive React website for a premium Mayfair barbershop. It presents the studio's story, grooming rituals, master barbers, membership options, hospitality details, and a complete appointment booking journey in a refined light editorial design.

## What the project includes

- Separate Home, Services, About, and Contact & Booking pages.
- Responsive header with desktop navigation, mobile menu, logo, and Book Now calls to action.
- Home-page ber-months promotional modal with dismiss and booking actions.
- Service catalogue with pricing, durations, categories, packages, memberships, and booking links.
- About page with the atelier story, values, barber profiles, studio details, terms, and appointment etiquette.
- Booking flow where customers choose:
  - Service and duration
  - Master barber
  - Appointment date and time
  - Guest name, email, phone, beverage, and special requests
- Dynamic calendar integration:
  - Google Calendar event link
  - Apple Calendar-compatible `.ics` download
  - Selected service, barber, guest, location, date, time, duration, and notes carried into the event
- Shared footer with contact details, opening hours, social link, booking link, legal links, and copyright.
- Hash-based navigation with working legal-section anchors.
- Local branding and barber imagery in `src/assets/`.

## Tech stack

- React 19
- Vite
- JavaScript and JSX
- CSS
- ESLint

## Getting started

### Requirements

- Node.js 18 or newer
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will display the local development URL in the terminal.

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Run linting

```bash
npm run lint
```

## Project structure

```text
src/
├── assets/
│   ├── barberoLogo.jpeg
│   ├── barber1.jpeg
│   ├── barber2.jpeg
│   └── barber3.jpeg
├── pages/
│   ├── PageLayout.jsx
│   ├── home.jsx
│   ├── services.jsx
│   ├── about.jsx
│   └── contact.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Navigation

The site uses lightweight hash routes:

- `#/` - Home
- `#/services` - Services & Rituals
- `#/about` - About / Story
- `#/contact` - Contact & Booking

Services can link directly to a preselected booking service using a query string, for example:

```text
#/contact?service=The%20Royal%20Treatment
```

## Booking and calendar behavior

The booking form validates the guest's required contact details before confirming an appointment. After confirmation, the page generates calendar actions from the customer's current selections rather than using a fixed appointment.

Google Calendar opens a pre-filled event template. The Apple Calendar action downloads a standards-compatible `.ics` file that can be opened by Apple Calendar and other calendar applications.

## Design direction

The interface uses a white light-mode palette, Inter typography, charcoal text, and the `#CB6D51` terracotta accent. Layouts use editorial spacing, responsive grids, outlined cards, strong imagery, and clear booking calls to action across desktop, tablet, and mobile sizes.
