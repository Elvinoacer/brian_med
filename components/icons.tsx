import type { CSSProperties } from "react";

type IconName =
  | "arrow"
  | "arrow-up"
  | "arrow-down"
  | "location"
  | "mail"
  | "copy"
  | "check"
  | "plus"
  | "book"
  | "stethoscope"
  | "surgery"
  | "child"
  | "maternal"
  | "mind"
  | "community"
  | "close"
  | "menu";

const paths: Record<IconName, React.ReactNode> = {
  arrow: (
    <>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </>
  ),
  "arrow-up": (
    <>
      <path d="M6 18 18 6M6 6h12v12" />
    </>
  ),
  "arrow-down": (
    <>
      <path d="M12 4v15M6 13l6 6 6-6" />
    </>
  ),
  location: (
    <>
      <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  copy: (
    <>
      <rect x="8" y="8" width="12" height="13" rx="2" />
      <path d="M15 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  plus: <path d="M5 12h14M12 5v14" />,
  book: (
    <>
      <path d="M12 5c-3-2-6-2-10-1v15c4-1 7-1 10 1 3-2 6-2 10-1V4c-4-1-7-1-10 1Zm0 0v15" />
      <path d="M5 8h3M5 12h3m8-4h3m-3 4h3" />
    </>
  ),
  stethoscope: (
    <>
      <path d="M4 3v6a5 5 0 0 0 10 0V3M3 3h3m6 0h3M9 14v3a4 4 0 0 0 8 0v-4" />
      <circle cx="17" cy="10" r="3" />
    </>
  ),
  surgery: (
    <>
      <path d="m15 3 5 5-9 9-5-5 9-9Zm-9 9-4 8 9-3M12 6l5 5" />
      <path d="m4 18 2 2" />
    </>
  ),
  child: (
    <>
      <circle cx="12" cy="13" r="8" />
      <path d="M12 5c4-5-3-5-3-1M8 12h.01M16 12h.01M9 16q3 3 6 0" />
    </>
  ),
  maternal: (
    <>
      <path d="M12 20S3 14 3 8a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6-9 12-9 12Z" />
      <path d="M12 9c-4 0-4 6 0 6 4 0 4-6 0-6Z" />
    </>
  ),
  mind: (
    <>
      <path d="M9 4a3 3 0 0 0-5 3 4 4 0 0 0-1 7 4 4 0 0 0 6 5c1 3 3 2 3 0V5c0-3-3-3-3-1Zm6 0a3 3 0 0 1 5 3 4 4 0 0 1 1 7 4 4 0 0 1-6 5c-1 3-3 2-3 0V5c0-3 3-3 3-1Z" />
      <path d="M5 8q4 0 4 4m-5 3q3-2 4 0m11-7q-4 0-4 4m5 3q-3-2-4 0" />
    </>
  ),
  community: (
    <>
      <circle cx="12" cy="7" r="3" />
      <path d="M6 21v-3a6 6 0 0 1 12 0v3M5 5a3 3 0 0 0 0 6m14-6a3 3 0 0 1 0 6M2 19v-3a4 4 0 0 1 3-4m17 7v-3a4 4 0 0 0-3-4" />
    </>
  ),
  close: <path d="m6 6 12 12M6 18 18 6" />,
  menu: <path d="M4 8h16M4 16h16" />,
};

export function Icon({
  name,
  className,
  style,
}: {
  name: IconName;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      style={style}
    >
      {paths[name]}
    </svg>
  );
}

export function ObservationLine({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`observation-line ${className}`}
      width="160"
      height="42"
      viewBox="0 0 160 42"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 28h54c21 0 20-19 41-19h63"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle cx="96" cy="9" r="3" fill="#9B4D36" />
    </svg>
  );
}
