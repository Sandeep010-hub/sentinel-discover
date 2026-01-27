import { useState, useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FilterBar } from "@/components/FilterBar";
import { ProjectCard } from "@/components/ProjectCard";
import { AIAssistancePanel } from "@/components/AIAssistancePanel";
import { FloatingActionButton } from "@/components/FloatingActionButton";
import { Footer } from "@/components/Footer";
import { projects } from "@/data/projects";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedBranch, setSelectedBranch] = useState("all");
  const [selectedTech, setSelectedTech] = useState("all");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Search filter
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchLower));

      // Year filter
      const matchesYear =
        selectedYear === "all" || project.year.toString() === selectedYear;

      // Branch filter
      const matchesBranch =
        selectedBranch === "all" || project.branch === selectedBranch;

      // Tech filter
      const matchesTech =
        selectedTech === "all" ||
        project.tags.some((tag) => tag === selectedTech);

      return matchesSearch && matchesYear && matchesBranch && matchesTech;
    });
  }, [searchQuery, selectedYear, selectedBranch, selectedTech]);

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {/* Filter Bar */}
      <FilterBar
        selectedYear={selectedYear}
        selectedBranch={selectedBranch}
        selectedTech={selectedTech}
        onYearChange={setSelectedYear}
        onBranchChange={setSelectedBranch}
        onTechChange={setSelectedTech}
      />

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Project Grid */}
          <div className="flex-1">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing <span className="font-medium text-foreground">{filteredProjects.length}</span> projects
              </p>
            </div>

            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-card rounded-xl border border-border">
                <p className="text-muted-foreground">
                  No projects found matching your criteria.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedYear("all");
                    setSelectedBranch("all");
                    setSelectedTech("all");
                  }}
                  className="mt-4 text-sm text-accent hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>

          {/* AI Assistance Panel */}
          <div className="w-full lg:w-80 flex-shrink-0">
            <AIAssistancePanel />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button */}
      <FloatingActionButton />
    </div>
  );
};

export default Index;
