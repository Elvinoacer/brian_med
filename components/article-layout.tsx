import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type ArticleLayoutProps = {
  category: string;
  title: string;
  summary: string;
  author: string;
  readingTime: number;
  backHref: string;
  backLabel: string;
  status?: string;
  publishedAt?: string | null;
  graphic?: { src: string; alt: string; caption: string };
  aside?: ReactNode;
  children: ReactNode;
  next?: { href: string; title: string; label: string };
};

export function ArticleLayout({
  category,
  title,
  summary,
  author,
  readingTime,
  backHref,
  backLabel,
  status,
  publishedAt,
  graphic,
  aside,
  children,
  next,
}: ArticleLayoutProps) {
  return (
    <main id="main-content" className="article-page">
      <article className="article-shell" aria-labelledby="article-title">
        <Link href={backHref} className="article-back">
          <span aria-hidden="true">←</span> {backLabel}
        </Link>

        <header className="article-heading">
          <p className="eyebrow">{category}</p>
          <h1 id="article-title">{title}</h1>
          <p className="article-lede">{summary}</p>
          <div className="article-meta">
            <span>{author}</span>
            <span>{readingTime} min read</span>
            {publishedAt && (
              <time dateTime={publishedAt}>
                {new Intl.DateTimeFormat("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                  timeZone: "UTC",
                }).format(new Date(publishedAt))}
              </time>
            )}
          </div>
          {status && <p className="article-status">{status}</p>}
        </header>

        {graphic && (
          <figure className="article-visual">
            <Image
              src={graphic.src}
              alt={graphic.alt}
              width={800}
              height={560}
              priority
            />
            <figcaption>{graphic.caption}</figcaption>
          </figure>
        )}

        <div
          className={`article-content${aside ? "" : " article-content--note"}`}
        >
          {aside && <aside className="article-aside">{aside}</aside>}
          <div className="article-body">{children}</div>
        </div>

        <nav className="article-navigation" aria-label="Continue reading">
          <Link href={backHref} className="article-back">
            <span aria-hidden="true">←</span> {backLabel}
          </Link>
          {next && (
            <Link href={next.href} className="article-next">
              <span>{next.label}</span>
              <strong>
                {next.title} <span aria-hidden="true">↗</span>
              </strong>
            </Link>
          )}
        </nav>
      </article>
    </main>
  );
}
