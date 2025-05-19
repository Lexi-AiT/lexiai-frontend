"use client"; // 🔥 Required for useState to work here

import { useState } from "react";

import { Settings, Bell } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/sidebar";
import ModelSelector from "@/components/model-selector";
import ChatInput from "@/components/chat-input";
import { SidebarIcon } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { SearchForm } from "@/components/ui/search-form";
export default function DashboardLayout() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => setSidebarVisible((prev) => !prev);

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Sidebar: responsive drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 z-50
    transition-transform duration-700 ease-in-out transform
    ${
      isSidebarVisible
        ? "translate-x-0 opacity-100"
        : "-translate-x-full opacity-0"
    }
  `}
      >
        <Sidebar />
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarVisible && (
        <div
          className="fixed inset-0 bg-black/30 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Main */}
      <main
        className={`flex-1 flex flex-col overflow-hidden transition-margin duration-700 ease-in-out ${
          isSidebarVisible ? "ml-64" : "ml-0"
        }`}
      >
        {" "}
        {/* Header */}
        <header className="bg-background sticky top-0 z-50 flex w-full items-center pt-4">
          <div className="flex h-16 w-full items-center gap-4 px-4 sm:px-6">
            <Button
              className="h-8 w-8"
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
            >
              <SidebarIcon />
            </Button>

            <Separator orientation="vertical" className="h-6 hidden sm:block" />

            <SearchForm className="flex-grow sm:flex-grow-0 sm:ml-auto sm:w-auto" />

            <div className="flex items-center gap-3">
              <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition">
                <Settings className="w-5 h-5" />
              </button>

              <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100 relative transition">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
              </button>

              <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                <img
                  src="/placeholder.svg?height=40&width=40"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </header>
        {/* Body */}
        <div className="flex-1 overflow-auto">
          <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
            <ModelSelector />
            <h1 className="text-3xl mt-12 text-gray-700 text-center px-4">
              Welcome to Lexiai - your legal assistant
            </h1>
          </div>
        </div>
        {/* Chat Input */}
        <div className="p-4">
          <div className="max-w-4xl mx-auto">
            <ChatInput />
            <p className="text-xs text-center text-muted-foreground mt-2">
              Free Legal Insight Preview. Lexiai may generate responses that are
              not a substitute for professional legal advice.
            </p>
          </div>
        </div>
        {/* Footer */}
        <footer className="py-4 px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground gap-2">
            <div>© 2025 Lexiai UI. All Rights Reserved.</div>
            <div className="flex flex-wrap gap-4 justify-center sm:justify-end">
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
