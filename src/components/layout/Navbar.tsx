
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Code2, BookOpen, MessageSquare, Briefcase, LayoutDashboard, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Challenges', href: '/challenges', icon: Code2 },
    { name: 'Courses', href: '/courses', icon: BookOpen },
    { name: 'Community', href: '/reviews', icon: MessageSquare },
    { name: 'Projects', href: '/projects', icon: Briefcase },
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary rounded-lg p-1 group-hover:bg-accent transition-colors">
              <Code2 className="h-6 w-6 text-white group-hover:text-background" />
            </div>
            <span className="text-xl font-bold font-headline tracking-tight">
              CODE<span className="text-primary group-hover:text-accent transition-colors">PULSE</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary",
                  pathname === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                <link.icon className="h-4 w-4" />
                {link.name}
              </Link>
            ))}
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
              Sign In
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "flex items-center gap-3 text-base font-medium p-2 rounded-md transition-colors",
                pathname === link.href ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"
              )}
            >
              <link.icon className="h-5 w-5" />
              {link.name}
            </Link>
          ))}
          <Button className="w-full bg-primary hover:bg-primary/90 text-white">Sign In</Button>
        </div>
      )}
    </nav>
  );
}
