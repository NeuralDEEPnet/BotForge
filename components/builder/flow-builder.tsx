"use client";

import { useState, useCallback, useRef } from "react";
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  NodeTypes,
  ReactFlowProvider,
  useReactFlow
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import TriggerNode from "./nodes/trigger-node";
import ActionNode from "./nodes/action-node";
import LlmNode from "./nodes/llm-node";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowLeft, Save, Settings } from "lucide-react";
import { DeployDialog } from "./deploy-dialog";
import { NodeSidebar } from "./node-sidebar";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Register custom node types
const nodeTypes: NodeTypes = {
  trigger: TriggerNode,
  action: ActionNode,
  llm: LlmNode,
};

const initialNodes = [
  { id: "1", type: "trigger", position: { x: 100, y: 100 }, data: { platform: "discord", event: "onMessage" } },
  { id: "2", type: "llm", position: { x: 400, y: 100 }, data: { prompt: "You are a helpful assistant. Reply to the message.", model: "gemini-1.5-flash" } },
  { id: "3", type: "action", position: { x: 700, y: 100 }, data: { platform: "discord", action: "reply" } },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3" },
];

function FlowBuilderInner({ botId }: { botId: string }) {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const { screenToFlowPosition } = useReactFlow();

  const onConnect = useCallback(
    (params: Connection | Edge) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();

      const type = event.dataTransfer.getData('application/reactflow');
      if (!type) {
        return;
      }
      
      const nodeDataStr = event.dataTransfer.getData('application/nodeData');
      const nodeData = nodeDataStr ? JSON.parse(nodeDataStr) : {};

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode = {
        id: `node_${Date.now()}`,
        type,
        position,
        data: nodeData,
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [screenToFlowPosition, setNodes],
  );

  return (
    <div className="h-full w-full flex flex-col relative bg-background border-border">
      <div className="h-14 shrink-0 border-b border-border flex items-center justify-between px-4 bg-background">
        <div className="flex items-center gap-4 px-2">
          <Link href="/dashboard" className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}>
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div className="font-semibold">Flow Editor - Agent {botId}</div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" /> Settings
          </Button>
          <Button variant="outline" size="sm">
            <Save className="h-4 w-4 mr-2" /> Save
          </Button>
          <DeployDialog botId={botId} />
        </div>
      </div>
      <div className="flex-1 w-full flex overflow-hidden">
        <NodeSidebar />
        <div className="flex-1 h-full relative" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onDrop={onDrop}
            onDragOver={onDragOver}
            nodeTypes={nodeTypes}
            fitView
            colorMode="dark"
          >
            <Controls />
            <MiniMap nodeStrokeWidth={3} zoomable pannable />
            <Background color="#555" gap={16} />
          </ReactFlow>
        </div>
      </div>
    </div>
  );
}

export default function FlowBuilder({ botId }: { botId: string }) {
  return (
    <ReactFlowProvider>
      <FlowBuilderInner botId={botId} />
    </ReactFlowProvider>
  );
}
