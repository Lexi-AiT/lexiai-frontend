import Link from "next/link"
import { Home, FileText, Bookmark, MessageSquare, Plus, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProUpgrade from "@/components/pro-upgrade"

export default function Sidebar() {
  return (
    <div className="w-64 border-r flex flex-col h-full">
      <div className="p-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <span>LEXI AI</span>
        </Link>
      </div>
      <div className="px-3 py-2">
        <div className="space-y-1">
          <Button variant="ghost" className="w-full justify-start gap-2 font-medium text-primary">
            <MessageSquare className="h-5 w-5" />
            Chat UI
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2 text-muted-foreground">
            <Plus className="h-5 w-5" />
            New Conversation
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2 text-muted-foreground">
            <Home className="h-5 w-5" />
            Home
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2 text-muted-foreground">
            <FileText className="h-5 w-5" />
            Discover
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2 text-muted-foreground">
            <Bookmark className="h-5 w-5" />
            Saved Responses
          </Button>
        </div>
      </div>
      <div className="mt-auto px-3 py-4">
        <ProUpgrade />
        <div className="mt-6 flex items-center gap-2 px-3">
          <img src="/placeholder.svg?height=32&width=32" alt="Profile" className="h-8 w-8 rounded-full" />
          <div className="flex-1 text-sm font-medium">John Doe</div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <LogOut className="h-4 w-4" />
            <span className="sr-only">Log out</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
