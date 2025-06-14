# Photography Portfolio Website

## New Zealand Photo Shoot Landing Page

A new landing page has been created for the premium New Zealand South Island photo shoot experience targeted at models and beautiful people.

### Image Assets Status

✅ **All images have been implemented!**

The following images have been set up for the New Zealand photo shoot landing page:

1. `/nz-mountains.jpg` - **Hero background image** showing epic New Zealand South Island mountains with a breathtaking natural quality.

2. `/nz-experience.jpg` - Image showing a model in an epic New Zealand landscape.

3. `/nz-gallery-1.jpg` through `/nz-gallery-3.jpg` - Gallery images using three high-quality photographs (DSC01969, DSC02652, and DSC02848).

4. `/nz-cta-bg.jpg` - Background image for the call-to-action section.

**Note on image sources**: The gallery now features exactly 3 selected images with no duplicates. All images are directly used from the DSC series photos.

### Shoot Options

The landing page now offers:

- **Full-day experience**: 8+ hours with multiple locations
- **Half-day sessions**: 4 hours with 1-2 locations
- **Mini sessions**: 2 hours at a single location

Each option includes professional direction, digital photography, and edited images proportional to the shoot length.

### Updated for 2025

The page has been updated to reflect the 2025 season, with current scheduling availability.

### Image Style Guide

The selected images follow these guidelines for optimal conversion to call bookings:

- **Dramatic lighting**: Dawn or dusk lighting with golden hour warmth or moody atmospheric conditions
- **Elegant aesthetic**: Models posed in ways that suggest power, grace, and harmony with nature
- **Epic scale**: Wide, sweeping landscapes that showcase the grandeur of New Zealand's scenery
- **Rich colors**: Deep blues, emerald greens, and golden tones that evoke the natural beauty of the location
- **Contrast**: Strong visual contrast between the model and the environment

### Navigation Updates

The new page has been added to both the header and footer navigation components. The path to access the page is:

```
/nz-photo-shoot
```

### Booking Link

The booking link has been set to:

```
https://cal.com/aidantorrence/nz-photo-experience
```

Please update this link if a different booking system or calendar link is preferred.

### Call-to-Action Focus

The page has been optimized to encourage call bookings with:
- Multiple prominent call-to-action buttons throughout the page
- Clear value proposition for scheduling a consultation
- A fixed floating call button on mobile view
- Urgency-creating messaging about limited availability

## Development

This is a Next.js application using React and Tailwind CSS for styling.

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Focus Reminder Cron (Render)
The script at `focus-reminder/focus-reminder.sh` now fetches your highest priority Todoist task and sends it via Pushover. It requires `jq` to parse the Todoist API response. A `render.yaml` configuration is provided to run the script every two minutes using Render's Cron Job service. Create a new Cron Job on Render, point it at this repository, and add your `TODOIST_TOKEN`, `PUSHOVER_APP_TOKEN`, and `PUSHOVER_USER_KEY` secrets in the Environment tab.

## Pushcut Reminder Cron (Render)
The script at `pushcut-reminder/pushcut-reminder.sh` sends your highest priority Todoist task to Pushcut so your "Speak Top Task" Shortcut can read it aloud. Like the Pushover version, it requires `jq` and uses the same Todoist query. Configure a Render Cron Job with the provided `render.yaml` and add `TODOIST_TOKEN` and `PUSHCUT_URL` as environment variables.
