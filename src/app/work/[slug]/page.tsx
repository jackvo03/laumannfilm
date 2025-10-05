import { notFound } from "next/navigation";
import Image from "next/image";
import Video from "@/components/Video";
import { projects } from "@/lib/projects";
import type { Metadata } from "next";

// Next.js 15: params er en Promise
export async function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} (${project.year}) — Laumann Film`,
    description: project.logline,
    openGraph: {
      title: `${project.title} — Laumann Film`,
      description: project.logline,
      images: project.stills?.[0] ? [{ url: project.stills[0] }] : undefined,
    }
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) return notFound();
  return (
    <article className="prose prose-neutral max-w-none">
      <h1 className="mb-2">
        {project.title} <span className="text-gray-500 font-normal">({project.year})</span>
      </h1>
      <p className="text-gray-600">{project.logline}</p>

      {project.videoUrl && <div className="my-6"><Video src={project.videoUrl} /></div>}

      {project.stills?.length > 0 && (
        <div className="grid md:grid-cols-2 gap-4 my-6">
          {project.stills.map((src, i) => (
            <div key={i} className="relative aspect-[16/9] overflow-hidden rounded-xl">
              <Image src={src} alt={`${project.title} still ${i+1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      )}
    </article>
  );
}
