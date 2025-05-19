import Image from "next/image";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  image: string;
  description: string;
  techs: string[];
  githubUrl?: string;
  siteUrl?: string;
  Details?: { type: string; text: string }[];
};

export default function ProjectModalContent({ project }: { project: Project }) {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
      <div className="relative w-full h-60 mb-4">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover rounded"
        />
      </div>

      <p className="mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techs.map((tech) => (
          <Badge variant="secondary" key={tech}>
            {tech}
          </Badge>
        ))}
      </div>

      <div className="flex gap-4 mt-6">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-zinc-500 hover:text-zinc-800 underline"
          >
            <Github className="h-4 w-4 mr-1" />
            Github
          </a>
        )}
        {project.siteUrl && (
          <a
            href={project.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-zinc-500 hover:text-zinc-800 underline"
          >
            <ExternalLink className="h-4 w-4 mr-1" />
            サイト
          </a>
        )}
      </div>

      {project.Details &&
        project.Details.map((block, index) => {
          if (block.type === "heading") {
            return (
              <h3 className="mt-6 font-bold text-base" key={index}>
                {block.text}
              </h3>
            );
          }
          if (block.type === "paragraph") {
            return (
              <p className="mt-2 text-sm" key={index}>
                {block.text}
              </p>
            );
          }
          return null;
        })}
    </div>
  );
}
