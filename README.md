# Full Stack Spotify Clone with Next.js 13.4 App Router: React, Tailwind, Supabase, PostgreSQL, Stripe

![Spotify Clone](https://private-user-images.githubusercontent.com/72767265/246514930-1f7ca0bf-1448-4cf9-a8da-4884ec60d98c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJrZXkxIiwiZXhwIjoxNjg2OTQ0MjMwLCJuYmYiOjE2ODY5NDM5MzAsInBhdGgiOiIvNzI3NjcyNjUvMjQ2NTE0OTMwLTFmN2NhMGJmLTE0NDgtNGNmOS1hOGRhLTQ4ODRlYzYwZDk4Yy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMwNjE2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMDYxNlQxOTMyMTBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xY2EwYjZlYjhlMWRhOGM3OGE5NDBlNDA0NjZkZTlmNzM5ZGI1M2M0YmU2ZmQwZTgwMzk1MjU4YjI2ZGM3MjgxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.gwwpDXX2miFQrrhq55isoKEvqdXxxTohSi8_-AA1mrk 'Spotify Clone')

## [Live Demo](https://spotify-clone-jcodev2.vercel.app/)

This is a repository for a Full Stack Spotify Clone with Next.js 13.4 App Router: React, Tailwind, Supabase, PostgreSQL, Stripe

## Features

- [x] **Song upload**
- [x] **Stripe integration**
- [x] **Tailwind design for sleek UI**
- [x] **Tailwind animations and transition effects**
- [x] **Full responsiveness for all devices**
- [x] **Credential authentication with Supabase**
- [x] **Github authentication integration**
- [x] **File and image upload using Supabase storage**
- [x] **Client form validation and handling using react-hook-form**
- [x] **Server error handling with react-toast**
- [x] **Play song audio**
- [x] **Favorites system**
- [x] **Playlists / Liked songs system**
- [x] **Advanced Player component**
- [x] **Stripe recurring payment integration**
- [x] **How to write POST, GET, and DELETE routes in route handlers (app/api)**
- [x] **How to fetch data in server React components by directly accessing the database (WITHOUT API! like Magic!)**
- [x] **Handling relations between Server and Child components in a real-time environment**
- [x] **Cancelling Stripe subscriptions**

## Tech Stack

- **@radix-ui/react-slider**
- **@radix-ui/react-dialog**
- **@stripe/stripe-js**
- **@supabase/auth-helpers-nextjs**
- **@supabase/auth-helpers-react**
- **@supabase/auth-ui-react**
- **@supabase/auth-ui-shared**
- **@supabase/supabase-js**
- **autoprefixer**
- **eslint**
- **eslint-config-next**
- **next**
- **postcss**
- **query-string**
- **react**
- **react-dom**
- **react-hook-form**
- **react-hot-toast**
- **react-icons**
- **react-spinners**
- **stripe**
- **tailwind-merge**
- **tailwindcss**
- **uniqid**
- **use-sound**
- **zustand**
- **husky**
- **lint-staged**
- **prettier**
- **prettier-plugin-tailwindcss**
- **standard**
- **supabase**

## Prerequisites

**Node version 14.x**

## Clone the repository

```bash
git clone https://github.com/jcodev2/spotify-clone.git
```

## Install dependencies

```bash
npm install
```

## Setup environment variables

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```

## Run the development server

```bash
npm run dev
```

## Available Scripts

**Running commands with npm `npm run [command]`**

| command | description                                  |
| ------- | -------------------------------------------- |
| `dev`   | **Starts a development instance of the app** |
