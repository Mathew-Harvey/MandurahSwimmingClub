/* ============================================================
   DECAP CMS — Custom Preview Templates
   Renders each collection using the exact same HTML structure
   and CSS classes as the live website pages
   ============================================================ */

// Decap CMS bundles React on the global scope
const h = window.React.createElement;

// Helper: get list from entry
function getList(entry, field) {
  const val = entry.getIn(['data', field]);
  if (!val) return [];
  return val.toJS ? val.toJS() : Array.isArray(val) ? val : [];
}

function getField(entry, field) {
  return entry.getIn(['data', field]) || '';
}

// ═══════════════════════════════════════
// NEWS
// ═══════════════════════════════════════
const NewsPreview = ({ entry }) => {
  const posts = getList(entry, 'posts');
  return h('div', {},
    h('header', { className: 'page-header' },
      h('div', { className: 'container' },
        h('h1', {}, 'Club News'),
        h('p', {}, 'Latest updates')
      )
    ),
    h('section', { className: 'section' },
      h('div', { className: 'container' },
        posts.map((post, i) =>
          h('article', { key: i, className: 'news-card' },
            post.image && h('img', { src: post.image, alt: post.title }),
            h('h2', { style: { marginBottom: '0.25rem' } }, post.title),
            h('p', { style: { color: 'var(--gray)', fontSize: '0.875rem', marginBottom: '0.75rem' } }, post.date),
            h('p', {}, post.summary),
            post.body && h('div', { className: 'prose', style: { marginTop: '0.75rem', whiteSpace: 'pre-line' } }, post.body)
          )
        )
      )
    )
  );
};

// ═══════════════════════════════════════
// CALENDAR
// ═══════════════════════════════════════
const CalendarPreview = ({ entry }) => {
  const events = getList(entry, 'events');
  return h('div', {},
    h('header', { className: 'page-header' },
      h('div', { className: 'container' },
        h('h1', {}, 'Club Calendar'),
        h('p', {}, 'Upcoming events')
      )
    ),
    h('section', { className: 'section' },
      h('div', { className: 'container' },
        events.length === 0
          ? h('p', { style: { color: 'var(--gray)', textAlign: 'center', padding: '3rem' } }, 'No events scheduled.')
          : h('ul', { className: 'calendar-list' },
              events.map((evt, i) =>
                h('li', { key: i, className: 'calendar-event' },
                  h('div', {},
                    h('strong', {}, evt.title),
                    h('span', { className: 'calendar-meta' }, evt.date, evt.time ? ` · ${evt.time}` : ''),
                    evt.description && h('p', { className: 'calendar-desc' }, evt.description)
                  )
                )
              )
            )
      )
    )
  );
};

// ═══════════════════════════════════════
// COMMITTEE
// ═══════════════════════════════════════
const CommitteePreview = ({ entry }) => {
  const season = getField(entry, 'season');
  const officers = getList(entry, 'officeBearers');
  const general = getList(entry, 'generalCommittee');

  const renderTable = (rows) =>
    h('div', { className: 'table-wrap' },
      h('table', { className: 'data-table' },
        h('thead', {}, h('tr', {}, h('th', {}, 'Role'), h('th', {}, 'Name'), h('th', {}, 'Email'))),
        h('tbody', {},
          rows.map((r, i) =>
            h('tr', { key: i },
              h('td', {}, r.role),
              h('td', {}, r.name),
              h('td', {}, r.email ? h('a', { href: `mailto:${r.email}` }, r.email) : '\u2014')
            )
          )
        )
      )
    );

  return h('div', {},
    h('header', { className: 'page-header' },
      h('div', { className: 'container' },
        h('h1', {}, 'Club Committee'),
        h('p', {}, `${season} Committee`)
      )
    ),
    h('section', { className: 'section' },
      h('div', { className: 'container' },
        h('h2', {}, 'Office Bearers'),
        renderTable(officers),
        h('h2', {}, 'General Committee'),
        renderTable(general)
      )
    )
  );
};

