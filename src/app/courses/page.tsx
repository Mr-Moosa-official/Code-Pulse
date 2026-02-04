
import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { COURSES } from '@/lib/mock-data';
import { Star, Clock, User, PlayCircle, Search } from 'lucide-react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';

export default function CoursesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h1 className="text-5xl font-extrabold font-headline">Education Center</h1>
          <p className="text-xl text-muted-foreground">Expert-led courses designed to help you master competitive programming and data structures.</p>
          <div className="max-w-md mx-auto relative pt-4">
            <Search className="absolute left-3 top-7 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search courses..." className="pl-10 h-12 rounded-full border-border bg-card" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course) => (
            <Card key={course.id} className="overflow-hidden border-border bg-card hover:shadow-2xl transition-all group flex flex-col">
              <div className="relative aspect-video overflow-hidden">
                <Image 
                  src={`https://picsum.photos/seed/${course.id}/600/400`} 
                  alt={course.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  data-ai-hint="online course programming"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-4">
                  <Badge className="bg-primary text-white">{course.level}</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-1 text-accent text-sm font-bold">
                    <Star className="h-4 w-4 fill-accent" /> {course.rating}
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground text-xs">
                    <Clock className="h-3 w-3" /> {course.duration}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{course.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center">
                    <User className="h-3 w-3" />
                  </div>
                  {course.instructor}
                </div>
              </CardContent>
              <CardFooter className="pt-0 pb-6">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full">
                  <PlayCircle className="mr-2 h-4 w-4" /> Start Learning
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-24 p-12 rounded-3xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-center">
          <h2 className="text-3xl font-bold mb-4">Join our Coding Bootcamp</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">Ready to go from zero to hero? Our 12-week intensive program covers everything from binary search to distributed systems.</p>
          <Button size="lg" className="bg-accent text-background font-bold hover:bg-accent/80 rounded-full px-12">Apply Now</Button>
        </div>
      </div>
    </div>
  );
}
