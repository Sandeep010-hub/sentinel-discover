import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const HeroSection = ({ searchQuery, onSearchChange }: HeroSectionProps) => {
  return (
    <section className="bg-background py-10 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Title */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Archive Discovery
            </h1>
            <p className="mt-2 text-muted-foreground">
              Explore academic projects and detect similarity
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-96 lg:w-[480px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search projects, tags, or keywords..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-12 pr-4 py-6 text-base bg-card border-border shadow-sm rounded-xl focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
