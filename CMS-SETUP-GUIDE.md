# Mandurah Swimming Club — CMS Setup Guide

## What's Changed

All hardcoded page content has been extracted into JSON files in `/content/`. The React page components now import from these files instead of having data inline. **Decap CMS** (formerly Netlify CMS) provides a browser-based admin panel at `/admin` where non-technical editors can update all content through simple forms.

### Architecture

```
content/                 ← JSON data files (edited via CMS)
  ├── home.json
  ├── committee.json
  ├── coaches.json
  ├── captains.json
  ├── sponsors.json
  ├── squads.json
  ├── fees.json
  ├── calendar.json
  ├── news.json
  ├── target-meets.json
  ├── jx-program.json
  └── contact.json
public/admin/            ← Decap CMS dashboard
  ├── index.html
  └── config.yml
src/pages/               ← React components (import from content/*.json)
netlify.toml             ← Netlify build & redirect config
```

### How It Works

1. Editor goes to `yoursite.com.au/admin` and logs in via email (Netlify Identity)
2. They see a clean dashboard with sections: News, Calendar, Committee, Coaches, etc.
3. They edit content through form fields, rich text editors, and image uploaders
4. When they click **Publish**, Decap CMS commits the change to the GitHub repo
5. Netlify detects the commit and rebuilds the site automatically (~30 seconds)
6. The updated site is live

The editors never see Git, code, or a terminal.

---

## Deployment Steps

### 1. Push to GitHub

Commit and push all changes to the `main` branch:

```bash
git add -A
git commit -m "Add Decap CMS and content data layer"
git push origin main
```

### 2. Deploy to Netlify

1. Go to [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import an existing project**
2. Connect your GitHub account and select the `MandurahSwimmingClub` repo
3. Build settings should auto-detect from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Under **Environment variables**, add:
   - `VITE_CONTACT_FORM_ENDPOINT` = your Formspree URL
5. Click **Deploy site**

### 3. Set Up Custom Domain

1. In Netlify → **Domain management** → **Add custom domain**
2. Enter `mandurahswimmingclub.com.au`
3. Update your DNS to point to Netlify (they'll provide the details)
4. Enable HTTPS (automatic via Let's Encrypt)

### 4. Enable Netlify Identity (CMS Login)

This is what lets editors log in to the admin panel.

1. In Netlify → **Integrations** → **Identity** → **Enable Identity**
2. Under **Registration preferences**, select **Invite only** (so only people you invite can edit)
3. Under **External providers**, optionally enable Google login for convenience
4. Under **Services** → **Git Gateway**, click **Enable Git Gateway** (this lets Decap CMS commit to GitHub)

### 5. Invite Editors

1. In Netlify → **Identity** → **Invite users**
2. Enter the email addresses of committee members who need to edit content
3. They'll receive an invite email with a link to set their password
4. Once set up, they go to `yoursite.com.au/admin` to log in

The free tier of Netlify Identity supports **5 users** — plenty for a club committee.

---

## What Editors Can Do

| Section | What they can edit |
|---|---|
| 📰 News Posts | Add/edit/remove news articles with images |
| 📅 Calendar Events | Add/edit/remove upcoming events |
| 👥 Committee | Update office bearers and general committee each season |
| 🏊 Coaches | Update coaching team, bios, and photos |
| 🏅 Captains | Update captains each season |
| 🤝 Sponsors | Add/remove sponsors across all tiers |
| 🏋️ Squads & Schedule | Update training times and squad details |
| 💰 Fees | Update all fee tables |
| 🎯 Target Meets | Update target meets each season |
| ⭐ JX Program | Update JX results annually |
| 📞 Contact Details | Update key contacts and addresses |
| 🏠 Home Page | Edit hero text, stats, vision/mission |

### Adding Images

Editors can upload images directly through the CMS. Images are committed to `public/images/` in the repo. For coach/captain photos, the image filename must match the `Photo ID` field (e.g. `coach-sharky.png`).

---

## Pages Not Yet CMS-Connected

A few pages still have content hardcoded in their TSX files because they change very rarely:

- **About** (`About.tsx`) — General about text
- **Club Nights** (`ClubNights.tsx`) — Time trial info
- **Championships** (`Championships.tsx`) — Championship info
- **Donate** (`Donate.tsx`) — Containers for Change info
- **Uniform** (`Uniform.tsx`) — Merch info
- **Fuel to Go** (`FuelToGo.tsx`) — FTGP pledge
- **Training Facilities** (`TrainingFacilities.tsx`) — Pool specs
- **Integrity** (`Integrity.tsx`) — Policy PDF links
- **Country Pennants** (`CountryPennants.tsx`) — Promo images

To add CMS editing for any of these: extract the content to a JSON file in `content/`, add the collection to `public/admin/config.yml`, and update the component to import from the JSON file.

---

## Key Changes from Original

- **Calendar**: No longer uses `localStorage`. Events are stored in `content/calendar.json` and managed via the CMS. This means events persist across all browsers/devices (they're baked into the build).
- **Admin login**: The old password-based admin panel on the Calendar page has been removed. All editing now happens through the CMS at `/admin`.
- **News**: Ready for content — when posts are added via the CMS, they render automatically sorted by date.

---

## Local Development

Everything works the same locally:

```bash
npm install
npm run dev
```

To test the CMS locally, install the Decap CMS proxy server:

```bash
npx decap-server
```

Then uncomment the `local_backend: true` line in `public/admin/config.yml` and visit `http://localhost:5173/admin/`.

---

## Costs

- **Netlify hosting**: Free (100GB bandwidth/month, 300 build minutes/month)
- **Netlify Identity**: Free (up to 5 users — invite-only)
- **Decap CMS**: Free and open source
- **GitHub**: Free
- **Formspree**: Free (50 submissions/month)
- **Domain renewal**: Only ongoing cost (~$30-50/year for .com.au)

**Total: $0/month**
