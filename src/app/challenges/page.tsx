
import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CHALLENGES } from '@/lib/mock-data';
import { Search, Filter, CheckCircle2, Circle } from 'lucide-react';
import Link from 'next/link';

export default function ChallengesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-12 flex-1">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold font-headline">Problem Browser</h1>
            <p className="text-muted-foreground">Solve problems, save progress, and master concepts.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search problems..." className="pl-10 w-full sm:w-[300px] border-border bg-card" />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" /> Filters
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="hidden lg:block space-y-8">
            <div className="space-y-4">
              <h3 className="font-bold">Difficulty</h3>
              <div className="space-y-2">
                {['Easy', 'Medium', 'Hard'].map((diff) => (
                  <div key={diff} className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors text-sm">
                    <div className="h-4 w-4 rounded border border-border"></div>
                    {diff}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-bold">Topics</h3>
              <div className="flex flex-wrap gap-2">
                {['Arrays', 'Strings', 'Linked Lists', 'Trees', 'DP', 'Graphs', 'Heap', 'Backtracking'].map((topic) => (
                  <Badge key={topic} variant="secondary" className="bg-card hover:bg-primary/20 hover:text-primary cursor-pointer border-border">
                    {topic}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="bg-primary/10 rounded-xl p-6 border border-primary/20 space-y-4">
              <h3 className="font-bold text-primary">Gemini's Choice</h3>
              <p className="text-xs text-muted-foreground">Based on your recent 80% success rate in Arrays, we recommend tackling recursion next.</p>
              <Button size="sm" className="w-full bg-primary text-white">View Suggestion</Button>
            </div>
          </div>

          {/* Main List */}
          <div className="lg:col-span-3 space-y-4">
            <div className="hidden md:grid grid-cols-12 px-6 py-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider bg-muted/30 rounded-lg">
              <div className="col-span-1">Status</div>
              <div className="col-span-6">Title</div>
              <div className="col-span-2">Difficulty</div>
              <div className="col-span-2 text-right">Acceptance</div>
            </div>

            {CHALLENGES.map((challenge, index) => (
              <Link key={challenge.id} href={`/challenges/${challenge.id}`}>
                <Card className="hover:border-primary transition-all border-border bg-card mb-3 group overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-12 items-center px-6 py-5 gap-4">
                      <div className="hidden md:block col-span-1">
                        {index === 0 ? <CheckCircle2 className="h-5 w-5 text-accent" /> : <Circle className="h-5 w-5 text-muted-foreground/30" />}
                      </div>
                      <div className="col-span-6">
                        <h4 className="font-bold text-lg group-hover:text-primary transition-colors">
                          {challenge.id}. {challenge.title}
                        </h4>
                        <div className="flex items-center gap-2 mt-1 md:hidden">
                          <Badge variant={challenge.difficulty === 'Easy' ? 'secondary' : challenge.difficulty === 'Medium' ? 'default' : 'destructive'} className="text-[10px] h-5">
                            {challenge.difficulty}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{challenge.topic}</span>
                        </div>
                      </div>
                      <div className="hidden md:block col-span-2">
                        <span className={cn(
                          "px-2 py-1 rounded text-xs font-medium",
                          challenge.difficulty === 'Easy' ? 'bg-green-500/10 text-green-500' : 
                          challenge.difficulty === 'Medium' ? 'bg-yellow-500/10 text-yellow-500' : 'bg-red-500/10 text-red-500'
                        )}>
                          {challenge.difficulty}
                        </span>
                      </div>
                      <div className="hidden md:block col-span-2 text-right text-sm font-medium text-muted-foreground">
                        {challenge.acceptance}
                      </div>
                      <div className="md:hidden flex justify-between items-center text-xs text-muted-foreground pt-4 border-t border-border mt-2">
                        <span>{challenge.acceptance} Acceptance</span>
                        <div className="flex items-center text-primary font-bold">Solve <ArrowRight className="ml-1 h-3 w-3" /></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
