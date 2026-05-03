import Link from "next/link"
import { Bot, Home, Plus, Settings } from "lucide-react"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r border-border bg-muted/40 hidden md:block">
        <div className="flex h-14 items-center border-b border-border px-4">
          <Bot className="h-6 w-6 text-primary mr-2" />
          <span className="font-bold">OmniBot Builder</span>
        </div>
        <div className="py-4">
          <nav className="grid gap-1 px-2">
            <Link href="/dashboard" className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary">
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Link href="/builder/new" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
              <Plus className="h-4 w-4" />
              New Bot
            </Link>
            <Link href="/settings" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </nav>
        </div>
      </aside>
      <main className="flex-1 flex flex-col relative overflow-hidden">
        {children}
      </main>
    </div>
  )
}
