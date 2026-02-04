
"use client";

import { useState, useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { getPersonalizedChallenges } from '@/ai/flows/personalized-challenge-suggestions';
import { Sparkles, BrainCircuit, Trophy, Flame, ChevronRight, Activity, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchAiSuggestions = async () => {
    setLoading(true);
    try {
      const result = await getPersonalizedChallenges({
        userHistory: "User has completed 15 easy problems in Arrays and 5 medium problems in Linked Lists. Success rate is 85%. Struggles with Recursion.",
        preferredTopics: "Arrays, Linked Lists, Recursion, Binary Search"
      });
      setSuggestions(result.challengeSuggestions);
    } catch (error) {
      console.error("AI Error:", error);
      setSuggestions([
        "Reverse Linked List (Iterative vs Recursive)",
        "Search in Rotated Sorted Array",
        "Merge K Sorted Lists"
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAiSuggestions();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a]">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-bold">
            JD
          </div>
          <div>
            <h1 className="text-4xl font-bold font-headline">Welcome back, John</h1>
            <p className="text-muted-foreground flex items-center gap-2">
              <Flame className="h-4 w-4 text-orange-500 fill-orange-500" /> 12 Day Streak
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Stats */}
          <div className="lg:col-span-2 space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center space-y-2">
                  <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Trophy className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-3xl font-bold">142</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest">Global Rank</div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center space-y-2">
                  <div className="bg-accent/10 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Activity className="h-5 w-5 text-accent" />
                  </div>
                  <div className="text-3xl font-bold">2,450</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest">Code Points</div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardContent className="p-6 text-center space-y-2">
                  <div className="bg-purple-500/10 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <TrendingUp className="h-5 w-5 text-purple-500" />
                  </div>
                  <div className="text-3xl font-bold">85%</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest">Success Rate</div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-accent" /> Weekly Progress
                </CardTitle>
                <CardDescription>You solved 12 problems this week. Keep it up!</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Easy Problems</span>
                    <span className="font-bold">24 / 50</span>
                  </div>
                  <Progress value={48} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Medium Problems</span>
                    <span className="font-bold">12 / 100</span>
                  </div>
                  <Progress value={12} className="h-2 bg-muted [&>div]:bg-primary" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Hard Problems</span>
                    <span className="font-bold">2 / 50</span>
                  </div>
                  <Progress value={4} className="h-2 bg-muted [&>div]:bg-destructive" />
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-border overflow-hidden">
                <CardHeader className="bg-muted/30 pb-4">
                  <CardTitle className="text-lg">Recent Submission</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold">Binary Tree Level Order Traversal</div>
                      <div className="text-xs text-muted-foreground">Solved 4 hours ago</div>
                    </div>
                    <Badge className="bg-accent text-background">Success</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card border-border overflow-hidden">
                <CardHeader className="bg-muted/30 pb-4">
                  <CardTitle className="text-lg">Active Course</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold">Dynamic Programming Mastery</div>
                      <div className="text-xs text-muted-foreground">32% Completed</div>
                    </div>
                    <Button size="sm" variant="ghost" className="text-primary p-0">
                      Resume <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* AI Suggestions Sidebar */}
          <div className="space-y-8">
            <Card className="bg-[#1a1a1a] border-primary/30 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
                <BrainCircuit className="h-24 w-24 text-primary" />
              </div>
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Sparkles className="h-5 w-5" /> Gemini Insights
                </CardTitle>
                <CardDescription>Tailored suggestions based on your coding behavior.</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 space-y-4">
                {loading ? (
                  <div className="space-y-3">
                    {[1, 2, 3].map(i => <div key={i} className="h-10 bg-muted/50 rounded-lg animate-pulse" />)}
                  </div>
                ) : (
                  <div className="space-y-3">
                    {suggestions.map((s, i) => (
                      <div key={i} className="p-3 rounded-lg bg-muted/20 border border-border/50 hover:bg-muted/40 transition-colors cursor-pointer group flex items-center justify-between">
                        <span className="text-sm font-medium">{s}</span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    ))}
                    <Button 
                      className="w-full mt-4 bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30"
                      onClick={fetchAiSuggestions}
                    >
                      Refresh Insights
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg">Badges Earned</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-4">
                  {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={i} className="aspect-square rounded-lg bg-muted flex items-center justify-center group cursor-help relative">
                      <Trophy className={cn(
                        "h-6 w-6",
                        i < 4 ? "text-accent" : "text-muted-foreground/30"
                      )} />
                      <div className="absolute -top-8 bg-black text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {i < 4 ? "Level Complete" : "Locked"}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/20 to-transparent border border-accent/20 text-center space-y-4">
              <h4 className="font-bold">Weekly Contest</h4>
              <p className="text-xs text-muted-foreground">Starts in 2d 14h 45m. Register now to climb the leaderboard.</p>
              <Button size="sm" className="w-full bg-accent text-background font-bold">Join Contest</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";
