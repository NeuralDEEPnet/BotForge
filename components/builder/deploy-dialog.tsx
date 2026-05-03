"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bot, MessageSquare, Twitter, Play, HelpCircle } from "lucide-react";

export function DeployDialog({ botId }: { botId: string }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<Button size="sm" />}>
          <Play className="h-4 w-4 mr-2" /> Deploy
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Deploy Agent {botId}</DialogTitle>
          <DialogDescription>
            Connect your agent to external platforms by providing the required credentials.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <Tabs defaultValue="discord" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="discord"><Bot className="mr-2 h-4 w-4" /> Discord</TabsTrigger>
              <TabsTrigger value="twitter"><Twitter className="mr-2 h-4 w-4" /> X</TabsTrigger>
              <TabsTrigger value="whatsapp"><MessageSquare className="mr-2 h-4 w-4" /> WhatsApp</TabsTrigger>
            </TabsList>
            
            <TabsContent value="discord" className="space-y-4 mt-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="discord-token">Bot Token</Label>
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                </div>
                <Input id="discord-token" type="password" placeholder="MTEyMz..." />
                <p className="text-xs text-muted-foreground">Obtain this from the Discord Developer Portal.</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="discord-client-id">Client ID</Label>
                <Input id="discord-client-id" placeholder="1234567890" />
              </div>
            </TabsContent>
            
            <TabsContent value="twitter" className="space-y-4 mt-6">
              <div className="space-y-2">
                <Label htmlFor="x-api-key">API Key</Label>
                <Input id="x-api-key" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="x-api-secret">API Secret</Label>
                <Input id="x-api-secret" type="password" />
              </div>
              <p className="text-xs text-muted-foreground">You must have an approved X Developer App with Read/Write access.</p>
            </TabsContent>

            <TabsContent value="whatsapp" className="space-y-4 mt-6">
              <div className="space-y-2">
                <Label htmlFor="wa-phone-id">Phone Number ID</Label>
                <Input id="wa-phone-id" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="wa-token">Access Token</Label>
                <Input id="wa-token" type="password" />
              </div>
              <p className="text-xs text-muted-foreground">From the Meta for Developers portal.</p>
            </TabsContent>
          </Tabs>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)}>Save & Deploy</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
