import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function WorkPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Work</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map(p => <ProjectCard key={p.slug} project={p} />)}
      </div>
    </div>
  );
}
