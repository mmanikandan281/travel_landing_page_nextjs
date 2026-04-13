# Jadoo Travel Landing Page

A travel landing page built with Next.js 13, TypeScript, and Tailwind CSS.

This project includes a modern homepage, a responsive navbar, a hero section with a custom traveler image, testimonials, partner logos, newsletter, footer, and basic UI-only login and signup pages.

# UI
<img width="1919" height="1032" alt="image" src="https://github.com/user-attachments/assets/f47b8f81-f41c-4530-9479-968e657c7912" />


## Tech Stack

- Next.js 13
- React 18
- TypeScript
- Tailwind CSS
- Lucide React

## Features

- Responsive travel landing page UI
- Reusable section-based homepage
- Sticky navbar with mobile menu
- Hero section with local traveler image from `public/`
- Testimonials section with interactive switching
- Partner logo section using `next/image`
- Basic login page
- Basic signup page
- Tailwind-based styling and hover effects

## Pages

- `/` - Home page
- `/login` - Basic login UI
- `/signup` - Basic signup UI

## Project Structure

```txt
app/
  layout.tsx
  page.tsx
  login/page.tsx
  signup/page.tsx

components/
  Navbar.tsx
  Hero.tsx
  Services.tsx
  Destinations.tsx
  Booking.tsx
  Testimonials.tsx
  Newsletter.tsx
  Footer.tsx

public/
  travler.png
  logos/
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run linting
- `npm run typecheck` - Run TypeScript type checking

## Image Usage

### Traveler image

If you place the traveler image in:

```txt
public/travler.png
```

Use it like this:

```tsx
<Image
  src="/travler.png"
  alt="Traveler with backpack"
  fill
  className="object-cover object-top rounded-2xl"
  priority
/>
```

### Partner logos

Partner logos should be stored inside:

```txt
public/logos/
```

Example:

```txt
public/logos/OIP.jpeg
public/logos/jetstar1.jpeg
public/logos/expedia.jpeg
public/logos/qantas.jpeg
public/logos/alitalia.jpeg
```

When using images from the `public` folder in Next.js, always use a root-based path:

```tsx
src="/logos/OIP.jpeg"
```

Not:

```tsx
src="logos/OIP.jpeg"
```

## Current Notes

- Login and signup pages are UI-only for now
- No authentication backend is connected yet
- Logo images must exist inside `public/logos` to render correctly
- `next/image` does not auto-download missing files

## Future Improvements

- Connect login/signup with Supabase auth
- Add real navigation links for all navbar items
- Improve form validation
- Optimize image assets
- Add deployment configuration and live demo link
