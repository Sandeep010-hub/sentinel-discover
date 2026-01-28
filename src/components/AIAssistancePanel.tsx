import { useState, useRef, useEffect } from "react";
import { Upload, FileText, ArrowRight, X, Loader2, CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const matchedProjects = [
  { name: "Smart Traffic Management System", match: 92 },
  { name: "Autonomous Drone Navigation", match: 87 },
  { name: "Predictive Maintenance System", match: 76 },
];

export const AIAssistancePanel = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [overallMatchPercent, setOverallMatchPercent] = useState(0);
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
    setOverallMatchPercent(0);
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
    setOverallMatchPercent(0);
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
            // Simulate random match percentage (0-100)
            // 30% chance of no match, 70% chance of some match
            const hasMatch = Math.random() > 0.3;
            setOverallMatchPercent(hasMatch ? Math.floor(Math.random() * 60) + 40 : Math.floor(Math.random() * 25));
          }
          return newProgress;
        });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isAnalyzing, analysisProgress]);

  const getMatchStatus = () => {
    if (overallMatchPercent >= 70) return { status: "High Match", color: "text-red-600", bg: "bg-red-500/10", border: "border-red-200", icon: XCircle };
    if (overallMatchPercent >= 40) return { status: "Partial Match", color: "text-amber-600", bg: "bg-amber-500/10", border: "border-amber-200", icon: AlertTriangle };
    return { status: "No Match", color: "text-green-600", bg: "bg-green-500/10", border: "border-green-200", icon: CheckCircle };
  };

  const matchStatus = getMatchStatus();
  const StatusIcon = matchStatus.icon;

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
            {analysisComplete && (
              <div className="space-y-4 animate-fade-in-up">
                {/* Overall Match Status Card */}
                <div className={`p-4 rounded-lg ${matchStatus.bg} border ${matchStatus.border}`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <StatusIcon className={`h-5 w-5 ${matchStatus.color}`} />
                      <span className={`text-sm font-semibold ${matchStatus.color}`}>
                        {matchStatus.status}
                      </span>
                    </div>
                    <Badge className={`${matchStatus.bg} ${matchStatus.color} ${matchStatus.border}`} variant="outline">
                      {overallMatchPercent >= 40 ? "MATCHED" : "NOT MATCHED"}
                    </Badge>
                  </div>
                  
                  {/* Match Percentage Display */}
                  <div className="text-center py-2">
                    <div className={`text-4xl font-bold ${matchStatus.color}`}>
                      {overallMatchPercent}%
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Overall Similarity Score
                    </p>
                  </div>

                  <Progress 
                    value={overallMatchPercent} 
                    className={`h-2 mt-2 ${overallMatchPercent >= 70 ? '[&>div]:bg-red-500' : overallMatchPercent >= 40 ? '[&>div]:bg-amber-500' : '[&>div]:bg-green-500'}`} 
                  />
                </div>

                {/* Matched Projects List */}
                {overallMatchPercent >= 40 && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-amber-600" />
                      <span className="text-sm font-medium text-foreground">
                        Matched With Projects:
                      </span>
                    </div>

                    <div className="space-y-2">
                      {matchedProjects.map((project, index) => (
                        <div
                          key={project.name}
                          className="group flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer animate-fade-in-up"
                          style={{ animationDelay: `${index * 100}ms` }}
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
                            {project.match}%
                          </Badge>
                        </div>
                      ))}
                    </div>

                    <p className="text-xs text-muted-foreground text-center pt-2">
                      Click on a project to view comparison details
                    </p>
                  </div>
                )}

                {/* No Match Message */}
                {overallMatchPercent < 40 && (
                  <div className="text-center py-2 animate-fade-in-up">
                    <p className="text-sm font-medium text-green-600 mb-1">
                      ✓ Your research appears to be original
                    </p>
                    <p className="text-xs text-muted-foreground">
                      No significant matches found in our database
                    </p>
                  </div>
                )}
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
