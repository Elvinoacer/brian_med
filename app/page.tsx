import Image from "next/image";
import Link from "next/link";
import { ClinicalCard } from "@/components/clinical-card";
import { CopyEmail } from "@/components/copy-email";
import { Icon, ObservationLine } from "@/components/icons";
import {
  clinicalAreas,
  communityAreas,
  fieldNotes,
  journey,
  perspectiveValues,
  professionalRows,
  profile,
  sectionCopy,
  workProjects,
} from "@/lib/content";

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <p className="section-label">
      <span>{number}</span>
      <span className="label-line" />
      {children}
    </p>
  );
}

function Contours() {
  return (
    <svg
      className="contours"
      viewBox="0 0 600 600"
      fill="none"
      aria-hidden="true"
    >
      {Array.from({ length: 11 }, (_, i) => (
        <path
          key={i}
          d={`M${240 - i * 17} ${-80 + i * 2}C${110 - i * 23} ${105 + i * 10} ${525 - i * 18} ${70 + i * 15} ${420 - i * 10} ${270 + i * 14}S${180 + i * 17} ${370 + i * 12} ${420 + i * 15} ${660 + i * 7}`}
          stroke="currentColor"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}

export default function Home() {
  const featured = workProjects[0];
  return (
    <main id="main-content">
      <section
        className="hero container"
        id="introduction"
        aria-labelledby="hero-heading"
      >
        <div className="hero-copy">
          <p className="hero-eyebrow">
            <span className="observation-dot" />
            MOI UNIVERSITY · COLLEGE OF HEALTH SCIENCES
          </p>
          <p className="hero-name">
            {profile.name}
            <span>MBChB student</span>
          </p>
          <h1 id="hero-heading">
            Medicine, with <br />
            the <em>person</em> <br />
            in view<span className="serif-period">.</span>
          </h1>
          <p className="hero-intro">{profile.introduction}</p>
          <div className="hero-actions">
            <Link href="#selected-work" className="button button-primary">
              Explore my work
              <Icon name="arrow" />
            </Link>
            <Link href="#contact" className="text-link">
              Get in touch
              <Icon name="arrow-up" />
            </Link>
          </div>
          <div className="hero-footnote">
            <span className="little-line" />A life of learning. A practice of
            care.
          </div>
        </div>
        <figure className="hero-artwork">
          <div className="hero-artwork-frame">
            <Image
              src="/images/observation-plate.svg"
              alt=""
              width={700}
              height={820}
              priority
            />
            <div className="artwork-side-label" aria-hidden="true">
              AN OBSERVANT MIND. A HUMAN PERSPECTIVE.
            </div>
          </div>
          <figcaption className="hero-caption">
            <span className="caption-mark" aria-hidden="true">
              “
            </span>
            <p>
              Learning to observe carefully.
              <br />
              <em>Learning to explain clearly.</em>
            </p>
            <ObservationLine />
          </figcaption>
        </figure>
        <div className="identity-strip">
          <span>
            <Icon name="book" />
            School of Medicine
          </span>
          <span>
            <Icon name="location" />
            Eldoret, Kenya
          </span>
          <span>
            <i className="status-dot" />
            Preparing for the next stage of clinical training
          </span>
          <a
            href="#about"
            aria-label="Scroll to my perspective"
            className="scroll-link"
          >
            <Icon name="arrow-down" />
          </a>
        </div>
      </section>

      <section
        className="section container about-section"
        id="about"
        aria-labelledby="about-heading"
      >
        <div className="about-margin">
          <SectionLabel number="01">My perspective</SectionLabel>
          <div className="margin-note">
            <ObservationLine />
            <p>
              A good question
              <br />
              can change what
              <br />
              you notice <em>next.</em>
            </p>
            <span>A guiding thought</span>
          </div>
        </div>
        <div className="about-main">
          <h2 id="about-heading">
            Learning the science.
            <br />
            <em>Understanding the person.</em>
          </h2>
          <div className="about-prose">
            {profile.biography.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="values-grid">
          {perspectiveValues.map((value, i) => (
            <div className="value" key={value.title}>
              <span className="item-number">0{i + 1}</span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="section clinical-section"
        id="clinical-learning"
        aria-labelledby="clinical-heading"
      >
        <div className="container">
          <SectionLabel number="02">Clinical learning</SectionLabel>
          <div className="section-heading-row">
            <h2 id="clinical-heading">
              Where knowledge
              <br />
              becomes <em>judgement.</em>
            </h2>
            <p>{sectionCopy.clinical.introduction}</p>
          </div>
          <div className="grid-caption">
            <span>Areas of developing interest</span>
            <span>Learning with curiosity, under supervision</span>
          </div>
          <div className="clinical-grid">
            {clinicalAreas.map((area, index) => (
              <ClinicalCard key={area.id} area={area} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section
        className="section container work-section"
        id="selected-work"
        aria-labelledby="work-heading"
      >
        <SectionLabel number="03">Selected work</SectionLabel>
        <div className="section-heading-row">
          <h2 id="work-heading">
            Questions worth
            <br />
            <em>following.</em>
          </h2>
          <p>{sectionCopy.work.introduction}</p>
        </div>
        <article className="featured-work">
          <Link
            href={`/work/${featured.slug}`}
            className="work-image featured-image"
            aria-label={`Read ${featured.title}`}
          >
            <span className="image-overline">
              01 / THE COMMUNICATION QUESTION
            </span>
            <Image
              src="/images/graphic-discharge.svg"
              alt="Explanation, understanding and the next step: a proposed communication framework."
              width={800}
              height={560}
            />
            <span className="image-bottomline">
              A little more clarity. A more useful next step.
            </span>
          </Link>
          <div className="featured-work-copy">
            <p className="eyebrow">{featured.type}</p>
            <h3>
              <Link href={`/work/${featured.slug}`}>{featured.title}</Link>
            </h3>
            <p>{featured.summary}</p>
            <span className="status-tag">{featured.status}</span>
            <Link href={`/work/${featured.slug}`} className="text-link">
              Read the concept
              <Icon name="arrow-up" />
            </Link>
          </div>
        </article>
        <div className="secondary-work-grid">
          {workProjects.slice(1).map((project) => (
            <article className="secondary-work" key={project.slug}>
              <Link
                href={`/work/${project.slug}`}
                className={`work-image work-image-${project.graphic}`}
                aria-label={`Read ${project.title}`}
              >
                <span className="image-overline">
                  {project.number} / {project.type.toUpperCase()}
                </span>
                <Image
                  src={`/images/graphic-${project.graphic}.svg`}
                  alt=""
                  width={800}
                  height={560}
                />
              </Link>
              <div className="secondary-work-copy">
                <p className="eyebrow">{project.type}</p>
                <h3>
                  <Link href={`/work/${project.slug}`}>{project.title}</Link>
                </h3>
                <p>{project.summary}</p>
                <div className="work-bottom">
                  <span className="status-tag">{project.status}</span>
                  <Link
                    href={`/work/${project.slug}`}
                    className="round-link"
                    aria-label={`Read the concept: ${project.title}`}
                  >
                    <Icon name="arrow-up" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="section community-section"
        id="community"
        aria-labelledby="community-heading"
      >
        <Contours />
        <div className="container community-inner">
          <SectionLabel number="04">Community perspective</SectionLabel>
          <div className="community-intro">
            <h2 id="community-heading">
              Care continues
              <br />
              beyond the
              <br />
              <em>consultation.</em>
            </h2>
            <div className="community-prose">
              {sectionCopy.community.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <span className="community-signoff">
                <span />
                Begin by listening.
              </span>
            </div>
          </div>
          <p className="community-areas-label">Where I hope to contribute</p>
          <div className="community-grid">
            {communityAreas.map((area, i) => (
              <div key={area.title}>
                <span className="item-number">0{i + 1}</span>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section container journey-section"
        id="journey"
        aria-labelledby="journey-heading"
      >
        <div className="journey-intro">
          <SectionLabel number="05">My journey</SectionLabel>
          <h2 id="journey-heading">
            From foundations
            <br />
            to the <em>next chapter.</em>
          </h2>
          <p>{sectionCopy.journey.introduction}</p>
          <div className="journey-note">
            <Icon name="book" />
            <span>
              Built on curiosity.
              <br />
              Guided by reflection.
            </span>
          </div>
        </div>
        <ol className="journey-timeline">
          {journey.map((chapter) => (
            <li
              key={chapter.chapter}
              className={`journey-chapter ${chapter.status}`}
            >
              <span className="journey-node" />
              <p className="eyebrow">
                {chapter.chapter}
                {chapter.status === "current" && (
                  <span className="current-label">Now</span>
                )}
              </p>
              <h3>{chapter.title}</h3>
              <p>{chapter.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section
        className="section notes-section"
        id="notes"
        aria-labelledby="notes-heading"
      >
        <div className="container">
          <SectionLabel number="06">Field notes</SectionLabel>
          <div className="section-heading-row">
            <h2 id="notes-heading">
              What I am learning
              <br />
              to <em>notice.</em>
            </h2>
            <p>{sectionCopy.notes.introduction}</p>
          </div>
          <div className="notes-grid">
            {fieldNotes.map((note, i) => (
              <article
                key={note.slug}
                className={`note-card note-card-${i + 1}`}
              >
                <div className="note-meta">
                  <span>{note.category}</span>
                  <span>0{i + 1}</span>
                </div>
                <div className="note-art" aria-hidden="true">
                  {i === 0 ? (
                    <span className="giant-quote">“</span>
                  ) : i === 1 ? (
                    <div className="language-art">
                      <span>Make it clear.</span>
                      <svg viewBox="0 0 200 20">
                        <path
                          d="M5 13Q75 1 193 8M20 18Q95 5 168 12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </div>
                  ) : (
                    <Contours />
                  )}
                </div>
                <h3>
                  <Link href={`/notes/${note.slug}`}>{note.title}</Link>
                </h3>
                <p>{note.excerpt}</p>
                <div className="note-bottom">
                  <span>{note.readingTime} min read</span>
                  <Link
                    href={`/notes/${note.slug}`}
                    className="text-link"
                    aria-label={`Read note: ${note.title}`}
                  >
                    Read note
                    <Icon name="arrow-up" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section container profile-section"
        id="profile"
        aria-labelledby="profile-heading"
      >
        <div>
          <SectionLabel number="07">Professional profile</SectionLabel>
          <h2 id="profile-heading">
            A clear view
            <br />
            of my <em>direction.</em>
          </h2>
          <p className="profile-summary">{profile.professionalSummary}</p>
          <Link href="#contact" className="text-link">
            Let’s connect
            <Icon name="arrow-up" />
          </Link>
        </div>
        <dl className="profile-table">
          {professionalRows.map((row) => (
            <div key={row.label}>
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section
        className="contact-section container"
        id="contact"
        aria-labelledby="contact-heading"
      >
        <div className="contact-panel">
          <div className="contact-intro">
            <SectionLabel number="08">Get in touch</SectionLabel>
            <h2 id="contact-heading">
              A conversation
              <br />
              could be the
              <br />
              <em>next step.</em>
            </h2>
            <p>{sectionCopy.contact.introduction}</p>
            <ObservationLine />
          </div>
          <div className="contact-details">
            <span className="contact-icon">
              <Icon name="mail" />
            </span>
            <p className="eyebrow">A good place to begin</p>
            {profile.contact.email && (
              <>
                <div className="email-row">
                  <a
                    className="contact-email"
                    href={`mailto:${profile.contact.email}`}
                  >
                    {profile.contact.email}
                  </a>
                  <CopyEmail email={profile.contact.email} />
                </div>
                <p>
                  Tell me a little about your team, the opportunity and the best
                  way to continue the conversation.
                </p>
                <div className="contact-topics">
                  {[
                    "Mentorship",
                    "Research collaboration",
                    "Training opportunity",
                    "Professional connection",
                  ].map((topic) => (
                    <a
                      key={topic}
                      href={`mailto:${profile.contact.email}?subject=${encodeURIComponent(topic)}`}
                    >
                      {topic}
                      <Icon name="arrow-up" />
                    </a>
                  ))}
                </div>
                <a
                  className="button button-primary"
                  href={`mailto:${profile.contact.email}?subject=${encodeURIComponent("Let’s connect")}`}
                >
                  Start a conversation
                  <Icon name="arrow-up" />
                </a>
              </>
            )}
            <p className="contact-note">
              For professional enquiries. Please do not send medical records or
              private patient information.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
