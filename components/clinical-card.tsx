"use client";

import { useState } from "react";
import { Icon } from "@/components/icons";

type Area = {
  id: string;
  number: string;
  title: string;
  summary: string;
  description: string;
  themes: string[];
  reflectionPrompt: string;
};
const icons = [
  "stethoscope",
  "surgery",
  "child",
  "maternal",
  "mind",
  "community",
] as const;

export function ClinicalCard({ area, index }: { area: Area; index: number }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <article className={`clinical-card${expanded ? " expanded" : ""}`}>
      <div className="clinical-card-top">
        <span className="item-number">{area.number}</span>
        <span className="clinical-icon">
          <Icon name={icons[index]} />
        </span>
      </div>
      <h3>{area.title}</h3>
      <p>{area.summary}</p>
      <button
        className="disclosure-button"
        aria-expanded={expanded}
        aria-controls={`learning-${area.id}`}
        onClick={() => setExpanded(!expanded)}
      >
        <span>{expanded ? "Close learning focus" : "Read learning focus"}</span>
        <Icon name="plus" />
      </button>
      <div
        id={`learning-${area.id}`}
        className="clinical-detail"
        hidden={!expanded}
      >
        <p>{area.description}</p>
        <ul className="theme-tags">
          {area.themes.map((theme) => (
            <li key={theme}>{theme}</li>
          ))}
        </ul>
        <div className="reflection-prompt">
          <span>A question I carry</span>
          <p>{area.reflectionPrompt}</p>
        </div>
      </div>
    </article>
  );
}
