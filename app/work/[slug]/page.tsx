import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/article-layout";
import { profile, workProjects, type WorkProject } from "@/lib/content";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return workProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = workProjects.find((entry) => entry.slug === slug);
  if (!project) notFound();

  return {
    title: project.title,
    description: `${project.status}. ${project.summary}`,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.title} | ${profile.name}`,
      description: project.summary,
      type: "article",
    },
  };
}

const graphicDescriptions: Record<
  WorkProject["graphic"],
  { alt: string; caption: string }
> = {
  discharge: {
    alt: "A proposed conversation structure: explanation, understanding, then the next step.",
    caption:
      "A communication concept: explanation → understanding → next step.",
  },
  continuity: {
    alt: "Travel, work, family and information surround the question of follow-up care.",
    caption:
      "Four contexts to explore around follow-up. A set of questions, not research findings.",
  },
  notebook: {
    alt: "A proposed learning notebook with six prompts: context, observation, reasoning, feedback, reflection and the next question.",
    caption:
      "An outline for a reflective learning resource using educational material.",
  },
};

export default async function WorkPage({ params }: PageProps) {
  const { slug } = await params;
  const index = workProjects.findIndex((entry) => entry.slug === slug);
  if (index === -1) notFound();
  const project = workProjects[index];
  const next = workProjects[(index + 1) % workProjects.length];
  const sections = [
    { title: "Why this interests me", body: project.interest },
    { title: "Proposed approach", body: project.approach },
    { title: "Proposed output", body: project.output },
    { title: project.explorationHeading, body: project.exploration },
    { title: "Current position", body: project.currentPosition },
  ];

  return (
    <ArticleLayout
      category={`Concept ${project.number} · ${project.type}`}
      title={project.title}
      summary={project.summary}
      author={profile.name}
      readingTime={project.readingTime}
      status={project.status}
      backHref="/#selected-work"
      backLabel="All selected work"
      graphic={{
        src: `/images/graphic-${project.graphic}.svg`,
        ...graphicDescriptions[project.graphic],
      }}
      aside={
        <dl>
          <dt>Area of interest</dt>
          <dd>{project.type}</dd>
          <dt>Project status</dt>
          <dd>{project.status}</dd>
          <dt>My proposed role</dt>
          <dd>{project.role}</dd>
        </dl>
      }
      next={{
        href: `/work/${next.slug}`,
        title: next.title,
        label: "Next concept",
      }}
    >
      <section
        className="article-section article-question"
        aria-labelledby="the-question"
      >
        <p className="eyebrow">The question</p>
        <h2 id="the-question">{project.question}</h2>
      </section>
      {sections.map((section, sectionIndex) => (
        <section
          key={section.title}
          className="article-section"
          aria-labelledby={`section-${sectionIndex}`}
        >
          <h2 id={`section-${sectionIndex}`}>
            <span aria-hidden="true">0{sectionIndex + 1}</span>
            {section.title}
          </h2>
          <p>{section.body}</p>
        </section>
      ))}
      <blockquote className="article-reflection">
        <p>{project.reflection}</p>
        <cite>A reflection to carry forward</cite>
      </blockquote>
    </ArticleLayout>
  );
}