// ═══════════════════════════════════════
// COACHES
// ═══════════════════════════════════════
const CoachesPreview = ({ entry }) => {
  const bio = getList(entry, 'headCoachBio');
  const intro = getField(entry, 'juniorCoachesIntro');
  const coaches = getList(entry, 'coaches');

  return h('div', {},
    h('header', { className: 'page-header' },
      h('div', { className: 'container' },
        h('h1', {}, 'Club Coaches'),
        h('p', {}, 'Our coaching team')
      )
    ),
    h('section', { className: 'section' },
      h('div', { className: 'container' },
        h('div', { className: 'prose' },
          coaches[0] && h('h2', {}, `Head Coach: ${coaches[0].name}`),
          bio.map((p, i) => h('p', { key: i }, p)),
          h('h2', {}, 'Junior Coaches'),
          h('p', {}, intro)
        ),
        h('div', { className: 'coach-grid' },
          coaches.map((c, i) =>
            h('div', { key: i, className: 'coach-block' },
              h('img', { src: `/images/coaches/${c.id}.png`, alt: c.name }),
              h('h3', {}, c.name),
              h('p', {}, c.role)
            )
          )
        )
      )
    )
  );
};

// ═══════════════════════════════════════
// CAPTAINS
// ═══════════════════════════════════════
const CaptainsPreview = ({ entry }) => {
  const season = getField(entry, 'season');
  const intro = getList(entry, 'intro');
  const criteria = getList(entry, 'selectionCriteria');
  const captains = getList(entry, 'captains');

  return h('div', {},
    h('header', { className: 'page-header' },
      h('div', { className: 'container' },
        h('h1', {}, 'Club Captains'),
        h('p', {}, `${season} Season Captains`)
      )
    ),
    h('section', { className: 'section' },
      h('div', { className: 'container' },
        h('div', { className: 'prose' },
          intro.map((p, i) => h('p', { key: i }, p)),
          h('h2', {}, 'Selection Criteria'),
          h('ul', {}, criteria.map((c, i) => h('li', { key: i }, c)))
        ),
        h('div', { className: 'captain-grid' },
          captains.map((c, i) =>
            h('div', { key: i, className: 'captain-block' },
              h('img', { src: `/images/captains/${c.id}.png`, alt: c.name }),
              h('h3', {}, c.name),
              h('p', {}, c.role)
            )
          )
        )
      )
    )
  );
};

// ═══════════════════════════════════════
// SPONSORS
// ═══════════════════════════════════════
const SponsorsPreview = ({ entry }) => {
  const tiers = [
    { key: 'platinum', label: 'Platinum Sponsor' },
    { key: 'gold', label: 'Gold Sponsors' },
    { key: 'silver', label: 'Silver Sponsors' },
    { key: 'bronze', label: 'Bronze Sponsors' },
  ];

  return h('div', {},
    h('header', { className: 'page-header' },
      h('div', { className: 'container' },
        h('h1', {}, 'Sponsors'),
        h('p', {}, 'Thank you to our supporters')
      )
    ),
    h('section', { className: 'section' },
      h('div', { className: 'container' },
        tiers.map(({ key, label }) => {
          const list = getList(entry, key);
          if (!list.length) return null;
          return h('div', { key },
            h('h2', {}, label),
            h('div', { className: `sponsor-grid${key === 'platinum' ? ' sponsor-grid--platinum' : ''}` },
              list.map((s, i) =>
                h('div', { key: i, className: `sponsor-card sponsor-card--${key}` },
                  h('img', { src: `/images/sponsors/${s.logo}`, alt: s.name }),
                  h('h3', {}, s.name),
                  s.phone && h('p', {}, s.phone),
                  s.address && h('p', {}, s.address),
                  s.web && h('a', { href: s.web, target: '_blank' }, 'Website'),
                  s.facebook && h('a', { href: s.facebook, target: '_blank' }, 'Facebook')
                )
              )
            )
          );
        })
      )
    )
  );
};

