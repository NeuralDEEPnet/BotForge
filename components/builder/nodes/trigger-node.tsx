"use client";

import { Handle, Position } from "@xyflow/react";
import { Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function TriggerNode({ data, isConnectable }: any) {
  return (
    <div className="w-[200px] shadow-sm rounded-md bg-card border border-border overflow-hidden">
      <div className="bg-primary/10 border-b border-border p-2 flex items-center justify-between">
        <div className="flex items-center gap-2 text-primary font-medium text-sm">
          <Zap className="h-4 w-4" /> Trigger
        </div>
        <Badge variant="outline" className="text-[10px] py-0 px-1 border-primary/20 text-primary uppercase">
          {data.platform}
        </Badge>
      </div>
      <div className="p-3">
        <div className="text-sm font-medium">{data.event}</div>
        <div className="text-xs text-muted-foreground mt-1">When this happens, the flow starts.</div>
      </div>
      <Handle type="source" position={Position.Right} isConnectable={isConnectable} className="w-3 h-3 bg-primary" />
    </div>
  );
}
