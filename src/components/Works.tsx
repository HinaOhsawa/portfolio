import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { CircleArrowRight, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import projects from "@/data/projects.json";
import { useState } from "react";
import Modal from "@/components/Modal";
import ProjectModalContent from "@/components/ProjectModalContent";
import ImageSlider from "@/components/ImageSlider";

export default function Works() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null);

  const images = [
    "/images/slider_1.jpg",
    "/images/slider_2.jpg",
    "/images/slider_3.jpg",
    "/images/slider_4.jpg",
    "/images/slider_5.jpg",
    "/images/slider_6.jpg",
  ];

  return (
    <section id="projects" className="py-16 scroll-mt-20">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Works
        <p className="text-sm font-normal">制作物</p>
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden py-0 gap-0">
            <div className="relative h-48 aspect-[4/3] w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setSelectedProject(project)}
              >
                詳細を見る
              </Button>
              <div className="flex flex-wrap gap-2 m-4">
                {project.techs.map((tech) => (
                  <Badge variant="secondary" key={tech}>
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-4">
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
            </CardContent>
          </Card>
        ))}
      </div>

      {/* ============ モーダル表示 ============ */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && <ProjectModalContent project={selectedProject} />}
      </Modal>

      {/* ============ スライダー表示 ============ */}
      <h3 className="mt-16 text-center font-bold">3Dモデリング</h3>
      <ImageSlider images={images} />
      <a
        href=""
        rel="noopener noreferrer"
        className="mt-4 flex justify-center items-center text-zinc-500 hover:text-zinc-800 underline"
      >
        もっと見る
        <CircleArrowRight className="h-4 w-4 ml-1" />
      </a>
    </section>
  );
}
