
"use client";

import { useParams } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { EditorPanel } from '@/components/code-editor/EditorPanel';
import { CHALLENGES } from '@/lib/mock-data';
import { ScrollArea } from '@/components/ui/scroll-area';
import { BookOpen, HelpCircle, History, MessageCircle } from 'lucide-react';

export default function ChallengeDetailPage() {
  const { id } = useParams();
  const challenge = CHALLENGES.find(c => c.id === id) || CHALLENGES[0];

  return (
    <div className="h-screen flex flex-col bg-background">
      <Navbar />
      <div className="flex-1 flex overflow-hidden">
        {/* Left Column - Content */}
        <div className="w-1/2 border-r border-border h-full flex flex-col">
          <Tabs defaultValue="description" className="flex-1 flex flex-col">
            <div className="px-4 border-b border-border bg-muted/10">
              <TabsList className="bg-transparent h-12 border-none space-x-6">
                <TabsTrigger value="description" className="data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-primary rounded-none h-12">
                  <BookOpen className="h-4 w-4 mr-2" /> Description
                </TabsTrigger>
                <TabsTrigger value="solution" className="data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-primary rounded-none h-12">
                  <HelpCircle className="h-4 w-4 mr-2" /> Solutions
                </TabsTrigger>
                <TabsTrigger value="submissions" className="data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-primary rounded-none h-12">
                  <History className="h-4 w-4 mr-2" /> Submissions
                </TabsTrigger>
                <TabsTrigger value="discussions" className="data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-primary rounded-none h-12">
                  <MessageCircle className="h-4 w-4 mr-2" /> Discussions
                </TabsTrigger>
              </TabsList>
            </div>

            <ScrollArea className="flex-1">
              <TabsContent value="description" className="p-8 m-0 space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold font-headline">{challenge.id}. {challenge.title}</h1>
                    <Badge variant={challenge.difficulty === 'Easy' ? 'secondary' : challenge.difficulty === 'Medium' ? 'default' : 'destructive'}>
                      {challenge.difficulty}
                    </Badge>
                  </div>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><BookOpen className="h-3 w-3" /> {challenge.topic}</span>
                    <span className="flex items-center gap-1">Success Rate: {challenge.acceptance}</span>
                  </div>
                </div>

                <div className="space-y-4 text-lg leading-relaxed text-gray-300">
                  <p>{challenge.description}</p>
                </div>

                <div className="space-y-6">
                  {challenge.examples.map((ex, i) => (
                    <div key={i} className="space-y-3">
                      <h3 className="font-bold flex items-center gap-2">Example {i + 1}:</h3>
                      <div className="bg-muted/30 p-4 rounded-xl border border-border font-code text-sm">
                        <div><span className="text-accent font-semibold">Input:</span> {ex.input}</div>
                        <div><span className="text-accent font-semibold">Output:</span> {ex.output}</div>
                        {ex.explanation && (
                          <div className="mt-2 pt-2 border-t border-border/50"><span className="text-primary font-semibold">Explanation:</span> {ex.explanation}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold">Constraints:</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground bg-muted/10 p-4 rounded-xl">
                    {challenge.constraints.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="solution" className="p-8 m-0">
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <HelpCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Verified Solution Available</h3>
                  <p className="text-muted-foreground max-w-xs">Complete the challenge first or use a hint credit to reveal the official solution.</p>
                  <Button className="bg-primary text-white">Unlock Solution</Button>
                </div>
              </TabsContent>
            </ScrollArea>
          </Tabs>
        </div>

        {/* Right Column - Editor */}
        <div className="flex-1 h-full p-4 bg-muted/5">
          <EditorPanel />
        </div>
      </div>
    </div>
  );
}
