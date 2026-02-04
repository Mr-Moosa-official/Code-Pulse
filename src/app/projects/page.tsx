
import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PROJECTS } from '@/lib/mock-data';
import { Star, Eye, ExternalLink, Code2, Rocket } from 'lucide-react';
import Image from 'next/image';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="space-y-4">
            <h1 className="text-5xl font-extrabold font-headline">Community Projects</h1>
            <p className="text-xl text-muted-foreground">Real-world projects built by our community. Run code sandboxes and rate engineering quality.</p>
          </div>
          <Button className="bg-accent text-background font-bold rounded-full px-8 hover:bg-accent/80">
            <Rocket className="mr-2 h-4 w-4" /> Deploy Project
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
          {PROJECTS.map((project) => (
            <Card key={project.id} className="bg-card border-border overflow-hidden hover:border-primary transition-all group shadow-xl">
              <div className="flex flex-col lg:flex-row">
                <div className="relative w-full lg:w-1/2 aspect-video lg:aspect-square overflow-hidden">
                  <Image 
                    src={`https://picsum.photos/seed/${project.id}/800/800`} 
                    alt={project.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    data-ai-hint="software interface dashboard"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <Button variant="secondary" size="sm" className="rounded-full">
                      <Eye className="h-4 w-4 mr-2" /> Preview
                    </Button>
                  </div>
                </div>
                <div className="flex-1 flex flex-col p-8">
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-2xl font-headline group-hover:text-primary transition-colors">{project.title}</CardTitle>
                    <div className="flex items-center gap-1.5 bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-bold">
                      <Star className="h-4 w-4 fill-accent" /> {project.stars}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-[10px] text-primary font-bold">
                      {project.author[0]}
                    </div>
                    <span>by <span className="text-foreground font-semibold">{project.author}</span></span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-muted text-muted-foreground border-none">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-auto flex gap-3">
                    <Button className="flex-1 bg-primary text-white">
                      <Code2 className="mr-2 h-4 w-4" /> View Source
                    </Button>
                    <Button variant="outline" size="icon">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-24 text-center space-y-6 py-16 bg-muted/10 rounded-3xl border border-dashed border-border">
          <h2 className="text-3xl font-bold">Want to showcase your work?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Upload your projects to our sandbox environment and get feedback from elite engineers at top tech firms.</p>
          <Button size="lg" className="rounded-full bg-accent text-background font-bold px-12">Open Sandbox Editor</Button>
        </div>
      </div>
    </div>
  );
}
