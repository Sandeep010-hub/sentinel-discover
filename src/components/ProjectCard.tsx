import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { ProjectDetailDialog } from "@/components/ProjectDetailDialog";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const staggerClass = `stagger-${(index % 6) + 1}`;

  return (
    <>
      <Card
        className={`group opacity-0 animate-fade-in-up ${staggerClass} bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border`}
      >
        <CardContent className="p-5">
          {/* Header */}
          <div className="flex items-start justify-between gap-2 mb-3">
            <h3 className="font-semibold text-foreground leading-tight line-clamp-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </div>

          {/* Meta Info */}
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="secondary" className="text-xs font-medium">
              {project.year}
            </Badge>
            <Badge variant="outline" className="text-xs font-medium">
              {project.branch}
            </Badge>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-accent font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {project.description}
          </p>

          {/* Team & Action */}
          <div className="flex items-center justify-between pt-3 border-t border-border">
            <span className="text-xs text-muted-foreground">{project.team}</span>
            <Button
              size="sm"
              className="bg-primary hover:bg-navy-dark text-primary-foreground gap-1 text-xs"
              onClick={() => setDialogOpen(true)}
            >
              View Details
              <ArrowRight className="h-3 w-3" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <ProjectDetailDialog
        project={project}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </>
  );
};
