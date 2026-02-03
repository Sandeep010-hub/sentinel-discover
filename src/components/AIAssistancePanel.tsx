import { useState, useRef, useEffect } from "react";
import { Upload, FileText, X, Loader2, CheckCircle, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

type MatchScenario = {
  type: "unique" | "unique_different_tech" | "completely_unique" | "exists";
  abstract: "same" | "different" | "unique";
  technology: "same" | "different" | "unique";
  title: "same" | "different" | "unique";
  badgeText: string;
  matchedProject?: string;
};

const scenarios: MatchScenario[] = [
  {
    type: "unique",
    abstract: "different",
    technology: "same",
    title: "same",
    badgeText: "✅ Project is unique",
    matchedProject: "Smart Traffic Management System",
  },
  {
    type: "unique_different_tech",
    abstract: "same",
    technology: "different",
    title: "same",
    badgeText: "✅ Project is unique (Different technology approach)",
    matchedProject: "Autonomous Drone Navigation",
  },
  {
    type: "completely_unique",
    abstract: "different",
    technology: "different",
    title: "different",
    badgeText: "✅ Project is unique",
  },
  {
    type: "exists",
    abstract: "same",
    technology: "same",
    title: "same",
    badgeText: "❌ Project already exists",
    matchedProject: "Predictive Maintenance System",
  },
  {
    type: "completely_unique",
    abstract: "unique",
    technology: "unique",
    title: "unique",
    badgeText: "✅ Project is unique",
  },
];

export const AIAssistancePanel = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [currentScenario, setCurrentScenario] = useState<MatchScenario | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const processFile = (file: File) => {
    setUploadedFile(file);
    setIsAnalyzing(true);
    setAnalysisProgress(0);
    setAnalysisComplete(false);
    setCurrentScenario(null);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.type === "application/pdf" || file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
        processFile(file);
      }
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      processFile(files[0]);
    }
  };

  const handleRemoveFile = () => {
    setUploadedFile(null);
    setIsAnalyzing(false);
    setAnalysisProgress(0);
    setAnalysisComplete(false);
    setCurrentScenario(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Simulate analysis progress
  useEffect(() => {
    if (isAnalyzing && analysisProgress < 100) {
      const timer = setTimeout(() => {
        setAnalysisProgress((prev) => {
          const increment = Math.random() * 15 + 5;
          const newProgress = Math.min(prev + increment, 100);
          if (newProgress >= 100) {
            setIsAnalyzing(false);
            setAnalysisComplete(true);
            // Randomly pick a scenario
            const randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];
            setCurrentScenario(randomScenario);
          }
          return newProgress;
        });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isAnalyzing, analysisProgress]);

  const isProjectExists = currentScenario?.type === "exists";
  const StatusIcon = isProjectExists ? XCircle : CheckCircle;

  return (
    <Card className="sticky top-24 bg-card border-border shadow-md">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg text-foreground">
          <FileText className="h-5 w-5 text-accent" />
          AI Similarity Check
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

        {/* Uploaded File Info */}
        {uploadedFile && (
          <div className="space-y-4 animate-fade-in-up">
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

            {/* Analysis Progress */}
            {isAnalyzing && (
              <div className="space-y-2 animate-fade-in">
                <div className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 text-accent animate-spin" />
                  <span className="text-sm font-medium text-foreground">
                    Analyzing document...
                  </span>
                </div>
                <Progress value={analysisProgress} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  Scanning for similar projects in database
                </p>
              </div>
            )}

            {/* Analysis Results */}
            {analysisComplete && currentScenario && (
              <div className="space-y-4 animate-fade-in-up">
                {/* Result Badge */}
                <div className={`p-4 rounded-lg border ${isProjectExists ? 'bg-red-500/10 border-red-200' : 'bg-green-500/10 border-green-200'}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <StatusIcon className={`h-5 w-5 ${isProjectExists ? 'text-red-600' : 'text-green-600'}`} />
                    <Badge 
                      className={`${isProjectExists ? 'bg-red-500/10 text-red-600 border-red-200' : 'bg-green-500/10 text-green-600 border-green-200'}`} 
                      variant="outline"
                    >
                      {currentScenario.badgeText}
                    </Badge>
                  </div>

                  {/* Comparison Details */}
                  <div className="space-y-2 mt-4">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Comparison Details</p>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className={`p-2 rounded text-center ${currentScenario.abstract === 'same' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                        <div className="font-medium">Abstract</div>
                        <div className="capitalize">{currentScenario.abstract}</div>
                      </div>
                      <div className={`p-2 rounded text-center ${currentScenario.technology === 'same' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                        <div className="font-medium">Technology</div>
                        <div className="capitalize">{currentScenario.technology}</div>
                      </div>
                      <div className={`p-2 rounded text-center ${currentScenario.title === 'same' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                        <div className="font-medium">Title</div>
                        <div className="capitalize">{currentScenario.title}</div>
                      </div>
                    </div>
                  </div>

                  {/* Matched Project Info (if exists) */}
                  {currentScenario.matchedProject && (
                    <div className="mt-4 p-3 rounded-lg bg-secondary/50">
                      <p className="text-xs text-muted-foreground mb-1">
                        {isProjectExists ? 'Existing Project:' : 'Similar Project Found:'}
                      </p>
                      <p className="text-sm font-medium text-foreground">
                        {currentScenario.matchedProject}
                      </p>
                    </div>
                  )}
                </div>

                {/* Status Message */}
                <div className="text-center py-2">
                  {isProjectExists ? (
                    <>
                      <p className="text-sm font-medium text-red-600 mb-1">
                        ✗ This project already exists in the database
                      </p>
                      <p className="text-xs text-muted-foreground">
                        All criteria (Abstract, Technology, Title) match an existing project
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-sm font-medium text-green-600 mb-1">
                        ✓ Your project is unique
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {currentScenario.type === 'unique_different_tech' 
                          ? 'Similar concept but different technology approach'
                          : 'No matching project found in our database'}
                      </p>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {!uploadedFile && (
          <p className="text-xs text-muted-foreground text-center">
            Upload a document to check for similarity
          </p>
        )}
      </CardContent>
    </Card>
  );
};
