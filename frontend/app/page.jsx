import {
  TempleSkyline,
  IconTemple,
  IconRiver,
  IconShophouse,
  IconPepperVine,
  IconIsland,
  IconElephant,
} from "./components/Art";

const destinations = [
  {
    name: "Siem Reap",
    tag: "The temples",
    icon: IconTemple,
    copy:
      "Angkor Wat at first light is the postcard, but give it three days: Ta Prohm's roots, the faces of the Bayon, the quiet of Banteay Srei's pink sandstone.",
    featured: true,
  },
  {
    name: "Phnom Penh",
    tag: "The capital",
    icon: IconShophouse,
    copy: "Riverside promenades, French-era shophouses, and a history the city doesn't hide from.",
  },
  {
    name: "Battambang",
    tag: "The countryside",
    icon: IconRiver,
    copy: "Colonial streets, circus arts, and the bamboo train rattling through rice fields.",
  },
  {
    name: "Kampot",
    tag: "The river",
    icon: IconPepperVine,
    copy: "Pepper farms, salt flats, and a lazy river town built for slow afternoons.",
  },
  {
    name: "Koh Rong",
    tag: "The coast",
    icon: IconIsland,
    copy: "White sand, warm water, and enough distance from the mainland to actually switch off.",
  },
  {
    name: "Mondulkiri",
    tag: "The highlands",
    icon: IconElephant,
    copy: "Pine forests, waterfalls, and ethical elephant sanctuaries in the cool eastern hills.",
  },
];

const itinerary = [
  { day: "Day 1–3", place: "Siem Reap", note: "Angkor at sunrise, the Bayon by midday, a slow boat on Tonlé Sap." },
  { day: "Day 4", place: "Battambang", note: "Bamboo train, hillside pagodas, the bat cave at dusk." },
  { day: "Day 5–6", place: "Phnom Penh", note: "Royal Palace, riverside walks, the history museums." },
  { day: "Day 7", place: "Kampot", note: "Pepper farm tour and a sunset cruise on the river." },
  { day: "Day 8–9", place: "Koh Rong", note: "No plans. Beach, hammock, repeat." },
  { day: "Day 10", place: "Phnom Penh", note: "Fly out, or push on to the highlands if time allows." },
];

const practical = [
  {
    h: "Visa",
    p: "E-visas are issued online for most nationalities and take a few business days. Visas on arrival are also available at major airports and land crossings.",
  },
  {
    h: "When to go",
    p: "November through February is cool and dry. March to May turns hot. The wet season, June to October, brings short afternoon storms but lush, green temples.",
  },
  {
    h: "Getting around",
    p: "Buses and shared vans connect the main towns cheaply. Tuk-tuks and remork drivers handle everything local — agree the fare before you get in.",
  },
  {
    h: "Currency",
    p: "US dollars are accepted everywhere for anything over a dollar; riel comes back as small change. An ATM card covers most of the country.",
  },
];

