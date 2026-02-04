
import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { REVIEWS } from '@/lib/mock-data';
import { Star, MessageSquare, Quote, Heart, ThumbsUp } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function ReviewsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div className="space-y-4 max-w-2xl">
            <h1 className="text-5xl font-extrabold font-headline">Developer Community</h1>
            <p className="text-xl text-muted-foreground">See why thousands of developers choose Code Pulse to accelerate their careers.</p>
          </div>
          <Button className="bg-primary text-white rounded-full px-8">Write a Review</Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <Card key={review.id} className="bg-card border-border flex flex-col">
              <CardContent className="p-8 flex-1 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                    {[...Array(5 - review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-muted-foreground/30" />
                    ))}
                  </div>
                  <Badge variant="outline" className="text-xs">{review.date}</Badge>
                </div>
                <div className="relative">
                  <Quote className="absolute -top-4 -left-4 h-8 w-8 text-primary opacity-20" />
                  <p className="text-lg leading-relaxed relative z-10 italic">"{review.comment}"</p>
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-border mt-auto">
                  <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-primary/20">
                    <Image 
                      src={`https://picsum.photos/seed/${review.id}/100/100`} 
                      alt={review.userName} 
                      width={40} 
                      height={40} 
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold">{review.userName}</div>
                    <div className="text-xs text-muted-foreground">Software Engineer</div>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground hover:text-accent cursor-pointer transition-colors">
                    <ThumbsUp className="h-4 w-4" />
                    <span className="text-xs">12</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {/* Mock extra reviews for realism */}
          <Card className="bg-card border-border border-dashed flex flex-col items-center justify-center p-8 text-center space-y-4">
            <div className="bg-muted w-16 h-16 rounded-full flex items-center justify-center">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Join 50k+ Happy Users</h3>
            <p className="text-sm text-muted-foreground">Be the next one to share your success story with our community.</p>
            <Button variant="outline" className="rounded-full">View 1,240 more reviews</Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
