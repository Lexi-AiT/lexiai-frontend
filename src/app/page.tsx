import { Search } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Sidebar from "@/components/sidebar";
import ModelSelector from "@/components/model-selector";
import ChatInput from "@/components/chat-input";
import ThemeToggle from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-14 px-4 flex items-center justify-between">
             <div className="flex justify-start items-start px-6 py-3 shadow-md bg-white">
      {/* Right-aligned group (Search + Icons) */}
      <div className="flex gap-4">
        <div className="w-full max-w-md ml-auto relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search post convos/legal topics"
            className="w-full pl-9 bg-muted/50"
          />
        </div>
        <Button variant="ghost" size="icon" className="rounded-full">
          <span className="sr-only">Notifications</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          </svg>
        </Button>
        <ThemeToggle />
        <Button variant="ghost" size="icon" className="rounded-full">
          <span className="sr-only">Profile</span>
          <img
            src="/placeholder.svg?height=32&width=32"
            alt="Profile"
            className="h-8 w-8 rounded-full"
          />
        </Button>
      </div>
    </div>
        </header>
        <div className="flex-1 overflow-auto">
          <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col items-center justify-center h-full">
            <ModelSelector />
            <h1 className="text-3xl mt-12 text-gray-700 text-center">
              Welcome to Lexiai - your legal assistant
            </h1>
            <div className="mt-auto"></div>
          </div>
        </div>
        <div className="p-4">
          <div className="max-w-4xl mx-auto">
            <ChatInput />
            <p className="text-xs text-center text-muted-foreground mt-2">
              Free Legal Insight Preview. Lexiai may generate responses that are
              not a substitute for professional legal advice.
            </p>
          </div>
        </div>
        <footer className="py-4 px-6">
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <div>© 2025 Lexiai UI. All Rights Reserved.</div>
            <div className="flex gap-4">
              <Link href="#" className="hover:underline">
                Homepage
              </Link>
              <Link href="#" className="hover:underline">
                License
              </Link>
              <Link href="#" className="hover:underline">
                Terms of Use
              </Link>
              <Link href="#" className="hover:underline">
                Privacy Policy
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
