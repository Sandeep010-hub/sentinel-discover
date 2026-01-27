import { Shield } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border py-8 mt-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <span className="font-semibold text-foreground">SentinelFlow</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Base Paper Fetching
            </a>
            <span className="text-muted-foreground/50">|</span>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Suggestions
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            © 2024 SentinelFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
