import { useState, useRef } from "react";
import { Upload, FileText, ArrowRight, Sparkles, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const mockSimilarProjects = [
  { name: "Smart Traffic Management System", match: 92 },
  { name: "Autonomous Drone Navigation", match: 87 },
  { name: "Predictive Maintenance System", match: 76 },
];

export const AIAssistancePanel = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.type === "application/pdf" || file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
        setUploadedFile(file);
      }
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setUploadedFile(files[0]);
    }
  };

  const handleRemoveFile = () => {
    setUploadedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <Card className="sticky top-24 bg-card border-border shadow-md">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg text-foreground">
          <Sparkles className="h-5 w-5 text-accent" />
          AI Assistance
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Drag & Drop Zone */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          className="hidden"
        />
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleClick}
          className={`
            relative cursor-pointer rounded-lg border-2 border-dashed p-6 text-center transition-all duration-200
            ${
              isDragging
                ? "border-accent bg-accent/10 scale-[1.02]"
                : "border-border hover:border-accent/50 hover:bg-secondary/50"
            }
          `}
        >
          <Upload
            className={`mx-auto h-10 w-10 mb-3 transition-colors ${
              isDragging ? "text-accent" : "text-muted-foreground"
            }`}
          />
          <p className="text-sm font-medium text-foreground mb-1">
            Drag & Drop Your Research Paper Here
          </p>
          <p className="text-xs text-muted-foreground">
            Supports .pdf, .docx formats
          </p>
        </div>

        {/* Similar Projects Results */}
        {uploadedFile && (
          <div className="space-y-3 animate-fade-in-up">
            <div className="flex items-center justify-between p-2 rounded-lg bg-secondary/50">
              <div className="flex items-center gap-2 min-w-0">
                <FileText className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-sm text-foreground truncate">
                  {uploadedFile.name}
                </span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveFile();
                }}
                className="p-1 hover:bg-secondary rounded transition-colors"
              >
                <X className="h-4 w-4 text-muted-foreground" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-foreground">
                Highly Similar Projects
              </span>
            </div>

            <div className="space-y-2">
              {mockSimilarProjects.map((project) => (
                <div
                  key={project.name}
                  className="group flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0 group-hover:text-accent transition-colors" />
                    <span className="text-sm text-foreground truncate">
                      {project.name}
                    </span>
                  </div>
                  <Badge
                    className={`ml-2 flex-shrink-0 ${
                      project.match >= 90
                        ? "bg-red-500/10 text-red-600 border-red-200"
                        : project.match >= 80
                        ? "bg-amber-500/10 text-amber-600 border-amber-200"
                        : "bg-green-500/10 text-green-600 border-green-200"
                    }`}
                    variant="outline"
                  >
                    {project.match}% Match
                  </Badge>
                </div>
              ))}
            </div>

            <p className="text-xs text-muted-foreground text-center pt-2">
              Click on a project to view comparison details
            </p>
          </div>
        )}

        {!uploadedFile && (
          <p className="text-xs text-muted-foreground text-center">
            Upload a document to find similar projects
          </p>
        )}
      </CardContent>
    </Card>
  );
};
