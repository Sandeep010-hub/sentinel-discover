import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { 
  Calendar, 
  Users, 
  BookOpen, 
  Tag, 
  User, 
  CheckCircle, 
  Clock, 
  FileText,
  Key
} from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectDetailDialogProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "Completed":
      return "bg-green-100 text-green-800 border-green-200";
    case "In Progress":
      return "bg-blue-100 text-blue-800 border-blue-200";
    case "Under Review":
      return "bg-amber-100 text-amber-800 border-amber-200";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export const ProjectDetailDialog = ({
  project,
  open,
  onOpenChange,
}: ProjectDetailDialogProps) => {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[85vh]">
        <DialogHeader>
          <DialogTitle className="text-xl leading-tight pr-6">
            {project.title}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Project details for {project.title}
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[65vh] pr-4">
          <div className="space-y-5">
            {/* Status & Meta Info */}
            <div className="flex flex-wrap gap-3 items-center">
              <Badge className={`${getStatusColor(project.status)} border`}>
                {project.status === "Completed" && <CheckCircle className="h-3 w-3 mr-1" />}
                {project.status === "In Progress" && <Clock className="h-3 w-3 mr-1" />}
                {project.status === "Under Review" && <FileText className="h-3 w-3 mr-1" />}
                {project.status}
              </Badge>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <BookOpen className="h-4 w-4" />
                <span>{project.branch}</span>
              </div>
            </div>

            {/* Team & Supervisor */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Team</p>
                  <p className="text-sm font-medium">{project.team}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Supervisor</p>
                  <p className="text-sm font-medium">{project.supervisor}</p>
                </div>
              </div>
            </div>

            <Separator />

            {/* Technologies */}
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-sm font-medium text-foreground">
                <Tag className="h-4 w-4" />
                <span>Technologies</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Keywords */}
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-sm font-medium text-foreground">
                <Key className="h-4 w-4" />
                <span>Keywords</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.keywords.map((keyword) => (
                  <Badge key={keyword} variant="outline" className="text-xs">
                    {keyword}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator />

            {/* Description */}
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-foreground">Description</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Abstract */}
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-foreground flex items-center gap-1.5">
                <FileText className="h-4 w-4" />
                Abstract
              </h4>
              <div className="p-4 bg-muted/30 rounded-lg border border-border">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.abstract}
                </p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