export default function Home() {
  return (
    <>
      <header className="nav">
        <div className="wrap nav-inner">
          <span className="brand">Fast Roads</span>
          <nav className="nav-links">
            <a href="#destinations">Destinations</a>
            <a href="#route">A route</a>
            <a href="#practical">Before you go</a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="wrap hero-inner">
            <p className="eyebrow">A guide to Cambodia</p>
            <h1 className="hero-title">
              Ancient stone,
              <br />
              slow rivers,
              <br />
              <em>unhurried</em> days.
            </h1>
            <p className="hero-sub">
              From the temples of Angkor to the sand of Koh Rong, Cambodia rewards travellers
              who leave room in the schedule to just sit still for a while.
            </p>
            <div className="hero-actions">
              <a href="#destinations" className="btn btn-gold">
                Explore destinations
              </a>
              <a href="#route" className="btn btn-outline">
                See a ten-day route
              </a>
            </div>
          </div>
          <TempleSkyline stroke="#e3ba7c" opacity={0.85} style={{ width: "100%" }} />
        </section>

        {/* DESTINATIONS */}
        <section id="destinations" className="destinations">
          <div className="wrap">
            <h2 className="section-title">Six places worth slowing down for</h2>
            <p className="section-lead">
              Cambodia is small enough to cross overland in a day, yet each region has its
              own rhythm — temple towns, river towns, coast, and the cool eastern highlands.
            </p>

            <div className="dest-grid">
              {destinations.map((d) => {
                const Icon = d.icon;
                return (
                  <article
                    key={d.name}
                    className={`dest-card${d.featured ? " dest-card--featured" : ""}`}
                  >
                    <Icon stroke={d.featured ? "#e3ba7c" : "#c6903f"} />
                    <p className="dest-tag">{d.tag}</p>
                    <h3 className="dest-name">{d.name}</h3>
                    <p className="dest-copy">{d.copy}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ITINERARY */}
        <section id="route" className="route">
          <div className="wrap">
            <h2 className="section-title section-title--light">A ten-day route</h2>
            <p className="section-lead section-lead--light">
              One way to link the temples, the capital, the river, and the coast without
              spending every other day in transit.
            </p>

            <ol className="timeline">
              {itinerary.map((stop) => (
                <li key={stop.day} className="timeline-item">
                  <span className="timeline-day">{stop.day}</span>
                  <span className="timeline-dot" aria-hidden="true" />
                  <span className="timeline-body">
                    <strong>{stop.place}</strong>
                    <p>{stop.note}</p>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* PRACTICAL */}
        <section id="practical" className="practical">
          <div className="wrap practical-inner">
            <div className="practical-head">
              <h2 className="section-title">Before you go</h2>
              <p className="section-lead">The short version of what to sort out in advance.</p>
            </div>
            <div className="practical-list">
              {practical.map((item) => (
                <div key={item.h} className="practical-item">
                  <h3>{item.h}</h3>
                  <p>{item.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <span className="brand brand--light">Slow Roads</span>
          <p>A small guide to travelling Cambodia at a human pace.</p>
        </div>
      </footer>

      <style>{`
        .nav {
          position: sticky;
          top: 0;
          z-index: 20;
          background: rgba(247, 242, 232, 0.92);
          backdrop-filter: blur(6px);
          border-bottom: 1px solid var(--line);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 68px;
        }
        .brand {
          font-family: var(--serif);
          font-size: 1.2rem;
          font-style: italic;
        }
        .brand--light { color: var(--cream); }
        .nav-links { display: flex; gap: 28px; }
        .nav-links a {
          text-decoration: none;
          font-size: 0.92rem;
          color: var(--ink);
          border-bottom: 1px solid transparent;
        }
        .nav-links a:hover { border-color: var(--gold); }
        @media (max-width: 620px) {
          .nav-links { display: none; }
        }

        .hero {
          background: var(--jungle);
          color: var(--cream);
          padding-top: 90px;
          padding-bottom: 0;
          overflow: hidden;
        }
        .hero-inner { padding-bottom: 70px; max-width: 640px; }
        .hero-title {
          font-size: clamp(2.6rem, 6vw, 4.2rem);
          margin-top: 14px;
          margin-bottom: 22px;
        }
        .hero-title em { color: var(--gold-light); font-style: italic; }
        .hero-sub {
          font-size: 1.1rem;
          color: rgba(247, 242, 232, 0.78);
          max-width: 46ch;
          margin-bottom: 34px;
        }
        .hero-actions { display: flex; gap: 16px; flex-wrap: wrap; }

        .section-title {
          font-size: clamp(1.8rem, 3.4vw, 2.5rem);
          max-width: 20ch;
        }
        .section-title--light { color: var(--cream); }
        .section-lead {
          margin-top: 14px;
          color: var(--stone);
          max-width: 56ch;
          font-size: 1.05rem;
        }
        .section-lead--light { color: rgba(247, 242, 232, 0.7); }

        .dest-grid {
          margin-top: 48px;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 20px;
        }
        .dest-card {
          grid-column: span 2;
          background: var(--cream-2);
          border: 1px solid var(--line);
          border-radius: 4px;
          padding: 28px 24px;
        }
        .dest-card svg { width: 34px; height: 34px; margin-bottom: 18px; }
        .dest-card--featured {
          grid-column: span 3;
          grid-row: span 2;
          background: var(--jungle);
          color: var(--cream);
          border-color: var(--jungle);
          padding: 36px 32px;
        }
        .dest-card--featured .dest-tag { color: var(--gold-light); }
        .dest-card--featured .dest-copy { color: rgba(247, 242, 232, 0.75); }
        .dest-card--featured svg { width: 42px; height: 42px; }
        .dest-tag {
          color: var(--gold);
          font-size: 0.9rem;
          margin-bottom: 4px;
        }
        .dest-name { font-size: 1.5rem; margin-bottom: 10px; }
        .dest-copy { color: var(--stone); font-size: 0.97rem; }

        @media (max-width: 860px) {
          .dest-grid { grid-template-columns: repeat(2, 1fr); }
          .dest-card, .dest-card--featured { grid-column: span 2; grid-row: auto; }
        }

        .route { background: var(--jungle-2); }
        .timeline {
          list-style: none;
          margin: 56px 0 0;
          padding: 0;
          position: relative;
        }
        .timeline::before {
          content: "";
          position: absolute;
          left: 108px;
          top: 6px;
          bottom: 6px;
          width: 1px;
          background: var(--line-dark);
        }
        .timeline-item {
          display: grid;
          grid-template-columns: 88px 20px 1fr;
          column-gap: 20px;
          padding: 18px 0;
        }
        .timeline-day {
          color: var(--gold-light);
          font-size: 0.88rem;
          padding-top: 2px;
          text-align: right;
        }
        .timeline-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--gold);
          margin-top: 6px;
          justify-self: center;
        }
        .timeline-body strong {
          font-family: var(--serif);
          font-size: 1.2rem;
          color: var(--cream);
          font-weight: 500;
        }
        .timeline-body p {
          margin-top: 6px;
          color: rgba(247, 242, 232, 0.68);
          max-width: 56ch;
        }
        @media (max-width: 620px) {
          .timeline::before { left: 68px; }
          .timeline-item { grid-template-columns: 48px 20px 1fr; }
        }

        .practical-inner {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 56px;
        }
        .practical-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px 40px;
        }
        .practical-item h3 {
          font-size: 1.05rem;
          font-family: var(--sans);
          font-weight: 600;
          margin-bottom: 8px;
        }
        .practical-item p { color: var(--stone); font-size: 0.96rem; }
        @media (max-width: 780px) {
          .practical-inner { grid-template-columns: 1fr; }
          .practical-list { grid-template-columns: 1fr; }
        }

        .footer {
          background: var(--jungle);
          color: rgba(247, 242, 232, 0.6);
          padding: 48px 0;
        }
        .footer-inner p { margin-top: 8px; font-size: 0.92rem; }
      `}</style>
    </>
  );
}