// ═══════════════════════════════════════
// SQUADS
// ═══════════════════════════════════════
const SquadsPreview = ({ entry }) => {
  const intro = getField(entry, 'intro');
  const squads = getList(entry, 'squads');

  return h('div', {},
    h('header', { className: 'page-header' },
      h('div', { className: 'container' },
        h('h1', {}, 'Squads & Training Schedule'),
        h('p', {}, 'Get Swimming')
      )
    ),
    h('section', { className: 'section' },
      h('div', { className: 'container' },
        h('div', { className: 'prose', style: { marginBottom: '2rem' } }, h('p', {}, intro)),
        squads.map((squad, i) =>
          h('div', { key: i, className: 'squad-card' },
            h('h2', {}, `${squad.name} Squad`),
            h('p', {}, h('strong', {}, 'Level: '), squad.level, squad.age ? ` · Age: ${squad.age}` : ''),
            h('div', { className: 'table-wrap' },
              h('table', { className: 'data-table' },
                h('thead', {}, h('tr', {}, h('th', {}, 'Day'), h('th', {}, 'Type'), h('th', {}, 'Time'))),
                h('tbody', {},
                  (squad.schedule || []).map((row, j) =>
                    h('tr', { key: j }, h('td', {}, row.day), h('td', {}, row.type), h('td', {}, row.time))
                  )
                )
              )
            )
          )
        )
      )
    )
  );
};

// ═══════════════════════════════════════
// FEES
// ═══════════════════════════════════════
const FeesPreview = ({ entry }) => {
  const d = {
    intro: getField(entry, 'intro'),
    kidsportNote: getField(entry, 'kidsportNote'),
    swaIntro: getField(entry, 'swaIntro'),
    swaFees: getList(entry, 'swaFees'),
    clubFeesIntro: getField(entry, 'clubFeesIntro'),
    clubFees: getList(entry, 'clubFees'),
    squadFeesIntro: getField(entry, 'squadFeesIntro'),
    squadFees: getList(entry, 'squadFees'),
    footnote: getField(entry, 'footnote'),
    image: getField(entry, 'image'),
  };

  return h('div', {},
    h('header', { className: 'page-header' },
      h('div', { className: 'container' },
        h('h1', {}, 'Fees'),
        h('p', {}, 'Membership and squad fees')
      )
    ),
    h('section', { className: 'section' },
      h('div', { className: 'container' },
        d.image && h('img', { src: d.image, alt: 'Swimming', className: 'page-featured-img' }),
        h('div', { className: 'prose' },
          h('h2', {}, d.intro),
          h('p', {}, h('strong', {}, 'KidSport: '), d.kidsportNote),
          h('h2', {}, 'Swimming WA Membership Fees'),
          h('p', {}, d.swaIntro),
          h('div', { className: 'table-wrap' },
            h('table', { className: 'data-table' },
              h('thead', {}, h('tr', {}, h('th', {}, 'Category'), h('th', {}, 'Description'), h('th', {}, 'Fee'))),
              h('tbody', {}, d.swaFees.map((r, i) => h('tr', { key: i }, h('td', {}, r.category), h('td', {}, r.description), h('td', {}, r.fee))))
            )
          ),
          h('h2', {}, 'Club Membership Fees'),
          h('p', {}, d.clubFeesIntro),
          h('div', { className: 'table-wrap' },
            h('table', { className: 'data-table' },
              h('thead', {}, h('tr', {}, h('th', {}, 'Members'), h('th', {}, 'Fee'))),
              h('tbody', {}, d.clubFees.map((r, i) => h('tr', { key: i }, h('td', {}, r.members), h('td', {}, r.fee))))
            )
          ),
          h('h2', {}, 'Club Squad Fees'),
          h('p', {}, d.squadFeesIntro),
          h('div', { className: 'table-wrap' },
            h('table', { className: 'data-table' },
              h('thead', {}, h('tr', {}, h('th', {}, 'Squad(s)'), h('th', {}, 'Sessions'), h('th', {}, 'Fee'))),
              h('tbody', {}, d.squadFees.map((r, i) => h('tr', { key: i }, h('td', {}, r.squad), h('td', {}, r.sessions), h('td', {}, r.fee))))
            )
          ),
          h('p', { className: 'small-note' }, d.footnote)
        )
      )
    )
  );
};

// ═══════════════════════════════════════
// TARGET MEETS
// ═══════════════════════════════════════
const TargetMeetsPreview = ({ entry }) => {
  const season = getField(entry, 'season');
  const intro = getField(entry, 'intro');
  const pennantNote = getField(entry, 'pennantNote');
  const meets = getList(entry, 'meets');
  const footnote = getField(entry, 'footnote');
  const image = getField(entry, 'image');

  return h('div', {},
    h('header', { className: 'page-header' },
      h('div', { className: 'container' },
        h('h1', {}, 'Club Target Meets'),
        h('p', {}, season)
      )
    ),
    h('section', { className: 'section' },
      h('div', { className: 'container' },
        image && h('img', { src: image, alt: 'Target meets', className: 'page-featured-img', style: { maxWidth: '640px', marginBottom: '1.5rem' } }),
        h('div', { className: 'prose' },
          h('p', {}, intro),
          h('p', {}, pennantNote),
          h('h2', {}, `Target Meets for the ${season}`),
          h('ul', {}, meets.map((m, i) => h('li', { key: i }, m))),
          h('p', {}, h('em', {}, footnote))
        )
      )
    )
  );
};

