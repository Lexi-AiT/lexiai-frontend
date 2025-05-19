import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProUpgrade from "@/components/pro-upgrade";
// Icons from lucide-react
import {
  MessageSquare,
  Plus,
  Home,
  FileText,
  Bookmark,
  Settings,
  User,
  HelpCircle,
  LogOut,
} from "lucide-react";
export default function Sidebar() {
  return (
   <div
  className="w-64 mt-8 ml-4 rounded-lg shadow-xl flex flex-col bg-white border border-gray-200"
  style={{ height: "92vh" }}
>
  {/* Branding */}
  <div className="p-6 flex justify-center items-center border-b border-gray-100">
    <Link
      href="/"
      className="font-extrabold text-2xl text-center text-purple-600 hover:text-purple-700 transition"
    >
      LEXI AI
    </Link>
  </div>

  {/* Nav buttons */}
  <nav className="px-3 py-4 flex flex-col space-y-1 flex-grow">
    <Button
      variant="ghost"
      className="w-full justify-start gap-3 font-semibold text-purple-600 hover:bg-purple-50 rounded-md transition"
    >
      <MessageSquare className="h-5 w-5" />
      Chat UI
    </Button>
    <Button
      variant="ghost"
      className="w-full text-gray-500 justify-start gap-3 hover:text-purple-600 hover:bg-purple-50 rounded-md transition"
    >
      <Plus className="h-5 w-5" />
      New Conversation
    </Button>
    <Button
      variant="ghost"
      className="w-full text-gray-500 justify-start gap-3 hover:text-purple-600 hover:bg-purple-50 rounded-md transition"
    >
      <Home className="h-5 w-5" />
      Home
    </Button>
    <Button
      variant="ghost"
      className="w-full text-gray-500 justify-start gap-3 hover:text-purple-600 hover:bg-purple-50 rounded-md transition"
    >
      <FileText className="h-5 w-5" />
      Discover
    </Button>
    <Button
      variant="ghost"
      className="w-full text-gray-500 justify-start gap-3 hover:text-purple-600 hover:bg-purple-50 rounded-md transition"
    >
      <Bookmark className="h-5 w-5" />
      Saved Responses
    </Button>

    {/* New Items */}
    <Button
      variant="ghost"
      className="w-full text-gray-500 justify-start gap-3 hover:text-purple-600 hover:bg-purple-50 rounded-md transition"
    >
      <Settings className="h-5 w-5" />
      Settings
    </Button>
    <Button
      variant="ghost"
      className="w-full text-gray-500 justify-start gap-3 hover:text-purple-600 hover:bg-purple-50 rounded-md transition"
    >
      <User className="h-5 w-5" />
      Profile
    </Button>
    <Button
      variant="ghost"
      className="w-full text-gray-500 justify-start gap-3 hover:text-purple-600 hover:bg-purple-50 rounded-md transition"
    >
      <HelpCircle className="h-5 w-5" />
      Help & Support
    </Button>
  </nav>

  {/* Bottom section */}
  <div className="mt-auto px-3 py-4 border-t border-gray-100">
    <ProUpgrade />

    <div className="mt-6 flex items-center gap-3 px-3">
      <img
        src="https://www.google.com/imgres?q=peech&imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fpeech-fruits-tree-ripe-still-58751219.jpg&imgrefurl=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fpeech-fruits.html&docid=sQZh83_J5I9KsM&tbnid=c1OqDjNR-qsRpM&vet=12ahUKEwjfmPfQwrCNAxVqTKQEHYG-BYcQM3oECGgQAA..i&w=800&h=534&hcb=2&ved=2ahUKEwjfmPfQwrCNAxVqTKQEHYG-BYcQM3oECGgQAA"
        alt="Profile"
        className="h-10 w-10 rounded-full object-cover"
      />
      <div className="flex-1 text-sm font-medium text-gray-800">
        John Doe
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 text-gray-600 hover:text-red-600 transition"
      >
        <LogOut className="h-5 w-5" />
        <span className="sr-only">Log out</span>
      </Button>
    </div>
  </div>
</div>

  );
}
