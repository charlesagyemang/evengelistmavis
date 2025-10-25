# Evangelist Mavis Opoku Ayemang Ministry Website

This is the official website for Evangelist Mavis Opoku Ayemang's ministry. The website showcases her ministry, events, media content, and provides a way for visitors to get in touch.

## Features

- Modern, responsive design with dark theme
- Hero section with ministry introduction
- About section detailing Evangelist Mavis's background and mission
- Ministry areas overview
- Media gallery for sermons (videos and audio)
- Upcoming events/itinerary section
- Contact form and social media links

## Tech Stack

- **Frontend**: Next.js with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons, React Icons
- **Media Player**: React Player

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd mamabishop
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
├── public/            # Static assets
├── src/
│   ├── app/           # Next.js app directory
│   ├── components/    # React components
│   │   ├── layout/    # Layout components (Navbar, Footer)
│   │   ├── sections/  # Page sections
│   │   └── ui/        # Reusable UI components
│   └── styles/        # Global styles
├── package.json       # Project dependencies
└── README.md          # Project documentation
```

## Backend Integration

The website is designed to be integrated with a Rails API backend (coming soon) that will handle:

- Contact form submissions
- Event management
- Media content management
- Authentication for admin panel

## Deployment

The website can be deployed on Vercel, Netlify, or any other hosting service that supports Next.js applications.

```bash
npm run build
```

## Customization

- Replace placeholder gradients with actual images
- Update social media links with actual URLs
- Add real event data to the itinerary section
- Connect the contact form to a backend API

## License

All rights reserved. This project is proprietary and confidential.

---

Created with ❤️ for Evangelist Mavis Opoku Ayemang's Ministry