// ═══════════════════════════════════════
// JX PROGRAM
// ═══════════════════════════════════════
const JXPreview = ({ entry }) => {
  const season = getField(entry, 'season');
  const intro = getField(entry, 'intro');
  const qualifyNote = getField(entry, 'qualifyNote');
  const image = getField(entry, 'image');
  const tiers = ['gold', 'silver', 'bronze', 'blue'];

  return h('div', {},
    h('header', { className: 'page-header' },
      h('div', { className: 'container' },
        h('h1', {}, 'Junior Excellence (JX) Program'),
        h('p', {}, season)
      )
    ),
    h('section', { className: 'section' },
      h('div', { className: 'container' },
        image && h('img', { src: image, alt: 'Junior Phoenix', className: 'page-featured-img', style: { maxWidth: '480px', marginBottom: '1.5rem' } }),
        h('div', { className: 'prose' },
          h('p', {}, intro),
          h('p', {}, qualifyNote)
        ),
        h('h2', {}, `${season} Results`),
        h('div', { className: 'jx-results' },
          tiers.map(key => {
            const names = getList(entry, key);
            if (!names.length) return null;
            return h('div', { key, className: 'jx-tier' },
              h('h3', {}, key.charAt(0).toUpperCase() + key.slice(1)),
              h('ul', {}, names.map((n, i) => h('li', { key: i }, n)))
            );
          })
        )
      )
    )
  );
};

// ═══════════════════════════════════════
// CONTACT
// ═══════════════════════════════════════
const ContactPreview = ({ entry }) => {
  const contacts = getList(entry, 'contacts');
  const venue = entry.getIn(['data', 'venue']);
  const postal = entry.getIn(['data', 'postal']);
  const v = venue && venue.toJS ? venue.toJS() : (venue || {});
  const p = postal && postal.toJS ? postal.toJS() : (postal || {});

  return h('div', {},
    h('header', { className: 'page-header' },
      h('div', { className: 'container' },
        h('h1', {}, 'Contact Us'),
        h('p', {}, 'Get in touch')
      )
    ),
    h('section', { className: 'section' },
      h('div', { className: 'container' },
        h('div', { className: 'contact-details' },
          h('h2', {}, 'Key contacts'),
          h('ul', { className: 'contact-list' },
            contacts.map((c, i) =>
              h('li', { key: i },
                h('strong', {}, c.role), ' \u2013 ', c.name, h('br'),
                h('a', { href: `mailto:${c.email}` }, c.email)
              )
            )
          ),
          h('h2', {}, 'Visit us'),
          h('p', {}, v.name, h('br'), v.street, h('br'), v.suburb),
          h('h2', {}, 'Postal address'),
          h('p', {}, p.line1, h('br'), p.line2)
        )
      )
    )
  );
};

