
"use client";

import { useState } from 'react';
import { Play, RotateCcw, Save, Terminal, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function EditorPanel() {
  const [code, setCode] = useState(`function twoSum(nums, target) {
  // Write your code here
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
};`);

  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const runCode = () => {
    setIsRunning(true);
    setTimeout(() => {
      setOutput("Test Case 1: [2, 7, 11, 15], Target: 9\nOutput: [0, 1]\nStatus: Success ✅\n\nExecution Time: 45ms");
      setIsRunning(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-full border border-border rounded-xl overflow-hidden bg-[#1E1E1E]">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-[#252526]">
        <div className="flex items-center gap-4">
          <Select defaultValue="javascript">
            <SelectTrigger className="w-[140px] h-8 bg-background border-none text-xs">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="javascript">JavaScript</SelectItem>
              <SelectItem value="python">Python 3</SelectItem>
              <SelectItem value="cpp">C++</SelectItem>
              <SelectItem value="java">Java</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex items-center gap-2 text-muted-foreground">
            <RotateCcw className="h-3.5 w-3.5 cursor-pointer hover:text-white" />
            <Save className="h-3.5 w-3.5 cursor-pointer hover:text-white" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="h-8 border-accent text-accent hover:bg-accent/10"
            onClick={runCode}
            disabled={isRunning}
          >
            {isRunning ? "Running..." : <><Play className="h-3 w-3 mr-2" /> Run</>}
          </Button>
          <Button 
            size="sm" 
            className="h-8 bg-primary hover:bg-primary/90 text-white"
          >
            Submit
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-hidden flex flex-col">
        <div className="flex-1 relative font-code text-sm p-4 overflow-auto">
          <pre className="text-gray-300">
            <code>
              {code.split('\n').map((line, i) => (
                <div key={i} className="flex">
                  <span className="w-8 text-muted-foreground/50 select-none inline-block">{i + 1}</span>
                  <span className={cn(
                    line.includes('//') ? 'text-green-500/70' : 
                    line.includes('const') || line.includes('function') || line.includes('let') || line.includes('return') || line.includes('for') ? 'text-purple-400' :
                    line.includes('Map') ? 'text-yellow-300' : 'text-gray-300'
                  )}>
                    {line}
                  </span>
                </div>
              ))}
            </code>
          </pre>
          <div className="absolute top-0 right-0 w-1 h-full bg-accent/20"></div>
        </div>

        <div className="h-1/3 border-t border-border bg-[#1a1a1a]">
          <Tabs defaultValue="console" className="h-full flex flex-col">
            <div className="px-4 border-b border-border bg-[#252526]">
              <TabsList className="bg-transparent h-10 border-none space-x-4">
                <TabsTrigger value="console" className="data-[state=active]:bg-transparent data-[state=active]:text-accent data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-accent rounded-none h-10">
                  <Terminal className="h-3 w-3 mr-2" /> Console
                </TabsTrigger>
                <TabsTrigger value="testcases" className="data-[state=active]:bg-transparent data-[state=active]:text-accent data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-accent rounded-none h-10">
                  <ChevronRight className="h-3 w-3 mr-2" /> Test Cases
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="console" className="flex-1 p-4 m-0 overflow-auto font-code text-xs text-muted-foreground whitespace-pre-wrap">
              {output || "Run your code to see the output here..."}
            </TabsContent>
            <TabsContent value="testcases" className="flex-1 p-4 m-0 overflow-auto">
              <div className="space-y-4">
                <div className="bg-muted/30 p-3 rounded-lg border border-border">
                  <div className="text-xs font-semibold mb-2">Case 1</div>
                  <div className="text-[10px] text-muted-foreground">Input: nums = [2,7,11,15], target = 9</div>
                </div>
                <div className="bg-muted/30 p-3 rounded-lg border border-border">
                  <div className="text-xs font-semibold mb-2">Case 2</div>
                  <div className="text-[10px] text-muted-foreground">Input: nums = [3,2,4], target = 6</div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";
