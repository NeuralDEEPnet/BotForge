"use client";

import { Zap, BrainCircuit, PlaySquare } from "lucide-react";

export function NodeSidebar() {
  const onDragStart = (event: React.DragEvent, nodeType: string, nodeData: any) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.setData('application/nodeData', JSON.stringify(nodeData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="w-64 border-r border-border bg-muted/20 p-4 hidden md:flex flex-col gap-4 overflow-y-auto">
      <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Available Nodes</div>
      
      <div 
        className="p-3 border border-border bg-card rounded cursor-grab hover:border-primary/50 transition-colors"
        draggable
        onDragStart={(e) => onDragStart(e, 'trigger', { platform: 'discord', event: 'onMessage' })}
      >
        <div className="flex items-center gap-2 font-medium text-sm text-primary mb-1">
          <Zap className="h-4 w-4" /> Trigger Node
        </div>
        <p className="text-xs text-muted-foreground">Start the flow from an event</p>
      </div>

      <div 
        className="p-3 border border-border bg-card rounded cursor-grab hover:border-blue-500/50 transition-colors"
        draggable
        onDragStart={(e) => onDragStart(e, 'llm', { model: 'gemini-1.5-flash', prompt: 'You are an AI assistant.' })}
      >
        <div className="flex items-center gap-2 font-medium text-sm text-blue-500 mb-1">
          <BrainCircuit className="h-4 w-4" /> LLM Node
        </div>
        <p className="text-xs text-muted-foreground">Process text with AI</p>
      </div>

      <div 
        className="p-3 border border-border bg-card rounded cursor-grab hover:border-orange-500/50 transition-colors"
        draggable
        onDragStart={(e) => onDragStart(e, 'action', { platform: 'discord', action: 'reply' })}
      >
        <div className="flex items-center gap-2 font-medium text-sm text-orange-500 mb-1">
          <PlaySquare className="h-4 w-4" /> Action Node
        </div>
        <p className="text-xs text-muted-foreground">Execute an action or send message</p>
      </div>
    </div>
  );
}
