"use client";

import { Handle, Position } from "@xyflow/react";
import { BrainCircuit } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function LlmNode({ data, isConnectable }: any) {
  return (
    <div className="w-[280px] shadow-sm rounded-md bg-card border border-border overflow-hidden">
      <Handle type="target" position={Position.Left} isConnectable={isConnectable} className="w-3 h-3 bg-primary" />
      <div className="bg-blue-500/10 border-b border-border p-2 flex items-center justify-between">
        <div className="flex items-center gap-2 text-blue-500 font-medium text-sm">
          <BrainCircuit className="h-4 w-4" /> AI Agent logic
        </div>
        <Badge variant="outline" className="text-[10px] py-0 px-1 border-blue-500/20 text-blue-500 font-mono">
          {data.model}
        </Badge>
      </div>
      <div className="p-3">
        <div className="text-xs font-semibold mb-1 text-muted-foreground uppercase tracking-wider">System Prompt</div>
        <div className="text-sm bg-muted/50 p-2 rounded border border-border/50 text-foreground break-words line-clamp-3">
          &quot;{data.prompt}&quot;
        </div>
      </div>
      <Handle type="source" position={Position.Right} isConnectable={isConnectable} className="w-3 h-3 bg-blue-500" />
    </div>
  );
}
