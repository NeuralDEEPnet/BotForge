import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Bot, Zap, Globe, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background border-b border-border/40">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center mx-auto px-4">
          <div className="mr-4 flex items-center space-x-2">
            <Bot className="h-6 w-6 text-primary" />
            <span className="font-bold sm:inline-block">OmniBot Builder</span>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
            </div>
            <nav className="flex items-center gap-2">
              <Link href="/dashboard" className={buttonVariants({ variant: "ghost" })}>
                Login
              </Link>
              <Link href="/dashboard" className={buttonVariants()}>
                Get Started
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-16 md:pb-12 md:pt-24 lg:py-32">
          <div className="container mx-auto px-4 flex max-w-[64rem] flex-col items-center gap-6 text-center">
            <div className="inline-flex items-center rounded-full border border-border px-3 py-1 text-sm font-medium">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              v1.0 is now live
            </div>
            <h1 className="font-sans text-balance font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Build cross-platform AI agents <span className="text-primary">without code.</span>
            </h1>
            <p className="max-w-[42rem] text-balance leading-normal text-muted-foreground sm:text-lg sm:leading-8">
              OmniBot Builder is the ultimate visual platform for creating, managing, and deploying AI bots to Discord, X (Twitter), WhatsApp, and more.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/dashboard" className={cn(buttonVariants({ size: "lg" }), "h-12 px-8")}>
                  Start Building <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/dashboard" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-12 px-8")}>
                Explore Templates
              </Link>
            </div>
          </div>
        </section>


        <section className="container mx-auto px-4 space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <div className="relative overflow-hidden rounded-lg border border-border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Layers className="h-8 w-8 text-primary" />
                <div className="space-y-2">
                  <h3 className="font-bold">Visual Builder</h3>
                  <p className="text-sm text-muted-foreground">Drag and drop nodes to create complex conversational flows instantly.</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border border-border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Globe className="h-8 w-8 text-primary" />
                <div className="space-y-2">
                  <h3 className="font-bold">Write Once, Run Anywhere</h3>
                  <p className="text-sm text-muted-foreground">Deploy the same agent to Discord, X, and WhatsApp with one click.</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border border-border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Zap className="h-8 w-8 text-primary" />
                <div className="space-y-2">
                  <h3 className="font-bold">AI Native</h3>
                  <p className="text-sm text-muted-foreground">Powered by the latest large language models for true autonomous capabilities.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