// ═══════════════════════════════════════
// HOME PAGE
// ═══════════════════════════════════════
const HomePreview = ({ entry }) => {
  const hero = entry.getIn(['data', 'hero']);
  const heroData = hero && hero.toJS ? hero.toJS() : (hero || {});
  const stats = getList(entry, 'stats');
  const aboutRaw = entry.getIn(['data', 'aboutPreview']);
  const about = aboutRaw && aboutRaw.toJS ? aboutRaw.toJS() : (aboutRaw || {});
  const trialRaw = entry.getIn(['data', 'trial']);
  const trial = trialRaw && trialRaw.toJS ? trialRaw.toJS() : (trialRaw || {});
  const coachesRaw = entry.getIn(['data', 'coachesPreview']);
  const coachesP = coachesRaw && coachesRaw.toJS ? coachesRaw.toJS() : (coachesRaw || {});
  const vision = getField(entry, 'vision');
  const mission = getField(entry, 'mission');
  const tagline = getField(entry, 'tagline');

  return h('div', {},
    // Hero
    h('section', { className: 'hero' },
      heroData.image && h('img', { src: heroData.image, alt: '', className: 'hero-bg' }),
      h('div', { className: 'hero-overlay' }),
      h('div', { className: 'hero-content container' },
        h('span', { className: 'hero-eyebrow' }, heroData.eyebrow),
        h('h1', {}, heroData.heading),
        h('p', { className: 'hero-tagline' }, heroData.tagline),
        h('p', { className: 'hero-desc' }, heroData.description)
      )
    ),

    // Stats
    h('section', { className: 'section', style: { background: 'var(--white)' } },
      h('div', { className: 'container' },
        h('div', { className: 'stats-strip' },
          stats.map((s, i) =>
            h('div', { key: i, className: 'stat-item' },
              h('span', { className: 'stat-number' }, s.number),
              h('span', { className: 'stat-label' }, s.label)
            )
          )
        )
      )
    ),

    // About Preview
    h('section', { className: 'section section--dark about-preview' },
      h('div', { className: 'container grid-2' },
        h('div', {},
          h('div', { className: 'gradient-line' }),
          h('h2', {}, about.heading),
          h('p', { className: 'lead' }, about.lead),
          (about.paragraphs || []).map((p, i) => h('p', { key: i }, p))
        ),
        about.image && h('div', {}, h('img', { src: about.image, alt: '', style: { borderRadius: '28px' } }))
      )
    ),

    // Trial CTA
    h('section', { className: 'section', style: { background: 'var(--white)', textAlign: 'center' } },
      h('div', { className: 'container text-center' },
        h('h2', {}, trial.heading),
        h('p', { style: { color: 'var(--gray)', maxWidth: '44ch', margin: '0 auto 1.5rem' } }, trial.subtitle),
        h('span', { className: 'btn btn--primary btn--pill' }, trial.ctaText)
      )
    ),

    // Coaches Preview
    h('section', { className: 'section', style: { background: 'var(--surface)' } },
      h('div', { className: 'container' },
        h('div', { className: 'text-center' },
          h('div', { className: 'gradient-line gradient-line--center' }),
          h('h2', {}, coachesP.heading)
        ),
        h('p', { style: { textAlign: 'center', maxWidth: '58ch', margin: '0 auto 2rem', color: 'var(--gray-600)', lineHeight: '1.7' } }, coachesP.intro),
        h('div', { className: 'coach-cards' },
          (coachesP.featured || []).map((id, i) =>
            h('div', { key: i, className: 'coach-card' },
              h('img', { src: `/images/coaches/${id}.png`, alt: '' }),
              h('span', { className: 'coach-name' },
                id === 'coach-sharky' ? 'Sharky' : id.replace('coach-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
              )
            )
          )
        )
      )
    ),

    // Vision & Mission
    h('section', { className: 'section section--dark', style: { textAlign: 'center' } },
      h('div', { className: 'container text-center' },
        h('div', { className: 'gradient-line gradient-line--center' }),
        h('h2', {}, 'Our Vision'),
        h('p', { className: 'lead', style: { color: 'rgba(255,255,255,0.85)' } }, vision),
        h('h2', { style: { marginTop: '2rem' } }, 'Our Mission'),
        h('p', { className: 'lead', style: { color: 'rgba(255,255,255,0.85)' } }, mission),
        h('p', { className: 'tagline' }, tagline)
      )
    )
  );
};

// ═══════════════════════════════════════
// REGISTER ALL TEMPLATES
// ═══════════════════════════════════════
CMS.registerPreviewTemplate('news', NewsPreview);
CMS.registerPreviewTemplate('calendar', CalendarPreview);
CMS.registerPreviewTemplate('committee', CommitteePreview);
CMS.registerPreviewTemplate('coaches', CoachesPreview);
CMS.registerPreviewTemplate('captains', CaptainsPreview);
CMS.registerPreviewTemplate('sponsors', SponsorsPreview);
CMS.registerPreviewTemplate('squads', SquadsPreview);
CMS.registerPreviewTemplate('fees', FeesPreview);
CMS.registerPreviewTemplate('target-meets', TargetMeetsPreview);
CMS.registerPreviewTemplate('jx-program', JXPreview);
CMS.registerPreviewTemplate('contact', ContactPreview);
CMS.registerPreviewTemplate('home', HomePreview);
