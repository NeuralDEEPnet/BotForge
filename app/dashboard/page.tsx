"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Twitter, MessageSquare, Bot as DiscordIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

const initialBots = [
  { id: "1", name: "Customer Support Agent", status: "Running", targets: ["discord", "whatsapp"] },
  { id: "2", name: "Twitter Auto-Responder", status: "Stopped", targets: ["twitter"] },
];

export default function DashboardPage() {
  const [bots] = useState(initialBots);

  return (
    <div className="p-6 md:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Manage your AI agents across platforms.</p>
        </div>
        <Link href="/builder/new" className={buttonVariants()}>
          <Plus className="mr-2 h-4 w-4" /> Create Agent
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {bots.map((bot) => (
          <Card key={bot.id} className="flex flex-col cursor-pointer hover:border-primary/50 transition-colors">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <CardTitle>{bot.name}</CardTitle>
                <div className={`h-2 w-2 rounded-full ${bot.status === 'Running' ? 'bg-green-500' : 'bg-muted-foreground'}`} title={bot.status} />
              </div>
              <CardDescription>ID: {bot.id}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-3">
              <div className="flex gap-2 text-muted-foreground">
                {bot.targets.includes('discord') && <DiscordIcon className="h-5 w-5" />}
                {bot.targets.includes('twitter') && <Twitter className="h-5 w-5" />}
                {bot.targets.includes('whatsapp') && <MessageSquare className="h-5 w-5" />}
              </div>
            </CardContent>
            <CardFooter className="pt-3 border-t">
              <div className="flex justify-between items-center w-full">
                <span className="text-xs text-muted-foreground">{bot.status}</span>
                <Link href={`/builder/${bot.id}`} className={cn(buttonVariants({ variant: "outline", size: "sm" }))}>Edit</Link>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
