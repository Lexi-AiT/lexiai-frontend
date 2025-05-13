import Link from "next/link"
import { Home, FileText, Bookmark, MessageSquare, Plus, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProUpgrade from "@/components/pro-upgrade"

export default function Sidebar() {
  return (
    <div className="w-64 mt-8 ml-4 rounded-lg shadow-xl flex flex-col" style={{ height: "92vh" }}>
      {/* Branding */}
      <div className="p-6 flex justify-center items-center">
        <Link href="/" className="font-bold text-xl text-center">
          LEXI AI
        </Link>
      </div>

      {/* Nav buttons */}
      <div className="px-3 py-2">
        <div className="space-y-1">
          <Button variant="ghost" className="w-full justify-start gap-2 font-medium text-primary">
            <MessageSquare className="h-5 w-5" />
            Chat UI
          </Button>
          <Button variant="ghost" className="w-full text-gray-400 justify-start gap-2 ">
            <Plus className="h-5 w-5" />
            New Conversation
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2 text-gray-400">
            <Home className="h-5 w-5" />
            Home
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2 text-gray-400">
            <FileText className="h-5 w-5" />
            Discover
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2 text-gray-400">
            <Bookmark className="h-5 w-5" />
            Saved Responses
          </Button>
        </div>
      </div>

      {/* Bottom section */}
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
