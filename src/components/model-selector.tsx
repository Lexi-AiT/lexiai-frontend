"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ModelSelector() {
  const [selectedModel, setSelectedModel] = useState("gpt-3.5")

  return (
    <div className="flex gap-2 mt-8">
      <Button
        variant={selectedModel === "gpt-3.5" ? "default" : "outline"}
        className={`rounded-sm px-6 ${
          selectedModel === "gpt-3.5"
            ? "bg-white text-primary-foreground shadow-lg"
            : "bg-background text-muted-foreground"
        }`}
        onClick={() => setSelectedModel("gpt-3.5")}
      >
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-primary"></span>
          GPT-3.5
        </span>
      </Button>
      <Button
        variant={selectedModel === "gpt-4" ? "default" : "outline"}
        className={`rounded-full px-6 ${
          selectedModel === "gpt-4"
            ? "bg-white text-primary-foreground border-none"
            : "bg-background text-muted-foreground"
        }`}
        onClick={() => setSelectedModel("gpt-4")}
      >
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 bg-muted"></span>
          GPT-4
        </span>
      </Button>
    </div>
  )
}
