import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, Globe, GraduationCap } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [language, setLanguage] = useState<"EN" | "JP">("EN");

  const navLinks = [
    { path: "/", label: language === "EN" ? "Home" : "ホーム" },
    { path: "/about", label: language === "EN" ? "About" : "概要" },
    { path: "/courses", label: language === "EN" ? "Courses" : "コース" },
    { path: "/dashboard", label: language === "EN" ? "Dashboard" : "ダッシュボード" },
    { path: "/forum", label: language === "EN" ? "Forum" : "フォーラム" },
    { path: "/contact", label: language === "EN" ? "Contact" : "お問い合わせ" },
  ];

  const toggleLanguage = () => {
    setLanguage(prev => prev === "EN" ? "JP" : "EN");
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary hover:text-primary/80 transition-colors">
          <GraduationCap className="h-7 w-7" />
          <span className="hidden md:inline">Math & Language Synergy</span>
          <span className="md:hidden">MLS</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            className="ml-2"
            aria-label="Toggle language"
          >
            <Globe className="h-5 w-5" />
            <span className="ml-1 text-xs font-semibold">{language}</span>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            aria-label="Toggle language"
          >
            <Globe className="h-4 w-4" />
            <span className="ml-1 text-xs">{language}</span>
          </Button>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 pt-10">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-base font-medium text-foreground hover:text-primary transition-colors px-2 py-2 rounded-md hover:bg-muted"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
