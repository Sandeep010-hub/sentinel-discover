import { ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { years, branches, techStacks } from "@/data/projects";

interface FilterBarProps {
  selectedYear: string;
  selectedBranch: string;
  selectedTech: string;
  onYearChange: (year: string) => void;
  onBranchChange: (branch: string) => void;
  onTechChange: (tech: string) => void;
}

export const FilterBar = ({
  selectedYear,
  selectedBranch,
  selectedTech,
  onYearChange,
  onBranchChange,
  onTechChange,
}: FilterBarProps) => {
  return (
    <section className="bg-secondary/50 py-4 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-medium text-muted-foreground mr-2">
            Filters:
          </span>

          {/* Year Filter */}
          <Select value={selectedYear} onValueChange={onYearChange}>
            <SelectTrigger className="w-[130px] bg-card border-border hover:bg-secondary/80 transition-colors">
              <SelectValue placeholder="Year: All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Years</SelectItem>
              {years.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Branch Filter */}
          <Select value={selectedBranch} onValueChange={onBranchChange}>
            <SelectTrigger className="w-[180px] bg-card border-border hover:bg-secondary/80 transition-colors">
              <SelectValue placeholder="Branch: All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Branches</SelectItem>
              {branches.map((branch) => (
                <SelectItem key={branch} value={branch}>
                  {branch}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Tech Stack Filter */}
          <Select value={selectedTech} onValueChange={onTechChange}>
            <SelectTrigger className="w-[160px] bg-card border-border hover:bg-secondary/80 transition-colors">
              <SelectValue placeholder="Tech: All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Tech</SelectItem>
              {techStacks.map((tech) => (
                <SelectItem key={tech} value={tech}>
                  {tech}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  );
};
