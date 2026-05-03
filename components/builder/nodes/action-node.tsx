"use client";

import { Handle, Position } from "@xyflow/react";
import { PlaySquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ActionNode({ data, isConnectable }: any) {
  return (
    <div className="w-[200px] shadow-sm rounded-md bg-card border border-border overflow-hidden">
      <Handle type="target" position={Position.Left} isConnectable={isConnectable} className="w-3 h-3 bg-primary" />
      <div className="bg-orange-500/10 border-b border-border p-2 flex items-center justify-between">
        <div className="flex items-center gap-2 text-orange-500 font-medium text-sm">
          <PlaySquare className="h-4 w-4" /> Action
        </div>
        <Badge variant="outline" className="text-[10px] py-0 px-1 border-orange-500/20 text-orange-500 uppercase">
          {data.platform}
        </Badge>
      </div>
      <div className="p-3">
        <div className="text-sm font-medium capitalize">{data.action}</div>
        <div className="text-xs text-muted-foreground mt-1">Executes this outcome.</div>
      </div>
      <Handle type="source" position={Position.Right} isConnectable={isConnectable} className="w-3 h-3 bg-orange-500" />
    </div>
  );
}
