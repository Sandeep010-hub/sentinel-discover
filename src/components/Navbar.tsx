import { Shield, Github, Linkedin, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#", active: false },
  { label: "About", href: "#", active: false },
  { label: "How to Use", href: "#", active: false },
  { label: "Explore Projects", href: "#", active: true },
];

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-primary shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/10 backdrop-blur-sm">
              <Shield className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary-foreground tracking-tight">
              SentinelFlow
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-all duration-200",
                  link.active
                    ? "bg-primary-foreground/15 text-primary-foreground"
                    : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Side - Social & Profile */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="p-2 text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10 rounded-md transition-all duration-200"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="p-2 text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10 rounded-md transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <div className="h-6 w-px bg-primary-foreground/20 mx-1" />
            <button className="flex items-center gap-2 px-3 py-2 text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 rounded-md transition-all duration-200">
              <div className="h-8 w-8 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <User className="h-4 w-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
