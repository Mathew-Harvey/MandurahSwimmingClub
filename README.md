# Mandurah Swimming Club

Rebuilt website for [Mandurah Swimming Club](https://www.mandurahswimmingclub.com.au/), with improved UI/UX, contact form, and admin-managed calendar.

## Project structure

- **`index.html`** – Entry point (at repo root). The React app lives in **`src/`**, static assets in **`public/`**.
- **`OldWebsiteData/`** – Content archive (markdown) from the original Wix site.
- **`images/`** and **`pdfs/`** – Downloaded assets from the old site; copy these into **`public/`** so the build includes them (see below).
- **`download-images.sh`** and **`download-pdfs.sh`** – Scripts to re-download images and PDFs.
- **`website/`** – Legacy folder from initial scaffold; you can remove it and run everything from the repo root.

## Website setup

### 1. Install and run

From the **repo root**:

```bash
npm install
npm run dev
```

Open http://localhost:5173

### 2. Contact form (submit to email)

The contact page uses a **free-form submit to email** via [Formspree](https://formspree.io/) (or any similar endpoint):

1. Create a free form at [formspree.io](https://formspree.io/).
2. Add your email and get your form URL (e.g. `https://formspree.io/f/xxxxxxxx`).
3. Copy `.env.example` to `.env` and set:

   ```env
   VITE_CONTACT_FORM_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```

4. Restart the dev server. Submissions will be sent to the email you configured in Formspree.

### 3. Calendar admin (add events)

- **Public:** The calendar shows events in a read-only list (upcoming and past).
- **Admin:** Click **Admin Login**, enter the calendar admin password, then use **Add Event** to create events (title, date, optional time, optional description). Events are stored in the browser (localStorage).
- **Password:** Set in `.env` (see `.env.example`):

  ```env
  VITE_CALENDAR_ADMIN_PASSWORD=your-secret-password
  ```

  Then rebuild. The password is checked in the frontend only (suitable for a simple club site).

### 4. Build for production

From the **repo root**:

```bash
npm run build
```

Output is in **`dist/`**. Deploy that folder to any static host (Netlify, Vercel, GitHub Pages, etc.). Set `VITE_CONTACT_FORM_ENDPOINT` and `VITE_CALENDAR_ADMIN_PASSWORD` in your build environment if you use env vars there.

## Re-downloading assets

From the repo root (requires `bash` and `curl`):

```bash
./download-images.sh   # populates images/
./download-pdfs.sh     # populates pdfs/
```

Then copy into **`public/`** so the built site includes them:

```bash
# Windows (PowerShell)
xcopy /E /I /Y images public\images
xcopy /E /I /Y pdfs public\pdfs

# macOS/Linux
cp -R images public/
cp -R pdfs public/
```

## Features

- **UI/UX:** Clean layout, consistent spacing and typography, Outfit + DM Sans, teal/navy palette, responsive nav, clear CTAs.
- **Pages:** Home, About (Committee, Coaches, Captains, Fuel to Go, Facilities, Integrity), Get Swimming (Squads, Fees, Club Nights, Championships, Target Meets, Uniform, JX Program), Club Calendar, Club News, Sponsors, Donate, Contact, Country Pennants.
- **Contact:** Free-form message submitted to your email via Formspree.
- **Calendar:** Read-only event list for visitors; password-protected admin can add (and delete) events; events persist in localStorage.
