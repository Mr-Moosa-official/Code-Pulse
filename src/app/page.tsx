
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { REVIEWS, CHALLENGES } from '@/lib/mock-data';
import { Code2, Zap, Trophy, Users, Star, ArrowRight, PlayCircle, MessageSquare } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(160,32,240,0.1),transparent_50%),radial-gradient(circle_at_70%_50%,rgba(0,255,0,0.05),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left space-y-8">
              <Badge className="bg-primary/20 text-primary border-primary/30 py-1.5 px-4 animate-pulse">
                New: AI-Powered Career Paths
              </Badge>
              <h1 className="text-5xl md:text-7xl font-extrabold font-headline leading-tight tracking-tighter">
                Master the Art of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Coding</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Prepare for technical interviews with high-quality problems, professional courses, and a supportive community. Level up with Gemini-powered personalized insights.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg h-auto shadow-lg shadow-primary/20">
                  <Link href="/challenges" className="flex items-center">
                    Start Coding Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-border hover:bg-muted text-foreground rounded-full px-8 py-6 text-lg h-auto">
                  <Link href="/courses" className="flex items-center">
                    <PlayCircle className="mr-2 h-5 w-5" /> Browse Courses
                  </Link>
                </Button>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">1.2M+</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest">Developers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest">Challenges</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest">Courses</div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 w-full max-w-2xl relative">
              <div className="bg-[#1a1a1a] rounded-2xl border border-border shadow-2xl p-4 transform hover:scale-[1.02] transition-transform duration-500">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 text-center text-xs text-muted-foreground font-code">two_sum.js</div>
                </div>
                <div className="font-code text-sm text-gray-400 space-y-1">
                  <div className="text-primary">function <span className="text-white">solve</span>() {'{'}</div>
                  <div className="pl-4 text-accent">const <span className="text-white">target</span> = 9;</div>
                  <div className="pl-4 text-accent">const <span className="text-white">nums</span> = [2, 7, 11, 15];</div>
                  <div className="pl-4 text-purple-400">return <span className="text-white">nums</span>.<span className="text-blue-400">filter</span>(n =&gt; n &lt; target);</div>
                  <div className="text-primary">{'}'}</div>
                </div>
              </div>
              {/* Floating Element */}
              <div className="absolute -bottom-6 -right-6 bg-accent p-4 rounded-xl shadow-xl text-background font-bold flex items-center gap-2 animate-bounce">
                <Trophy className="h-5 w-5" /> Challenge Complete!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-bold font-headline">Built for Developers, by Developers</h2>
            <p className="text-muted-foreground">Everything you need to land your dream job at top-tier tech companies.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="pt-8 space-y-4">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Interactive Editor</h3>
                <p className="text-muted-foreground">Write, run, and debug code in over 15+ languages with our lightning-fast compiler.</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border hover:border-accent/50 transition-colors">
              <CardContent className="pt-8 space-y-4">
                <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center">
                  <Code2 className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold">Mock Interviews</h3>
                <p className="text-muted-foreground">Practice real-world interview scenarios with our AI-powered peer simulation tool.</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border hover:border-purple-500/50 transition-colors">
              <CardContent className="pt-8 space-y-4">
                <div className="bg-purple-500/10 w-12 h-12 rounded-xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold">Community Support</h3>
                <p className="text-muted-foreground">Share solutions, get feedback, and collaborate with thousands of developers worldwide.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Challenges */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold font-headline">Curated Challenges</h2>
              <p className="text-muted-foreground">Hand-picked problems to build your core problem-solving foundation.</p>
            </div>
            <Link href="/challenges" className="text-primary font-semibold flex items-center hover:underline hidden md:flex">
              View all problems <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CHALLENGES.map((challenge) => (
              <Link key={challenge.id} href={`/challenges/${challenge.id}`}>
                <Card className="bg-card border-border hover:border-primary transition-all group overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{challenge.title}</h3>
                      <Badge variant={challenge.difficulty === 'Easy' ? 'secondary' : challenge.difficulty === 'Medium' ? 'default' : 'destructive'} className="rounded-md">
                        {challenge.difficulty}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-6">
                      {challenge.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs font-medium">
                      <div className="flex items-center gap-1 text-accent">
                        <Users className="h-3 w-3" /> {challenge.acceptance} Acceptance
                      </div>
                      <div className="text-muted-foreground">{challenge.topic}</div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold font-headline text-accent">What Our Users Say</h2>
            <div className="flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="h-5 w-5 fill-accent text-accent" />)}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {REVIEWS.map((review) => (
              <Card key={review.id} className="bg-card border-border relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <MessageSquare className="h-16 w-16" />
                </div>
                <CardContent className="p-8">
                  <p className="text-lg italic mb-6">"{review.comment}"</p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-primary">
                      <Image 
                        src={`https://picsum.photos/seed/${review.id}/100/100`} 
                        alt={review.userName} 
                        width={48} 
                        height={48} 
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold">{review.userName}</div>
                      <div className="text-sm text-muted-foreground">{review.date}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-12 border-t border-border bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2">
                <div className="bg-primary rounded-lg p-1">
                  <Code2 className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold font-headline tracking-tight">CODEPULSE</span>
              </Link>
              <p className="text-sm text-muted-foreground">The world's best platform for technical interview preparation and engineering mastery.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/challenges" className="hover:text-primary">Challenges</Link></li>
                <li><Link href="/courses" className="hover:text-primary">Courses</Link></li>
                <li><Link href="/projects" className="hover:text-primary">Projects</Link></li>
                <li><Link href="/dashboard" className="hover:text-primary">Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-primary">About Us</Link></li>
                <li><Link href="#" className="hover:text-primary">Careers</Link></li>
                <li><Link href="#" className="hover:text-primary">Press</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-primary">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-primary">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-primary">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <div>© 2024 Code Pulse. All rights reserved. Built with ❤️ for the dev community.</div>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white">Twitter</Link>
              <Link href="#" className="hover:text-white">GitHub</Link>
              <Link href="#" className="hover:text-white">LinkedIn</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
