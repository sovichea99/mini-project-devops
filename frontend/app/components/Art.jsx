export function TempleSkyline({ stroke = "#e3ba7c", opacity = 1, style }) {
  return (
    <svg
      viewBox="0 0 1200 260"
      fill="none"
      style={{ opacity, ...style }}
      aria-hidden="true"
    >
      <g stroke={stroke} strokeWidth="1.6" strokeLinejoin="round">
        <path d="M40 260V150l24-30 24 30v110" />
        <path d="M120 260V110l40-46 40 46v150" />
        <path d="M240 260V80l16-20 16 20v20l16-20 16 20v160" />
        <path d="M360 260V60l60-70 60 70v200" />
        <path d="M540 260V130l30-34 30 34v130" />
        <path d="M660 260V40l70-80 70 80v220" />
        <path d="M860 260V130l30-34 30 34v130" />
        <path d="M980 260V100l45-52 45 52v160" />
        <path d="M1120 260V150l24-30 24 30v110" />
        <path d="M0 260h1200" />
      </g>
    </svg>
  );
}

export function IconTemple({ stroke = "#c6903f" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <g stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 8l10 14H22z" />
        <path d="M20 22h24v6H20z" />
        <path d="M16 28h32v22H16z" />
        <path d="M12 50h40" />
        <path d="M26 50V36h12v14" />
      </g>
    </svg>
  );
}

export function IconRiver({ stroke = "#c6903f" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <g stroke={stroke} strokeWidth="1.6" strokeLinecap="round">
        <path d="M8 20c6-6 12 2 18-4s12 2 18-4 12 2 12 2" />
        <path d="M8 32c6-6 12 2 18-4s12 2 18-4 12 2 12 2" />
        <path d="M8 44c6-6 12 2 18-4s12 2 18-4 12 2 12 2" />
      </g>
    </svg>
  );
}

export function IconShophouse({ stroke = "#c6903f" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <g stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 26l22-14 22 14" />
        <path d="M14 26v28h36V26" />
        <path d="M26 54V38h12v16" />
        <path d="M18 32h6v8h-6zM40 32h6v8h-6z" />
      </g>
    </svg>
  );
}

export function IconPepperVine({ stroke = "#c6903f" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <g stroke={stroke} strokeWidth="1.6" strokeLinecap="round">
        <path d="M32 10v42" />
        <path d="M32 18c-8 0-10-6-10-6M32 18c8 0 10-6 10-6" />
        <path d="M32 28c-9 0-12-7-12-7M32 28c9 0 12-7 12-7" />
        <path d="M32 38c-8 0-10 6-10 6M32 38c8 0 10 6 10 6" />
        <circle cx="20" cy="12" r="2" />
        <circle cx="44" cy="12" r="2" />
      </g>
    </svg>
  );
}

export function IconIsland({ stroke = "#c6903f" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <g stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 46c8-6 12 4 20 0s14-8 22 0s6 0 6 0" />
        <path d="M24 40l6-20 4 10 4-6 6 16" />
      </g>
    </svg>
  );
}

export function IconElephant({ stroke = "#c6903f" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <g stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 40c-4-10 2-20 14-20 10 0 16 6 18 14 2 0 4 2 4 5s-2 5-4 5" />
        <path d="M20 39v11M28 39v11M44 39c2 4 2 8-2 11" />
        <path d="M12 34c-3 1-4 5-2 8" />
      </g>
    </svg>
  );
}
