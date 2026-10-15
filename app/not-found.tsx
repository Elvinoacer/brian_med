import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="article-page">
      <div className="article-shell">
        <header className="article-heading">
          <p className="eyebrow">Page not found · 404</p>
          <h1>A different way back.</h1>
          <p className="article-lede">
            This page could not be found. Continue exploring the portfolio,
            selected concepts and field notes.
          </p>
          <Link href="/" className="article-back">
            <span aria-hidden="true">←</span> Return to the portfolio
          </Link>
        </header>
      </div>
    </main>
  );
}
