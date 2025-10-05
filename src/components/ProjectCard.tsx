import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const cover = project.stills[0] ?? "/placeholder.jpg";
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
        <Image
          src={cover}
          alt={`${project.title} still`}
          fill
          sizes="(max-width:768px) 100vw, 50vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-3 flex items-center justify-between">
        <h3 className="text-lg font-medium">{project.title}</h3>
        <span className="text-sm text-gray-500">{project.year}</span>
      </div>
      <p className="text-sm text-gray-600">{project.logline}</p>
    </Link>
  );
}
