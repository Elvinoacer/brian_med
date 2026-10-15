import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/article-layout";
import { fieldNotes, profile } from "@/lib/content";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return fieldNotes.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = fieldNotes.find((entry) => entry.slug === slug);
  if (!note) notFound();

  return {
    title: note.title,
    description: note.excerpt,
    alternates: { canonical: `/notes/${note.slug}` },
    openGraph: {
      title: `${note.title} | ${profile.name}`,
      description: note.excerpt,
      type: "article",
      ...(note.publishedAt ? { publishedTime: note.publishedAt } : {}),
    },
  };
}

export default async function NotePage({ params }: PageProps) {
  const { slug } = await params;
  const index = fieldNotes.findIndex((entry) => entry.slug === slug);
  if (index === -1) notFound();
  const note = fieldNotes[index];
  const next = fieldNotes[(index + 1) % fieldNotes.length];

  return (
    <ArticleLayout
      category={`Field note ${note.number} · ${note.category}`}
      title={note.title}
      summary={note.excerpt}
      author={profile.name}
      readingTime={note.readingTime}
      publishedAt={note.publishedAt}
      backHref="/#notes"
      backLabel="All field notes"
      next={{
        href: `/notes/${next.slug}`,
        title: next.title,
        label: "Next field note",
      }}
    >
      {note.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <p className="article-disclaimer">
        A student reflection on learning and communication. Not individual
        medical advice.
      </p>
    </ArticleLayout>
  );
}
